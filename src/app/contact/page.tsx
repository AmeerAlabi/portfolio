'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xldrydlg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full p-3 absolute bg-[#111827]">
      <motion.div
        className="p-6 max-w-lg mx-auto my-12 bg-[#030712] shadow-lg rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isSubmitted ? (
          <div className="text-center text-green-500">
            <h3 className="text-xl">Thank you for your message!</h3>
            <p>We&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Discuss</h2>
            <div className="mb-4 mt-[20px]">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter Your Name'
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full text-gray-600 border-gray-400 border-[1px] bg-transparent p-2 h-[45px] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mt-[10px] mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter Your Email-Address'
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block p-2 w-full text-gray-600 h-[45px] bg-transparent border-[1px] border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder='Enter Your Message'
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block h-[120px] p-2 text-gray-600 bg-transparent border-[1px] w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default Page;
