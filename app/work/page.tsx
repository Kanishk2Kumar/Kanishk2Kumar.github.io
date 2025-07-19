"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";
import { WorksSection } from "@/components/workPage/moreProjects";

const projectsData = [
  {
    title: (
      <>
        SAHAY <br /> Donation Platform
      </>
    ),
    description:
      "A blockchain and AI-powered platform ensuring transparency and fairness in donation and resource distribution during natural disasters, enabling traceable transactions and analytics.",
    link: "",
    github: "https://github.com/Kanishk2Kumar/SAHAY",
    imageLink: "/img/projects/1.avif",
  },
  {
    title: (
      <>
        SmartFocus <br /> Web App
      </>
    ),
    description:
      "AI-based web application to monitor user focus patterns in real-time, providing personalized productivity insights and visual analytics dashboards for enhanced time management.",
    link: "",
    github: "https://github.com/Kanishk2Kumar/SmartFocus-Web",
    imageLink: "/img/projects/SmartFocus.avif",
  },
  {
    title: (
      <>
        Vaani <br /> Web App
      </>
    ),
    description:
      "Voice-first conversational AI application designed as a financial assistant, offering users natural language interaction to manage budgets, track expenses, and receive recommendations.",
    link: "",
    github: "https://github.com/Kanishk2Kumar/Vaani",
    imageLink: "/img/projects/Vaani.avif",
  },
  {
    title: (
      <>
        KrishiSathi <br /> Farming Assistant
      </>
    ),
    description:
      "IoT-enabled smart farming assistant integrating AI models and sensor data to monitor crop health, predict yields, and recommend actionable insights for improved agricultural productivity.",
    link: "",
    github: "https://github.com/Kanishk2Kumar/KrishiSathi",
    imageLink: "/img/projects/2.avif",
  },
  {
    title: (
      <>
        VAYU <br /> AQI Monitoring
      </>
    ),
    description:
      "VAYU is an intelligent air quality monitoring and forecasting system designed for hyperlocal insights across India, especially rural and small-town areas. It combines real-time CPCB data, satellite maps, AI-based predictions, and an intuitive UI to deliver 72-hour forecasts, health alerts, pollution source mapping, wearable integration, and gamified clean-air habits.",
    link: "",
    github: "https://github.com/Kanishk2Kumar/NetworkSecurity_ML", // placeholder, change if needed
    imageLink: "/img/projects/Vayu.avif",
  },
  {
    title: (
      <>
        Campus Pulse <br /> Web & App
      </>
    ),
    description:
      "A production grade campus community platform built during nirman Hackathon, it offers features such as mentorship, project matchmaking, roommate finder, lost & found, event management for students, and a centralized dashboard for admins.",
    link: "",
    github: "https://github.com/Kanishk2Kumar/NetworkSecurity_ML", // placeholder, change if needed
    imageLink: "/img/projects/CampusPulse.avif",
  },
];

export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
        <WorksSection />
      </FullpageProviderWork>
    </>
  );
}
