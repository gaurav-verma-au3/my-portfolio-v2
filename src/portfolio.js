/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gaurav's Portfolio",
  description:
    "I was born in Mumbai, raised in Lucknow, I wasn't the brightest star in college, but I am good at learning stuff quickly. When I started learning Web Development I completely got into it, at that moment I found what I have to do. I do the work I do because I love it. I like the industry. I like the people I meet. I like to talk about technologies. I embrace the nerd. I like to make the web a better place. Hopefully we cross paths in the real world someday and we can make it a better place together.",
  og: {
    title: "Gaurav Verma Portfolio",
    type: "website",
    url: "http://gaurav.verma.live/",
  },
};

//Home Page
const greeting = {
  title: "Gaurav Verma",
  logo_name: "Gaurav Verma",
  nickname: "Degnified",
  subTitle:
    "I was born in Mumbai, raised in Lucknow, I wasn't the brightest star in college, but I am good at learning stuff quickly. When I started learning Web Development I completely got into it, at that moment I found what I have to do. I do the work I do because I love it. I like the industry. I like the people I meet. I like to talk about technologies. I embrace the nerd. I like to make the web a better place. Hopefully we cross paths in the real world someday and we can make it a better place together.",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/gaurav-verma-au3",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gaurav-verma-b7047418",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:gauravve1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Ddegnified",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/carelessgaurav",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/degnifiedgaurav/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        // "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chhatrapati Shahu Ji Maharaj University KANPUR",
      subtitle: "Bachelor Of Science",
      logo_path:
        "data:image/jpeg;base64,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",
      alt_name: "CSJMU Kanpur",
      duration: "2014 - 2017",
      descriptions: [
        "⚡ I have completed my graduation from Maths.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://www.kanpuruniversity.org/",
    },
    {
      title: "ATTAINU",
      subtitle: "Full Stack Web Development (MERN)",
      logo_path:
        "data:image/png;base64,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",
      alt_name: "ATTAINU",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I have completed my full stack Web Development Course.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://attainu.com/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Full Stack Development",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with evolving startups as Full Stack Developer and Software Architect.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Frontend Developer",
          company: "Securepass",
          company_url: "https://thesecurepass.com/",
          logo_path: "sp_black_logo.svg",
          duration: "Aug 2020 - Present",
          location: "Bengaluru, Karnataka",
          description:
            "Developing user Dashboard in React.js and integrating backend APIs.",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Developer",
          company: "CodeMaya",
          company_url: "https://www.codemaya.com/",
          logo_path: "logo_codemaya.svg",
          duration: "Mar 2020 - Aug 2020",
          location: "Lucknow, Uttar Pradesh",
          description:
            "Worked as a full stack developer. Build projects from scratch and dilivered them in time. responsible for developing backend APIs and debugging/modifying existing APIs according to need.",
          color: "#0879bf",
        },
        {
          title: "Customer Care Executive",
          company: "Aegis Now Renamed As STARTEK",
          company_url: "https://www.startek.com/",
          logo_path: "logo-on-white.webp",
          duration: "Feb 2018 - Apr 2019",
          location: "Lucknow, Uttar Pradesh",
          description:
            "Worked as a Customer Care Executive Handling inbound calls and resolving customer queries as per process Structure.",
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Firebase, NodeJS, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "532Ka/217Cha, Pandey Tola, Dandahiya Bazar, Aliganj, Lucknow, Uttar Pradesh - 226024",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7007070981",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
