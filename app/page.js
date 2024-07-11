import Personalinfo from "@/components/Personalinfo";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import { Card } from "@/components/ui/card";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center m-4 space-y-4">
      <Card className="w-full p-6">
        <Personalinfo />
      </Card>
      <Card className="w-full p-6">
        <About />
      </Card>
      <Card className="w-full p-6">
        <Experience />
      </Card>
      <Card className="w-full p-6">
        <Projects />
      </Card>
      <Card className="w-full p-6">
        <Education />
      </Card>
    </div>
  );
};

export default Page;
