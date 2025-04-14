import React, { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Phone, Globe } from 'lucide-react';


const ContactSection = () => {
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, message: 'Sending...' });
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      // Replace with your Formspree form ID
      const response = await fetch('https://formspree.io/f/xnnpwkaa', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully!'
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'An error occurred. Please try again.'
      });
    }
  };
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-gray-100">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-12">Interested in working together? Let's connect!</p>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info section - unchanged */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-300">Email</p>
                  <a href="mailto:abrehamtadesse95@gmail.com" className="text-blue-400 hover:underline">abrehamtadesse95@gmail.com</a>
                </div>
              </div>
              {/* Other contact info items - unchanged */}
              <div className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-300">Mobile</p>
                  <a href="tel:+17028013039" className="text-blue-400 hover:underline">+1-702-801-3039</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-300">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/abreham-t-tadesse-34b78b259/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/abreham-t-tadesse-34b78b259/</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Github className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-300">GitHub</p>
                  <a href="https://github.com/AbrehamT" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">github.com/AbrehamT</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="font-medium text-gray-300">Website</p>
                  <a href="http://www.abrehamtadesse.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">www.abrehamtadesse.com</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form section - updated */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-medium transition-colors"
                disabled={status.submitted && !status.success}
              >
                {status.submitted && !status.success ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <p className={`mt-2 text-center ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;