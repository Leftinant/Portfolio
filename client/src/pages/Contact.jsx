import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className='p-8'
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-3xl mb-4 text-blue-300'>📬 Contact Me</h2>
      <p className='mb-2'>You can reach me at:</p>
      <ul className='list-disc list-inside'>
        <li>Email: your.email@example.com</li>
        <li>LinkedIn: linkedin.com/in/your-profile</li>
        <li>Twitter: @yourhandle</li>
      </ul>
    </motion.div>
  );
}
