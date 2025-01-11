import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { Cpu, Cloud, Shield, BarChart } from 'lucide-react'

// About section styling
const AboutSection = styled.section`
  background-color: #121212;
  color: #ffffff;
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  font-size: 3rem;
  text-transform: uppercase;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const TextContent = styled(motion.div)`
  flex: 1;
`

const Paragraph = styled(motion.p)`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #e0e0e0;
`

const Features = styled(motion.div)`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`

const FeatureItem = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6F8FAF;
`

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #b0b0b0;
`

// Underline constant
const Underline = () => (
  <div style={{
    width: '100px',
    height: '4px',
    backgroundColor: '#ffd700',
    margin: '0 auto 3rem',
  }}></div>
);

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  }

  return (
    <div id='aboutus'>
      <AboutSection ref={sectionRef}>
        <Container>
          <Title
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={itemVariants}
          >
            About IOT Solutions
          </Title>

          <Underline />

          <Content>
            <TextContent
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <Paragraph custom={0} variants={paragraphVariants}>
                At IOT Solutions, we are a fast-growing startup dedicated to transforming industries through innovative industrial automation and mechatronics. In just under a year, we've become a trusted partner for businesses looking to leverage the power of IoT, robotics, and machine learning to enhance efficiency and streamline processes across manufacturing, logistics, and more.
              </Paragraph>
              <Paragraph custom={1} variants={paragraphVariants}>
                Our expertise lies in designing and implementing customized automation solutions, from automating production lines to optimizing supply chain management. We offer end-to-end service, from design to ongoing support, ensuring seamless integration into existing systems and helping clients stay competitive in an evolving market.
              </Paragraph>
              <Paragraph custom={2} variants={paragraphVariants}>
                By utilizing advanced IoT technologies, we enable real-time monitoring, predictive maintenance, and data-driven decision-making, leading to improved productivity and reduced downtime. Our commitment to innovation and excellence ensures that businesses are prepared for sustainable growth in the era of automation.
              </Paragraph>
            </TextContent>
            <Features
              initial="hidden"
              animate={controls}
              variants={containerVariants}
            >
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <Cpu size={40} />
                </FeatureIcon>
                <FeatureTitle>Smart Sensors</FeatureTitle>
                <FeatureDescription>Advanced sensors for real-time data collection and analysis</FeatureDescription>
              </FeatureItem>
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <Cloud size={40} />
                </FeatureIcon>
                <FeatureTitle>Cloud Integration</FeatureTitle>
                <FeatureDescription>Seamless cloud connectivity for data storage and processing</FeatureDescription>
              </FeatureItem>
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <Shield size={40} />
                </FeatureIcon>
                <FeatureTitle>Robust Security</FeatureTitle>
                <FeatureDescription>End-to-end encryption and advanced security protocols</FeatureDescription>
              </FeatureItem>
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>
                  <BarChart size={40} />
                </FeatureIcon>
                <FeatureTitle>Data Analytics</FeatureTitle>
                <FeatureDescription>Advanced analytics for actionable insights and predictive maintenance</FeatureDescription>
              </FeatureItem>
            </Features>
          </Content>
        </Container>
      </AboutSection>
    </div>
  )
}
