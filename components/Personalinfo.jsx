"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Smartphone,
  GitCompareArrows,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import copy from "copy-to-clipboard";
const Personalinfo = () => {
  const { toast } = useToast();
  const userDetails = {
    name: "Vadlamani Uday Kumar",
    description:
      "Enthusiastic Bachelors of Computer Applications graduate with knowledge in coding and design. Proficient in Python, JavaScript, SQL, and Java. Fast learner and has the ability to pick up new technologies quickly. I believe myself to be a developer, not a frameworker.Capability to work in teams by providing valuable support.",
    details: {
      linkedin: "https://www.linkedin.com/in/vadlamani-uday-095755208/",
      github: "https://github.com/vadlamaniuday",
      email: "vadlamaniuday04@gmail.com",
      phone: "+91 7415366909",
      image:
        "https://avatars.githubusercontent.com/u/106002431?s=400&u=933ba17a948a8c6b1471e294289d9e754127e377&v=4",
      place: "Visakhapatnam, Andhra Pradesh",
    },
  };

  const handleCopyEmail = () => {
    copy(userDetails.details.email);
    toast({
      title: "Email Copied",
      description: "Email has been copied to clipboard",
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-6 bg-white rounded-lg shadow-md">
      <div className="">
        <h1 className="text-2xl font-bold text-primary">{userDetails.name}</h1>
        <p className="text-gray-700">{userDetails.description}</p>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary" />
            <Link
              href={`https://www.google.com/maps/place/${userDetails.details.place}`}
              target="_blank"
              className="text-sm hover:underline"
            >
              <p className="text-sm ">{userDetails.details.place}</p>
            </Link>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              className="sm:mr-2"
              onClick={handleCopyEmail}
            >
              <a href={`mailto:${userDetails.details.email}`}>
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </Button>
            <Button variant="outline" className="sm:mr-2">
              <Link href={`tel:${userDetails.details.phone}`}>
                <Smartphone className="w-4 h-4 text-primary" />
              </Link>
            </Button>

            <Button variant="outline" className="sm:mr-2">
              <Link href={userDetails.details.github} target="_blank">
                <GitCompareArrows className="w-4 h-4 text-primary" />
              </Link>
            </Button>
            <Button variant="outline" className="sm:mr-2">
              <Link href={userDetails.details.linkedin} target="_blank">
                <Linkedin className="w-4 h-4 text-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={userDetails.details.image}
          width={200}
          height={200}
          className="rounded-full"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Personalinfo;
