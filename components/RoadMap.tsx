const months = [
    { title: "Month 1", desc: "Programming fundamentals & JavaScript" },
    { title: "Month 2", desc: "React & modern frontend development" },
    { title: "Month 3", desc: "Backend with Node.js & Python" },
    { title: "Month 4", desc: "Mobile apps with React Native & Expo" },
    { title: "Month 5", desc: "App monetization & AdMob" },
    { title: "Month 6", desc: "Career, freelancing & capstone project" },
  ];
  
  export default function Roadmap() {
    return (
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            6-Month Learning Roadmap
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {months.map((m) => (
              <div
                key={m.title}
                className="p-6 bg-white rounded-xl shadow"
              >
                <h3 className="font-semibold text-xl">{m.title}</h3>
                <p className="mt-2 text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }