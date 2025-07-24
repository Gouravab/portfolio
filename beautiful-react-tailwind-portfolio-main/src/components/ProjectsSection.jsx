import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
  id: 1,
  title: "EchoMood",
  description: "AI-powered mood tracker using serverless architecture and real-time sentiment analysis.",
  image: "/projects/project1.png",
  tags: [ "AWS Lambda", "DynamoDB", "Amazon Titan", "API Gateway"],
  demoUrl: "https://echo-mood.vercel.app/", // Add if you have a live demo
  githubUrl: "https://github.com/Gouravab/EchoMood", // Add actual repo URL
},

  {
    id: 2,
    title: "Smart Medicine Supply & Fraud Detection System ",
    description:
      "Real-time system to detect billing anomalies and duplicate transactions using Kafka, Python, and MySQL. Streamlined 10,000+ records and reduced manual verification by 90%..",
    image: "/projects/project2.png",
    tags: ["Python", "Apache Kafka", "MySQL", "Zookeeper"]
   },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 px-40 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-55 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Gouravab"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
