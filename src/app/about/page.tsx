import React from "react";

const Aboutpage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-10">
      {/* ---------- Hero Section ---------- */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">About Daily News</h1>
          <p className="text-lg leading-relaxed">
            Trusted, Transparent, and Timely — Bringing the world closer to you
            through responsible journalism.
          </p>
        </div>
      </section>

      {/* ---------- Mission & Vision ---------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver accurate, unbiased, and impactful news that empowers
              people with truth. Daily News stands for clarity and credibility,
              ensuring every story reflects real voices and verified facts.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted bilingual digital news platform in
              Bangladesh — connecting people, communities, and the world with
              authentic information.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why Choose Us ---------- */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8">
            Why Choose Daily News?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Real-time updates from verified sources",
              "Bilingual coverage: Bangla & English",
              "Clean, responsive user-friendly design",
              "Community-based reporting and feedback",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Our Team ---------- */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-10">
            Meet Our Editorial Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Farhan Rahman", role: "Editor-in-Chief" },
              { name: "Nadia Karim", role: "Senior Journalist" },
              { name: "Rafiul Hasan", role: "Digital Media Specialist" },
              { name: "Sara Alam", role: "Content Strategist" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Contact Section ---------- */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">
            Want to Share Your Story?
          </h2>
          <p className="text-lg mb-6">
            Contact our editorial team to publish your authentic news and
            inspiring stories.
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Daily News. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Aboutpage;
