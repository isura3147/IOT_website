import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectDetails.css';
import coco2 from '../../assets/coco2.jpg';
import coco3 from '../../assets/coco1.jpg';
import coco4 from '../../assets/coco3.jpg';
import coco5 from '../../assets/coco5.jpg';
import ocr1 from '../../assets/ocr1.jpg';
import ocr2 from '../../assets/ocr2.jpg';
import ocr3 from '../../assets/ocr3.jpg';
import ocr4 from '../../assets/ocr4.jpg';
import rmc1 from '../../assets/rmc1.jpg';
import rmc2 from '../../assets/rmc2.jpg';
import rmc3 from '../../assets/rmc3.jpg';
import bag1 from '../../assets/bag1.jpg';
import bag2 from '../../assets/bag2.jpg';
import bag3 from '../../assets/bag3.jpg';
import bag4 from '../../assets/bag4.jpg';

const projectDetails = {
    1: {
        title: 'Coconut Counting System',
        description: `
            <p>The Coco counter project was initiated upon the request from Adamjee Lukmanjee & Sons Ltd. to automate the counting of unloaded coconuts used for their production line.</p>
            <p>This project included image processing with machine learning, PLC programming, and interface development together with database management.</p>
            <ul>
              <li>Advanced image processing and machine learning techniques</li>
              <li>Custom-trained YOLO (You Only Look Once) model for coconut identification</li>
              <li>Custom-developed counting algorithm for accurate counts</li>
              <li>Real-time trends and reports for ease of work</li>
              <li>HMI for live count and batch-wise count without disrupting real-time count</li>
            </ul>
        `,
        images: [coco2, coco3, coco4, coco5],
    },
    2: {
        title: 'OCR Label Verification System',
        description: `
            <p>We implemented an advanced label verification system for Lina Spiro to ensure the accuracy of printed labels on inhaler canisters.</p>
            <ul>
              <li>High-resolution camera system for label inspection</li>
              <li>Image recognition software to verify compliance with required standards</li>
              <li>Automated sorting system using air valves</li>
              <li>Real-time error detection and prevention of defective canisters</li>
            </ul>
        `,
        images: [ocr1, ocr2, ocr3, ocr4],
    },
    3: {
        title: 'Knorr Cube Sorting System',
        description: `
            <p>Our team developed a custom conveyor system for Knorr designed to efficiently process large batches of soup cubes.</p>
            <ul>
              <li>Precise sorting of soup cubes into two separate containers</li>
              <li>Customer-specified quantity matching</li>
              <li>Optimized production speed</li>
              <li>Enhanced overall operational efficiency</li>
            </ul>
        `,
        images: [rmc1, rmc2, rmc3],
    },
    4: {
        title: 'HS Noodles Maturity Monitoring System',
        description: `
            <p>The HS Noodles Maturity Monitoring System is designed to efficiently manage and monitor the maturity of noodles during production.</p>
            <ul>
              <li>User management and access control</li>
              <li>Multi-channel data entry (barcode scanner, manual input)</li>
              <li>Reporting tables and data export/import capabilities</li>
              <li>Real-time maturity tracking</li>
              <li>Streamlined data management for quality assurance</li>
            </ul>
        `,
        images: [bag1, bag2, bag3, bag4],
    },
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectDetails[id];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        );
    };

    if (!project) {
        return <div className="project-not-found">Project not found</div>;
    }

    return (
        <motion.section 
            className="project-details-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="project-content">
                <motion.div 
                    className="project-description"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h2>{project.title}</h2>
                    {/* Yellow underline added here */}
                    <div className="project-underline"></div>
                    <div dangerouslySetInnerHTML={{ __html: project.description }}></div>
                </motion.div>

                <motion.div 
                    className="project-images"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]}
                            alt={`Project ${id} Image ${currentImageIndex + 1}`}
                            className="project-image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                    <div className="image-controls">
                        <button onClick={handlePreviousImage}>Previous</button>
                        <button onClick={handleNextImage}>Next</button>
                    </div>
                </motion.div>
            </div>
            
            <motion.div 
                className="back-button-container"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <button className="back-button" onClick={() => navigate('/?scrollTo=projects1')}>
                    Back to Projects
                </button>
            </motion.div>
        </motion.section>
    );
};

export default ProjectDetails;
