import { Briefcase, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "AWS & DevOps Trainee",
      company: "Ingenious Tech",
      period: "June 2024 - October 2025",
      description: [
        "Gained hands-on experience with AWS services including EC2, S3, IAM, and VPC",
        "Worked on DevOps practices, CI/CD pipelines, and automation using Jenkins",
        "Infrastructure provisioning using Terraform",
        "Deployed and managed cloud-native applications efficiently",
      ],
    },
    {
      role: "Azure Masters Trainee",
      company: "Ingenious Tech",
      period: "July 2023 - June 2024",
      description: [
        "Deployed scalable websites using Azure App Services",
        "Configured Azure Load Balancer for efficient traffic distribution",
        "Managed Azure Blob Storage for seamless access and storage operations",
        "Executed resource migration for cost optimization",
      ],
    },
  ];

  const certifications = [
    { name: "HackerRank - Java (Basic)", link: "https://www.hackerrank.com/certificates/21eac5788d46" },
    { name: "HackerRank - SQL (Basic)", link: "https://www.hackerrank.com/certificates/5772ec0385d3" },
    { name: "HackerRank - SQL (Intermediate)", link: "http://hackerrank.com/certificates/4c49223e317c" },
    { name: "Certified on Azure Masters - Ingenious", link: "https://drive.google.com/file/d/1MoLnYuDqd5WILP6xjaWyh2J7TbcATzDS/view" },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Experience & <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-accent" size={28} />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                  <p className="text-accent font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-accent" size={28} />
              Certifications
            </h3>
            <div className="glass-card rounded-xl p-6">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors group"
                  >
                    <Award className="text-primary mt-1 group-hover:text-accent transition-colors" size={20} />
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/90 group-hover:text-primary transition-colors"
                    >
                      {cert.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
