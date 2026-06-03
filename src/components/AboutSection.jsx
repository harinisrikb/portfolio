import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI & ML Graduate | Aspiring Software Developer
            </h3>

            <p className="text-muted-foreground">
              I am a B.Tech graduate in Computer Science Engineering with a
              specialization in Artificial Intelligence and Machine Learning.
              I enjoy building software applications and exploring AI-driven
              solutions to real-world problems.
            </p>

            <p className="text-muted-foreground">
              Through academic projects, technical workshops, and my web
              development internship at CodeBind Technologies, I have gained
              experience in problem-solving, teamwork, and software
              development. I am continuously learning new technologies and
              improving my skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
  href="/Harini_Resume.pdf"
  download
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download Resume
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
                  <h4 className="font-semibold text-lg"> Software Development</h4>
                  <p className="text-muted-foreground">
                    Building software applications using Java, Python, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Artificial Intelligence & ML</h4>
                  <p className="text-muted-foreground">
                    Exploring machine learning concepts and developing AI-based solutions for practical use cases.
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
                  <h4 className="font-semibold text-lg">Frontend Developer</h4>
                  <p className="text-muted-foreground">
                    Building responsive and user-friendly web applications using
                    HTML, CSS, JavaScript, React, and modern web technologies.
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
