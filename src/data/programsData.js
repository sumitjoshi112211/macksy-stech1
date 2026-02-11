import webDevImg from "../assets/webDevelopment.jpg";
import cloudImg from "../assets/CloudComputing.jpg";
import aiImg from "../assets/Ai.jpg";
import digitalImg from "../assets/digital.jpg";
import dataImg from "../assets/data.jpg";
import mlImg from "../assets/ml.jpg";
import financeImg from "../assets/finance.jpg";
import autocadImg from "../assets/autocad.png";
import uiuxImg from "../assets/uiux.png";
import stockImg from "../assets/stock.png";
import hrImg from "../assets/humanresource.png";
import cyberImg from "../assets/cyber.png";
import awsImg from "../assets/awscloud.png";
import nanoImg from "../assets/nanotech.png";

export const programsData = [
  {
    id: 1,
    title: "Web Development",
    description: "Build modern web applications with cutting-edge technologies",
    image: webDevImg,
    link: "/programs/webdevelopment"
  },
  {
    id: 2,
    title: "Cloud Computing",
    description: "Master cloud architecture and deployment strategies",
    image: cloudImg,
    link: "/programs/cloudcomputing"
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    description: "Explore AI and machine learning technologies",
    image: aiImg,
    link: "/programs/artificialintelligence"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Learn digital marketing strategies and analytics",
    image: digitalImg,
    link: "/programs/digitalmarketing"
  },
  {
    id: 5,
    title: "Data Science",
    description: "Master data analysis and machine learning",
    image: dataImg,
    link: "/programs/datascience"
  },
  {
    id: 6,
    title: "Machine Learning",
    description: "Deep dive into ML algorithms and neural networks",
    image: mlImg,
    link: "/programs/machinelearning"
  },
  {
    id: 7,
    title: "Finance",
    description: "Learn financial analysis and investment strategies",
    image: financeImg,
    link: "/programs/finance"
  },
  {
    id: 8,
    title: "AutoCAD",
    description: "Master 2D and 3D computer-aided design",
    image: autocadImg,
    link: "/programs/autocad"
  },
  {
    id: 9,
    title: "UI/UX Design",
    description: "Create stunning user interfaces and experiences",
    image: uiuxImg,
    link: "/programs/uiux"
  },
  {
    id: 10,
    title: "Stock Market",
    description: "Learn trading strategies and market analysis",
    image: stockImg,
    link: "/programs/stockmarket"
  },
  {
    id: 11,
    title: "Human Resource",
    description: "Master HR management and organizational development",
    image: hrImg,
    link: "/programs/humanresource"
  },
  {
    id: 12,
    title: "Cyber Security",
    description: "Learn ethical hacking and security best practices",
    image: cyberImg,
    link: "/programs/cybersecurity"
  },
  {
    id: 13,
    title: "AWS Cloud Computing",
    description: "Master Amazon Web Services and cloud architecture",
    image: awsImg,
    link: "/programs/awscloud"
  },
  {
    id: 14,
    title: "Nanotechnology & Biotechnology",
    description: "Explore cutting-edge nano and bio technologies",
    image: nanoImg,
    link: "/programs/nanobiotech"
  }
];

export const landingPagePrograms = programsData.slice(3, 6); // Last 3 programs for landing page (Digital Marketing, Data Science, Machine Learning)
export const allPrograms = programsData; // All 14 programs for programs page
