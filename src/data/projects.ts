export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  timeframe: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "defi-trading-platform",
    title: "DeFi Trading Platform",
    description:
      "A decentralized exchange with advanced trading features and real-time analytics.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f",
    technologies: ["React", "Solidity", "Web3.js"],
    timeframe: "4 weeks",
    testimonial: {
      text: "Build DAO delivered our MVP ahead of schedule with exceptional quality.",
      author: "Sarah Chen",
      role: "Founder, TradeFi",
    },
    fullDescription:
      "A comprehensive DeFi trading platform that enables users to trade cryptocurrencies, provide liquidity, and earn rewards through yield farming.",
    challenges: [
      "Complex smart contract architecture",
      "Real-time price updates across multiple chains",
      "Gas optimization for trading operations",
    ],
    solutions: [
      "Implemented modular smart contract design",
      "Built custom WebSocket infrastructure",
      "Optimized contract calls using batch transactions",
    ],
    results: [
      "50,000+ transactions processed",
      "Average gas savings of 40%",
      "$2M+ in trading volume within first month",
    ],
  },
  {
    id: "nft-marketplace",
    title: "NFT Marketplace",
    description:
      "Custom NFT marketplace with social features and creator tools.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e",
    technologies: ["Next.js", "IPFS", "ethers.js"],
    timeframe: "3 weeks",
    fullDescription:
      "A feature-rich NFT marketplace that allows creators to mint, trade, and showcase their digital assets with integrated social features.",
    challenges: [
      "Efficient metadata storage",
      "Cross-chain NFT transfers",
      "Social feature integration",
    ],
    solutions: [
      "IPFS integration for decentralized storage",
      "Built bridge contracts for cross-chain transfers",
      "Implemented activity feed microservices",
    ],
    results: [
      "1,000+ NFTs minted",
      "Active community of 5,000+ users",
      "Featured in major crypto publications",
    ],
  },
  {
    id: "dao-governance",
    title: "DAO Governance Platform",
    description:
      "Streamlined governance platform for DAOs with proposal creation and voting.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    technologies: ["Vue.js", "Graph Protocol", "TypeScript"],
    timeframe: "5 weeks",
    fullDescription:
      "A comprehensive DAO governance platform enabling decentralized decision-making through proposal creation, voting, and execution.",
    challenges: [
      "Complex voting mechanisms",
      "On-chain governance implementation",
      "User experience simplification",
    ],
    solutions: [
      "Implemented quadratic voting system",
      "Created modular governance contracts",
      "Designed intuitive proposal creation flow",
    ],
    results: [
      "20+ DAOs onboarded",
      "100+ proposals executed",
      "95% user satisfaction rate",
    ],
  },
];
