/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Vighnesh",
  title: "Hi all, I'm Sai Vighnesh",
  subTitle: emoji(
    "Building scalable web applications and real-time systems with modern technologies. 🚀 Enthusiastic Full Stack Web Developer with experience in React, JavaScript, Flask, Node.js, and database integration."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1wUwtxGCxSxDRdl4WaNswDyj9tx0y-HOi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SaiVighnesh811",
  linkedin: "https://www.linkedin.com/in/saivighnesh-pasupuleti-680835410",
  gmail: "saivighnesh44@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK WEB DEVELOPER WHO LOVES BUILDING MODERN & SCALABLE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Build interactive and responsive Front End / User Interfaces using React.js"
    ),
    emoji("⚡ Develop robust Backend APIs with Flask, Node.js, and Express.js"),
    emoji(
      "⚡ Integrate databases like MySQL and MongoDB for seamless data management"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajiv Gandhi University of Knowledge Technologies",
      logo: require("./assets/images/rgukt.jpeg"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      desc: "CGPA: 8.9",
      descBullets: [
        "Strong foundation in Data Structures & Algorithms, Operating Systems, Computer Networks, and DBMS",
        "Active participant in coding competitions and hackathons"
      ]
    },
    {
      schoolName: "RGUKT – Pre-University Course (PUC)",
      logo: require("./assets/images/rgukt.jpeg"),
      subHeader: "Pre-University Course",
      duration: "2020 – 2022",
      desc: "CGPA: 9.89",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React, HTML, CSS, JS)",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend (Flask, Node.js, Express.js)",
      progressPercentage: "75%"
    },
    {
      Stack: "Database (MySQL, MongoDB)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Development Intern",
      company: "Thiranex",
      companylogo: require("./assets/images/thiranex.png"),
      date: "Present",
      desc: "Currently working as a Web Development Intern, building modern web applications and gaining hands-on experience with full stack technologies.",
      descBullets: [
        "Developing responsive and interactive web interfaces",
        "Collaborating with the team on real-world projects"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Disabled — using bigProjects section for project showcase instead
};

// Some big projects you have worked on

const bigProjects = {
  title: "Open Source Projects",
  subtitle: "SOME OF THE KEY PROJECTS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/cta.png"),
      projectName: "Chat Translator Application",
      projectDesc:
        "A real-time multilingual chat app using Flask-SocketIO and Translator API. Features include instant message translation, synchronized delete, and modern UI for seamless cross-language communication.",
      footerLink: [
        {
          name: "Tech: HTML, CSS, JS, Python, Flask-SocketIO",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/ras.png"),
      projectName: "Restaurant Automation System",
      projectDesc:
        "Automated order processing, billing, and inventory tracking system. Built with Flask backend integrated with MySQL database, featuring menu display, purchase orders, and full CRUD operations.",
      footerLink: [
        {
          name: "Tech: HTML, CSS, JS, Flask, MySQL",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/acds.png"),
      projectName: "Anti-Cheating Detection System",
      projectDesc:
        "A secure online examination platform with tab-switch detection, auto submission on violation threshold, and full-screen enforcement. Built with React.js frontend and Node.js/Express.js backend with MongoDB.",
      footerLink: [
        {
          name: "Tech: React.js, Node.js, Express.js, MongoDB",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Hackathons, and Competitive Programming Highlights!",

  achievementsCards: [
    {
      title: "NPTEL: Cloud Computing",
      subtitle: "Completed NPTEL certification in Cloud Computing.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1gAcqzYy2RpSkLexxNzZ3ypodI35EsSm8/view?usp=drive_link"
        }
      ]
    },
    {
      title: "NPTEL: Artificial Intelligence",
      subtitle: "Completed NPTEL certification in Artificial Intelligence.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1TBLZ9GoMmOCZRFP5k7ZA9zm2o3umue2m/view?usp=drive_link"
        }
      ]
    },
    {
      title: "NPTEL: Introduction to Information Retrieval",
      subtitle:
        "Completed NPTEL certification in Introduction to Information Retrieval.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/14bg2YFE6YosTFH_z43eOzBA7w8dSpg21/view?usp=drive_link"
        }
      ]
    },
    {
      title:
        "NPTEL: Object Oriented System Development using UML, Java and Patterns",
      subtitle:
        "Completed NPTEL certification in Object Oriented System Development using UML, Java and Patterns.",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1XY5fVn7cL8R6tJiic2HHOKtX14ozXedi/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Insurance Hackathon – IIT Kharagpur",
      subtitle:
        "Participated in a 24-hour Insurance Hackathon organized by IIT Kharagpur.",
      image: require("./assets/images/iit.jpeg"),
      imageAlt: "Hackathon Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9581184638",
  email_address: "saivighnesh44@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
