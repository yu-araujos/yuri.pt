/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isHuman: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/meojbprv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          isHuman: false,
        });
      } else {
        setError('Something went wrong, please try again.');
      }
    } catch (error) {
      setError('Something went wrong, please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full p-3 bg-black rounded-lg bg-opacity-30 text-white">
      {isSubmitted ? (
        <p className="text-lg text-center">Thank you! I'll get back to you as soon as possible.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded-md bg-green-200 bg-opacity-20 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded-md bg-green-200 bg-opacity-20 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full rounded-md bg-green-200 bg-opacity-20 text-white"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full lg:w-1/4 mt-5 lg:mt-0 p-2 bg-green-600 rounded-md hover:bg-green-700 transition cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send a Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
