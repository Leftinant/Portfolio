import React from "react";
import { FaLinkedin, FaGithubAlt, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className='text-white min-h-screen max-w-screen justify-center items-center container py-20 mx-auto md:px-20 px-4 bg-[url("/black.jpg")] bg-cover bg-center'>
      <div className='relative p-5 md:p-15 flex flex-col lg:flex-row gap-10 justify-between items-start overflow-hidden'>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className='lg:w-1/2 space-y-6 text-center item-center '
        >
          <h2 className='text-4xl md:text-[4em] font-bold uppercase tracking-wide'>
            GET IN TOUCH
          </h2>
          <p className='text-gray-400 w-full md:px-20 md:text-lg'>
            Have a question, a project idea, or just want to say hello? I'm
            always open to discussing new opportunities, collaborations, or
            creative ideas. Feel free to reach .
          </p>
          <div className='space-y-4'>
            <div>
              <h4 className='uppercase font-semibold text-xl'>Phone</h4>
              <p className=' text-gray-400'>+254 758 822 727</p>
            </div>
            <div>
              <h4 className='uppercase font-semibold text-xl'>Email</h4>
              <a
                href='mailto:ondigibenjamin@gmail.com '
                className=' text-gray-400 hover:text-blue-500'
              >
                ondigibenjamin@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className=' shadow-xl p-8 rounded-lg w-full max-w-md'
        >
          <h3 className='text-xl font-semibold uppercase mb-6'>Contact Form</h3>
          <form className='space-y-5'>
            <input
              type='text'
              placeholder='Your name'
              className='w-full bg-transparent border-b-2  rounded-full px-4 py-2 text-white focus:outline-none '
            />
            <input
              type='text'
              placeholder='Your phone'
              className='w-full bg-transparent border-b-2 rounded-full px-4 py-2 text-white focus:outline-none'
            />
            <input
              type='email'
              placeholder='Your email'
              className='w-full bg-transparent border-b-2 rounded-full px-4 py-2 text-white focus:outline-none'
            />
            <textarea
              placeholder='Message'
              className='w-full bg-transparent border-b-2 rounded-full px-4 py-2 text-white focus:outline-none'
              rows='4'
            ></textarea>
            <button
              type='submit'
              className='bg-gray-900 hover:bg-white hover:text-black transition-colors px-6 py-2 rounded-full shadow-md font-semibold'
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Bottom Left Social Icons */}
        <div className='absolute bottom-6 left-6 flex flex-col items-center space-y-4 text-xl text-gray-400'>
          <a
            href='https://www.linkedin.com/in/benjamin-ayasa-3a311a36a'
            className='hover:text-white'
          >
            <FaLinkedin />
          </a>
          <a href='https://github.com/Leftinant' className='hover:text-white'>
            <FaGithubAlt />
          </a>
          <a href='https://t.me/LeftinantBen' className='hover:text-white'>
            <FaTelegram />
          </a>
          <div className='w-px h-20 bg-gray-600 mt-4'></div>
        </div>
      </div>
    </div>
  );
}
