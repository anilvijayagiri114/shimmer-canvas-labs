import { motion } from "framer-motion";
import { Heart, MapPin, Calendar, Star } from "lucide-react";

const milestones = [
  { icon: Heart, date: "March 2020", title: "First Meet", description: "Our paths crossed for the very first time at a cozy café." },
  { icon: Star, date: "June 2020", title: "First Date", description: "A magical evening that neither of us wanted to end." },
  { icon: MapPin, date: "December 2021", title: "First Trip Together", description: "Explored new places and fell deeper in love with every mile." },
  { icon: Calendar, date: "February 2023", title: "Moved In Together", description: "Making a house a home, filling it with love and laughter." },
  { icon: Heart, date: "Forever", title: "Happily Ever After", description: "This is just the beginning of our forever story." },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Calendar className="h-6 w-6 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Every chapter of our love story
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left md:ml-auto"
                  }`}
                >
                  <span className="font-body text-sm text-primary font-medium">
                    {milestone.date}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
