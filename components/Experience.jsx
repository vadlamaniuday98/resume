import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "Software Developer - Intern",
      name: "Adyant Softtech Pvt Ltd",
      date: "Feb 2023 - May 2023",
      technologies: ["Python", "Django", "React", "PostgreSQL"],
      description: [
        "Developed several REST APIs using Django REST Framework and PostgreSQL to store data from Teaching Management systems",
        "Wrote SQL Queries in PostgresQL for query optimisation",
        "Tested API Endpoints using Postman",
        "Engaged in code reviews and in agile settings",
      ],
      link: "https://adyant.co.in/",
    },
    {
      id: 2,
      title: "Full Stack Developer - Intern",
      name: "LunarTree Private Limited",
      date: "May 2024 - Present",
      technologies: ["Python", "FastAPI", "NextJS", "PostgreSQL"],
      description: [
        "Integrated several REST APIs using FastAPI and PostgreSQL to store and retrieve data",
        "Made several Pages using NextJS with the help of ShadCN",
        "Utilized version control systems (Git) for source code management and collaboration",
      ],
      link: "https://lunartree.bio/",
    },
  ];

  experience.sort((a, b) => b.id - a.id);

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        <h2 className="text-2xl font-bold text-primary">Experience</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((exp) => (
          <Card key={exp.id} className="w-full">
            <CardContent>
              <div className="mb-2 mt-4">
                <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                <Link
                  href={exp.link}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  <span className="text-lg text-blue-500">{exp.name}</span>
                </Link>
                <span className="block text-gray-700">{exp.date}</span>
              </div>
              <ul className="list-disc pl-6 mb-2">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <span className="font-semibold mr-2">Technologies:</span>
              <div className="flex flex-wrap">
                {exp.technologies.map((tech, index) => (
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

export default Experience;
