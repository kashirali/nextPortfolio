"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React/Node CRM Web Application",
    description:
      "It's a ChatApp that is integrated with Facebook Messaging API, WhatsApp, and Twilio.",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend", "Full Stack"],
    gitUrl: null,
    previewUrl: "https://app.kuikwit.com",
  },
  // {
  //   id: 2,
  //   title: "Next JS/Strapi Web Application",
  //   description:
  //     "Global anti-bullying charity promoting kindness and inclusivity.",
  //   image: "/images/projects/2.png",
  //   tag: ["All", "Frontend", "Full Stack"],
  //   gitUrl: null,
  //   previewUrl: "https://ditchthelabel.org",
  // },
  {
    id: 3,
    title: "E-commerce Landing Page",
    description:
      "Responsive e-commerce landing page for optimal user experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/kashirali/Modern-E-commerce-site-HTML-CSS-",
    previewUrl: null,
  },
  {
    id: 4,
    title: "Curvyegg Web Application",
    description: "Fueling your business dreams with passion and expertise.",
    image: "/images/projects/4.png",
    tag: ["All", "Frontend"],
    gitUrl: null,
    previewUrl: "https://curvyegg.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
