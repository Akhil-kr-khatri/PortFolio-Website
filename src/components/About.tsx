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
            Hi, I'm Akhil Kumar Khatri 🎓, a recent graduate from Silicon Institute of Technology, passionate about building scalable applications and automating cloud-native DevOps workflows ☁️⚡. I have hands-on experience in full-stack development with React, Node.js, Express.js 💻, and in infrastructure automation & DevOps using Terraform, Jenkins, Docker, Kubernetes 🛠️, along with cloud platforms like AWS and Azure ☁️🌐.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I've worked on exciting projects like Wander Hub 🌍, a CI/CD pipeline on AWS 🚀, a Cloud-Native Todo App ✅, and a Serverless ETL Pipeline ⚡📦📊 that extracts, transforms, and loads data from S3 into Athena for analytics. I enjoy tackling challenging problems, building automated workflows, and creating systems that just work efficiently and reliably ⚡📊.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <GraduationCap className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Education</h3>
                <p className="text-muted-foreground">B.Tech - Computer Engineering</p>
                <p className="text-muted-foreground text-sm">Silicon University (Completed May 2025)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <MapPin className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
                <p className="text-muted-foreground text-sm">Open for opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
