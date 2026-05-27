import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetail.css";

function ProjectDetails() {

  const { id } = useParams();
  const navigate = useNavigate(); // 🔥 back button

  const projectData = {
    ecommerce: {
      title: "Ecommerce Website",
      overview:
        "A modern ecommerce web application designed to deliver a seamless shopping experience. It includes product listing, cart functionality, and dynamic routing. The UI is fully responsive and optimized for performance, ensuring smooth navigation across all devices.",
      images: [
        "/images/eco.PNG",
        "/images/eco.PNG",
        "/images/eco.PNG"
      ],
      features: [
        "Browse and filter products easily",
        "Add to cart with real-time updates",
        "Responsive design for all devices",
        "Dynamic routing with React Router",
        "Clean and modern UI design",
        "Fast performance and smooth UX"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Git"]
    },

    blog: {
      title: "Blog Website",
      overview:
        "A dynamic blogging platform that allows users to explore articles across multiple categories. It features search, bookmarking, and multilingual support, providing a clean and engaging reading experience.",
      images: [
        "/images/eco.PNG",
        "/images/eco.PNG",
        "/images/eco.PNG"
      ],
      features: [
        "Category-based blog filtering",
        "Search functionality",
        "Bookmark/save articles",
        "Responsive layout",
        "Clean UI for better readability"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React.js",  "Git"]
    },

    ai: {
      title: "AI Tools Hub",
      overview:
        "A centralized platform showcasing useful AI tools for productivity and development. Designed with a simple and fast UI, it allows users to quickly access and explore multiple AI-powered tools in one place.",
      images: [
        "/images/eco.PNG",
        "/images/eco.PNG",
        "/images/eco.PNG"
      ],
      features: [
        "Collection of multiple AI tools",
        "Fast and responsive interface",
        "Simple and clean UI design",
        "User-friendly navigation"
      ],
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Git"]
    }
  };

  const project = projectData[id];

  if (!project) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Project Not Found</h2>;
  }

  return (
    <div className="projectDetails">

      {/* 🔙 Back Button */}
      <div className="side-arrow left" onClick={() => navigate(-1)}>
        ← 
      </div>
      {/* right next button */}
 <div className="side-arrow right" onClick={() => navigate("/projects")}>
 →
 </div>
      {/* ===== Overview ===== */}
      <div className="overviewSection">
        <h2>{project.title}</h2>
        <p>{project.overview}</p>
      </div>

      {/* ===== Screenshots ===== */}
      <div className="screenshotSection">
        <h3>Screenshots</h3>

        <div className="screenshotGrid">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt="screenshot" />
          ))}
        </div>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="bottomSection">

        {/* Features */}
        <div className="featuresBox">
          <h3>Features</h3>
          <ul>
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="techBox">
          <h3>Tech Stack</h3>
          <ul className="techlist">
            {project.tech.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}

export default ProjectDetails;