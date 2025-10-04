import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Wander Hub",
      description: "A full-stack listing platform where users can discover and create listings. Features secure authentication with Passport, RESTful APIs, and Mapbox integration for location services.",
      tech: ["EJS", "Node.js", "Express.js", "MongoDB", "Passport"],
      link: "#",
      github: "#",
    },
    {
      title: "Cloud Native ToDo App",
      description: "Full-stack cloud-native application deployed on Microsoft Azure with React frontend, Node.js backend, and MongoDB. Implemented load balancing across multiple VMs for high availability.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Azure", "Load Balancer"],
      link: "#",
      github: "#",
    },
    {
      title: "CI/CD Pipeline on AWS",
      description: "Automated GitOps workflow using Terraform for EKS provisioning, GitHub-Jenkins-ArgoCD pipeline for continuous deployment. Achieved zero manual intervention with Docker and AWS ECR integration.",
      tech: ["Terraform", "AWS ECR", "Jenkins", "ArgoCD", "Docker", "Kubernetes"],
      link: "#",
      github: "#",
    },
    {
      title: "ETL Pipeline on AWS",
      description: "Serverless ETL pipeline automating data extraction, transformation to Parquet format, and storage. Built with AWS S3, Lambda, Glue, and Athena for analytics and querying.",
      tech: ["AWS S3", "Lambda", "Glue", "Athena", "SNS"],
      link: "#",
      github: "#",
    },
    {
      title: "CouponHub",
      description: "Java-based web application for managing and redeeming discount coupons. Implemented CRUD operations with JDBC and Oracle database, featuring admin controls and responsive JSP interface.",
      tech: ["Java", "JDBC", "Oracle", "JSP"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group border-white/10"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent/50 hover:bg-accent/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
