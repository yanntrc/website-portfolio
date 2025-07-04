// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, children }) {
  return (
    <div className="bg-white/90 shadow-lg rounded-xl p-6 m-4 max-w-xl">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      {children}
    </div>
  );
}