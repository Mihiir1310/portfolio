import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <motion.div
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6}}
        >
          <div className="badge">🚀 Java • DevOps • React</div>
          <h1 className="title">I build E-commerce website & reliable pipelines.</h1>
          <p className="subtitle">
            Fullstack Developer with Java, Spring, React, Javascript, Html, Css .
            DevOps engineer specializing in Kubernetes, Terraform, Jenkins, Helm, ArgoCD, and AWS.
            I design secure CI/CD, automate deployments, and keep systems observable.
          </p>
          <div className="cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity:0, scale:.95}} animate={{opacity:1, scale:1}} transition={{duration:.6, delay:.15}}
          className="card"
        >
          <img className="hero-img" src="/profile.svg" alt="profile" />
        </motion.div>
      </div>
    </section>
  );
}
