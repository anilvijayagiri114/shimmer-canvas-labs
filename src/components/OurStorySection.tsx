import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import storyImg1 from "@/assets/couple-story1.jpg";
import storyImg2 from "@/assets/couple-story2.jpg";

const OurStorySection = () => {
  return (
    <section id="our-story" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Heart className="h-6 w-6 text-primary fill-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            How two hearts found their way to each other
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-20">
          {/* First Meeting */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={storyImg1}
                  alt="First date at the café"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-display text-sm shadow-lg">
                Where it began
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary font-display text-lg italic">Chapter One</span>
              <h3 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
                The First Hello
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                It was a rainy afternoon when our eyes first met at a cozy little café downtown.
                One coffee turned into three, and before we knew it, the café was closing.
                That was the moment we both knew something magical had begun.
              </p>
              <p className="font-body text-sm text-primary italic">
                "Some people search their whole life to find what I found in you."
              </p>
            </motion.div>
          </div>

          {/* Growing Together */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:order-2"
            >
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={storyImg2}
                  alt="Walking together in autumn"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-display text-sm shadow-lg">
                Growing together
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:order-1"
            >
              <span className="text-accent font-display text-lg italic">Chapter Two</span>
              <h3 className="font-display text-3xl font-bold text-foreground mt-2 mb-4">
                Falling Deeper
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Through every season we grew stronger. Autumn walks became our tradition,
                long talks under golden leaves became our therapy. We discovered that love
                isn't just a feeling — it's a choice we make every single day.
              </p>
              <p className="font-body text-sm text-accent italic">
                "In all the world, there is no heart for me like yours."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
