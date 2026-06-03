export const CertificationsSection = () => {
  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 – Data Science Professional",
      file: "/certificates/Oracle eCertificate.pdf",
    },
    {
      title: "Web Development with Python Flask – GUVI HCL",
      file: "/certificates/GUVI Web.png",
    },
    {
      title: "Generative AI – GUVI HCL",
      file: "/certificates/GUVI Gen AI.png",
    },
    {
      title: "Intro to Machine Learning – Kaggle",
      file: "/certificates/KB Harinisri - Intro to Machine Learning.png",
    },
    {
      title: "Intermediate Machine Learning – Kaggle",
      file: "/certificates/KB Harinisri - Intermediate Machine Learning.png",
    },
    {
      title: "Python Essentials 1 – Cisco",
      file: "/certificates/PythonEssentials1.pdf",
    },
    {
      title: "Python Essentials 2 – Cisco",
      file: "/certificates/PythonEssentials2.pdf",
    },
    {
      title: "Soft Skills – NPTEL",
      file: "/certificates/Soft Skills.pdf",
    },
    {
      title: "Enhancing Soft Skills and Personality – NPTEL",
      file: "/certificates/Enhancing Soft Skills and Personality.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="gradient-border p-6 card-hover flex justify-between items-center"
            >
              <h3 className="font-semibold text-lg">{cert.title}</h3>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};