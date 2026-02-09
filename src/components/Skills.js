import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {t:'Java & Spring'}, {t:'ReactJS & Html-Css'}, {t:'Next-Js & Tailwind'},
  {t:'Typescript & NodeJS'}, {t:'MySQL & ELK'}, {t:'Docker & Containers'}, 
  {t:'Kubernetes & Helm'}, {t:'AWS / GCP'}, {t:'Terraform & IaC'}, 
  {t:'Jenkins / GitHub Actions'}, {t:'CI-CD'}, {t:'Prometheus / Grafana'}, 
  {t:'SonarQube / Trivy'}, {t:'NGINX / Ingress'}
];

export default function Skills(){
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="grid grid-3">
          {items.map((s, i)=> (
            <motion.div key={i} className="skill card"
              whileHover={{y:-6, scale:1.02}}
              initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
              transition={{duration:.35, delay: i*0.04}}
            >
              {s.t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
