
import { notFound } from "next/navigation";

// Industries data (shared or imported)
const industries = [
  {
    name: "Healthcare and Medical",
    projects: [
      { title: "Telemedicine App", desc: "Launched June 2025, connects patients with doctors remotely.", image: "/placeholder/health.jpg" },
      { title: "Medical IoT System", desc: "Deployed June 2025, real-time patient monitoring solutions.", image: "/placeholder/iot.jpg" },
    ],
  },
  {
    name: "Industrial Automation",
    projects: [
      { title: "Smart Factory System", desc: "Released May 2025, optimizes production lines.", image: "/placeholder/automation.jpg" },
      { title: "Robotic Assembly Line", desc: "Updated June 2025, enhances manufacturing efficiency.", image: "/placeholder/robot.jpg" },
    ],
  },
  {
    name: "Waste Management",
    projects: [
      { title: "Smart Waste Collection", desc: "Launched April 2025, AI-driven waste optimization.", image: "/placeholder/waste.jpg" },
      { title: "Recycling Tracker", desc: "Deployed June 2025, monitors recycling processes.", image: "/placeholder/recycle.jpg" },
    ],
  },
  {
    name: "Water and Utilities",
    projects: [
      { title: "Smart Water Grid", desc: "Released May 2025, improves water distribution.", image: "/placeholder/water.jpg" },
      { title: "Utility Monitoring", desc: "Updated June 2025, real-time energy management.", image: "/placeholder/utility.jpg" },
    ],
  },
];

export async function generateStaticParams() {
  return industries.map((industry) => ({
    industryName: industry.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function IndustryProjects({ params }) {
  const { industryName } = params;
  const industry = industries.find(
    (ind) => ind.name.toLowerCase().replace(/\s+/g, "-") === industryName
  );

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen py-16 px-4 md:px-8 lg:px-12 font-roboto text-gray-100">
      <h1 className="text-3xl md:text-5xl font-bold text-left md:px-10 px-2 text-slate-300 mb-8 leading-tight">
        Projects in {industry.name}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-10 px-2">
        {industry.projects.map((project, index) => (
          <div
            key={index}
            className="bg-black/50 backdrop-blur-sm p-7 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 text-sm">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
