import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import img1 from "@/assets/couple-story1.jpg";
import img2 from "@/assets/couple-story2.jpg";
import img3 from "@/assets/couple-story3.jpg";
import img4 from "@/assets/couple-story4.jpg";
import img5 from "@/assets/couple-story5.jpg";
import heroImg from "@/assets/couple-hero.jpg";

const images = [
  { src: img3, alt: "Dancing under lights", span: "md:col-span-2 md:row-span-2" },
  { src: img1, alt: "Cafe date", span: "" },
  { src: img5, alt: "Sunset together", span: "" },
  { src: img4, alt: "Cooking together", span: "md:col-span-2" },
  { src: img2, alt: "Autumn walk", span: "" },
  { src: heroImg, alt: "Beach sunset", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Camera className="h-6 w-6 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Moments
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Snapshots of the beautiful memories we've created together
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-xl group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
