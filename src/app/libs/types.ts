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
  contributions: string;
  // contributions: { id: number; describe: string }[];
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
  link: string;
}
