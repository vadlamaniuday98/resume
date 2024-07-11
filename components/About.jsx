import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const About = () => {
  const languages = ["Python", "JavaScript", "SQL", "Java"];
  const frameworks = ["Django", "FastAPI", "React", "NextJS"];
  const uiLibraries = ["Bootstrap", "Tailwind", "MaterialUI", "ShadCN"];
  const operatingSystems = ["Windows", "Linux"];
  const others = ["Git", "GitHub", "Postman", "Microsoft Excel"];
  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Active Learning",
  ];

  const skills = [
    { title: "Languages", data: languages },
    { title: "Frameworks", data: frameworks },
    { title: "UI Libraries", data: uiLibraries },
    { title: "Operating Systems", data: operatingSystems },
    { title: "Others", data: others },
    { title: "Soft Skills", data: softSkills },
  ];

  return (
    <div className="flex flex-col space-y-2">
      <div>
        <h2 className="text-2xl font-bold text-primary">Skills</h2>
      </div>
      <Card className="m-4 p-4 w-full">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3 className="text-lg font-bold text-primary">{skill.title}</h3>
              <div className="flex flex-wrap">
                {skill.data.map((item) => (
                  <Badge key={item} className="mr-2 mb-2">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default About;
