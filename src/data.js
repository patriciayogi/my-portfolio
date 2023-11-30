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
const springStart = 2016;
const awsStart = 2020;

export const skills = [
  "+10 years Java",
  `${year - springStart} years Spring`,
  `${year - springStart} years SQL`,
  `${year - springStart} years Microservice`,
  `${year - awsStart}  years AWS`,
  `${year - awsStart} years React`,
];
