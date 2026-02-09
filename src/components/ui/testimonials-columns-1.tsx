import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image?: string;
  name: string;
  role?: string;
  icon?: React.ElementType;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, icon: Icon }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-green-900/10 w-full bg-white dark:bg-gray-900 dark:border-gray-800" key={i}>
                  <div className="text-gray-700 dark:text-gray-300 mb-5">{text}</div>
                  <div className="flex items-center gap-4">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : Icon ? (
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                    ) : null}
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-gray-900 dark:text-white">{name}</div>
                      {role && <div className="leading-5 opacity-60 tracking-tight text-sm text-gray-500 dark:text-gray-400">{role}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};