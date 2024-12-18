import {
  Cpu,
  Bot,
  Coins,
  Store,
  Shield,
  BarChart3,
  Wallet,
  Users,
  Rocket
} from "lucide-react";

export const perks = [
    {
        icon: Wallet,
        title: "Connect Wallet",
        info: "Connect your wallet to join the Depin AI ecosystem.",
    },
    {
        icon: Users,
        title: "Choose Role",
        info: "Participate as a resource provider, AI developer, or end user.",
    },
    {
        icon: Rocket,
        title: "Start Earning",
        info: "Earn tokens by sharing resources or developing AI agents.",
    },
];

export const features = [
    {
        icon: Cpu,
        title: "Resource Sharing",
        info: "Share your CPU/GPU resources to earn tokens from the network.",
    },
    {
        icon: Bot,
        title: "AI Agent Development",
        info: "Build and train your own AI Agents on our decentralized platform.",
    },
    {
        icon: Coins,
        title: "AI Tokenization",
        info: "Each AI Agent has its own token for transactions and usage.",
    },
    {
        icon: Store,
        title: "Decentralized Marketplace",
        info: "Connect users, developers, and resource providers seamlessly.",
    },
    {
        icon: Shield,
        title: "Blockchain Security",
        info: "Secure and transparent transactions on blockchain.",
    },
    {
        icon: BarChart3,
        title: "Resource Management",
        info: "Optimize computing resource usage and distribution globally.",
    },
];

export const pricingCards = [
    {
        title: "Basic Provider",
        description: "For individual resource providers",
        price: "Free",
        duration: "",
        highlight: "Key features",
        buttonText: "Start sharing",
        features: ["Share CPU/GPU", "Basic monitoring", "Network rewards"],
        priceId: "",
    },
    {
        title: "AI Developer",
        description: "For AI developers and teams",
        price: "Pay per use",
        duration: "",
        highlight: "Key features",
        buttonText: "Start developing",
        features: ["Access to resources", "AI Agent deployment", "Custom tokenomics", "Developer tools"],
        priceId: "price_1OYxkqFj9oKEERu1KfJGWxgN",
    },
    {
        title: "Enterprise",
        description: "For large-scale operations",
        price: "Custom",
        duration: "",
        highlight: "Everything in Developer, plus",
        buttonText: "Contact us",
        features: ["Priority resource access", "Custom infrastructure", "24/7 support", "Enterprise SLA"],
        priceId: "price_1OYxkqFj9oKEERu1NbKUxXxN",
    },
];

export const bentoCards = [
    {
        title: 'Share Computing Power',
        info: 'Connect your hardware and start earning tokens by sharing computing resources.',
        imgSrc: '/assets/bento-1.svg',
        alt: 'Computing resource sharing'
    },
    {
        title: 'Develop AI Agents',
        info: 'Create and train AI models using decentralized computing resources.',
        imgSrc: '/assets/bento1.svg',
        alt: 'AI development platform'
    },
    {
        title: 'Token Economics',
        info: 'Participate in a fair and transparent token economy for AI services.',
        imgSrc: '/assets/bento1.svg',
        alt: 'Token economics visualization'
    },
    {
        title: 'Global AI Network',
        info: 'Join a worldwide network of AI developers and resource providers.',
        imgSrc: '/assets/bento1.svg',
        alt: 'Global network visualization'
    },
];

export const reviews = [
    {
        name: "Alex Chen",
        username: "@alexc",
        body: "The decentralized computing power has significantly reduced our AI training costs.",
    },
    {
        name: "Sarah Miller",
        username: "@sarahm",
        body: "Earning passive income by sharing my GPU resources. Great platform!",
    },
    {
        name: "David Kumar",
        username: "@davidk",
        body: "The AI agent marketplace has opened new possibilities for our research team.",
    },
    {
        name: "Maria Garcia",
        username: "@mariag",
        body: "Transparent tokenomics and reliable resource allocation system.",
    },
    {
        name: "Tom Wilson",
        username: "@tomw",
        body: "Revolutionary approach to democratizing AI development.",
    },
    {
        name: "Lisa Zhang",
        username: "@lisaz",
        body: "The platform's security features give us confidence in resource sharing.",
    },
];