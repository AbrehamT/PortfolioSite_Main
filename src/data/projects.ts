import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 7,
    title: "LiteratureAnnotator - LLM-Powered Weak Supervision Pipeline",
    description: "Built an automated annotation pipeline leveraging LLMs and weak supervision techniques to label biomedical literature for Alzheimer's disease research at scale.",
    technologies: ["Python", "LLMs", "Weak Supervision", "Docker", "REST API", "Jupyter", "NLP"],
    drawio: "https://drive.google.com/file/d/1GrVeZw9d45C7MvAYg0jKVJvOnyOtGbOj/view?usp=sharing",
    caseStudy: `## Project Overview

Developed LiteratureAnnotator, an end-to-end pipeline that combines Large Language Models with weak supervision techniques to automatically annotate biomedical literature related to Alzheimer's disease. This system addresses the critical bottleneck of manual annotation in biomedical NLP research.

## Architecture

The system consists of several modular components:

1. **Data Generation Module**: Processes raw biomedical literature and prepares it for annotation
2. **LLM Providers**: Abstraction layer supporting multiple LLM backends with configurable parameters
3. **Label API**: RESTful API service for programmatic access to the annotation pipeline
4. **Weak Supervision Engine**: Combines noisy labels from multiple labeling functions to produce high-quality annotations

## Technical Approach

1. **Multi-Provider LLM Integration**:
   - Implemented flexible LLM provider system supporting various model backends
   - Configurable parameters (llm_params) for fine-tuning annotation behavior
   - Prompt engineering optimized for biomedical domain understanding

2. **Weak Supervision Pipeline**:
   - Developed labeling functions that leverage domain knowledge and LLM outputs
   - Implemented label aggregation using probabilistic models
   - Created noise-aware training procedures for downstream models

3. **Containerized Deployment**:
   - Dockerized the entire pipeline for reproducible environments
   - Built scalable API layer for batch processing of research papers
   - Designed modular utilities for preprocessing and postprocessing

## Key Features

- **Scalability**: Process thousands of papers without manual annotation bottlenecks
- **Flexibility**: Support for multiple LLM providers and customizable labeling functions
- **Reproducibility**: Containerized environment ensures consistent results
- **Extensibility**: Modular design allows easy addition of new labeling strategies

## Results

- Successfully automated the annotation of Alzheimer's disease literature
- Reduced annotation time from weeks to hours for large document collections
- Achieved annotation quality comparable to human experts through label aggregation
- Created reusable pipeline applicable to other biomedical domains

## Impact

This tool significantly accelerates biomedical research by removing the annotation bottleneck, enabling researchers to rapidly build labeled datasets for training specialized NLP models in the Alzheimer's disease domain and beyond.`,
    github: "https://github.com/UNLVCS/LiteratureAnnotator",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    // Add your draw.io diagram URL here. Options:
    // 1. Published diagram URL from diagrams.net
    // 2. Google Drive link to .drawio file (e.g., "https://drive.google.com/file/d/FILE_ID/view")
    // 3. Direct URL to .drawio file
    // drawio: "YOUR_DRAWIO_URL_HERE"
  },
  {
    id: 6,
    title: "Domain-Aware Span Corruption for Alzheimer's Disease Biomarker Research",
    description: "Developed DASC, a novel self-supervised fine-tuning objective for adapting LLMs to specialized biomedical domains, achieving 10% perplexity reduction in QA tasks.",
    technologies: ["Python", "PyTorch", "HuggingFace", "FLAN-T5", "NLP", "Domain Adaptation", "Self-Supervised Learning"],
    pdf: "https://drive.google.com/file/d/1VOgM3cZcw4kh0xhh0zlNZHc_blVBWuUH/preview",
    caseStudy: `Project Overview

Developed Domain Aware Span Corruption (DASC), a novel semi-self-supervised fine-tuning objective for adapting Large Language Models to specialized biomedical domains. Applied DASC to fine-tune FLAN-T5 XL for Alzheimer's Disease Biomarker (ADBM) research, addressing the challenge of limited domain-specific training data and improving domain understanding.

Problem Statement

General-purpose LLMs lack the depth of understanding required for specialized biomedical applications, particularly in areas requiring nuanced interpretation of disease-specific biomarker information. Current adaptation strategies primarily rely on supervised fine-tuning, which requires large amounts of labeled data that may be scarce in specialized domains.

Methodology

Domain Aware Span Corruption (DASC):
• Inspired by T5's Span Corruption pretraining objective
• Employs domain-aware corruption strategy using multi-token spanning annotations
• Drops biomarker-relevant tokens from input sequences and replaces them with unique sentinel tokens
• Target sequence consists of dropped spans delimited by their corresponding sentinel tokens

Training Pipeline:
• Applied DASC as a semi-self-supervised fine-tuning objective on FLAN-T5 XL
• Fine-tuned on a curated corpus of ~260,000 tokens of ADBM literature
• Incorporated additional biomedical research papers to address data limitations
• Employed domain-aware masking strategies to prioritize biomarker-relevant terms
• Followed by supervised fine-tuning on text classification tasks

Evaluation Framework:
• Linear Probing - Trained logistic regression on hidden state representations to measure domain concept encoding
• Question Answering - Assessed downstream performance using perplexity metrics
• Comprehensive metrics including F1 scores, recall, precision, and confusion matrices

Results

Linear Probe Performance: Achieved F1 score of 0.88, Precision of 0.90, and Accuracy of 0.91 on the last layer, demonstrating improved encoding of AD domain concepts.

Question Answering: Approximately 10% reduction in perplexity (from 41.46 to 37.33), indicating the model assigns higher probability to correct next tokens.

Domain Understanding: DASC showed significant improvement in transferability of deeper domain understanding in downstream QA tasks.

Impact

This work contributes to the growing field of domain-specific LLM adaptation for biomedical applications. DASC-adapted models can serve as powerful tools for rapidly categorizing vast volumes of Alzheimer's research literature, automated extraction of biomarker-relevant information, assisting researchers and clinicians in navigating complex biomarker literature, and accelerating knowledge discovery and clinical translation.

The methodology extends beyond Alzheimer's research to broader applications of language modeling in specialized medical domains.`,
    github: "https://github.com/AbrehamT/biomedical-nlp",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 5,
    title: "Transformer-Based PINNs for Fluid Dynamics",
    description: "Utilized attention mechanisms in Physics-Informed Neural Networks to simulate unsteady and turbulent flow over a cylindrical object at Re=3900.",
    technologies: ["Python", "PyTorch", "Transformers", "Deep Learning", "Navier-Stokes", "Auto-Differentiation"],
    slides: "https://docs.google.com/presentation/d/1uWfOPKEf92AKx8d9qF2KKPXbWhygCb7uOzp7a4_DuQY/embed?start=true&loop=true&delayms=3000&rm=minimal&usp=sharing",
    caseStudy: `## Project Overview

Explored PINNsFormer, a Transformer-based Physics-Informed Neural Network, to simulate unsteady and turbulent fluid flow over a cylindrical object. This work addresses the computational expense of traditional numerical methods by leveraging deep learning with physics constraints embedded directly into the training process.

## Architecture

The PINNsFormer architecture consists of three main components:

1. **Spatio-Temporal Mixer**: Projects inputs to a higher dimensional space before entering the encoder
2. **Encoder-Decoder Transformer**: Uses encoder self-attention and encoder-decoder cross-attention (removes decoder self-attention from standard Transformer)
3. **Wavelet Activation**: Custom activation function for improved approximation of Fourier-like structures in fluid dynamics

## Dataset & Preprocessing

- Large Eddy Simulation (LES) data of flow over a circular cylinder at Re=3900
- Provides velocity (u, v), pressure p, and turbulent viscosity νt
- 40-second simulation sequence with 0.25s time steps
- Preprocessed raw data to align spatial coordinates (x, y) and stored in HDF5 format

## Governing Equations

Implemented the non-dimensional URANS equations using PyTorch automatic differentiation:
- Continuity equation: ∇·u = 0
- Momentum equation with effective viscosity: νeff = 1 + νt
- Combined supervised loss (velocity & pressure) with physics residual loss

## Results

- **Stable Training Convergence**: Both supervised and physics loss components decreased smoothly
- **Vorticity Field Reconstruction**: Accurately captured wake structure, vortex shedding, and coherent patterns
- **Velocity Probe Accuracy**: Model predictions closely followed both phase and amplitude of vortex-shedding oscillations at probe locations

## References

- Raissi et al. (2019) - Physics-informed neural networks for solving PDEs
- Zhao, Ding, & Prakash (2023) - PINNsFormer: A Transformer-Based Framework
- Wallian, Jacquet, & Resseguier (2025) - OpenFOAM cylinder wake flow data (Re=3900)`,
    github: "https://github.com/AbrehamT/urans_pinnsformer",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
  },
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
- Creating robust algorithms that could handle sensor noise and variability`,

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
