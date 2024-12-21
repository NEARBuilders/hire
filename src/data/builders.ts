export interface Builder {
  id: string;
  name: string;
  role: string;
  image: string;
  skills: string[];
  projects: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  bio?: string;
  experience?: string[];
  achievements?: string[];
}

export const BUILDERS: Builder[] = [
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    skills: ["React", "Node.js", "Solidity", "AWS"],
    projects: ["DeFi Trading Platform", "NFT Marketplace"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    bio: "Full stack developer with 8+ years of experience in web3 technologies and distributed systems.",
    experience: [
      "Led development of multiple DeFi protocols",
      "Contributed to major open-source blockchain projects",
      "Developed high-performance trading systems"
    ],
    achievements: [
      "ETHGlobal hackathon winner",
      "Published research on smart contract optimization",
      "Core contributor to popular DeFi protocols"
    ]
  },
  {
    id: "elena-chen",
    name: "Elena Chen",
    role: "Smart Contract Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    skills: ["Solidity", "Rust", "Web3.js", "Security"],
    projects: ["DAO Governance", "DeFi Protocol"],
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    bio: "Smart contract engineer specializing in DeFi protocols and security auditing.",
    experience: [
      "Security auditor for major DeFi protocols",
      "Developed innovative yield farming strategies",
      "Created secure multi-sig wallet implementations"
    ],
    achievements: [
      "Found and patched critical vulnerabilities",
      "Developed industry-standard security patterns",
      "Regular speaker at blockchain conferences"
    ]
  },
  {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    skills: ["Figma", "UI Design", "Motion", "Research"],
    projects: ["Crypto Wallet UI", "NFT Gallery"],
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    bio: "Product designer focused on creating intuitive and engaging web3 experiences.",
    experience: [
      "Designed interfaces for popular crypto wallets",
      "Created comprehensive design systems",
      "Led user research for DeFi applications"
    ],
    achievements: [
      "Best Design Award at Web3 Summit",
      "Published case studies on web3 UX",
      "Mentor for blockchain design programs"
    ]
  }
];