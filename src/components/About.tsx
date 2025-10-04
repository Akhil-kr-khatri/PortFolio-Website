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
            I'm a passionate Full Stack Developer and Cloud Engineer with expertise in building
            scalable web applications and implementing robust DevOps practices. Currently pursuing
            B.Tech in Computer Engineering at Silicon University, I have hands-on experience with
            cloud platforms like AWS and Azure, as well as modern frameworks like React and Node.js.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            My journey in tech has been enriched through internships at Ingenious Tech, where I've
            worked on cloud infrastructure, CI/CD pipelines, and automation. I enjoy solving complex
            problems and continuously learning new technologies to stay at the forefront of innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <GraduationCap className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Education</h3>
                <p className="text-muted-foreground">B.Tech - Computer Engineering</p>
                <p className="text-muted-foreground text-sm">Silicon University (2021-2025)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
              <MapPin className="text-accent mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">Bhubaneswar, Odisha</p>
                <p className="text-muted-foreground text-sm">Open to remote opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
