"use client";

import Layout from '../components/Layout';
import { useState } from 'react';
import Image from 'next/image';
import ThreeScene from '../components/ThreeScene';

const projects = [
  {
    title: "Zuma Arcade",
    description: "Game arcade Zuma yang menarik dengan grafis yang menakjubkan dan level yang menantang, terinspirasi dari budaya kuno Aztec.",
    technologies: ["Unity", "C#", "Adobe Illustrator", "Blender"],
    image: "/images/library-dashboard.jpg"
  },
  {
    title: "Zuma Mobile",
    description: "Versi mobile dari game Zuma klasik dengan kontrol sentuh yang responsif dan fitur multiplayer online.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    image: "/images/portfolio-3d.jpg"
  }
];

export default function Proyek() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Layout>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <ThreeScene />
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Proyek Saya</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
                <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-20">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <Image src={selectedProject.image} alt={selectedProject.title} width={600} height={400} className="w-full h-64 object-cover mb-4 rounded" />
                <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}