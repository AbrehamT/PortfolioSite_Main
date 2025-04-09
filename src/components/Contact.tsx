import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      const response = await fetch('https://formspree.io/f/xlddaead', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        form.reset();
        setStatus('Thanks for your message!');
      } else {
        setStatus('Oops! There was a problem sending your message.');
      }
    } catch (error) {
      setStatus('Oops! There was a problem sending your message.');
    }
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center mt-4">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;