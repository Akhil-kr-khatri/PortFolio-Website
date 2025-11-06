import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Hello! I’m Akhil Kumar Khatri, a recent graduate from Silicon Institute of Technology with a strong passion for developing scalable applications and automating cloud-native DevOps workflows.
          </p>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I have hands-on experience in Full Stack Development using technologies such as React, Node.js, and Express.js, along with expertise in DevOps and Infrastructure Automation using tools like Terraform, Jenkins, Docker, and Kubernetes. I also work extensively with cloud platforms including Amazon Web Services (AWS) and Microsoft Azure.
          </p>

          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            My technical portfolio includes projects such as Wander Hub — a dynamic travel web application; a CI/CD Pipeline on AWS for automated deployments; a Cloud-Native To-Do Application; and a Serverless ETL Pipeline that integrates S3, AWS Glue, and Athena for seamless data analytics.
          </p>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I’m deeply motivated by solving complex engineering challenges, designing automated workflows, and building systems that are efficient, reliable, and cloud-ready.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <GraduationCap className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Education</h3>
                <p className="text-muted-foreground">B.Tech - Computer Engineering</p>
                <p className="text-muted-foreground text-sm">
                  Silicon University (Completed May 2025)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <MapPin className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
                <p className="text-muted-foreground text-sm">
                  Open for opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
