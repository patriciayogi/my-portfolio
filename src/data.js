export const projects = [
  {
    title: "Github projects",
    subtitle: "Templates projects",
    description: "My code respository",
    image: "./project-1.gif",
    link: "https://github.com/patriciayogi?tab=repositories",
  },
  {
    title: "My portfolio",
    subtitle: "React",
    description: "My portfolio page",
    image: "./project-2.gif",
    link: "https://github.com/patriciayogi/my-portfolio",
  },
];

const now = new Date();
const year = now.getFullYear();
const SPRING_START_YEAR = 2016;
const AWS_START_YEAR = 2020;

export const skills = [
  "+10 years Java",
  `${year - SPRING_START_YEAR} years Spring`,
  `${year - SPRING_START_YEAR} years SQL`,
  `${year - SPRING_START_YEAR} years Microservice`,
  `${year - AWS_START_YEAR}  years AWS`,
  `${year - AWS_START_YEAR} years React`,
];
