export default function Pricing() {
    return (
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing for Tashkent
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Standard"
              price="900,000 UZS / month"
              items={[
                "Full 6-month program",
                "Group classes",
                "Certificate",
              ]}
            />
            <Card
              title="Pro (Popular)"
              price="1,500,000 UZS / month"
              highlight
              items={[
                "App publishing",
                "Monetization & AdMob",
                "Resume & interviews",
              ]}
            />
            <Card
              title="Elite"
              price="2,500,000 UZS / month"
              items={[
                "1-on-1 mentoring",
                "Apps under MHCJ",
                "Business & scaling",
              ]}
            />
          </div>
        </div>
      </section>
    );
  }
  
  function Card({
    title,
    price,
    items,
    highlight,
  }: any) {
    return (
      <div
        className={`p-8 rounded-xl border ${
          highlight ? "border-black shadow-xl" : "border-gray-200"
        }`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-4 text-2xl font-bold">{price}</p>
        <ul className="mt-6 space-y-2 text-gray-600">
          {items.map((i: string) => (
            <li key={i}>• {i}</li>
          ))}
        </ul>
      </div>
    );
  }