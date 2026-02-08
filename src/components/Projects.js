import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    title:'Swiggy Clone DevOps',
    desc:'End-to-end CI/CD with Jenkins, SonarQube, Trivy, Helm, and ArgoCD on Kubernetes.',
    img:'/swiggy.svg.png',
    tags:['Docker','K8s','Jenkins','AWS'],
    github:'https://github.com/Mihiir1310/swiggy-clone-devops.git', demo:'#'
  },
  {
    title:'Amazon-clone application',
    desc:'Terraform-provisioned EKS with Helm charts, Jenkins CI/CD pipeline.',
    img:'/project2.svg',
    tags:['EKS','Helm','Terraform','Jenkins'],
    github:'#', demo:'#'
  },
  {
    title:'E-commerce website',
    desc:'Featured product list with Cart Option & Email Notification.',
    img:'/ecom.svg.png',
    tags:['React','Html','Css'],
    github:'https://github.com/Mihiir1310/E-commerce.git', demo:'https://mihirecom.netlify.app/'
  }
];

export default function Projects(){
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid grid-3">
          {data.map((p, i)=> (
            <motion.article key={i} className="proj card"
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
              transition={{duration:.4, delay:i*0.05}}
              whileHover={{y:-6, scale:1.01}}
            >
              <img src={p.img} alt={p.title}/>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p style={{color:'var(--muted)'}}>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t, idx)=>(<span key={idx} className="tag">{t}</span>))}
                </div>
                <div style={{marginTop:12, display:'flex', gap:12}}>
                  <a className="btn btn-ghost" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="btn btn-primary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
