"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Monochrome 3D "agentic AI" node-network.
 * Nodes = points, connections = line segments between nearby nodes.
 * Slowly rotates and parallax-tilts toward the pointer.
 */
function Network({ reducedMotion }) {
  const group = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const { nodeGeom, lineGeom } = useMemo(() => {
    const count = 48;
    const radius = 3.6;
    const pts = [];
    for (let i = 0; i < count; i++) {
      // even-ish distribution inside a sphere
      const v = new THREE.Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      );
      if (v.length() > 1) v.normalize().multiplyScalar(Math.random());
      v.multiplyScalar(radius);
      pts.push(v);
    }

    const nodeArr = new Float32Array(count * 3);
    pts.forEach((p, i) => {
      nodeArr[i * 3] = p.x;
      nodeArr[i * 3 + 1] = p.y;
      nodeArr[i * 3 + 2] = p.z;
    });
    const ng = new THREE.BufferGeometry();
    ng.setAttribute("position", new THREE.BufferAttribute(nodeArr, 3));

    const linePos = [];
    const maxDist = 2.1;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          linePos.push(pts[i].x, pts[i].y, pts[i].z);
          linePos.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }
    const lg = new THREE.BufferGeometry();
    lg.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePos), 3)
    );

    return { nodeGeom: ng, lineGeom: lg };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    if (reducedMotion) {
      group.current.rotation.set(0.1, 0.4, 0);
      return;
    }
    const targetY = state.clock.elapsedTime * 0.06 + mouse.current.x * 0.5;
    const targetX = -mouse.current.y * 0.3;
    // ease toward target for smooth parallax
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group}>
      <points geometry={nodeGeom}>
        <pointsMaterial
          color="#1c1c1c"
          size={0.11}
          sizeAttenuation
          transparent
          opacity={0.95}
        />
      </points>
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial color="#9a9a9a" transparent opacity={0.45} />
      </lineSegments>
    </group>
  );
}

export default function HeroNetwork() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Network reducedMotion={reducedMotion} />
    </Canvas>
  );
}
