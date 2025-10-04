import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12">
          <p className="text-center text-lg text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:akhilkhatri2024@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all group"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">akhilkhatri2024@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+917903971279"
              className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all group"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <Phone className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">+91-7903971279</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
              size="lg"
            >
              <a
                href="https://linkedin.com/in/akhil-khatri-066a14219"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn Profile
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              size="lg"
            >
              <a
                href="https://github.com/akhilkhatri2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={20} />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
