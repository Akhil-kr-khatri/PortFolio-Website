import { Code, Database, Cloud, Wrench, Cpu, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Java", "HTML", "JavaScript", "TypeScript"],
    },
    {
      icon: Wrench,
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express.js", "Bootstrap", "EJS"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Oracle"],
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["Microsoft Azure", "Amazon Web Services"],
    },
    {
      icon: Cpu,
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "ArgoCD", "Git/GitHub"],
    },
    {
      icon: Sparkles,
      title: "AI Tools",
      skills: ["Lovable.dev", "ChatGPT", "Gemini"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-foreground/80 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
