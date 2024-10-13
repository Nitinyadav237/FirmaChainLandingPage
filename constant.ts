import { db, document, encrypt, linkedin, twitter, upload } from "./src/assets/icons";
import { AtlasLogo, BlocoreLogo, DecenterLogo, FineLogo, Image1, Image2, Image3, ZBTLogo } from "./src/assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#applications", label: "Applications" },
    { href: "", label: "Features" },
    { href: "#exchange", label: "Exchange" },
];

export const HeroInfo = [
    {
    id: "01",
    heading: "White paper",
    subheading:"Kor eng chn"
    },
    {
        id: "02",
        heading: "Mainnet Wallet",
        subheading: "Firma Station"
    },
    {
        id: "03",
        heading: "Exchange",
        subheading: "Bithumb korea bithumb globalupbitbit"
    }
]

export const Feature = [
    {
        id: 1,
        label: "Feature 1",
        link:"/"
    },
    {
        id: 2,
        label: "Feature 2",
        link: "/"
    },
    {
        id: 3,
        label: "Feature 3",
        link: "/"
    },
    {
        id: 4,
        label: "Feature 4",
        link: "/"
    }
]

export const FeatureInfo = [
    {
        id: 1,
        heading: "Forgery and Tamper Proof",
        sub1: "Due to the nature of blockchain, once contract",
        sub2:"Data is uploaded, it can not be tampered"
    },
    {
        id: 2,
        heading: "Electronic Signature System",
        sub1: "Due to the nature of blockchain, once contract",
        sub2: "Data is uploaded, it can not be tampered"
    },
    {
        id: 1,
        heading: "Streamlines Contract Procedure",
        sub1: "Due to the nature of blockchain, once contract",
        sub2: "Data is uploaded, it can not be tampered"
    },
    {
        id: 1,
        heading: "Submit as Evidence",
        sub1: "Due to the nature of blockchain, once contract",
        sub2: "Data is uploaded, it can not be tampered"
    }
]

export const AppInfo = [
    {
        id: 1,
        image:  document ,
        label:"Contract detail"
    },
    {
        id: 2,
        image:  db ,
        label: "Data extraction and Data operation"
    },
    {
        id: 3,
        image: encrypt ,
        label: "Encrypt electronic documents"
    },
    {
        id: 4,
        image:  upload ,
        label: "Upload hash value to FirmaChain"
    }
]
export const roadmapData = [
    {
        quarter: "Q1 2021",
        heading: "DONUE'S EXPANSION INTO SOUTH EAST ASIA",
        items: [
            "Launching of FirmaChain main-net wallet",
            "Selected 11 main-net validators for FirmaChain Web Wallet",
            "DONUE's expansion into China market",
            "Enhance DONUE platform for new features",
        ],
    },
    {
        quarter: "Q2 2022",
        heading: "LAUNCH OF STABLEDOCS PROTOTYPE",
        items: [
            "Released StableDocs prototype",
            "Introduced a new smart contract feature",
            "Partnership with leading healthcare providers",
            "Testing with beta users in selected regions",
        ],
    },
    {
        quarter: "Q3 2023",
        heading: "EXPANDING FIRMACHAIN SERVICES",
        items: [
            "Released StableDocs prototype",
            "Introduced a new smart contract feature",
            "Partnership with leading healthcare providers",
            "Testing with beta users in selected regions",
        ],
    },
    {
        quarter: "Q4 2022",
        heading: "GLOBAL DONUE CAMPAIGN",
        items: [
            "Launched global marketing campaign for DONUE",
            "Secured partnerships with global financial institutions",
            "Expanded into 5 new countries in South America",
            "Introduced fiat-to-crypto integration on DONUE wallet",
        ],
    },
];


export const TeamInfo = [
    {
        id: 1,
        image:Image1,
        name: 'Micgel Wong',
        title: "Co-founder",
        summary: "As the architect behind Animalia, Bill oversees the holistic development and manages the organisation's mission.",
        twitterHref: "/",
        twitterImg:twitter,
        linkedinImg:linkedin,
        linkedinHref: "/"
    },
    {
        id: 2,
        image:Image2,
        name: 'Sarah Johnson',
        title: "Chief Marketing Officer",
        summary: "Sarah leads the marketing efforts at Animalia, driving brand awareness and engagement through creative campaigns.",
        twitterHref: "/",
        twitterImg: twitter,
        linkedinImg: linkedin,
        linkedinHref: "/"
    },
    {
        id: 3,
        image:Image3,
        name: 'David Lee',
        title: "Lead Developer",
        summary: "David is responsible for the technical infrastructure and product development, ensuring smooth user experiences across platforms.",
        twitterHref: "/",
        twitterImg: twitter,
        linkedinImg: linkedin,
        linkedinHref: "/"
    }
];

export const PartnersInfo = [
    {
        id: 1,
        image:FineLogo
    },
    {
        id: 2,
        image: AtlasLogo
    },
    {
        id: 3,
        image: DecenterLogo
    },
    {
        id: 4,
        image: BlocoreLogo
    },
    {
        id: 5,
        image: ZBTLogo
    }

]
