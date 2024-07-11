import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Link2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CRUD Notes App",
      description: [
        "Developed a CRUD Notes App using Django and Django Rest Framework",
        "It provides endpoints for creating, updating, and deleting notes.",
        "It also provides endpoints for user registration, authentication, and note management.",
      ],
      technologies: ["Django", "Django Rest Framework"],
      link: "https://github.com/vadlamaniuday/crud-notes",
    },
    {
      id: 2,
      title: "Job Board",
      description: [
        "Developed a Job Board using React Js",
        "Developed features for job listings, job details, and job applications",
        "Utilized React Router for seamless navigation and dynamic routing between different pages.",
      ],
      technologies: ["React", "Tailwind CSS", "React Router"],
      link: "https://github.com/vadlamaniuday/job-board",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold text-primary">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card key={project.id} className="w-full">
            <CardContent>
              <div className="flex items-center justify-between mb-2 mt-2">
                <h3 className="text-xl font-bold text-primary">
                  {project.title}
                </h3>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-blue-500 hover:underline ml-2"
                >
                  <Link2 />
                </Link>
              </div>
              <ul className="list-disc pl-6 mb-2">
                {project.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <span className="font-semibold mr-2">Technologies:</span>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
