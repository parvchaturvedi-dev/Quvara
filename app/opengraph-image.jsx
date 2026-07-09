import { ImageResponse } from "next/og";
import { site } from "@/lib/siteData";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#0a0a0a",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "6px solid #ffffff",
                position: "absolute",
                top: "13px",
                left: "12px",
              }}
            />
            <div
              style={{
                display: "flex",
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: "#ffffff",
                position: "absolute",
                bottom: "13px",
                right: "13px",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: "40px", fontWeight: 700, color: "#0a0a0a" }}>
            Quvara
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#8a8a8a",
              letterSpacing: "4px",
              marginBottom: "22px",
            }}
          >
            AGENTIC AI · ERP · ORACLE APEX
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "74px",
              fontWeight: 700,
              color: "#0a0a0a",
              lineHeight: 1.05,
              maxWidth: "940px",
            }}
          >
            AI-native ERP, tailored to every business.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "26px", color: "#6b6b6b" }}>
          quvara.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
