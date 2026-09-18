const newsItems = [


  {
    date: "August 2026",
    icon: "paper",
    text: "Congratulations to Zhankai Ye and our collaborators! Our GeoMotionGPT paper has been accepted to EMNLP 2026, marking an exciting step toward Physical AI."
  },
  {
    date: "June 2026",
    icon: "degree",
    text: "Congratulations to Dr. Bofan Li on successfully defending his Ph.D. dissertation and becoming the first Ph.D. graduate from our lab."
  },
  {
    date: "June 2026",
    icon: "paper",
    text: "Our BFM-based WiFi sensing work was accepted to UbiComp'26. Congratulations, Bofan!"
  },
  {
    date: "May 2026",
    icon: "award",
    text: "Our 2FiA paper received the Distinguished Artifact Award at IEEE S&P 2026.",
    links: [
      {
        label: "Official",
        href: "https://sp2026.ieee-security.org/awards_artifacts.html?utm_source=chatgpt.com"
      }
    ],
    images: [
      {
        src: "./Figure/distinguished_artifact_certificate_2026.jpg",
        alt: "2FiA Distinguished Artifact Award certificate at IEEE S&P 2026"
      },
      {
        src: "./Figure/distinguished_artifacts_slide_2026.jpg",
        alt: "Distinguished Artifacts slide at IEEE S&P 2026"
      }
    ]
  },
  {
    date: "May 2026",
    icon: "grant",
    text: "Pleased to receive the FSU CRC Spring 2026 Seed Grant for our collaborative research project."
  },
  {
    date: "Apr 2026",
    icon: "award",
    text: "Congratulations to Bofan Li for receiving the Graduate Student Research Award 2026 from the FSU Computer Science Department.",
    images: [
      {
        src: "./Figure/graduate_student_research_award_2026.jpg",
        alt: "Bofan Li's Graduate Student Research Award 2026 certificate"
      }
    ]
  },
  {
    date: "Apr 2026",
    icon: "award",
    text: "Glad to see Bofan receive the Best Poster Award and Zhankai receive the Honorable Mention Presentation Award at FSU CS Expo 2026.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7448819669890875393/?originTrackingId=8j7J6DlmpvFNWquACaqPew%3D%3D"
      }
    ],
    images: [
      {
        src: "./Figure/cs_expo_best_poster_2026.jpg",
        alt: "Bofan Li's CS Expo 2026 Best Poster Award certificate"
      },
      {
        src: "./Figure/cs_expo_honorable_presentation_2026.jpg",
        alt: "Zhankai Ye's CS Expo 2026 Honorable Mention Presentation Award certificate"
      }
    ]
  },
  
  {
    date: "Apr 2026",
    icon: "paper",
    text: "Zhankai's first paper was accepted to IEEE FG 2026. Congratulations, Zhankai!"
  },
  {
    date: "Mar 2026",
    icon: "grant",
    text: "Honored to receive this summer's Dean's Faculty Travel Award. I will use this opportunity to share our research and further increase FSU's research visibility and impact."
  },
  {
    date: "Feb 2026",
    icon: "grant",
    text: "Honored to be awarded the FSU-AWS Research Acceleration Award. We will leverage AWS cloud to accelerate research on physics-guided learning for NextG channel modeling.",
    links: [
      {
        label: "News",
        href: "https://news.fsu.edu/news/university-news/2026/03/06/florida-state-university-celebrates-partnership-with-amazon-web-services/"
      }
    ]
  },
  {
    date: "Sep 2025",
    icon: "award",
    text: "Bofan received the Dean's Award for Doctoral Excellence (DADE) from the College of Arts and Sciences."
  },
  {
    date: "Sep 2025",
    icon: "paper",
    text: "Our lab's first paper was accepted to IEEE S&P 2026. Congratulations, Bofan!"
  },
  {
    date: "Jan 2025",
    icon: "grant",
    text: "2024-2025 FYAP Grant awarded. Thankful for the support from FSU.",
    links: [
      {
        label: "Announcement",
        href: "https://internalfunding.research.fsu.edu/programs/2024-2025-crc-program-awardees/"
      }
    ]
  },
  {
    date: "Aug 2024",
    icon: "football",
    text: "Kicked off my journey as a professor at FSU.",
    links: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?v=KXL7cCtC9Xc"
      }
    ]
  }
];

const teachingItems = [
  {
    name: "COP 4610: Operating Systems",
    href: "https://xinliulab.github.io/FSU-COP4610-Operating-Systems/",
    evaluations: [
      { label: "F24", href: "./publication/COP4610-0001.fa24OPERATINGSYSTEMS_XinLiu.pdf" },
      { label: "F25", href: "./publication/COP4610-0002.fa25OPERATINGSYSTEMS_XinLiu.pdf" }
    ]
  },
  {
    name: "CIS 5370: Computer Security & Privacy",
    href: "https://xinliulab.github.io/FSU-CIS5370-Computer-Security/",
    evaluations: [
      { label: "S25", href: "./publication/CIS5370-0001.sp25COMPUTERSECURITY_XinLiu.pdf" }
    ]
  },
  {
    name: "CIS 4930/5930: Future Edge Networks and Distributed Intelligence",
    href: "https://xinliulab.github.io/FSU-CIS4930-CIS5930-Future-Edge-Networks/",
    evaluations: [
      { label: "S26", href: "./publication/CIS4930-0001.sp26SPCLTPCSCOMPSCI_XinLiu.pdf" },
      { label: "F26", href: "https://xinliulab.github.io/FSU-CIS4930-CIS5930-Future-Edge-Networks/" }
    ]
  }
];

const students = [
  {
    name: "Yihao Huang",
    href: "",
    currentRole: "Ph.D.",
    period: "2026 - now",
    initialPosition: "",
    publications: []
  },
  {
    name: "Zhuoyuan Liu",
    href: "",
    currentRole: "Ph.D.",
    period: "2025 - now",
    initialPosition: "",
    publications: []
  },

  {
    name: "Zhankai Ye",
    href: "https://jye16.github.io",
    currentRole: "Ph.D.",
    period: "2024 - now",
    initialPosition: "",
    publications: [
      {
        title: "EMNLP'26",
        href: ""
      },
      // {
      //   title: "ICCCN'26",
      //   href: ""
      // },
      {
        title: "FG'26",
        href: "https://doi.org/10.1109/FG67764.2026.11557074"
      }
    ]
  },
  {
    name: "Bofan Li",
    href: "https://bofan1120.github.io/",
    group: "alumni",
    currentRole: "Ph.D.",
    period: "2024 - 2026",
    initialPosition: "Postdoctoral Scholar, Arizona State University",
    publications: [
      {
        title: "UbiComp'26 Issue 3",
        href: "https://doi.org/10.1145/3832009"
      },
      {
        title: "S&P'26",
        href: "https://doi.org/10.1109/SP63933.2026.00087"
      },
      {
        title: "UbiComp'26 Issue 1",
        href: "https://doi.org/10.1145/3790111"
      }

    ]
  }
];

// Keep `citations` in sync with Google Scholar to drive ranking in filtered views.
const publications = [

  //   {
  //   title: "BFMScan: Enabling Explicit Angle-Resolved Sensing via Beamforming Feedback Matrix",
  //   href: "",
  //   authors: "Bofan Li, Zhuoyuan Liu, Zhankai Ye, Weikuan Yu, Xin Liu",
  //   venue: "ACM IMWUT/UbiComp 2026",
  //   year: 2026,
  //   citations: null,
  //   citationFile: "",
  //   selected: true,
  //   image: "./Figure/BFMScan.png",
  //   area: ["Multimodal Sensing & ISAC", "IoT, Edge Intelligence & CPS"],
  //   links: [
  //     { label: "Code / Dataset: to appear", href: "" }
  //   ]
  // },

    {
    title: "MUGEN: A Unified Framework for Efficient Motion Understanding and Generation",
    href: "./publication/26arxiv_mugen.pdf",
    authors: "Zhankai Ye, Yukai Jin, Bingyang Wei, Bofan Li, Yusen Wu, Fangyi Li, Shangqian Gao, Xin Liu",
    venue: "arXiv 2026",
    year: 2026,
    citations: null,
    citationFile: "",
    selected: true,
    image: "./Figure/mugen.jpg",
    area: ["Physical AI & Human-Centered Intelligence", "Foundation Models & Generative AI"],
    links: [
      { label: "Project Page", href: "https://jye16.github.io/mugen-page/" }
    ]
  },

    {
    title: "GeoMotionGPT: Geometry-Aligned Motion Understanding with Large Language Models",
    href: "https://arxiv.org/abs/2601.07632",
    authors: "Zhankai Ye, Bofan Li, Yukai Jin, Shuoqiu Li, Wei Wang, Yanfu Zhang, Shangqian Gao, Xin Liu",
    venue: "EMNLP 2026",
    year: 2026,
    citations: null,
    citationFile: "",
    selected: true,
    image: "./Figure/geomotiongpt.png",
    area: ["Physical AI & Human-Centered Intelligence", "Foundation Models & Generative AI"],
    links: [
      { label: "Code / Dataset", href: "https://github.com/JYe16/GeoMotionGPT" }
    ]
  },

 


  //   {
  //   title: "Fresco: A Permissioned Blockchain <u>Fr</u>am<u>e</u>work for <u>S</u>ecuring Model <u>Co</u>ntext Protocol",
  //   href: "./publication/26icccn_fresco.pdf",
  //   authors: "Zhankai Ye, Yusen Wu, Bingyang Wei, Shixian Shen, Yili Ren, Phuong Nguyen, Yelena Yesha, Xin Liu",
  //   venue: "IEEE ICCCN 2026",
  //   year: 2026,
  //   citations: null,
  //   citationFile: "",
  //   selected: false,
  //   image: "./Figure/Fresco.png",
  //   area: ["Trustworthy AI, Sensing & Security", "Foundation Models & Generative AI"]
  // },

    {
    title: "ARiSE: Efficient Mesh-Based <u>A</u>ction <u>R</u>ecognition from Wi-F<u>i</u> <u>S</u>ensing on <u>E</u>dge Devices",
    href: "publication/26fg_arise.pdf",
    authors: "Zhankai Ye, Shuoqiu Li, Bofan Li, Yili Ren, Bo Mei, Shangqian Gao, Xin Liu",
    venue: "IEEE FG 2026",
    year: 2026,
    citations: true,
    citationFile: "./citations/arise.bib",
    selected: false,
    image: "./Figure/arise.png",
    area: ["Multimodal Sensing & ISAC", "Physical AI & Human-Centered Intelligence", "IoT, Edge Intelligence & CPS"]
  },


   {
    title: "HyperEdit: Unlocking Instruction-based Text Editing in LLMs via Hypernetworks",
    href: "./publication/26findings_hyperedit.pdf",
    authors: "Yiming Zeng, Jinghan Cao, Zexin Li, Wanhao Yu, Zhankai Ye, Dawei Xiang, Ting Hua, Xin Liu, Shangqian Gao, Tingting Yu",
    venue: "ACL Findings 2026",
    year: 2026,
    citations: true,
    citationFile: "./citations/hyperedit.bib",
    selected: null,
    image: "./Figure/HyperEdit.jpeg",
    area: ["Foundation Models & Generative AI"]
  },
  
  {
    title: "HydroChirp: Dynamic Chirp Shaping for Reliable and Ultra-Long-Range Underwater Communication",
    href: "publication/26infocom_hydrochirp.pdf",
    authors: "Chiyu Zhou, Zijian Wan, Baodong Chen, Zicheng Chi, Xin Liu, Wei Wang",
    venue: "IEEE INFOCOM 2026",
    year: 2026,
    citations: true,
    citationFile: "./citations/hydrochirp.bib",
    selected: null,
    image: "./Figure/hydrochirp.png",
    area: ["NextG Wireless & Networked Systems"]
  },
  {
    title: "2FiA: <u>To</u>wards Wi<u>Fi</u> Sensing-Based <u>A</u>uthentication with Unique Biometrics",
    href: "./publication/26sp_2fia.pdf",
    authors: "Bofan Li, Zhankai Ye, Weikuan Yu, Yongning Tang, Xin Liu",
    venue: "IEEE S&P 2026",
    year: 2026,
    citations: null,
    citationFile: "./citations/2fia.bib",
    selected: true,
    image: "./Figure/2FiA.png",
    area: ["Multimodal Sensing & ISAC", "Physical AI & Human-Centered Intelligence", "Trustworthy AI, Sensing & Security"],
    links: [
      { label: "Code / Dataset", href: "https://zenodo.org/records/17361618" }
    ],
    badges: [
      "./Figure/sp_available.png",
      "./Figure/sp_functional.png",
      "./Figure/sp_reproduced.png"
    ],
    award: "Distinguished Artifact Award",
    awardHref: "https://sp2026.ieee-security.org/awards_artifacts.html?utm_source=chatgpt.com"
  },
  {
    title: "MURAL-Fi: <u>M</u>ulti-<u>U</u>ser <u>R</u>espiration <u>A</u>uthentication <u>L</u>everaging Wi-<u>Fi</u>",
    href: "./publication/26ubicomp_muralfi.pdf",
    authors: "Bofan Li, Xin Liu, Yichao Wang, Yili Ren, Weikuan Yu",
    venue: "ACM IMWUT/UbiComp 2026",
    year: 2026,
    citations: true,
    citationFile: "./citations/muralfi.bib",
    image: "./Figure/muralfi.png",
    area: ["Multimodal Sensing & ISAC", "Physical AI & Human-Centered Intelligence", "Trustworthy AI, Sensing & Security"]
  },
  {
    title: "0cal:  <u>Zero</u>-Cost <u>Cal</u>ibration for mmWave Networks",
    href: "./publication/26sensys_0cal.pdf",
    authors: "Xin Liu, Wei-Han Chen, Kannan Srinivasan",
    venue: "ACM SenSys 2026",
    year: 2026,
    citations: true,
    citationFile: "./citations/0cal.bib",
    selected: true,
    image: "./Figure/0cal.png",
    area: ["Multimodal Sensing & ISAC", "NextG Wireless & Networked Systems", "IoT, Edge Intelligence & CPS"],
    links: [
      { label: "Code / Dataset", href: "https://github.com/xinliulab/26SenSys_0cal" }
    ],
    patentHref: "https://patents.google.com/patent/WO2025235714A1/en"
  },
  {
    title: "Energy-Efficient Paging for Duty-Cycled LTE Backscatter",
    href: "./publication/25infocom_pscatter.pdf",
    authors: "Yunyun Feng, Xin Liu, Jia Zhao, Yuan Ding, Gongpu Wang, Wei Gong",
    venue: "IEEE INFOCOM 2025",
    year: 2025,
    citations: null,
    citationFile: "./citations/pscatter.bib",
    selected: false,
    image: "./Figure/pscatter.png",
    area: ["Battery-Free & Sustainable IoT", "NextG Wireless & Networked Systems"]
    // links: [
    //   { label: "Code / Dataset", href: "" }
    // ]
  },
  {
    title: "O-JRC: An <u>O</u>pen Source Software Platform for mmWave <u>J</u>oint <u>R</u>adar-<u>C</u>ommunication Development and Experimentation",
    href: "./publication/25cn_ojrc.pdf",
    authors: "Xin Liu, Haocheng Zhu, Eylem Ekici",
    venue: "Computer Networks 2025",
    year: 2025,
    citations: null,
    citationFile: "./citations/ojrc.bib",
    selected: true,
    image: "./Figure/ojrc.png",
    area: ["Multimodal Sensing & ISAC", "NextG Wireless & Networked Systems", "IoT, Edge Intelligence & CPS"],
    links: [
      { label: "Project Page", href: "https://u.osu.edu/ekici/jrc-testbed/" },
      { label: "Code", href: "https://github.com/mmWave-MIMO-Testbed/O-JRC" }
    ]
  },
  {
    title: "Key Establishment for Secure Asymmetric Cross-Technology Communication",
    href: "./publication/24asiaccs_kep.pdf",
    authors: "Wei Wang, Xin Liu, Zicheng Chi, Stuart Ray, Ting Zhu",
    venue: "ACM ASIACCS 2024",
    year: 2024,
    citations: null,
    citationFile: "./citations/kep.bib",
    image: "./Figure/kep.png",
    area: ["NextG Wireless & Networked Systems", "Trustworthy AI, Sensing & Security"]
  },
  {
    title: "FTP: Enabling <u>F</u>ast Beam-<u>T</u>raining for O<u>p</u>timal mmWave Beamforming",
    href: "./publication/24infocom_ftp.pdf",
    authors: "Wei-Han Chen, Xin Liu (co-primary), Kannan Srinivasan, Srinivasan Parthasarathy",
    venue: "IEEE INFOCOM 2024",
    year: 2024,
    citations: null,
    citationFile: "./citations/ftp.bib",
    image: "./Figure/ftp.png",
    area: ["NextG Wireless & Networked Systems", "IoT, Edge Intelligence & CPS"],
    links: [
      { label: "Code / Dataset", href: "https://github.com/xinliulab/24InfoCom_FTP"}
    ],
    patentHref: "https://patents.google.com/patent/WO2025235721A1/en"
  },
  {
    title: "Efficient Two-Way Edge Backscatter with Commodity Bluetooth",
    href: "./publication/24infocom_effblue.pdf",
    authors: "Maoran Jiang, Xin Liu, Li Dong, Wei Gong",
    venue: "IEEE INFOCOM 2024",
    year: 2024,
    citations: null,
    citationFile: "./citations/effblue.bib",
    image: "./Figure/effblue.png",
    area: ["Battery-Free & Sustainable IoT", "NextG Wireless & Networked Systems"]
    // links: [
    //   { label: "Code / Dataset", href: "https://github.com/xinliulab/24InfoCom_FTP" }
    // ]
  },
  {
    title: "Fast and Optimal Beam Alignment for Off-the-Shelf mmWave Devices",
    href: "./publication/23mobiwac_swift.pdf",
    authors: "Wei-Han Chen, Xin Liu, Kannan Srinivasan, Srinivasan Parthasarathy",
    venue: "ACM MobiWac 2023",
    year: 2023,
    citations: null,
    citationFile: "./citations/swift.bib",
    image: "./Figure/swift.png",
    area: ["NextG Wireless & Networked Systems", "IoT, Edge Intelligence & CPS"]
    // links: [
    //   { label: "Code / Dataset", href: "https://github.com/xinliulab/24InfoCom_FTP"}
    // ]
  },
  {
    title: "LightThief: Your Optical Communication Information is Stolen behind the Wall",
    href: "./publication/23sec_lightthief.pdf",
    authors: "Xin Liu, Wei Wang, Guanqun Song, Ting Zhu",
    venue: "USENIX Security 2023",
    year: 2023,
    citations: null,
    citationFile: "./citations/lightthief.bib",
    selected: true,
    image: "./Figure/LightThief.png",
    area: ["Trustworthy AI, Sensing & Security", "IoT, Edge Intelligence & CPS"],
    links: [
      { label: "Code", href: "https://github.com/xinliulab/23Security_LightThief" },
      { label: "Presentation", href: "https://www.usenix.org/conference/usenixsecurity23/presentation/liu-xin" }
    ],
    patentHref: "https://patents.google.com/patent/WO2026089771A2/en"
  },
  {
    title: " A Secured Protocol for IoT Devices in Tactical Networks",
    href: "./publication/22milcom_secprotocol.pdf",
    authors: "Wei Wang, Zicheng Chi, Xin Liu, Ananth Vishnu Bhaskar, Ankit Baingane, Ryan Jahnige, Qingquan Zhang, Ting Zhu",
    venue: "IEEE MILCOM 2022",
    year: 2022,
    citations: null,
    citationFile: "./citations/milcom.bib",
    image: "./Figure/milcom.png",
    area: ["NextG Wireless & Networked Systems", "Trustworthy AI, Sensing & Security", "IoT, Edge Intelligence & CPS"]
  },
  {
    title: "I Can See the Light: Attacks on Autonomous Vehicles Using Invisible Lights",
    href: "./publication/21ccs_icsl.pdf",
    authors: "Wei Wang, Yao Yao, Xin Liu, Xiang Li, Hao Pei, Ting Zhu",
    venue: "ACM CCS 2021",
    year: 2021,
    citations: null,
    citationFile: "./citations/icsl.bib",
    image: "./Figure/ICSL.png",
    area: ["Trustworthy AI, Sensing & Security", "IoT, Edge Intelligence & CPS"]
  },
  {
    title: "Exploiting Wi-Fi AP for Simultaneous Data Dissemination among Wi-Fi and ZigBee Devices",
    href: "./publication/21icnp_etc.pdf",
    authors: "Wei Wang, Xin Liu, Yao Yao, Ting Zhu",
    venue: "IEEE ICNP 2021",
    year: 2021,
    citations: null,
    citationFile: "./citations/etc.bib",
    image: "./Figure/etc.png",
    area: ["NextG Wireless & Networked Systems", "IoT, Edge Intelligence & CPS"]
  },
  {
    title: "Verification and Redesign of OFDM Backscatter",
    href: "./publication/21nsdi_tscatter.pdf",
    authors: "Xin Liu, Zicheng Chi, Wei Wang, Yao Yao, Pei Hao, Ting Zhu",
    venue: "USENIX NSDI 2021",
    year: 2021,
    citations: null,
    citationFile: "./citations/tscatter.bib",
    selected: true,
    image: "./Figure/TScatter.png",
    area: ["Battery-Free & Sustainable IoT", "NextG Wireless & Networked Systems"],
    links: [
      { label: "Code", href: "https://github.com/EMDCYY/TScatter" },
      // { label: "Circuit", href: "https://github.com/pengyuzhang/HitchHike" },
      { label: "Presentation", href: "https://www.youtube.com/watch?v=He8KyfwjxqYr" }
    ]
  },
   {
    title: "Countering Cross-Technology Jamming Attack",
    href: "./publication/20wisec_ctcattack.pdf",
    authors: "Zicheng Chi, Yan Li, Xin Liu, Wei Wang, Yao Yao, Ting Zhu, Yanchao Zhang",
    venue: "ACM WiSec 2020",
    year: 2020,
    citations: null,
    citationFile: "./citations/wisec20.bib",
    image: "Figure/WiSec20.png",
    area: ["NextG Wireless & Networked Systems", "Trustworthy AI, Sensing & Security"],
  }, 
  {
    title: "VMscatter: A <u>V</u>ersatile <u>M</u>IMO Back<u>scatter</u>",
    href: "./publication/20nsdi_vmscatter.pdf",
    authors: "Xin Liu, Zicheng Chi, Wei Wang, Yao Yao, Ting Zhu",
    venue: "USENIX NSDI 2020",
    year: 2020,
    citations: null,
    citationFile: "./citations/vmscatter.bib",
    selected: true,
    image: "./Figure/VMscatter.png",
    area: ["Battery-Free & Sustainable IoT", "NextG Wireless & Networked Systems"],
    links: [
      { label: "Code", href: "https://github.com/EMDCYY/VMscatter" },
      // { label: "Circuit", href: "https://github.com/EMDCYY/VMscatter" },
      { label: "Presentation", href: "https://www.youtube.com/watch?v=VmTwuIvwjZ8" }
    ]
  },
  {
    title: "Leveraging Ambient LTE Traffic for Ubiquitous Passive Communication",
    href: "./publication/20sigcomm_lscatter.pdf",
    authors: "Zicheng Chi, Xin Liu (co-primary), Wei Wang, Yao Yao, Ting Zhu",
    venue: "ACM SIGCOMM 2020",
    year: 2020,
    citations: null,
    citationFile: "./citations/lscatter.bib",
    selected: true,
    image: "./Figure/LScatter.png",
    area: ["Battery-Free & Sustainable IoT", "NextG Wireless & Networked Systems"],
  },
  {
    title: "Parallel Inclusive Communication for Connecting Heterogeneous IoT Devices at the Edge",
    href: "./publication/19sensys_pic.pdf",
    authors: "Zicheng Chi, Yan Li, Xin Liu, Yao Yao, Yanchao Zhang, Ting Zhu",
    venue: "ACM SenSys 2019",
    year: 2019,
    citations: null,
    citationFile: "./citations/pic.bib",
    selected: null,
    image: "./Figure/PIC.png",
    area: ["IoT, Edge Intelligence & CPS", "NextG Wireless & Networked Systems"],
    award: "Best Paper Award Candidate"
  },
  {
    title: "CRF: <u>C</u>oexistent <u>R</u>outing and <u>F</u>looding using Wi-Fi Packets in Heterogeneous IoT Networks",
    href: "./publication/19infocom_crf.pdf",
    authors: "Wei Wang, Xin Liu, Yao Yao, Yan Pan, Zicheng Chi, Ting Zhu",
    venue: "IEEE INFOCOM 2019",
    year: 2019,
    citations: null,
    citationFile: "./citations/crf.bib",
    image: "./Figure/CRF.png",
    area: ["IoT, Edge Intelligence & CPS", "NextG Wireless & Networked Systems"],
  },
  {
    title: "Passive-ZigBee: Enabling ZigBee Communication in IoT Networks with 1000X+ Less Power Consumption",
    href: "./publication/18sensys_passivezigbee.pdf",
    authors: "Yan Li, Zicheng Chi, Xin Liu, Ting Zhu",
    venue: "ACM SenSys 2018",
    year: 2018,
    citations: null,
    citationFile: "./citations/passivezigbee.bib",
    selected: null,
    image: "./Figure/PassiveZigbee.png",
    area: ["Battery-Free & Sustainable IoT", "IoT, Edge Intelligence & CPS", "NextG Wireless & Networked Systems"],
    award: "Best Paper Runner-up Award"
  },
  {
    title: "EAR: <u>E</u>xploit Uncontrollable <u>A</u>mbient <u>R</u>F Signals in Heterogeneous Networks for Gesture Recognition",
    href: "./publication/18sensys_ear.pdf",
    authors: "Zicheng Chi, Yao Yao, Tiantian Xie, Xin Liu, Zhichuan Huang, Wei Wang, Ting Zhu",
    venue: "ACM SenSys 2018",
    year: 2018,
    citations: null,
    citationFile: "./citations/ear.bib",
    image: "./Figure/EAR.png",
    area: ["Multimodal Sensing & ISAC", "Physical AI & Human-Centered Intelligence"],
  },
  {
    title: "Chiron: <u>C</u>oncurrent <u>Hi</u>gh Th<u>ro</u>ughput Commu<u>n</u>ication for IoT Devices",
    href: "./publication/18mobisys_chiron.pdf",
    authors: "Yan Li, Zicheng Chi, Xin Liu, Ting Zhu",
    venue: "ACM MobiSys 2018",
    year: 2018,
    citations: null,
    citationFile: "./citations/chiron.bib",
    image: "./Figure/Chiron.png",
    area: ["IoT, Edge Intelligence & CPS", "NextG Wireless & Networked Systems"]
  },

  {
    title: "ECT: <u>E</u>xploiting Cross-Technology </u>C</u>oncurrent </u>T</u>ransmission for Reducing Packet Delivery Delay in IoT Networks",
    href: "./publication/18infocom_ect.pdf",
    authors: "Wei Wang, Tiantian Xie, Xin Liu, Ting Zhu",
    venue: "IEEE INFOCOM 2018",
    year: 2018,
    citations: null,
    citationFile: "./citations/ect.bib",
    image: "./Figure/ECT.png",
    area: ["IoT, Edge Intelligence & CPS", "NextG Wireless & Networked Systems"],
  },

   {
    title: "Aegis: <u>A</u>n Interf<u>e</u>rence-Negli<u>gi</u>ble RF <u>S</u>ensing Shield",
    href: "./publication/18infocom_aegis.pdf",
    authors: "Yao Yao, Yan Li, Xin Liu, Zicheng Chi, Wei Wang, Tiantian Xie, Ting Zhu",
    venue: "IEEE INFOCOM 2018",
    year: 2018,
    citations: null,
    citationFile: "./citations/aegis.bib",
    image: "./Figure/aegis.png",
    area: ["Multimodal Sensing & ISAC", "Trustworthy AI, Sensing & Security"],
  }
];

const researchMapLayers = [
  {
    id: "applications",
    title: "Applications of Physical AI & Security",
    concepts: [
      ["physical-ai", "Physical AI"],
      ["cyber-physical-security", "Cyber & Physical Security"],
      ["smart-health", "Smart Health"],
      ["trustworthy-iot", "Trustworthy IoT"]
    ]
  },
  {
    id: "models",
    title: "Models & AI Intelligence",
    concepts: [
      ["motion-intelligence", "Geometry & Motion Intelligence"],
      ["edge-ai", "Edge AI"],
      ["generative-ai", "Foundation & Generative AI"],
      ["multimodal-learning", "Multimodal Learning"]
    ]
  },
  {
    id: "networks",
    title: "Networks, Edge & Control",
    concepts: [
      ["spectrum-networking", "Spectrum & Concurrent Networking"],
      ["mac-scheduling", "MAC & Scheduling"],
      ["resource-allocation", "Resource Allocation"],
      ["heterogeneous-edge", "Heterogeneous IoT & Edge"]
    ]
  },
  {
    id: "sensing",
    title: "Sensing & Communication",
    concepts: [
      ["sustainable-links", "Sustainable & Underwater Links"],
      ["isac-radar", "ISAC & Radar"],
      ["wifi-sensing", "Wi-Fi & RF Sensing"],
      ["human-sensing", "Human & Health Sensing"]
    ]
  },
  {
    id: "signals",
    title: "Signals, Channels & Wireless PHY",
    concepts: [
      ["waveforms-channels", "Waveforms & Channels"],
      ["mmwave-beamforming", "mmWave & Beamforming"],
      ["multi-radio-phy", "Multi-Radio PHY"],
      ["cross-technology-phy", "Cross-Technology PHY"]
    ]
  },
  {
    id: "physical",
    title: "Wearables, Physical World, Devices, Circuits & Chips",
    concepts: [
      ["wireless-optical-frontends", "Wireless & Optical Frontends"],
      ["battery-free-hardware", "Battery-Free Hardware"],
      ["devices-circuits-chips", "Devices, Circuits & Chips"],
      ["embedded-wearable", "Embedded & Wearable Platforms"]
    ]
  }
];

const researchMapPapers = [
  { id: "mugen", label: "MUGEN", query: "mugen", primary: "physical-ai", path: ["physical-ai", "generative-ai", "motion-intelligence"] },
  { id: "geomotiongpt", label: "GeoMotionGPT", query: "geomotiongpt", primary: "physical-ai", path: ["physical-ai", "generative-ai", "motion-intelligence"] },
  { id: "arise", label: "ARiSE", query: "arise", primary: "physical-ai", path: ["physical-ai", "edge-ai", "human-sensing", "embedded-wearable"] },
  { id: "2fia", label: "2FiA", query: "2fia", primary: "cyber-physical-security", path: ["cyber-physical-security", "multimodal-learning", "wifi-sensing", "waveforms-channels"] },
  { id: "lightthief", label: "LightThief", query: "lightthief", primary: "cyber-physical-security", path: ["cyber-physical-security", "waveforms-channels", "wireless-optical-frontends"] },
  { id: "invisible-light", label: "Invisible-Light", query: "i can see the light", primary: "cyber-physical-security", path: ["cyber-physical-security", "isac-radar", "wireless-optical-frontends"] },
  { id: "key-establishment", label: "Key Establishment", query: "key establishment", primary: "trustworthy-iot", path: ["trustworthy-iot", "heterogeneous-edge", "cross-technology-phy"] },
  { id: "tactical-iot", label: "Tactical IoT", query: "secured protocol", primary: "trustworthy-iot", path: ["trustworthy-iot", "heterogeneous-edge"] },
  { id: "fresco", label: "Fresco", primary: "trustworthy-iot", path: ["trustworthy-iot", "edge-ai", "heterogeneous-edge"] },
  { id: "mural-fi", label: "MURAL-Fi", query: "mural-fi", primary: "smart-health", path: ["smart-health", "multimodal-learning", "wifi-sensing", "human-sensing"] },
  { id: "ear", label: "EAR", query: "ear:", primary: "smart-health", path: ["smart-health", "human-sensing", "heterogeneous-edge"] },
  { id: "hyperedit", label: "HyperEdit", query: "hyperedit", primary: "generative-ai", path: ["generative-ai"] },
  { id: "bfmscan", label: "BFMScan", primary: "multimodal-learning", path: ["multimodal-learning", "wifi-sensing", "mmwave-beamforming"] },
  { id: "energy-paging", label: "Energy Paging", query: "energy-efficient paging", primary: "mac-scheduling", path: ["mac-scheduling", "resource-allocation", "battery-free-hardware"] },
  { id: "chiron", label: "Chiron", query: "chiron", primary: "mac-scheduling", path: ["mac-scheduling", "spectrum-networking", "embedded-wearable"] },
  { id: "pic", label: "PIC", query: "parallel inclusive", primary: "heterogeneous-edge", path: ["heterogeneous-edge", "cross-technology-phy"] },
  { id: "crf", label: "CRF", query: "crf:", primary: "heterogeneous-edge", path: ["heterogeneous-edge", "spectrum-networking"] },
  { id: "wifi-zigbee", label: "Wi-Fi / ZigBee", query: "exploiting wi-fi ap", primary: "heterogeneous-edge", path: ["heterogeneous-edge", "cross-technology-phy"] },
  { id: "ect", label: "ECT", query: "ect:", primary: "spectrum-networking", path: ["spectrum-networking", "cross-technology-phy"] },
  { id: "cross-jamming", label: "Cross-Tech Jamming", query: "countering cross-technology", primary: "spectrum-networking", path: ["cyber-physical-security", "spectrum-networking", "cross-technology-phy"] },
  { id: "ojrc", label: "O-JRC", query: "o-jrc", primary: "isac-radar", path: ["isac-radar", "mmwave-beamforming", "wireless-optical-frontends"] },
  { id: "aegis", label: "Aegis", query: "aegis:", primary: "isac-radar", path: ["cyber-physical-security", "isac-radar", "multi-radio-phy"] },
  { id: "hydrochirp", label: "HydroChirp", query: "hydrochirp", primary: "sustainable-links", path: ["sustainable-links", "waveforms-channels", "embedded-wearable"] },
  { id: "passive-zigbee", label: "Passive-ZigBee", query: "passive-zigbee", primary: "sustainable-links", path: ["sustainable-links", "cross-technology-phy", "battery-free-hardware"] },
  { id: "bluetooth-backscatter", label: "Bluetooth Backscatter", query: "efficient two-way", primary: "sustainable-links", path: ["sustainable-links", "multi-radio-phy", "battery-free-hardware"] },
  { id: "0cal", label: "0cal", query: "0cal", primary: "mmwave-beamforming", path: ["mmwave-beamforming", "wireless-optical-frontends"] },
  { id: "ftp", label: "FTP", query: "ftp:", primary: "mmwave-beamforming", path: ["resource-allocation", "mmwave-beamforming"] },
  { id: "swift", label: "Swift", query: "fast and optimal", primary: "mmwave-beamforming", path: ["resource-allocation", "mmwave-beamforming"] },
  { id: "tscatter", label: "TScatter", query: "verification and redesign", primary: "waveforms-channels", path: ["waveforms-channels", "battery-free-hardware"] },
  { id: "lscatter", label: "LScatter", query: "leveraging ambient lte", primary: "waveforms-channels", path: ["sustainable-links", "waveforms-channels", "battery-free-hardware"] },
  { id: "vmscatter", label: "VMscatter", query: "vmscatter", primary: "multi-radio-phy", path: ["multi-radio-phy", "battery-free-hardware", "devices-circuits-chips"] }
];

const orderedAreas = [
  "Multimodal Sensing & ISAC",
  "Physical AI & Human-Centered Intelligence",
  "Foundation Models & Generative AI",
  "IoT, Edge Intelligence & CPS",
  "NextG Wireless & Networked Systems",
  "Trustworthy AI, Sensing & Security",
  "Battery-Free & Sustainable IoT"
];

const publicationOrder = new Map(publications.map((pub, index) => [pub.title, index]));

const newsIconMeta = {
  degree: {
    label: "Degree milestone",
    path: `
      <path d="M3.4 8.7 12 5l8.6 3.7-8.6 3.7-8.6-3.7Z"></path>
      <path d="M7.5 11v3.1c0 1.2 2 2.4 4.5 2.4s4.5-1.2 4.5-2.4V11"></path>
      <path d="M19.2 9.4v4.1"></path>
      <path d="M19.2 13.5c.6.4.8.9.8 1.6"></path>
    `
  },
  paper: {
    label: "Paper news",
    path: `
      <path d="M7 4.5h7.1L18 8.4v11.1H7V4.5Z"></path>
      <path d="M14 4.7v4h3.8"></path>
      <path d="M9.5 11.2h5"></path>
      <path d="M9.5 14h5"></path>
      <path d="M9.5 16.8h3.4"></path>
    `
  },
  grant: {
    label: "Grant support",
    path: `
      <path d="M4.6 14.3h3.2l2.1 2.2h3.4c.9 0 1.7-.4 2.2-1.1l2.2-3"></path>
      <path d="M3.5 16.9h5.3l1.5 1.5h5.2c1.1 0 2.1-.5 2.8-1.4l2.2-3"></path>
      <path d="M12 5.1l.9 1.8 2 .3-1.5 1.4.4 2-1.8-.9-1.8.9.4-2-1.5-1.4 2-.3.9-1.8Z"></path>
    `
  },
  award: {
    label: "Award news",
    path: `
      <path d="M8 4.8h8v4.7a4 4 0 0 1-8 0V4.8Z"></path>
      <path d="M8 6.3H5.6v2.1A2.6 2.6 0 0 0 8.5 11"></path>
      <path d="M16 6.3h2.4v2.1A2.6 2.6 0 0 1 15.5 11"></path>
      <path d="M12 13.5v3"></path>
      <path d="M8.9 19.2h6.2"></path>
      <path d="M10 16.5h4"></path>
    `
  },
  football: {
    label: "FSU kickoff",
    path: `
      <path d="M5.3 16.9C4 15.6 4.5 12 7.6 8.9s6.7-3.6 8-2.3c1.3 1.3.8 4.9-2.3 8s-6.7 3.6-8 2.3Z"></path>
      <path d="M7.2 15 13.7 8.5"></path>
      <path d="M9.2 13l1.6 1.6"></path>
      <path d="M10.7 11.5l1.6 1.6"></path>
      <path d="M12.2 10l1.6 1.6"></path>
    `
  },
  milestone: {
    label: "Milestone",
    path: `
      <path d="M6.5 20V4.5"></path>
      <path d="M7 5.5h9.9l-1.7 3.1 1.7 3.1H7"></path>
      <path d="M6.5 20h8"></path>
    `
  }
};

function renderNewsIcon(icon) {
  const meta = newsIconMeta[icon] || newsIconMeta.milestone;
  return `
    <span class="news-icon news-icon-${icon || "milestone"}" title="${meta.label}" aria-label="${meta.label}">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        ${meta.path}
      </svg>
    </span>
  `;
}

let activeArea = "Selected";

function getAreas(pub) {
  return Array.isArray(pub.area) ? pub.area : [pub.area];
}

function sortByYearDesc(items) {
  return [...items].sort((a, b) => {
    const yearDelta = b.year - a.year;
    if (yearDelta !== 0) {
      return yearDelta;
    }
    return publicationOrder.get(a.title) - publicationOrder.get(b.title);
  });
}

function getCitationCount(pub) {
  return Number.isFinite(pub.citations) ? pub.citations : -1;
}

function sortByCitationsDesc(items) {
  return [...items].sort((a, b) => {
    const citationDelta = getCitationCount(b) - getCitationCount(a);
    if (citationDelta !== 0) {
      return citationDelta;
    }
    const yearDelta = b.year - a.year;
    if (yearDelta !== 0) {
      return yearDelta;
    }
    return publicationOrder.get(a.title) - publicationOrder.get(b.title);
  });
}

function emphasizeMyName(authors) {
  return authors
    .replace(/\bXin Liu\b/g, '<strong class="author-self">Xin Liu</strong>')
    .replace(/\bXing Liu\b/g, '<strong class="author-self">Xing Liu</strong>');
}

function underlineStudentAuthors(authors) {
  return authors
    .replace(/\bZhankai Ye\b/g, '<u>Zhankai Ye</u>')
    .replace(/\bBofan Li\b/g, '<u>Bofan Li</u>')
    .replace(/\bZhuoyuan Liu\b/g, '<u>Zhuoyuan Liu</u>');
}

function formatPublicationAuthors(authors) {
  return underlineStudentAuthors(emphasizeMyName(authors));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => (
    {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]
  ));
}

function getCitationFileName(citationFile) {
  const cleanPath = citationFile.split("#")[0].split("?")[0];
  return cleanPath.substring(cleanPath.lastIndexOf("/") + 1) || "citation.bib";
}

function getPublicationId(pub) {
  return `publication-${pub.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

function getPlainPublicationTitle(title) {
  const container = document.createElement("div");
  container.innerHTML = title;
  return container.textContent.toLowerCase();
}

function getResearchPaperTitle(paper) {
  if (!paper.query) {
    return paper.label;
  }

  const publication = publications.find((pub) => getPlainPublicationTitle(pub.title).includes(paper.query));
  if (!publication) {
    return paper.label;
  }

  const container = document.createElement("div");
  container.innerHTML = publication.title;
  return container.textContent.trim();
}

function getResearchPaperVenue(paper) {
  const manualVenues = {
    bfmscan: "UbiComp '26",
    fresco: "ICCCN '26"
  };

  if (manualVenues[paper.id]) {
    return manualVenues[paper.id];
  }

  const publication = paper.query
    ? publications.find((pub) => getPlainPublicationTitle(pub.title).includes(paper.query))
    : null;

  if (!publication) {
    return "Work in progress";
  }

  return publication.venue
    .replace(/^IEEE\s+/, "")
    .replace(/^ACM\s+/, "")
    .replace(/^USENIX\s+/, "")
    .replace("Computer Networks", "CompNet")
    .replace(/\b20(\d{2})\b/, "'$1");
}

let scholarCitationCounts = new Map();

function normalizeResearchTitle(title) {
  return String(title)
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function loadScholarCitationCache() {
  try {
    const response = await fetch("./data/scholar-citations.json", { cache: "no-store" });
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    scholarCitationCounts = new Map(
      Object.entries(data.papers || {}).map(([title, citations]) => [normalizeResearchTitle(title), Number(citations) || 0])
    );
  } catch (error) {
    console.info("Scholar citation cache is unavailable; using venue, authorship, and recency weights.");
  }
}

function getResearchPublication(paper) {
  if (!paper.query) {
    return null;
  }
  return publications.find((publication) => getPlainPublicationTitle(publication.title).includes(paper.query)) || null;
}

function getResearchVenueScore(venue) {
  const normalizedVenue = venue.toLowerCase();
  const topSystemsAndSecurity = ["nsdi", "sigcomm", "sensys", "mobisys", "s&p", "security", "ccs"];
  const majorVenues = ["infocom", "ubicomp", "imwut", "icnp", "wisec", "emnlp", "acl", "fg"];

  if (topSystemsAndSecurity.some((name) => normalizedVenue.includes(name))) {
    return 1;
  }
  if (majorVenues.some((name) => normalizedVenue.includes(name))) {
    return 0.76;
  }
  if (normalizedVenue.includes("arxiv") || normalizedVenue.includes("progress")) {
    return 0.35;
  }
  return 0.56;
}

function getResearchAuthorScore(publication) {
  if (!publication) {
    return 0.62;
  }

  const authors = publication.authors.replace(/\s*\([^)]*\)\s*/g, "").split(",").map((author) => author.trim());
  const position = authors.findIndex((author) => author === "Xin Liu" || author === "Xing Liu");
  if (position === 0) {
    return 1;
  }
  if (position === authors.length - 1) {
    return 0.94;
  }
  if (position >= 0) {
    return publication.authors.includes("co-primary") ? 0.96 : 0.68;
  }
  return 0.4;
}

function getResearchPaperScore(paper) {
  const publication = getResearchPublication(paper);
  const venue = publication?.venue || getResearchPaperVenue(paper);
  const year = publication?.year || Number(venue.match(/(?:20)?(\d{2})\b/)?.[1]) + 2000 || new Date().getFullYear();
  const titleKey = normalizeResearchTitle(publication ? getResearchPaperTitle(paper) : paper.label);
  const citationCount = scholarCitationCounts.get(titleKey);
  const maximumCitations = Math.max(1, ...scholarCitationCounts.values());
  const citationScore = Number.isFinite(citationCount)
    ? Math.log1p(citationCount) / Math.log1p(maximumCitations)
    : 0.12;
  const venueScore = getResearchVenueScore(venue);
  const authorScore = getResearchAuthorScore(publication);
  const age = Math.max(0, new Date().getFullYear() - year);
  const recencyScore = Math.exp(-age / 5);

  // Area score = 32% citation impact + 28% venue tier + 24% author role + 16% recency.
  return 0.32 * citationScore + 0.28 * venueScore + 0.24 * authorScore + 0.16 * recencyScore;
}

const researchPaperClusters = {
  ai: ["mugen", "geomotiongpt", "arise", "hyperedit"],
  security: ["2fia", "lightthief", "invisible-light", "key-establishment", "tactical-iot", "fresco", "cross-jamming"],
  sensing: ["mural-fi", "ear", "bfmscan", "ojrc", "aegis"],
  edge: ["energy-paging", "chiron", "pic", "crf", "wifi-zigbee", "ect"],
  wireless: ["hydrochirp", "passive-zigbee", "bluetooth-backscatter", "0cal", "ftp", "swift", "tscatter", "lscatter", "vmscatter"]
};

function getResearchPaperCluster(paperId) {
  return Object.entries(researchPaperClusters).find(([, paperIds]) => paperIds.includes(paperId))?.[0] || "sensing";
}

function getResearchPaperSize(paper) {
  const score = Math.max(0, Math.min(1, getResearchPaperScore(paper)));
  const minimumDiameter = 48;
  const maximumDiameter = 96;
  const minimumArea = Math.PI * (minimumDiameter / 2) ** 2;
  const maximumArea = Math.PI * (maximumDiameter / 2) ** 2;
  const area = minimumArea + score * (maximumArea - minimumArea);
  return Math.round(2 * Math.sqrt(area / Math.PI));
}

function layoutResearchPaperCloud(paperCloud) {
  const width = paperCloud.clientWidth;
  const height = paperCloud.clientHeight;

  if (!width || !height) {
    return;
  }

  const centers = {
    ai: [0.28, 0.17],
    security: [0.72, 0.2],
    edge: [0.27, 0.5],
    sensing: [0.72, 0.5],
    wireless: [0.5, 0.8]
  };
  const clusterCounts = {};
  const nodes = researchMapPapers.map((paper, index) => {
    const element = paperCloud.querySelector(`[data-paper="${paper.id}"]`);
    const cluster = getResearchPaperCluster(paper.id);
    const localIndex = clusterCounts[cluster] || 0;
    clusterCounts[cluster] = localIndex + 1;
    const [centerX, centerY] = centers[cluster];
    const angle = localIndex * 2.38 + Object.keys(centers).indexOf(cluster) * 0.63;
    const radius = localIndex === 0 ? 0 : 22 + Math.floor((localIndex - 1) / 5) * 20;
    const size = getResearchPaperSize(paper);

    return {
      element,
      centerX: centerX * width,
      centerY: centerY * height,
      x: centerX * width + Math.cos(angle) * radius,
      y: centerY * height + Math.sin(angle) * radius,
      radius: size / 2,
      index
    };
  });

  for (let iteration = 0; iteration < 220; iteration += 1) {
    nodes.forEach((node) => {
      node.x += (node.centerX - node.x) * 0.0035;
      node.y += (node.centerY - node.y) * 0.0035;
    });

    for (let first = 0; first < nodes.length; first += 1) {
      for (let second = first + 1; second < nodes.length; second += 1) {
        const a = nodes[first];
        const b = nodes[second];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distance = Math.hypot(dx, dy);
        const desired = (a.radius + b.radius) * 1.06 + 4;

        if (distance < 0.01) {
          dx = (second % 2 ? 1 : -1) * 0.1;
          dy = 0.1;
          distance = Math.hypot(dx, dy);
        }

        if (distance < desired) {
          const push = (desired - distance) * 0.5;
          const unitX = dx / distance;
          const unitY = dy / distance;
          a.x -= unitX * push;
          a.y -= unitY * push;
          b.x += unitX * push;
          b.y += unitY * push;
        }
      }
    }

    nodes.forEach((node) => {
      const padding = node.radius + 16;
      node.x = Math.max(padding, Math.min(width - padding, node.x));
      node.y = Math.max(padding, Math.min(height - padding, node.y));
    });
  }

  nodes.forEach((node) => {
    node.element.style.setProperty("--paper-x", `${node.x}px`);
    node.element.style.setProperty("--paper-y", `${node.y}px`);
  });
}

function getResearchConceptLabel(conceptId) {
  for (const layer of researchMapLayers) {
    const concept = layer.concepts.find(([id]) => id === conceptId);
    if (concept) {
      return concept[1];
    }
  }

  return conceptId;
}

function getResearchPaperPreviewHtml(paper) {
  const publication = getResearchPublication(paper);
  const title = publication?.title || escapeHtml(getResearchPaperTitle(paper));
  const authors = publication ? formatPublicationAuthors(publication.authors) : "";
  const venue = publication?.venue || escapeHtml(getResearchPaperVenue(paper));
  const paperHref = typeof publication?.href === "string" ? publication.href.trim() : "";
  const paperLink = paperHref
    ? `<a class="research-preview-action" href="${escapeHtml(paperHref)}" target="_blank" rel="noopener noreferrer">Paper</a>`
    : "";
  const publicationButton = publication
    ? `<button class="research-preview-action research-preview-publication" type="button" data-paper="${escapeHtml(paper.id)}">Publication</button>`
    : "";
  const extraLinks = (publication?.links || [])
    .filter((link) => link.href)
    .slice(0, 2)
    .map((link) => `<a class="research-preview-action" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`)
    .join("");

  return `
    <aside class="research-paper-preview" data-preview-paper="${escapeHtml(paper.id)}">
      <div class="research-preview-title">${title}</div>
      ${authors ? `<div class="research-preview-authors">${authors}</div>` : ""}
      <div class="research-preview-venue">${venue}</div>
      <div class="research-preview-actions">${[paperLink, publicationButton, extraLinks].filter(Boolean).join("")}</div>
    </aside>
  `;
}

function positionResearchPaperPreview(paper) {
  const canvas = document.getElementById("research-map-canvas");
  const paperCloud = document.getElementById("research-paper-cloud");
  const paperNode = canvas?.querySelector(`[data-paper="${paper.id}"]`);
  const preview = canvas?.querySelector(`[data-preview-paper="${paper.id}"]`);

  if (!paperCloud || !paperNode || !preview) {
    return;
  }

  const cloudRect = paperCloud.getBoundingClientRect();
  const nodeRect = paperNode.getBoundingClientRect();
  const previewRect = preview.getBoundingClientRect();
  const gap = 14;
  const padding = 10;
  const nodeCenterY = nodeRect.top - cloudRect.top + nodeRect.height / 2;
  const rightX = nodeRect.right - cloudRect.left + gap;
  const leftX = nodeRect.left - cloudRect.left - previewRect.width - gap;
  const fitsRight = rightX + previewRect.width <= cloudRect.width - padding;
  const x = fitsRight ? rightX : Math.max(padding, leftX);
  const y = Math.max(padding, Math.min(cloudRect.height - previewRect.height - padding, nodeCenterY - previewRect.height / 2));

  preview.dataset.side = fitsRight ? "right" : "left";
  preview.style.setProperty("--preview-x", `${x}px`);
  preview.style.setProperty("--preview-y", `${y}px`);
}

function renderResearchPaperPreview(paper) {
  const paperCloud = document.getElementById("research-paper-cloud");

  if (!paperCloud) {
    return;
  }

  paperCloud.querySelector(".research-paper-preview")?.remove();
  paperCloud.insertAdjacentHTML("beforeend", getResearchPaperPreviewHtml(paper));
  requestAnimationFrame(() => positionResearchPaperPreview(paper));
}

function jumpToResearchPublication(paperId) {
  const paper = researchMapPapers.find((entry) => entry.id === paperId);
  const publication = paper ? getResearchPublication(paper) : null;

  if (!publication) {
    return;
  }

  setActiveArea("All");
  const publicationId = getPublicationId(publication);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const target = document.getElementById(publicationId);
      if (!target) {
        return;
      }

      target.scrollIntoView({
        behavior: "auto",
        block: "center"
      });
      target.classList.add("pub-item-map-focus");
      window.setTimeout(() => target.classList.remove("pub-item-map-focus"), 1800);
    });
  });
}

function drawResearchPaperPath(paper) {
  const canvas = document.getElementById("research-map-canvas");
  const svg = canvas?.querySelector(".research-map-links");

  if (!canvas || !svg || !paper) {
    return;
  }

  const canvasRect = canvas.getBoundingClientRect();
  const points = paper.path
    .map((conceptId) => canvas.querySelector(`[data-concept="${conceptId}"]`))
    .filter(Boolean)
    .map((node) => {
      const rect = node.getBoundingClientRect();
      const layerRect = node.closest(".research-map-layer").getBoundingClientRect();
      return {
        left: rect.left - canvasRect.left,
        right: rect.right - canvasRect.left,
        top: rect.top - canvasRect.top,
        bottom: rect.bottom - canvasRect.top,
        centerX: rect.left - canvasRect.left + rect.width / 2,
        centerY: rect.top - canvasRect.top + rect.height / 2,
        layerLeft: layerRect.left - canvasRect.left,
        layerRight: layerRect.right - canvasRect.left,
        layerTop: layerRect.top - canvasRect.top,
        layerBottom: layerRect.bottom - canvasRect.top
      };
    })
    .sort((a, b) => a.centerY - b.centerY || a.centerX - b.centerX);

  svg.setAttribute("viewBox", `0 0 ${canvasRect.width} ${canvasRect.height}`);
  svg.replaceChildren();

  if (points.length < 2) {
    return;
  }

  const namespace = "http://www.w3.org/2000/svg";
  let pathData = "";
  for (let index = 1; index < points.length; index += 1) {
    const previous = points[index - 1];
    const point = points[index];
    const sameRow = Math.abs(point.centerY - previous.centerY) < 34;

    if (sameRow) {
      const previousIsLeft = previous.centerX <= point.centerX;
      const startX = previousIsLeft ? previous.right : previous.left;
      const endX = previousIsLeft ? point.left : point.right;
      const startY = previous.centerY;
      const endY = point.centerY;
      const horizontalDistance = endX - startX;
      pathData += ` M ${startX} ${startY} C ${startX + horizontalDistance * 0.42} ${startY}, ${endX - horizontalDistance * 0.42} ${endY}, ${endX} ${endY}`;
    } else {
      const startX = previous.centerX;
      const startY = previous.bottom;
      const endX = point.centerX;
      const endY = point.top;
      const verticalDistance = endY - startY;
      pathData += ` M ${startX} ${startY} C ${startX} ${startY + verticalDistance * 0.43}, ${endX} ${endY - verticalDistance * 0.43}, ${endX} ${endY}`;
    }
  }

  ["research-map-path-shadow", "research-map-path"].forEach((className) => {
    const path = document.createElementNS(namespace, "path");
    path.setAttribute("class", className);
    path.setAttribute("d", pathData);
    svg.appendChild(path);
  });
}

function clearResearchMapSelection() {
  const canvas = document.getElementById("research-map-canvas");
  const focus = document.querySelector(".research-map-focus");

  if (!canvas || !focus) {
    return;
  }

  canvas.classList.remove("has-selection", "has-concept-selection");
  canvas.removeAttribute("data-selected-paper");
  canvas.querySelectorAll(".is-layer-active").forEach((layer) => layer.classList.remove("is-layer-active"));
  canvas.querySelectorAll(".is-active, .is-related").forEach((node) => {
    node.classList.remove("is-active", "is-related");
  });
  canvas.querySelector(".research-map-links")?.replaceChildren();
  canvas.querySelector(".research-paper-preview")?.remove();
  focus.textContent = "Select a paper to trace its contributions across layers.";
}

function selectResearchPaper(paperId) {
  const paper = researchMapPapers.find((entry) => entry.id === paperId);
  const canvas = document.getElementById("research-map-canvas");
  const focus = document.querySelector(".research-map-focus");

  if (!paper || !canvas || !focus) {
    return;
  }

  if (canvas.dataset.selectedPaper === paper.id) {
    clearResearchMapSelection();
    return;
  }

  canvas.classList.add("has-selection");
  canvas.classList.remove("has-concept-selection");
  canvas.dataset.selectedPaper = paper.id;
  canvas.querySelectorAll(".is-layer-active").forEach((layer) => layer.classList.remove("is-layer-active"));
  canvas.querySelectorAll(".is-active, .is-related").forEach((node) => {
    node.classList.remove("is-active", "is-related");
  });
  canvas.querySelector(`[data-paper="${paper.id}"]`)?.classList.add("is-active");
  paper.path.forEach((conceptId) => {
    const conceptNode = canvas.querySelector(`[data-concept="${conceptId}"]`);
    conceptNode?.classList.add("is-active");
    conceptNode?.closest(".research-map-layer")?.classList.add("is-layer-active");
  });

  const labels = paper.path.map(getResearchConceptLabel);
  focus.replaceChildren();
  const title = document.createElement("strong");
  title.textContent = paper.label;
  focus.appendChild(title);
  focus.append(` connects ${labels.join(" · ")}`);
  renderResearchPaperPreview(paper);
  requestAnimationFrame(() => {
    drawResearchPaperPath(paper);
    positionResearchPaperPreview(paper);
  });
}

function selectResearchConcept(conceptId) {
  const canvas = document.getElementById("research-map-canvas");
  const focus = document.querySelector(".research-map-focus");

  if (!canvas || !focus) {
    return;
  }

  const relatedPapers = researchMapPapers.filter((paper) => paper.path.includes(conceptId));
  canvas.classList.remove("has-selection");
  canvas.classList.add("has-concept-selection");
  canvas.removeAttribute("data-selected-paper");
  canvas.querySelectorAll(".is-layer-active").forEach((layer) => layer.classList.remove("is-layer-active"));
  canvas.querySelectorAll(".is-active, .is-related").forEach((node) => {
    node.classList.remove("is-active", "is-related");
  });
  canvas.querySelector(`[data-concept="${conceptId}"]`)?.classList.add("is-active");
  relatedPapers.forEach((paper) => {
    canvas.querySelector(`[data-paper="${paper.id}"]`)?.classList.add("is-related");
  });
  canvas.querySelector(".research-map-links")?.replaceChildren();
  canvas.querySelector(".research-paper-preview")?.remove();
  focus.textContent = `${getResearchConceptLabel(conceptId)} · ${relatedPapers.map((paper) => paper.label).join(" · ")}`;
}

function setupResearchMap() {
  const layersContainer = document.getElementById("research-map-layers");
  const paperCloud = document.getElementById("research-paper-cloud");
  const canvas = document.getElementById("research-map-canvas");

  if (!layersContainer || !paperCloud || !canvas) {
    return;
  }

  const conceptLayer = new Map();
  // Apple HIG system colors, mirrored in the CSS layer gradient.
  const layerColors = {
    applications: "#007aff",
    models: "#32ade6",
    networks: "#30b0c7",
    sensing: "#00c7be",
    signals: "#34c759",
    physical: "#ff9500"
  };
  researchMapLayers.forEach((layer) => {
    layer.concepts.forEach(([conceptId]) => conceptLayer.set(conceptId, layer.id));
  });

  layersContainer.innerHTML = researchMapLayers
    .map((layer) => {
      const concepts = layer.concepts
        .map(([conceptId, label]) => `<button type="button" class="research-concept-node" data-concept="${conceptId}">${label}</button>`)
        .join("");

      return `
        <section class="research-map-layer" data-layer="${layer.id}">
          <h4>${layer.title}</h4>
          <div class="research-map-network">
            <div class="research-map-concepts">${concepts}</div>
          </div>
        </section>
      `;
    })
    .join("");

  paperCloud.innerHTML = researchMapPapers
    .map((paper, index) => {
      const layerId = conceptLayer.get(paper.primary);
      const color = layerColors[layerId] || "#007aff";
      const size = getResearchPaperSize(paper);
      const driftX = (index % 2 === 0 ? 1 : -1) * (9 + (index % 4) * 2);
      const driftY = (index % 3 === 0 ? -1 : 1) * (7 + (index % 5));
      const duration = 7.4 + (index % 7) * 0.72;
      const delay = -(index % 7) * 0.8;
      const fontSize = (size * 0.0105).toFixed(3);
      const style = `--paper-size:${size}px;--paper-color:${color};--paper-drift-x:${driftX}px;--paper-drift-y:${driftY}px;--paper-duration:${duration}s;--paper-delay:${delay}s;--paper-font-size:${fontSize}rem`;

      return `
        <button type="button" class="research-paper-node" data-paper="${paper.id}" style="${style}" title="${escapeHtml(getResearchPaperTitle(paper))}">
          <span>${escapeHtml(paper.label)}</span>
          <small class="research-paper-venue">${escapeHtml(getResearchPaperVenue(paper))}</small>
        </button>
      `;
    })
    .join("");

  requestAnimationFrame(() => layoutResearchPaperCloud(paperCloud));
  const resizeObserver = new ResizeObserver(() => layoutResearchPaperCloud(paperCloud));
  resizeObserver.observe(paperCloud);

  canvas.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const publicationButton = target.closest(".research-preview-publication");
    const paperButton = target.closest(".research-paper-node");
    const conceptButton = target.closest(".research-concept-node");

    if (publicationButton) {
      jumpToResearchPublication(publicationButton.dataset.paper);
    } else if (paperButton) {
      selectResearchPaper(paperButton.dataset.paper);
    } else if (conceptButton) {
      selectResearchConcept(conceptButton.dataset.concept);
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    const selectionIsVisible = canvas.classList.contains("has-selection") || canvas.classList.contains("has-concept-selection");
    const clickedSelectable = target instanceof Element && target.closest(".research-paper-node, .research-concept-node, .research-paper-preview");

    if (selectionIsVisible && !clickedSelectable) {
      clearResearchMapSelection();
    }
  });

  let resizeFrame;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      const selectedPaper = researchMapPapers.find((paper) => paper.id === canvas.dataset.selectedPaper);
      if (selectedPaper) {
        drawResearchPaperPath(selectedPaper);
        positionResearchPaperPreview(selectedPaper);
      }
    });
  });
}

function setupStackPaperLinks() {
  const stack = document.querySelector(".xl-stack-figure");

  if (!stack) {
    return;
  }

  stack.addEventListener("click", (event) => {
    const button = event.target.closest(".stack-paper-link");

    if (!button) {
      return;
    }

    const query = button.dataset.publicationQuery?.toLowerCase();
    const publication = publications.find((pub) => getPlainPublicationTitle(pub.title).includes(query));

    if (!publication) {
      return;
    }

    setActiveArea("All");
    requestAnimationFrame(() => {
      document.getElementById(getPublicationId(publication))?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  });
}

function copyTextToClipboard(text) {
  const copyWithTextarea = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).catch(() => {
      copyWithTextarea();
    });
  }

  copyWithTextarea();
  return Promise.resolve();
}

function renderNewsImages(images) {
  if (!Array.isArray(images) || !images.length) {
    return "";
  }

  const imageMarkup = images
    .map((image) => {
      const src = typeof image === "string" ? image : image.src;
      const alt = typeof image === "string" ? "News photo" : (image.alt || "News photo");

      if (!src) {
        return "";
      }

      return `
        <button class="news-media-button" type="button" data-news-image-src="${src}" data-news-image-alt="${escapeHtml(alt)}" aria-label="Open image: ${escapeHtml(alt)}">
          <img src="${src}" alt="${escapeHtml(alt)}">
        </button>
      `;
    })
    .filter(Boolean)
    .join("");

  return imageMarkup ? `<div class="news-media-grid">${imageMarkup}</div>` : "";
}

function renderNews() {
  const container = document.getElementById("news-list");
  container.innerHTML = newsItems
    .map((item) => {
      const links = (item.links || [])
        .map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">[${link.label}]</a>`)
        .join(" ");
      const images = renderNewsImages(item.images);
      return `
        <article class="timeline-item news-item">
          ${renderNewsIcon(item.icon)}
          <div class="news-copy"><strong>[${item.date}]</strong> ${item.text}${links ? ` ${links}` : ""}${images}</div>
        </article>
      `;
    })
    .join("");
}

function setupNewsImageViewer() {
  const newsList = document.getElementById("news-list");
  if (!newsList) {
    return;
  }

  const modal = document.createElement("div");
  modal.className = "news-image-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="news-image-modal-backdrop" data-news-image-close></div>
    <div class="news-image-modal-dialog" role="dialog" aria-modal="true" aria-label="News image preview">
      <button class="news-image-modal-close" type="button" data-news-image-close aria-label="Close image preview">&times;</button>
      <img class="news-image-modal-img" src="" alt="">
    </div>
  `;
  document.body.appendChild(modal);

  const image = modal.querySelector(".news-image-modal-img");
  const closeButtons = modal.querySelectorAll("[data-news-image-close]");

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("news-image-modal-open");
    image.removeAttribute("src");
    image.alt = "";
  };

  const openModal = (src, alt) => {
    image.src = src;
    image.alt = alt;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("news-image-modal-open");
    modal.querySelector(".news-image-modal-close").focus();
  };

  newsList.addEventListener("click", (event) => {
    const button = event.target.closest(".news-media-button");
    if (!button) {
      return;
    }

    openModal(button.dataset.newsImageSrc, button.dataset.newsImageAlt || "News photo");
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function setupPublicationImageViewer() {
  const groupedContainer = document.getElementById("publication-groups");
  if (!groupedContainer) {
    return;
  }

  const modal = document.createElement("div");
  modal.className = "publication-image-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="publication-image-modal-backdrop" data-publication-image-close></div>
    <div class="publication-image-modal-dialog" role="dialog" aria-modal="true" aria-label="Publication image preview">
      <button class="publication-image-modal-close" type="button" data-publication-image-close aria-label="Close image preview">&times;</button>
      <img class="publication-image-modal-img" src="" alt="">
    </div>
  `;
  document.body.appendChild(modal);

  const image = modal.querySelector(".publication-image-modal-img");
  const closeButtons = modal.querySelectorAll("[data-publication-image-close]");

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("publication-image-modal-open");
    image.removeAttribute("src");
    image.alt = "";
  };

  const openModal = (src, alt) => {
    image.src = src;
    image.alt = alt;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("publication-image-modal-open");
    modal.querySelector(".publication-image-modal-close").focus();
  };

  groupedContainer.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    const button = target?.closest(".pub-thumb-button");
    if (!button || !groupedContainer.contains(button)) {
      return;
    }

    openModal(button.dataset.publicationImageSrc, button.dataset.publicationImageAlt || "Publication image");
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function renderTeaching() {
  const container = document.getElementById("teaching-list");
  container.innerHTML = teachingItems
    .map((course) => {
      const evalHtml = course.evaluations
        .map((item) => {
          if (!item.href) {
            return `<span class="eval-label">${item.label}</span>`;
          }
          return `<a href="${item.href}" target="_blank" rel="noopener noreferrer"><span class="eval-label">${item.label}</span></a>`;
        })
        .join(" ");
      return `
        <article class="teaching-item">
          <div class="teaching-item-top">
            <a href="${course.href}" target="_blank" rel="noopener noreferrer">${course.name}</a>
            <div class="eval-links">Evaluations: ${evalHtml}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderStudents() {
  const container = document.getElementById("student-list");
  if (!container) {
    return;
  }

  const currentStudents = students.filter((student) => student.group !== "alumni");
  const alumniStudents = students.filter((student) => student.group === "alumni");

  const renderStudent = (student) => {
    const name = student.href
      ? `<a class="student-name-link" href="${student.href}" target="_blank" rel="noopener noreferrer">${student.name}</a>`
      : student.name;
    const publications = (student.publications || [])
      .map((publication) => {
        if (Array.isArray(publication.sublinks) && publication.sublinks.length > 0) {
          const sublinks = publication.sublinks
            .filter((link) => link.href)
            .map((link) => (
              `<a class="student-publication-sublink" href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="${publication.title} ${link.label}">${link.label}</a>`
            ))
            .join("");

          return `
            <span class="student-publication student-publication-group">
              <span class="student-publication-title">${publication.title}</span>
              <span class="student-publication-sublinks">${sublinks}</span>
            </span>
          `;
        }

        const hrefs = Array.isArray(publication.hrefs)
          ? publication.hrefs.filter(Boolean)
          : [publication.href].filter(Boolean);

        if (hrefs.length === 0) {
          return `<span class="student-publication">${publication.title}</span>`;
        }

        const extraHrefs = hrefs.slice(1);
        const extraHrefAttribute = extraHrefs.length > 0
          ? ` data-extra-hrefs="${escapeHtml(JSON.stringify(extraHrefs))}"`
          : "";

        return `<a class="student-publication" href="${hrefs[0]}"${extraHrefAttribute} target="_blank" rel="noopener noreferrer">${publication.title}</a>`;
      })
      .join("");

    return `
      <li class="student-row">
        <div class="student-cell student-name">${name}</div>
        <div class="student-cell">${student.currentRole || ""}</div>
        <div class="student-cell">${student.period || ""}</div>
        <div class="student-cell student-publications">${publications}</div>
        <div class="student-cell">${student.initialPosition || ""}</div>
      </li>
    `;
  };

  const alumniHtml = alumniStudents.length
    ? `
      <li class="student-alumni-heading">Alumni</li>
      ${alumniStudents.map(renderStudent).join("")}
    `
    : "";

  container.innerHTML = `
    ${currentStudents.map(renderStudent).join("")}
    ${alumniHtml}
  `;
}

function buildFilters() {
  const filterContainer = document.getElementById("pub-filters");
  const allAreas = ["Selected", ...orderedAreas, "All"];
  filterContainer.innerHTML = allAreas
    .map(
      (area) =>
        `<button class="pub-filter-btn ${area === activeArea ? "active" : ""}" type="button" data-area="${area}">${area}</button>`
    )
    .join("");

  filterContainer.querySelectorAll(".pub-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveArea(btn.dataset.area);
    });
  });
}

function buildAreaNav() {
  const areaNav = document.getElementById("area-nav");
  const isPanelOpen = document.getElementById("publication-area-panel")?.classList.contains("is-open") ?? false;
  areaNav.innerHTML = ["Selected", ...orderedAreas, "All"]
    .map((area) => `<button class="area-nav-link ${activeArea === area ? "active" : ""}" type="button" data-area="${area}" tabindex="${isPanelOpen ? "0" : "-1"}">${area}</button>`)
    .join("");

  areaNav.querySelectorAll(".area-nav-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveArea(btn.dataset.area);
      const publicationsSection = document.getElementById("publications");
      publicationsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setPublicationAreaPanelOpen(isOpen) {
  const panel = document.getElementById("publication-area-panel");
  const navZone = document.getElementById("publication-nav-zone");

  if (!panel || !navZone) {
    return;
  }

  panel.classList.toggle("is-open", isOpen);
  navZone.classList.toggle("is-open", isOpen);
  panel.setAttribute("aria-hidden", String(!isOpen));
  panel.querySelectorAll(".area-nav-link").forEach((btn) => {
    btn.tabIndex = isOpen ? 0 : -1;
  });
}

function setupPublicationAreaPanel() {
  const navZone = document.getElementById("publication-nav-zone");
  const publicationsSection = document.getElementById("publications");

  if (!navZone || !publicationsSection) {
    return;
  }

  let hasOpened = false;

  const showPanel = () => {
    hasOpened = true;
    setPublicationAreaPanelOpen(true);
  };

  [navZone, publicationsSection].forEach((zone) => {
    zone.addEventListener("pointerenter", showPanel);
  });

  navZone.addEventListener("focusin", showPanel);

  if (!hasOpened) {
    setPublicationAreaPanelOpen(false);
  }
}

function setActiveArea(area) {
  activeArea = area;
  buildFilters();
  buildAreaNav();
  renderPublications();
}

function renderPublications() {
  const groupedContainer = document.getElementById("publication-groups");
  const resultMeta = document.getElementById("pub-result-meta");
  const yearSortedPubs = sortByYearDesc(publications);
  const filteredPubs = yearSortedPubs.filter((pub) => {
    if (activeArea === "All") {
      return true;
    }
    if (activeArea === "Selected") {
      return pub.selected === true;
    }
    return getAreas(pub).includes(activeArea);
  });
  const displayPubs =
    activeArea === "All" || activeArea === "Selected"
      ? filteredPubs
      : sortByCitationsDesc(filteredPubs);
  const sortLabel =
    activeArea === "All" || activeArea === "Selected"
      ? "sorted by year"
      : "sorted by Google Scholar citations";
  resultMeta.textContent = `${displayPubs.length} publication${displayPubs.length === 1 ? "" : "s"} shown, ${sortLabel}`;

  if (activeArea === "All") {
    const pubCards = displayPubs
      .map((pub) => renderPublicationCard(pub))
      .join("");

    groupedContainer.innerHTML = `
      <section class="pub-group all-view" id="area-all">
        <div class="pub-group-head">
          <h3 class="pub-group-title">All Publications</h3>
        </div>
        <div class="pub-list">${pubCards}</div>
      </section>
    `;
    return;
  }

  if (activeArea === "Selected") {
    const pubCards = displayPubs
      .map((pub) => renderPublicationCard(pub))
      .join("");

    groupedContainer.innerHTML = `
      <section class="pub-group all-view" id="area-selected">
        <div class="pub-group-head">
          <h3 class="pub-group-title">Selected Publications</h3>
        </div>
        <div class="pub-list">${pubCards}</div>
      </section>
    `;
    return;
  }

  const areaPubs = displayPubs;
  const pubCards = areaPubs
    .map((pub) => renderPublicationCard(pub))
    .join("");

  groupedContainer.innerHTML = `
    <section class="pub-group" id="area-${activeArea.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
      <div class="pub-group-head">
        <h3 class="pub-group-title">${activeArea}</h3>
        <div class="pub-count">${areaPubs.length} selected work${areaPubs.length === 1 ? "" : "s"}</div>
      </div>
      <div class="pub-list">${pubCards}</div>
    </section>
  `;
}

function renderPublicationCard(pub) {
  const formattedAuthors = formatPublicationAuthors(pub.authors);
  const imageSrc = pub.thumbnail || pub.image;
  const paperHref = typeof pub.href === "string" ? pub.href.trim() : "";
  const citationFile = typeof pub.citationFile === "string" ? pub.citationFile.trim() : "";
  // Display order: Project Page, Paper, Code / Dataset, everything else, Citation.
  const linkOrder = (label) => {
    const normalized = String(label || "").toLowerCase();
    if (normalized.includes("project")) return 0;
    if (normalized.includes("code") || normalized.includes("dataset")) return 2;
    return 3;
  };
  const renderPubLink = (link) => (
    link.href
      ? `<a href="${link.href}" target="_blank" rel="noopener noreferrer">[${link.label}]</a>`
      : `<span class="pub-link-placeholder">[${link.label}]</span>`
  );
  const sortedLinks = (pub.links || [])
    .map((link, index) => ({ link, index }))
    .sort((a, b) => linkOrder(a.link.label) - linkOrder(b.link.label) || a.index - b.index);
  const projectLinkItems = sortedLinks
    .filter(({ link }) => linkOrder(link.label) === 0)
    .map(({ link }) => renderPubLink(link));
  const otherLinkItems = sortedLinks
    .filter(({ link }) => linkOrder(link.label) !== 0)
    .map(({ link }) => renderPubLink(link));

  const paperLink = paperHref
    ? `<a href="${paperHref}" target="_blank" rel="noopener noreferrer">[Paper]</a>`
    : "";

  const badges = (pub.badges || [])
    .map((badgePath) => `<img src="${badgePath}" alt="Research artifact badge">`)
    .join("");

  const citationButton = citationFile
    ? `<button class="pub-citation-open" type="button" data-citation-file="${escapeHtml(citationFile)}">[Citation]</button>`
    : "";
  const patentHref = typeof pub.patentHref === "string" ? pub.patentHref.trim() : "";
  const patentLink = patentHref
    ? `<a href="${patentHref}" target="_blank" rel="noopener noreferrer">[Patent]</a>`
    : "";
  const resourceLinks = [...projectLinkItems, paperLink, ...otherLinkItems, citationButton, patentLink].filter(Boolean).join(" ");
  const awardLabel = pub.award ? `<span class="award-label">${pub.award}</span>` : "";
  const awardOfficialLink = pub.award && pub.awardHref
    ? `<a class="award-official-link" href="${pub.awardHref}" target="_blank" rel="noopener noreferrer">[Official]</a>`
    : "";

  return `
    <article class="pub-item" id="${getPublicationId(pub)}" data-area="${getAreas(pub).join(", ")}">
      <div class="pub-thumb" aria-hidden="${imageSrc ? "false" : "true"}">
        ${imageSrc ? `
          <button class="pub-thumb-button" type="button" data-publication-image-src="${escapeHtml(imageSrc)}" data-publication-image-alt="${escapeHtml(pub.title)}" aria-label="Open image: ${escapeHtml(pub.title)}">
            <img src="${imageSrc}" alt="${escapeHtml(pub.title)}">
          </button>
        ` : ""}
      </div>
      <div class="pub-content">
        <div class="pub-title">${pub.title}</div>
        <div class="pub-authors">${formattedAuthors}</div>
        <div class="pub-meta-row">
          <div class="pub-venue">${pub.venue}</div>
          ${badges ? `<div class="badge-row">${badges}</div>` : ""}
          ${resourceLinks ? `<div class="pub-links">${resourceLinks}</div>` : ""}
        </div>
        ${awardLabel ? `<div class="pub-award-row">${awardLabel}${awardOfficialLink}</div>` : ""}
      </div>
    </article>
  `;
}

function setupCitationModal() {
  const groupedContainer = document.getElementById("publication-groups");
  const modal = document.getElementById("citation-modal");
  const citationText = document.getElementById("citation-text");
  const copyButton = document.getElementById("citation-copy");
  const downloadButton = document.getElementById("citation-download");

  if (!groupedContainer || !modal || !citationText || !copyButton || !downloadButton) {
    return;
  }

  let activeCitationText = "";
  let activeCitationFile = "";
  let loadRequestId = 0;

  const setActionState = (enabled) => {
    copyButton.disabled = !enabled;
    downloadButton.disabled = !enabled;
  };

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("citation-modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("citation-modal-open");
  };

  const showUnavailableCitation = (citationFile) => {
    activeCitationText = "";
    setActionState(false);
    const localFileHint =
      window.location.protocol === "file:"
        ? "\n\nThis page is open as a local file, so the browser blocks JavaScript from loading BibTeX files. Preview the site through a local server instead:\n\npython -m http.server 8123\n\nThen open:\nhttp://127.0.0.1:8123/index.html"
        : "";
    citationText.textContent = `Citation file is not available yet.\n\nAdd a BibTeX file at:\n${citationFile}${localFileHint}`;
  };

  const loadCitation = (citationFile) => {
    const requestId = ++loadRequestId;
    activeCitationFile = citationFile;
    activeCitationText = "";
    citationText.textContent = "Loading citation...";
    setActionState(false);
    openModal();

    fetch(citationFile, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Citation file returned ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        if (requestId !== loadRequestId) {
          return;
        }

        if (!text.trim()) {
          citationText.textContent = `Citation file is empty.\n\nFile:\n${citationFile}`;
          setActionState(false);
          return;
        }

        activeCitationText = text;
        citationText.textContent = text;
        setActionState(true);
      })
      .catch(() => {
        if (requestId === loadRequestId) {
          showUnavailableCitation(citationFile);
        }
      });
  };

  groupedContainer.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : event.target.parentElement;
    const citationButton = target?.closest(".pub-citation-open");

    if (citationButton?.dataset.citationFile && groupedContainer.contains(citationButton)) {
      loadCitation(citationButton.dataset.citationFile);
    }
  });

  copyButton.addEventListener("click", () => {
    if (!activeCitationText) {
      return;
    }

    copyTextToClipboard(activeCitationText).then(() => {
      copyButton.textContent = "Copied";
      setTimeout(() => {
        if (copyButton.isConnected) {
          copyButton.textContent = "Copy";
        }
      }, 1200);
    });
  });

  downloadButton.addEventListener("click", () => {
    if (!activeCitationText) {
      return;
    }

    const blob = new Blob([activeCitationText], { type: "text/x-bibtex;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = getCitationFileName(activeCitationFile);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });

  modal.querySelectorAll("[data-citation-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

function setupNavHighlight() {
  const navLinks = [...document.querySelectorAll(".section-link")];
  const contentArea = document.querySelector("main.content-area");
  const sections = navLinks
    .map((link) => {
      const sectionId = link.getAttribute("href")?.replace("#", "");
      return sectionId ? document.getElementById(sectionId) : null;
    })
    .filter((section) => section && section.matches("main > section[id]"));

  if (!sections.length || !navLinks.length) {
    return;
  }

  const defaultSectionId = sections.some((section) => section.id === "about")
    ? "about"
    : sections[0].id;

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
    });
  };

  let pointerPosition = null;
  let pointerInsideContent = false;
  let clickedSectionId = null;
  let clickedSectionTimer = null;
  const canHover = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches ?? true;

  const clearClickedSection = () => {
    clickedSectionId = null;

    if (clickedSectionTimer) {
      clearTimeout(clickedSectionTimer);
      clickedSectionTimer = null;
    }
  };

  const holdClickedSection = (sectionId) => {
    clickedSectionId = sectionId;
    setActiveLink(sectionId);

    if (clickedSectionTimer) {
      clearTimeout(clickedSectionTimer);
      clickedSectionTimer = null;
    }

    if (canHover) {
      return;
    }

    clickedSectionTimer = setTimeout(() => {
      clickedSectionId = null;
      clickedSectionTimer = null;
      updateActiveSection();
    }, 1200);
  };

  const getNavSectionFromPoint = (clientX, clientY) => {
    const section = document
      .elementFromPoint(clientX, clientY)
      ?.closest("main > section[id]");

    return sections.includes(section) ? section : null;
  };

  const updateActiveSectionFromPointer = () => {
    if (!pointerInsideContent || !pointerPosition) {
      return false;
    }

    const section = getNavSectionFromPoint(pointerPosition.x, pointerPosition.y);
    if (!section) {
      return false;
    }

    setActiveLink(section.id);
    return true;
  };

  const updateActiveSectionFromScroll = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    let activeSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.bottom > 0;
    }) || sections[0];
    let largestVisibleArea = 0;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const visibleArea = Math.max(
        0,
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
      );

      if (visibleArea > largestVisibleArea) {
        largestVisibleArea = visibleArea;
        activeSection = section;
      }
    });

    setActiveLink(activeSection.id);
  };

  const updateActiveSection = () => {
    if (canHover && updateActiveSectionFromPointer()) {
      return;
    }

    if (clickedSectionId) {
      setActiveLink(clickedSectionId);
      return;
    }

    updateActiveSectionFromScroll();
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sectionId = link.getAttribute("href")?.replace("#", "");
      const section = sections.find((item) => item.id === sectionId);

      if (!section) {
        return;
      }

      pointerInsideContent = false;
      pointerPosition = null;
      holdClickedSection(section.id);
    });
  });

  if (canHover && contentArea) {
    const trackPointer = (event) => {
      clearClickedSection();
      pointerInsideContent = true;
      pointerPosition = {
        x: event.clientX,
        y: event.clientY
      };
    };

    contentArea.addEventListener("pointermove", (event) => {
      trackPointer(event);
      updateActiveSectionFromPointer();
    });

    contentArea.addEventListener("pointerleave", () => {
      pointerInsideContent = false;
    });

    sections.forEach((section) => {
      section.addEventListener("pointerenter", (event) => {
        trackPointer(event);
        setActiveLink(section.id);
      });
    });
  }

  setActiveLink(defaultSectionId);
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("scrollend", () => {
    if (!canHover) {
      clearClickedSection();
      updateActiveSection();
    }
  });
  window.addEventListener("resize", updateActiveSection);
}

function setupAudioButton() {
  const button = document.getElementById("play-name");
  const audio = document.getElementById("name-audio");
  button.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
  });
}

async function init() {
  renderNews();
  setupNewsImageViewer();
  renderTeaching();
  renderStudents();
  buildFilters();
  buildAreaNav();
  setupPublicationAreaPanel();
  renderPublications();
  setupPublicationImageViewer();
  setupCitationModal();
  setupNavHighlight();
  setupAudioButton();
  await loadScholarCitationCache();
  setupResearchMap();
}

document.addEventListener("DOMContentLoaded", init);
