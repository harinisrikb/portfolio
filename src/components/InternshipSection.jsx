export const InternshipSection = () => {
  return (
    <section id="internship" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Internship <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">

          <div className="gradient-border p-6 card-hover">
            <h3 className="text-xl font-semibold">
              Web Development Intern
            </h3>
            <p className="text-primary">
              Qono Technologies • June 2024 - July 2024
            </p>
            <p className="text-muted-foreground mt-3">
              Completed a Web Development Internship where I worked on responsive web applications using HTML, CSS, JavaScript, and Python Flask. Contributed to frontend development, debugging, testing, and deployment activities while gaining hands-on experience in modern web development workflows and collaborative project environments.
            </p>
          </div>

          <div className="gradient-border p-6 card-hover">
            <h3 className="text-xl font-semibold">
              Tech Intern
            </h3>
            <p className="text-primary">
              GUVI HCL • Sep 2024 - Oct 2024
            </p>
            <p className="text-muted-foreground mt-3">
              As part of my internship with the Zen Team at GUVI HCL, I worked on technical tasks and gained exposure to real-world software development practices. My responsibilities included assisting with coding and debugging, supporting project testing workflows, and collaborating with mentors in an agile environment. The internship strengthened my problem-solving, programming, teamwork, and communication skills while also instilling professional values such as confidentiality, discipline, and structured reporting.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};