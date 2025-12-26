import {
  LucideIcon,
  Anchor,
  Ship,
  GraduationCap,
  Laptop,
  Users,
  Award,
  Shield,
  Monitor,
} from "lucide-react";

// Asset Paths
export const ASSETS = {
  logo: "/images/logo-removebg-preview_1766125964455.png",
  aboutImage: "/images/resize51.jpg",
  slideshow: [
    "/images/ss1.png", // Ship
    "/images/ss2.png", // Deck
    "/images/ss3.jpeg", // Sea
    "/images/ss4.jpeg", // Training

    "/images/ss6.jpeg",
    "/images/ss7.jpeg",
    "/images/ss8.jpeg",
    "/images/ss9.jpeg",
    "/images/ss10.jpeg",
  ],
};

// Site Content
export const CONTENT = {
  companyName: "MiRV MARiNE LLP",
  tagline: "Providing Celestial Solutions",
  about: {
    title: "About The Company",
    story: [
      "MiRV MARiNE was started as a proprietorship company by Capt. Indraneel Chari in 2019.",
      "A marine consultancy firm which grew exponentially in the field of Maritime training, Inspections/surveys, software development, coaching/mentoring, cyber security, crewing & store supplies and export services over a short period of time.",
      "The company was rechristened as MiRV MARiNE LLP and registered as a partnership firm in April 2024 and got its ISO certification from ABS Class soon after. The company also has its presence in UAE as MiRV MARiNE Services LLC.",
      "MiRV MARiNE Academy was started parallelly and operates as the virtual classroom under the same ISO certification which imparts training to seafarers and shore personnel worldwide including on cloud-based simulator modules.",
      "MiRV MARiNE Services LLC was registered in the UAE in May 2025 to tap on the growing oil & gas market in the Persian Gulf region.",
    ],
    mission:
      "To provide maritime training and associated services, keeping in pace with the fast-changing world of shipping, to deliver competent and proficient seafarers who shall excel in the shipping industry.",
    vision:
      "Our vision is to be recognized as a global supplier of the highest quality of maritime services and training to the shipping industry.",
  },
  services: [
    {
      title: "Maritime Training",
      icon: GraduationCap,
      description:
        "Online & Offline Courses with Simulator (Cloud-based). LCHS, ERM, BRM, AHTS, JRM + Sire 2.0 training needs.",
      details: [
        "MiRV Marine Academy - ABS Certified",
        "Online Cloud Simulator",
        "SIRE 2.0 Deliverables",
        "RiSQ 3.2 Familiarization",
      ],
    },
    {
      title: "Audits & Inspections",
      icon: Shield,
      description:
        "3rd Party Audits, VDR Analysis, Remote Navigation Audits (RNA), Pre-Purchase/Pre-Vetting Inspections.",
      details: [
        "Over 200 Vessels Completed",
        "ISM/ISPS/MLC/Dynamic Audits",
        "Incident/Accident Analysis",
        "OJT/Mentoring/Coaching",
      ],
    },
    {
      title: "Software & LMS",
      icon: Laptop,
      description:
        "Marine Digitalisation. Demo APPS for SIRE 2.0, Job Portal App, Competency Management Systems.",
      details: [
        "SIREfit APP",
        "Shipfinite Job Portal Link- ",
        "LMS Creation",
        "Providing Live Dashboard to assess vessel & crew performance",
      ],
    },
    {
      title: "Additional Services",
      icon: Users,
      description: "We also provide the following services: ",
      details: [
        "Gap Analysis- SiRE/TMSA/RiSQ 3.2",
        "Cybe Security Support",
        "Crewing Support",
        "Store & Provision Supply",
        "Import/Export Services",
      ],
    },
  ],
  team: [
    {
      name: "Capt. Indraneel Chari",
      role: "Managing Partner & Founder",
      bio: "Lead auditor, certified VDR analyst, Auditor/Inspector & Maritime trainer. Started career with Wallem Shipmanagement. Commanded vessels since 2007. DPO since 2012. External MMD surveyor prior to forming MiRV Marine LLP.",
    },
    {
      name: "Capt. Sudhir Kandhari",
      role: "CEO",
      bio: "Seasoned maritime professional with over 30 years experience. Served as Hydrographic Surveyor Grade I in Indian Navy. 6 years command on Refrigerated Cargo, 11 years on DP2 subsea project vessels.",
    },
    {
      name: "Cmde. Vinay Kalia",
      role: "SME – Marine",
      bio: "Over 35 years service in Indian Navy, including command of ships and submarines. Expert in curriculum design and adult education principles.",
    },
    {
      name: "Mr. Krishan Nair",
      role: "SME – Technical",
      bio: "DMET alumni with 11 years deep-sea experience. Offshore industry expert since 2003. Was in Maersk Training from 2023 to 2024 for vessel audits and crew training.",
    },
    {
      name: "Mr. Saswata Das",
      role: "Head of Operations",
      bio: "Has previous experience of 13 years as Fleet Personnel Manager with d’Amico Ship India Pvt Ltd. Kolkata, specializing in crew management, planning and statutory compliance across fleet operations. Integral part of MiRV MARiNE since its inception.",
    },
  ],
  contact: {
    locations: ["Kolkata, India", "Abu Dhabi, UAE"],
    email: "support@mirvmarine.com", // Placeholder based on common patterns
    phone: "+91 3331803206", // Placeholder
  },
};
