import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css'; // Import the CSS file

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    content: "IoT solutions Pvt Ltd is a standout automation company that excels in delivering customized, scalable and secure automation solutions. Their technical expertise, combined with a client centric approach, makes them a top choice for business seeking to optimize their operations through automation.",
  },
  {
    name: "Sarah Lee",
    role: "Designer, CreativeCo",
    content: "IoT Solutions Pvt Ltd has a team of skilled engineers at the forefront of automation technologies. They excel in PLC programming, SCADA design, and integration with IoT and Industry 4.0 concepts, consistently demonstrating proficiency and innovation.",
  },
  {
    name: "Michael Brown",
    role: "CTO, InnovateTech",
    content: " I highly recommend IoT Solutions for their exceptional expertise in automation solutions. With a proven track record of successful projects across various industries, they have consistently demonstrated a deep understanding of automation technologies and a commitment to delivering top-tier service.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id='testimonials1'>
      <div className="container">
        <motion.h2 
          className="heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid">
          {testimonials.map(function(testimonial, index) {
            return (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="relative"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5, 
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    delay: index * 0.2
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Quote className="icon" />
                    </div>
                    <div>
                      <h3 className="name">{testimonial.name}</h3>
                      <p className="role">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="content">{testimonial.content}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;

