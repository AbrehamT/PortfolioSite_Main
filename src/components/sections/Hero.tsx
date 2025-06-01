import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

// Particle animation function
const initParticles = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Match canvas dimensions to parent element
  const resizeCanvas = () => {
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    }
  };

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Particle properties
  const particles: {
    x: number;
    y: number;
    radius: number;
    color: string;
    speedX: number;
    speedY: number;
    opacity: number;
  }[] = [];

  // Color palette matching your theme
  const colors = [
    'rgba(155, 178, 216, 0.6)',  // primary/blue-500
    'rgba(37, 99, 235, 0.6)',   // primary-dark/blue-600
    'rgba(79, 70, 229, 0.5)',   // indigo-600
    'rgba(99, 102, 241, 0.4)',  // indigo-500
  ];

  // Create particles
  const createParticles = () => {
    const particleCount = Math.floor(canvas.width * canvas.height / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  };

  createParticles();

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw and update each particle
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Move particles
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX = -particle.speedX;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY = -particle.speedY;
      }
    });
    
    requestAnimationFrame(animate);
  };
  
  animate();

  // Clean up function
  return () => {
    window.removeEventListener('resize', resizeCanvas);
  };
};


// const PinterestEmbed = () => {
//   return (
//     <div style={{ maxWidth: "100%", overflow: "hidden" }}>
//       <iframe
//         src="https://assets.pinterest.com/ext/embed.html?id=139470919704351588"
//         width="345"
//         height="790"
//         style={{ border: "none", maxWidth: "100%" }}
//         scrolling="no"
//         title="Pinterest Embed"
//       ></iframe>
//     </div>
//   );
// };


const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const cleanup = initParticles(canvasRef.current);
      return cleanup;
    }
  }, []);

  
  return (
    <section 
      id="home" 
      className="relative pt-24 md:pt-32 pb-0"
      style={{ 
        background: 'var(--hero-bg)',
        position: 'relative',
        zIndex: 0
      }}
    >
      {/* Particle animation canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
              <span className="text-blue-400">Abreham Tadesse</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              Software Engineer
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Computer Science student at University of Nevada, Las Vegas with experience in full-stack development, AI/ML, and embedded systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="border border-blue-500 text-blue-400 hover:bg-gray-800 px-6 py-3 rounded-md font-medium transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center gap-6">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
              <img 
                src="/images/Me.png" 
                alt="Abreham Tadesse" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pinterest Embed */}
            {/* <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
              <iframe
                src="https://assets.pinterest.com/ext/embed.html?id=139470919704351588"
                width="345"
                height="790"
                style={{ border: 'none', maxWidth: '100%' }}
                scrolling="no"
                title="Pinterest Embed"
              ></iframe>
            </div> */}
            <div style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
              src="https://open.spotify.com/embed/playlist/7kalSs40bWw9Ng7pTbUg7R?utm_source=generator"
              width="100%"
              height="352"
              style={{ border: 'none', borderRadius: '12px' }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>
          </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-8">
          <a href="https://github.com/AbrehamT" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/abreham-t-tadesse-34b78b259/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:abrehamtadesse95@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="https://drive.google.com/file/d/1TTjj3qRzYi2v-yaug0G2NTlbSYTlwBMH/view?usp=sharing" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2">
            <FileText size={20} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
