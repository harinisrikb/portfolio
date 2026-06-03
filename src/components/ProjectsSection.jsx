import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
  id: 1,
  title: "Heart Stroke Prediction System",
  description:
    "Machine learning-based web application that predicts the risk of heart stroke using patient health parameters.",
  image: "/projects/project1.png",
  tags: ["Python", "Machine Learning", "Flask"],
  demoUrl: "#",
  githubUrl: "https://github.com/harinisrikb/Heart-stroke-prediction",
},
  {
  id: 2,
  title: "Brain Tumor Segmentation",
  description:
    "Deep learning project for detecting and segmenting brain tumors from MRI scans using image processing techniques.",
  image: "/projects/project2.png",
  tags: ["Python", "Deep Learning", "CNN"],
  demoUrl: "#",
  githubUrl: "https://github.com/harinisrikb/Brain-tumor-segmentation",
},
  {
    id: 3,
    title: "Save Food App",
    description:
      "Cross-platform mobile application connecting food donors and recipients through real-time listings, notifications, and location services.",
    image: "/projects/project4.png",
    tags: ["Flutter", "Firebase", "Dart", "Google Maps API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
  id: 4,
  title: "Psychology Chatbot",
    description:
      "Machine learning powered chatbot that analyzes mental health responses and provides real-time feedback through an interactive interface.",
    image: "/projects/project3.png",
    tags: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    demoUrl: "#",
    githubUrl: "#",
},
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of projects focused on Artificial Intelligence,
          Machine Learning, healthcare technology, and social impact solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
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
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/harinisrikb"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
