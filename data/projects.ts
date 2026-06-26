// ---------------------------------------------------------------------------
// SHOPIFY PRACTICE — PROJECTS & RESOURCES DATA
// ---------------------------------------------------------------------------

export interface TeamMember {
  sr: number;
  name: string;
  designation: string;
}

export interface Project {
  id: string;
  name: string;
  status: "current" | "past";
  pm: string;
  delivery: string;
  account: string;
  team: TeamMember[];
}

export const projects: Project[] = [
  {
    id: "collectivus",
    name: "Collectivus",
    status: "current",
    pm: "Abubakkar Siddique",
    delivery: "Antoline Natasha Rayappan",
    account: "Murtuza Kagalwala",
    team: [
      { sr: 1, name: "Abubakkar Siddique",                  designation: "Senior Project Manager" },
      { sr: 2, name: "Suthar Nikunj Kumar Bharatbhai",      designation: "Senior Technical Lead (Contractor)" },
      { sr: 3, name: "Sharmila Periyasamy",                 designation: "Senior Software Engineer" },
      { sr: 4, name: "Mayank S",                            designation: "Technical Lead (Contractor)" },
      { sr: 5, name: "Vidhyalakshmi Viswanathan",           designation: "QA Technical Lead" },
      { sr: 6, name: "Bhuvaneshwari S",                     designation: "Technical Lead" },
    ],
  },
  {
    id: "lancer",
    name: "Lancer",
    status: "current",
    pm: "Kumaraswamy Irugushetty",
    delivery: "Arun Kumar Kalviraya Pillai",
    account: "Magesh Kumar Ramamoorthy",
    team: [
      { sr: 1, name: "Kumaraswamy Irugushetty",  designation: "Project Manager" },
      { sr: 2, name: "Bhuvaneshwari S",           designation: "Technical Lead" },
      { sr: 3, name: "Karthikeyan Nagarajan",     designation: "Senior Solution Architect" },
      { sr: 4, name: "Vaagisha Choudhary",        designation: "Software Engineer" },
    ],
  },
  {
    id: "vpg",
    name: "VPG",
    status: "current",
    pm: "Kumaraswamy Irugushetty",
    delivery: "Arun Kumar Kalviraya Pillai",
    account: "Magesh Kumar Ramamoorthy",
    team: [
      { sr: 1, name: "Kumaraswamy Irugushetty",  designation: "Project Manager" },
      { sr: 2, name: "Shivam Soni",              designation: "Senior Software Engineer" },
    ],
  },
];

export const updatedDate = "Jun 24, 2026";
