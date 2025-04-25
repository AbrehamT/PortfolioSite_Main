import { Project } from '../types';

export const projects: Project[] = [
//   {
//     id: 1,
//     title: "Real-time Satellite Image Processor",
//     description: "Open source service for real-time satellite imagery processing using LandSat and Sentinel data.",
//     technologies: ["Python", "OpenCV", "Google Earth Engine", "Machine Learning", "Image Processing"],
//     caseStudy: `## Project Overview

// An open source service for real-time satellite imagery processing, combining raw satellite and traditional image processing techniques to create a publicly available dataset of real-time satellite images.

// ## Approach

// 1. **Data Collection**: Leveraged LandSat and Sentinel satellite data feeds for raw imagery acquisition.
   
// 2. **Image Processing Pipeline**:
//    - Developed advanced algorithms for image enhancement and feature extraction
//    - Implemented spectral analysis to identify land features and environmental changes
//    - Created machine learning models to classify terrain types and detect changes over time
   
// 3. **Technical Implementation**:
//    - Built with Python and OpenCV for core image processing
//    - Integrated with Google Earth Engine for additional data sources and processing capabilities
//    - Designed a scalable architecture for processing large volumes of satellite data
   
// 4. **Public Data Service**: Created APIs and data formats for public consumption of processed imagery.

// ## Results

// - Successfully processed thousands of satellite images with high accuracy
// - Created a valuable dataset for environmental researchers and urban planners
// - Contributed to open-source geospatial community with reusable components

// ## Impact

// The project has enabled researchers to monitor environmental changes more effectively and has been utilized in several environmental impact studies.`,
//     github: "https://github.com/AbrehamT/satellite-imagery",
//     demo: "https://satellite-demo.abrehamtadesse.com",
//     image: "https://miro.medium.com/v2/resize:fit:1400/1*rBWzkqBaOId6niQbcysuvg.png"
//   },
{
   id: 4,
   title: "Autonomous Racing",
   description: "Programmed an RC car 1/10th the size of an F1 car to autonomously race against other cars while avoiding obstacles.",
   technologies: ["ROS2", "Python"],
   caseStudy: `## Project Overview

Programmed an RC car 1/10th the size of an F1 car to autonomously race against other cars while avoiding obstacles. Implemented control systems such as Model Predictive Controllers, PID Controllers, and vision algorithms such as SLAM.

## Technical Approach

1. **Control Systems**: 
  - Implemented Model Predictive Controllers and PID Controllers for precise control.
  - Developed vision algorithms such as SLAM for obstacle detection and avoidance.

2. **Testing & Validation**:
  - Conducted extensive simulations to verify control algorithms.
  - Performed real-world tests to ensure reliable autonomous operation.

## Results

- Successfully programmed the RC car to navigate complex racing environments autonomously.
- Achieved reliable obstacle avoidance and competitive racing performance.

## Impact

The project demonstrated the feasibility of using advanced control systems and vision algorithms in small-scale autonomous vehicles, paving the way for further research and development in autonomous racing technologies.`,
   github: "https://github.com/AbrehamT/autonomous-racing",
   image: "https://f1tenth.readthedocs.io/en/stable/_images/f1tenth_NX.png"
 },
  {
    id: 2,
    title: "SEDS - Autonomous Payload Recovery System",
    description: "Designed and programmed an autonomous payload recovery system for a model rocket using microcontrollers.",
    technologies: ["C/C++", "Arduino", "FreeRTOS", "Embedded Systems"],
    caseStudy: `## Project Overview

Designed and programmed an autonomous payload recovery system for a model rocket using microcontrollers and sensor data to deploy flaps and parachutes during descent.

## Technical Approach

1. **Hardware Design**: 
   - Selected appropriate microcontrollers and sensors for the limited payload capacity
   - Designed lightweight mechanical systems for flap deployment and parachute release
   - Implemented power-efficient circuits to maximize battery life during flight
   
2. **Software Development**:
   - Created real-time operating system (RTOS) implementation for precise timing control
   - Developed sensor fusion algorithms to accurately determine rocket position and orientation
   - Implemented safety fallbacks to ensure recovery even in case of partial system failure

## Challenges Overcome

- Ensuring reliable operation in high-stress environments (high G-forces, vibration)
- Creating robust algorithms that could handle sensor noise and variability

// ## Results
    // github: "https://github.com/AbrehamT/SEDS-recovery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiOCh0NdM0iXyEAOpAg50K92YuDwfY99PqQ&s"
  },
  {
    id: 3,
    title: "LLM-Based Biomedical Information Extraction",
    description: "Fine-tuned large language models to extract structured information from biomedical research papers.",
    technologies: ["Python", "PyTorch", "HuggingFace", "NLP", "Deep Learning", "LLMs"],
    caseStudy: `## Project Overview

As part of my undergraduate research work, I developed specialized large language models for extracting structured information from biomedical research papers related to Alzheimer's disease.

## Approach

1. **Domain-Specific Dataset Creation**:
   - Processed a large corpus of Alzheimer's-related literature from PubMed
   - Created specialized training datasets with supervised annotations for information extraction tasks
   - Developed data augmentation techniques to improve model generalization
   
2. **Model Development**:
   - Fine-tuned foundation large language models for biomedical domain understanding
   - Implemented self-supervised learning techniques to enhance domain adaptation
   - Created specialized model architectures for multi-label classification and information extraction
   
3. **Evaluation & Iteration**:
   - Developed comprehensive evaluation metrics for biomedical information extraction
   - Conducted rigorous testing against human expert annotations
   - Iteratively improved models based on performance analysis

## Results

- Achieved significant improvements over baseline models in extracting Alzheimer's-related biomarkers and treatment information
- Created models capable of understanding complex biomedical language and relationships
- Developed tools that accelerated research by automatically extracting key information from thousands of papers

## Impact

The models developed in this project are currently being used by biomedical researchers to rapidly synthesize information from the ever-growing corpus of Alzheimer's research, helping to identify new research directions and potential treatments.`,
    github: "https://github.com/AbrehamT/biomedical-nlp",
    image: "/assets/biomedical-nlp.jpg"
  },

]; 
