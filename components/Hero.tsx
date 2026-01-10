export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Apps. Get Hired. Earn Money.
          </h1>
  
          <p className="mt-6 text-lg md:text-xl text-gray-600">
            InfiniTech is a 6-month full-stack web & mobile coding bootcamp in Tashkent.
            Learn to build real apps, publish to App Store & Play Store, and make money as a developer.
          </p>
  
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-xl text-lg">
              Join Free Intro Workshop
            </button>
            <button className="border border-black px-8 py-4 rounded-xl text-lg">
              Apply for Next Cohort
            </button>
          </div>
        </div>
      </section>
    );
  }