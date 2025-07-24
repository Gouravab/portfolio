import { Brain, BrainCircuit, Briefcase, Cloud, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-17 items-center">
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer | Cloud & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Full-stack developer with internship experience in frontend and cloud-based projects. Skilled in React, AWS, Python, and SQL. Passionate about building scalable applications and solving real-world problems through clean, modern code.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about crafting elegant solutions to complex problems and thrive in fast-paced environments. A quick learner with strong problem-solving abilities, I continuously explore new technologies to stay ahead in the ever-evolving web landscape. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    Designing and developing robust backend logic using Node.js, Python, and SQL/NoSQL databases..
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud-Native Engineering</h4>
                  <p className="text-muted-foreground">
                    Experienced in deploying solutions with AWS Lambda, API Gateway, DynamoDB, and S3 .
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Automation Projects</h4>
                  <p className="text-muted-foreground">
                    Built AI-powered mood tracking and fraud detection systems using Amazon Titan, Kafka, and Python.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile Collaboration & Delivery</h4>
                  <p className="text-muted-foreground">
                    Contributed to projects during internships using agile methodologies, version control (Git) and CI/CD practices to ship quality code efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
