import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications",
      major: "Information Technology",
      institution: "MATS University",
      place: "Raipur, Chattisgarh",
      year: "2020-2023",
      description: "CGPA: 9.43",
    },
    {
      id: 2,
      degree: "Masters of Computer Applications",
      major: "Information Technology",
      institution: "Andhra University",
      place: "Visakhapatnam, Andhra Pradesh",
      year: "2024-2026",
      description: "Ongoing",
    },
  ];

  return (
    <div className="flex flex-col space-y-2">
      <div>
        <h2 className="text-2xl font-bold text-primary">Education</h2>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((edu) => (
          <Card key={edu.id} className="m-4 p-4">
            <CardContent>
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold text-primary">
                  {edu.degree} in {edu.major}
                </h3>
                <span className="text-gray-700">{edu.year}</span>
              </div>
              <p className="mb-2">
                {edu.institution}, {edu.place}
              </p>
              <p className="mb-2">{edu.description}</p>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Education;
