import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  const [ref, inView] = useInView({
    initialInView: true,
    triggerOnce: true,
  });

  return (
    <section className="px-6 py-8 lg:py-16" id="contact" ref={ref}>
      {/* Content wrapper */}
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
        {/* Form wrapper */}
        <motion.div
          className="max-w-xl"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};
