export interface Experience {
  id: number;
  company: string;
  duration: string;
  role: string;
  address: string;
  describe: string;
  contributions: { id: number; describe: string }[];
  deployed_link?: string;
}

export interface NavLink {
  key: string;
  label: string;
  href: string;
}
export interface Project {
  id: number;
  title: string;
  duration: string;
  teamSize: number;
  describe: string;
  githubLinks: {
    id: number;
    name: string;
    link: string;
  }[];
  deployedLinks: { id: number; link: string }[];
  technologies: { id: number; name: string; description: string }[];
  contributions: { id: number; describe: string }[];
}

export interface Skill {
  id: number;
  title: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  describe: string;
}

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
    contributions: [
      { id: 1, describe: "Design and optimize the APIs." },
      {
        id: 2,
        describe:
          "Build admin dashboard: Manage nursing list, list of appointments and home care services. Administrators can implement features such as create, update, delete, filter through some specific fields.",
      },
      {
        id: 3,
        describe:
          "Build the procedure for scheduling home care on the phone application for users. After using home care services, users can rate for the nurse.",
      },
      {
        id: 4,
        describe:
          "Build the process of confirming the home care schedule that the user has booked. This is only for the nurse account",
      },
    ],
  },
  {
    id: 2,
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
    contributions: [
      {
        id: 1,
        describe:
          "Design and optimize the APIs for efficient communication between the front-end and backend, reducing load times.",
      },
      {
        id: 2,
        describe: "Performing authorization for users.",
      },
      {
        id: 3,
        describe: "Build manager dashboard: Manage employees in their branch.",
      },
      {
        id: 4,
        describe:
          "Build admin dashboard: Manage employees, manage users, manage and handle updating requests from employees.",
      },
      {
        id: 5,
        describe:
          "Build employee dashboard: Manage their personal information: can update their information, review history logs.",
      },
    ],
  },
  {
    id: 3,
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
    contributions: [
      {
        id: 1,
        describe:
          "Design and optimize the APIs for efficient communication between the front-end and backend, reducing load times.",
      },
      {
        id: 2,
        describe:
          "Build product detail page: User can view product details, product promotion, comments.",
      },
      {
        id: 3,
        describe:
          "Build admin dashboard (CRUD): post management, product management, page management, slider management.",
      },
      {
        id: 4,
        describe:
          "Combine chat GPT for composing product description when the administrator add new products into the list.",
      },
    ],
  },
  {
    id: 4,
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
    contributions: [
      {
        id: 1,
        describe:
          "Built Homepage, Product Detail Page, Contact Page, Gallery Page, About Us Page",
      },
      {
        id: 2,
        describe: "Built functions: login, register account",
      },
      {
        id: 3,
        describe:
          "Filtering function: filter products through product's branch.",
      },
      {
        id: 4,
        describe: "Searching function: search products through product's name.",
      },
      {
        id: 5,
        describe: "Built counting visitor function.",
      },
      {
        id: 6,
        describe: "Improve the user interface and user experience.",
      },
    ],
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
  },
  {
    id: 2,
    title: "Managing an Agile Team",
    describe: "Completed a certification course provided by Coursera.",
  },
];
