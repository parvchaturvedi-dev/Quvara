import {
  GraduationCap,
  Coffee,
  UtensilsCrossed,
  Wine,
  ShoppingBag,
  Building2,
} from "lucide-react";

const CARD =
  "rounded-2xl border border-line bg-paper p-5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.35)] sm:p-6";

function Frame({ icon: Icon, name, children }) {
  return (
    <div className={CARD}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-paper">
            <Icon className="h-4 w-4" />
          </span>
          <span className="font-display text-sm font-semibold text-ink">{name}</span>
        </div>
        <div className="flex gap-1" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-mist p-3">
      <p className="text-[11px] text-faint">{label}</p>
      <p className="mt-0.5 font-display text-base font-bold tracking-tight text-ink sm:text-lg">
        {value}
      </p>
    </div>
  );
}

function Bars({ data }) {
  return (
    <div className="flex h-24 items-end gap-1.5">
      {data.map((h, i) => (
        <div
          key={i}
          className="relative flex-1 overflow-hidden rounded-t-sm bg-ink"
          style={{ height: `${h}%` }}
        >
          <span className="absolute inset-x-0 top-0 h-1/3 bg-[#c9c9c9]" />
        </div>
      ))}
    </div>
  );
}

function Row({ label, value, pct }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 truncate text-xs text-ink">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-mist">
        <div className="h-full rounded-full bg-ink" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-10 shrink-0 text-right text-[11px] tabular-nums text-muted">
        {value}
      </span>
    </div>
  );
}

export default function ModuleMock({ slug }) {
  switch (slug) {
    case "school-erp":
      return (
        <Frame icon={GraduationCap} name="School ERP">
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Students" value="1,248" />
            <Stat label="Attendance" value="96%" />
            <Stat label="Fees due" value="₹8.2L" />
          </div>
          <p className="mb-2 mt-5 text-[11px] text-faint">Weekly attendance</p>
          <Bars data={[70, 82, 60, 90, 75, 88, 64]} />
        </Frame>
      );

    case "cafe":
      return (
        <Frame icon={Coffee} name="Cafe OS">
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Today" value="₹42k" />
            <Stat label="Orders" value="318" />
            <Stat label="Avg bill" value="₹132" />
          </div>
          <p className="mb-3 mt-5 text-[11px] text-faint">Top items</p>
          <div className="space-y-2.5">
            <Row label="Cappuccino" value="62" pct={88} />
            <Row label="Cold brew" value="48" pct={68} />
            <Row label="Croissant" value="33" pct={47} />
          </div>
        </Frame>
      );

    case "restaurant":
      return (
        <Frame icon={UtensilsCrossed} name="Restaurant">
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Covers" value="214" />
            <Stat label="Tables" value="18/24" />
            <Stat label="Avg turn" value="1.4h" />
          </div>
          <p className="mb-3 mt-5 text-[11px] text-faint">Floor · live</p>
          <div className="grid grid-cols-8 gap-1.5">
            {[1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1].map((occ, i) => (
              <span
                key={i}
                className={`aspect-square rounded-md ${
                  occ ? "bg-ink" : "border border-line bg-paper"
                }`}
              />
            ))}
          </div>
        </Frame>
      );

    case "bar":
      return (
        <Frame icon={Wine} name="Bar">
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Pours" value="486" />
            <Stat label="Variance" value="2.1%" />
            <Stat label="Low stock" value="3" />
          </div>
          <p className="mb-3 mt-5 text-[11px] text-faint">Inventory levels</p>
          <div className="space-y-2.5">
            <Row label="Whiskey" value="72%" pct={72} />
            <Row label="Gin" value="45%" pct={45} />
            <Row label="Rum" value="28%" pct={28} />
            <Row label="Vodka" value="88%" pct={88} />
          </div>
        </Frame>
      );

    case "takeaway":
      return (
        <Frame icon={ShoppingBag} name="Takeaway">
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Live" value="12" />
            <Stat label="On the way" value="7" />
            <Stat label="Today" value="₹28k" />
          </div>
          <p className="mb-3 mt-5 text-[11px] text-faint">Order channels</p>
          <div className="space-y-2.5">
            <Row label="App" value="58%" pct={58} />
            <Row label="Web" value="27%" pct={27} />
            <Row label="Phone" value="15%" pct={15} />
          </div>
        </Frame>
      );

    case "corporate":
      return (
        <Frame icon={Building2} name="Sales Cloud">
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Pipeline" value="₹4.6Cr" />
            <Stat label="Win rate" value="34%" />
            <Stat label="Deals" value="41" />
          </div>
          <p className="mb-3 mt-5 text-[11px] text-faint">Pipeline</p>
          <div className="space-y-2.5">
            <Row label="Leads" value="340" pct={100} />
            <Row label="Qualified" value="180" pct={62} />
            <Row label="Proposal" value="76" pct={34} />
            <Row label="Won" value="41" pct={18} />
          </div>
        </Frame>
      );

    default:
      return (
        <div className={`${CARD} flex aspect-[4/3] items-center justify-center`}>
          <Building2 className="h-16 w-16 text-ink" strokeWidth={1} />
        </div>
      );
  }
}
