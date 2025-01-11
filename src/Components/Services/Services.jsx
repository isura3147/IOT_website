import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Services.css';
import service_1 from '../../assets/robotics.png';
import service_2 from '../../assets/industrialauto.png';
import service_3 from '../../assets/scada.png';
import service_4 from '../../assets/webapplications.png';
import service_5 from '../../assets/softwareeng.png';
import service_6 from '../../assets/dataai.png';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const services = [
    {
      title: "Robotics Application",
      description: "Integrates advanced automation and intelligent systems to streamline operations, enhance productivity, and drive innovation across industries.",
      image: service_1
    },
    {
      title: "Industrial Automation",
      description: "Enhancing productivity through advanced control systems and automation solutions, optimizing industrial processes for greater efficiency and scalability.",
      image: service_2
    },
    {
      title: "SCADA Systems",
      description: "Delivers real-time monitoring and control solutions that optimize operational efficiency, enhance data accuracy, and ensure seamless integration for your industrial processes.",
      image: service_3
    },
    {
      title: "Web Applications",
      description: "Crafting dynamic, user-friendly web applications that elevate your digital presence. Our expert team delivers scalable, secure, and responsive solutions designed to optimize your business and engage your audience.",
      image: service_4
    },
    {
      title: "Software Engineering",
      description: "Empowering your business with cutting-edge software engineering solutions tailored to meet your unique needs. From design to deployment, we build scalable, secure, and high-performance applications.",
      image: service_5
    },
    {
      title: "Data Analysis and AI",
      description: "Utilizing advanced data analysis and AI technologies to uncover deep insights, optimize processes, and drive informed, strategic decision-making for business growth.",
      image: service_6
    },
  ];

  const toggleDescription = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='services-container' id='services1'>
      <h2 className='services-title'>Services</h2>
      <div className='services-underline'></div>
      <motion.div 
        className='services'
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={`service ${expandedService === index ? 'expanded' : ''}`}
            variants={itemVariants}
          >
            <div className='service-inner'>
              <img src={service.image} alt={service.title} />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">
                  {isMobile && expandedService !== index
                    ? `${service.description.slice(0, 100)}...`
                    : service.description}
                </p>
                {isMobile && (
                  <button className="see-more-btn" onClick={() => toggleDescription(index)}>
                    {expandedService === index ? 'See Less' : 'See More'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;