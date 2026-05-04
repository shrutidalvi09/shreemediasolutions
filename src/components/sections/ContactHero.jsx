import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/CONTACT2.jpg";

export default function ContactHero() {
  return (
    <section className="w-full bg-white pt-24 md:pt-28">

      <div className="relative h-[450px] md:h-[550px] overflow-hidden rounded-xl mx-4 md:mx-10">

        {/* 🔹 Background Image */}
        <img
          src={heroImg}
          alt="Shree Media Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🔹 Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* 🔹 Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 md:px-12">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-lg text-white"
            >
              {/* Heading */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4">
              Reach Out.<br />Connect.
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-lg mb-6">
              Based in India, serving brands globally. We are just a message away from starting your next media transformation.
              </p>

              {/* CTA */}
              {/*<button className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition">
                Explore Articles
              </button>*/}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}