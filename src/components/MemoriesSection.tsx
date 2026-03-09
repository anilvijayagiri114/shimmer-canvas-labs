import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";
import img10 from "@/assets/10.jpeg";
import img11 from "@/assets/11.jpeg";
import img12 from "@/assets/12.jpeg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/14.jpeg";
import img15 from "@/assets/15.jpeg";

const memories = [
  { src: img3, caption: "Our magical nights ✨" },
  { src: img1, caption: "Coffee dates with you ☕" },
  { src: img2, caption: "Walking through life together 🍂" },
  { src: img4, caption: "Making memories at home 🏠" },
  { src: img5, caption: "Chasing sunsets with you 🌅" },
  { src: img6, caption: "You & me, always 💕" },
   { src: img7, caption: "Our magical nights ✨" },
  { src: img8, caption: "Coffee dates with you ☕" },
  { src: img9, caption: "Walking through life together 🍂" },
  { src: img10, caption: "Making memories at home 🏠" },
  { src: img11, caption: "Chasing sunsets with you 🌅" },
  { src: img12, caption: "You & me, always 💕" },
   { src: img13, caption: "Making memories at home 🏠" },
  { src: img14, caption: "Chasing sunsets with you 🌅" },
  { src: img15, caption: "You & me, always 💕" },
];

const MemoriesSection = () => {
  return (
    <section className="py-20 sm:py-28 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Heart className="h-6 w-6 text-primary fill-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Beautiful Moments
          </h2>
          <p
            className="text-lg sm:text-xl text-primary"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Every moment with you is a treasure, Raji
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={memory.src}
                alt={memory.caption}
                className="w-full h-40 sm:h-52 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-5">
                <p className="text-primary-foreground font-body text-xs sm:text-sm">{memory.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
