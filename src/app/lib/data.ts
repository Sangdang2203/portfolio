import { Certificate, Experience, NavLink, Project, Skill } from "./types";

export const navLinks: NavLink[] = [
  {
    key: "experience",
    label: "experience",
    href: "#experience",
  },
  {
    key: "projects",
    label: "projects",
    href: "#projects",
  },
  {
    key: "skills",
    label: "skills",
    href: "#skills",
  },
  {
    key: "education",
    label: "education",
    href: "#education",
  },
  {
    key: "contact",
    label: "contact",
    href: "#contact",
  },
];

export const experienceData: Experience[] = [
  {
    id: 1,
    company: "BOOSTECH DIGITAL TRANSFORMATION PLATFORM COMPANY LIMITED",
    duration: "07/2024 - 10/2024",
    role: "Full-stack Developer",
    address: "No. 27 Street 8, Binh Chanh District, Ho Chi Minh city, Vietnam.",
    describe:
      "Cooperate with other developers, testers to develop company application. Using technologies: Spring Boot, Next.js, React.js, Material UI, Flutter, RESTful APIs.",
    contributions: [
      { id: 1, describe: "Design, analyze databases and processing flows." },
      {
        id: 2,
        describe:
          "Design the APIs for the Management Warehouse Application by using Spring Boot and consume them on website and mobile application by using Next.js and Flutter",
      },
      {
        id: 3,
        describe:
          "List test cases and check them before the tester implements their role. If they find errors, resolve them as soon as possible",
      },
    ],
    deployed_link: "",
  },
  {
    id: 2,
    company: "TURBO TECHNOLOGY SOLUTION JOINT STOCK COMPANY",
    duration: "04/2024 - 07/2024",
    role: "Frontend Developement Intern",
    address:
      "No. 10 Pho Quang Street, Tan Binh Ward, Ho Chi Minh city, Vietnam",
    describe:
      "Cooperate with backend team to improve company websites. Using technologies: Next.js, React.js, Material UI, RESTful APIs",
    contributions: [
      {
        id: 1,
        describe:
          "Design new website interfaces and admin dashboard by using Next.js, RESTful API, Material UI for improving the UI/UX.",
      },
      {
        id: 2,
        describe:
          "Support sales team to design the demo versions for customers.",
      },
    ],
    deployed_link: "https://ecocloudvn.vercel.app",
  },
];

export const projectData: Project[] = [
  {
    id: 1,
    title: "Luxury Real Estate",
    duration: "02/2025 - Present",
    teamSize: 1,
    describe: "",
    githubLinks: [],
    deployedLinks: [{ id: 1, link: "https://sunny-realestate.vercel.app" }],
    technologies: [
      {
        id: 1,
        name: "Frontend",
        description:
          "Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS.",
      },
    ],
    contributions:
      "Property listings with rich details, images, and location data; advanced search capabilities; dedicated property detail pages; responsive design; reusable React.js UI components styled with Tailwind CSS; modern JavaScript (TypeScript, Next.js) for performance and maintainability, leveraging SSG/SSR for optimized loading and SEO; a potential contact form; image optimization; intuitive navigation; and interactive JavaScript elements.",
  },
  {
    id: 2,
    title: "eSavior",
    duration: "09/2024 - 10/2024",
    teamSize: 5,
    describe:
      "eSavior is a mobile application that addresses pressing issues in ambulance booking, emergency medical service delivery and home care services",
    githubLinks: [],
    deployedLinks: [],
    technologies: [
      { id: 1, name: "Backend", description: "Spring boot, Spring frameworks" },
      {
        id: 2,
        name: "Frontend",
        description:
          "Next.js, React.js, Flutter, RESTful API, TypeScript, HTML5, CSS",
      },
      { id: 3, name: "Database", description: "Firebase" },
    ],
    contributions:
      "Developed an admin dashboard for managing nursing lists, appointments, and home care services, featuring CRUD operations and filtering capabilities. Implemented home care scheduling and nurse rating functionality in the user phone application. Designed the confirmation workflow for booked home care schedules on nurse accounts.",
  },
  {
    id: 3,
    title: "TARS Delivery System",
    duration: "01/2024 - 03/2024",
    teamSize: 5,
    describe: "",
    githubLinks: [
      { id: 1, name: "Frontend", link: "https://tinyurl.com/frontend-tars" },
      { id: 2, name: "Backend", link: "https://tinyurl.com/backend-tars" },
    ],
    deployedLinks: [],
    technologies: [
      { id: 1, name: "Backend", description: "ASP.NET Web APIs" },
      {
        id: 2,
        name: "Frontend",
        description:
          "React.js, Next.js, RESTful API, Material UI, TailwindCSS, HTML5, CSS, TypeScript.",
      },
      { id: 3, name: "Database", description: "SQL Server" },
    ],
    contributions:
      "Implemented user authorization. Developed manager, admin, and employee dashboards for branch employee management, user and update request management, and personal information management with update and history log review, respectively.",
  },
  {
    id: 4,
    title: "NZ Shop",
    duration: "08/2023 - 10/2023",
    teamSize: 4,
    describe: "",
    githubLinks: [
      { id: 1, name: "Frontend", link: "https://tinyurl.com/frontend-nzshop" },
      { id: 2, name: "Backend", link: "https://tinyurl.com/backend-nzshop" },
    ],
    deployedLinks: [],
    technologies: [
      { id: 1, name: "Backend", description: "PHP, Laravel Frameworks" },
      {
        id: 2,
        name: "Frontend",
        description:
          "Vue.js, Vuetify, Axios, RESTful APIs, Material UI, TailwindCSS, HTML5, CSS, JavaScript, Pinia, ckeditor 5.",
      },
      { id: 3, name: "Database", description: "MySQL" },
    ],
    contributions:
      "Develop a product detail page with user views for product information, promotions, and comments. Implement an admin dashboard with CRUD functionality for posts, products, pages, and sliders. Integrate ChatGPT for automated product description generation during product creation. Design and optimize APIs for efficient front-end/back-end communication and reduced load times.",
  },
  {
    id: 5,
    title: "Chic Lighting",
    duration: "01/2023 - 02/2023",
    teamSize: 1,
    describe: "",
    githubLinks: [
      { id: 1, name: "Frontend", link: "https://tinyurl.com/chic-lighting" },
    ],
    deployedLinks: [{ id: 1, link: "https://lighting-vn.vercel.app" }],
    technologies: [
      {
        id: 1,
        name: "Frontend",
        description: "HTML5, CSS, JavaScript, AngularJS, Bootstrap 5.",
      },
    ],
    contributions:
      "Developed the Homepage, Product Detail Page, Contact Page, Gallery Page, and About Us Page. Implemented login and account registration, product filtering by branch, product searching by name, and a visitor counter. Improved the user interface and user experience.",
  },
];

export const skillData: Skill[] = [
  {
    id: 1,
    title: "Frontend ",
    description:
      "React.js, Next.js, TypeScript, JavaScript, Material UI, Ant Design, Bootstrap 5, TailwindCSS, HTLM5, CSS, Responsive Design, RESTful APIs",
  },
  {
    id: 2,
    title: "Backend ",
    description:
      "Java, Spring Boot, Spring Frameworks, Design APIs, Mapper, DTO, ORM",
  },
  {
    id: 3,
    title: "Database",
    description: "SQL Server, MySQL, PostgreSQL",
  },
  {
    id: 4,
    title: "Others",
    description:
      "Github Desktop, Git, Postman, Debugging code, Intellij Idea, Visual Studio Code.",
  },
];

export const certificationData: Certificate[] = [
  {
    id: 1,
    title: "Advanced Diploma In Software Engineering",
    describe:
      "Completed a certification course provided by FPT Academy International (FAI).",
    link: "https://drive.google.com/file/d/1rm4KBWWesvEhRjHowB8wYz_e6OduiB7W/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Managing an Agile Team",
    describe: "Completed a certification course provided by Coursera.",
    link: "",
  },
];
