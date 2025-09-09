'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../ui/Button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });

  // Handle text, email, tel, textarea inputs
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle checkbox separately
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You could send formData to an API here
  };

  return (
    <section className="bg-white dark:bg-white px-6 py-8 rounded-3xl border border-gray-300 mt-8 w-full max-w-2xl mx-auto">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Last name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
            placeholder="US ~ +1 (555) 000-0000"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Leave us a message..."
            rows={4}
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            checked={formData.privacy}
            onChange={handleCheckboxChange}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="privacy" className="ml-2 text-sm text-gray-500">
            You agree to our friendly privacy policy.
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#00A86B] text-white p-2 rounded-md cursor-pointer"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
}
