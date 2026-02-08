import React from 'react';
import { motion } from 'framer-motion';

export default function Contact(){
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <motion.div className="card contact-card"
          initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.4}}
        >
          <div>📧 <a className="contact-links" href="mailto:mihirpachpande7@gmail.com">mihirpachpande7@gmail.com</a></div>
          <div className="contact-links">
            <a href="https://github.com/Mihiir1310" target="_blank" rel="noreferrer">GitHub</a>
            <a href="www.linkedin.com/in/mihir-pachpande-55a28622b" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
