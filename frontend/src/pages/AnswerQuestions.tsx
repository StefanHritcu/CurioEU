import React, { useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

// Supabase client setup
const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-supabase-anon-key";
const supabase = createClient(supabaseUrl, supabaseKey);

const AnswerQuestions: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    greeting: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("greetings")
        .insert([formData]);
      if (error) throw error;
      setStatus("Success! Your data has been submitted.");
      setFormData({ firstName: "", lastName: "", country: "", greeting: "" });
    } catch (err) {
      setStatus("Error: Unable to submit your data.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-center text-2xl font-bold mb-6">Answer Questions</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country of Origin:
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="Italy">Italy</option>
            <option value="Romania">Romania</option>
            <option value="France">France</option>
            <option value="Belgium">Belgium</option>
            <option value="Germany">Germany</option>
            <option value="Ireland">Ireland</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="greeting"
            className="block text-sm font-medium text-gray-700"
          >
            Your Greeting:
          </label>
          <textarea
            id="greeting"
            name="greeting"
            value={formData.greeting}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows={4}
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </motion.button>
        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </form>
    </motion.div>
  );
};

export default React.memo(AnswerQuestions);
