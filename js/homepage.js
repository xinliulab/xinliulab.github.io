const newsItems = [
  {
    date: "Apr 2026",
    icon: "award",
    text: "Glad to see my students Bofan and Zhankai win awards at the Mobile Computing Demo Showcase and FSU CS Expo 2026, and even happier to witness their growth in research and presentation.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7448819669890875393/?originTrackingId=8j7J6DlmpvFNWquACaqPew%3D%3D"
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
    icon: "award",
    text: "Honored to receive this summer's Dean's Faculty Travel Award. I will use this opportunity to share our research and further increase FSU's research visibility and impact."
  },
  {
    date: "Feb 2026",
    icon: "cloud",
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
    icon: "flag",
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
      { label: "S26", href: "" }
    ]
  }
];

const students = [
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
        title: "ICCCN'26",
        href: ""
      },
      {
        title: "FG'26",
        href: ""
      }
    ]
  },
  {
    name: "Bofan Li",
    href: "https://bofan1120.github.io/",
    group: "alumni",
    currentRole: "Ph.D.",
    period: "2024 - 2026",
    initialPosition: "",
    publications: [
    {
        title: "S&P'26",
        href: "https://www.computer.org/csdl/proceedings-article/sp/2026/606500b617/2bojwh1qN2w"
      },
      {
        title: "Ubicomp'26",
        href: "https://dl.acm.org/doi/10.1145/3790111"
      }

    ]
  }
];

// Keep `citations` in sync with Google Scholar to drive ranking in filtered views.
const publications = [

    {
    title: "GeoMotionGPT: Geometry-Aligned Motion Understanding with Large Language Models",
    href: "https://arxiv.org/abs/2601.07632",
    authors: "Zhankai Ye, Bofan Li, Yukai Jin, Shuoqiu Li, Wei Wang, Yanfu Zhang, Shangqian Gao, Xin Liu",
    venue: "arXiv 2026",
    year: 2026,
    citations: null,
    selected: true,
    image: "./Figure/geomotiongpt.png",
    area: ["Foundation Models & AI"],
    links: [
      { label: "Code / Dataset", href: "https://github.com/JYe16/GeoMotionGPT" }
    ]
  },
    {
    title: "Fresco: A Permissioned Blockchain Framework for Securing Model Context Protocol",
    href: "",
    authors: "Zhankai Ye, Yusen Wu, Bingyang Wei, Shixian Shen, Yili Ren, Phuong Nguyen, Yelena Yesha, Xin Liu",
    venue: "IEEE ICCCN 2026",
    year: 2026,
    citations: null,
    selected: true,
    image: "./Figure/Fresco.png",
    area: ["Security & Privacy", "Foundation Models & AI"]
  },

    {
    title: "ARiSE: Efficient Mesh-Based Action Recognition from Wi-Fi Sensing on Edge Devices",
    href: "",
    authors: "Zhankai Ye, Shuoqiu Li, Bofan Li, Yili Ren, Bo Mei, Shangqian Gao, Xin Liu",
    venue: "IEEE FG 2026",
    year: 2026,
    citations: null,
    selected: true,
    image: "./Figure/arise.png",
    area: ["Integrated Sensing and Communication", "Foundation Models & AI"]
  },
  {
    title: "HydroChirp: Dynamic Chirp Shaping for Reliable and Ultra-Long-Range Underwater Communication",
    href: "",
    authors: "Chiyu Zhou, Zijian Wan, Baodong Chen, Zicheng Chi, Xin Liu, Wei Wang",
    venue: "IEEE INFOCOM 2026",
    year: 2026,
    citations: null,
    selected: null,
    image: "./Figure/hydrochirp.png",
    area: ["Integrated Sensing and Communication"]
  },
  {
    title: "2FiA: Towards WiFi Sensing-Based Authentication with Unique Biometrics",
    href: "https://www.computer.org/csdl/proceedings-article/sp/2026/606500b617/2bojwh1qN2w",
    authors: "Bofan Li, Zhankai Ye, Weikuan Yu, Yongning Tang, Xin Liu",
    venue: "IEEE S&P 2026",
    year: 2026,
    citations: null,
    selected: true,
    image: "./Figure/2FiA.png",
    area: ["Integrated Sensing and Communication", "Security & Privacy"],
    links: [
      { label: "Code / Dataset", href: "https://zenodo.org/records/17361618" }
    ],
    badges: [
      "./Figure/sp_available.png",
      "./Figure/sp_functional.png",
      "./Figure/sp_reproduced.png"
    ]
  },
  {
    title: "MURAL-Fi: Multi-User Respiration Authentication Leveraging Wi-Fi",
    href: "https://dl.acm.org/doi/10.1145/3790111",
    authors: "Bofan Li, Xin Liu, Yichao Wang, Yili Ren, Weikuan Yu",
    venue: "ACM IMWUT/UbiComp, 2026.",
    year: 2026,
    citations: null,
    image: "./Figure/muralfi.png",
    area: "Integrated Sensing and Communication"
  },
  {
    title: "0cal:  Zero-Cost Calibration for mmWave Networks",
    href: "",
    authors: "Xin Liu, Wei-Han Chen, Kannan Srinivasan",
    venue: "ACM SenSys 2026",
    year: 2026,
    citations: null,
    selected: true,
    image: "./Figure/0cal.png",
    area: "Millimeter Wave",
    links: [
      { label: "Code / Dataset", href: "https://zenodo.org/records/19609817" },
      { label: "Slides", href: "./publication/Slides_0cal.pdf" }
    ],
  },
  {
    title: "Energy-Efficient Paging for Duty-Cycled LTE Backscatter",
    href: "./publication/Paper_PScatter.pdf",
    authors: "Yunyun Feng, Xin Liu, Jia Zhao, Yuan Ding, Gongpu Wang, Wei Gong",
    venue: "IEEE INFOCOM 2025",
    year: 2025,
    citations: null,
    selected: false,
    image: "./Figure/pscatter.png",
    area: "Battery-Free IoT"
    // links: [
    //   { label: "Code / Dataset", href: "" }
    // ]
  },
  {
    title: "O-JRC: An Open Source Software Platform for mmWave Joint Radar-Communication Development and Experimentation",
    href: "https://doi.org/10.1016/j.comnet.2025.111337",
    authors: "Xin Liu, Haocheng Zhu, Eylem Ekici",
    venue: "Computer Networks 2025",
    year: 2025,
    citations: null,
    selected: true,
    image: "./Figure/ojrc.png",
    area: ["Integrated Sensing and Communication", "Millimeter Wave"], 
    links: [
      { label: "Website", href: "https://u.osu.edu/ekici/jrc-testbed/" },
      { label: "Code", href: "https://github.com/mmWave-MIMO-Testbed/O-JRC" }
    ]
  },
  {
    title: "Key Establishment for Secure Asymmetric Shared-Spectrum Wireless Network",
    href: "https://dl.acm.org/doi/10.1145/3634737.3637670",
    authors: "Wei Wang, Xin Liu, Zicheng Chi, Stuart Ray, Ting Zhu",
    venue: "ACM ASIACCS 2024",
    year: 2024,
    citations: null,
    image: "./Figure/kep.png",
    area: ["Shared-Spectrum Wireless Network", "Security & Privacy"]
  },
  {
    title: "FTP: Enabling Fast Beam-Training for Optimal mmWave Beamforming",
    href: "./publication/Paper_FTP.pdf",
    authors: "Wei-Han Chen, Xin Liu (co-primary), Kannan Srinivasan, Srinivasan Parthasarathy",
    venue: "IEEE INFOCOM 2024",
    year: 2024,
    citations: null,
    image: "./Figure/ftp.png",
    area: "Millimeter Wave",
    links: [
      { label: "Code / Dataset", href: "https://github.com/xinliulab/24InfoCom_FTP"}
    ]
  },
  {
    title: "Efficient Two-Way Edge Backscatter with Commodity Bluetooth",
    href: "./publication/Paper_EffBlue.pdf",
    authors: "Maoran Jiang, Xin Liu, Li Dong, Wei Gong",
    venue: "IEEE INFOCOM 2024",
    year: 2024,
    citations: null,
    image: "./Figure/effblue.png",
    area: "Battery-Free IoT"
    // links: [
    //   { label: "Code / Dataset", href: "https://github.com/xinliulab/24InfoCom_FTP" }
    // ]
  },
  {
    title: "Fast and Optimal Beam Alignment for Off-the-Shelf mmWave Devices",
    href: "./publication/Paper_Swift.pdf",
    authors: "Wei-Han Chen, Xin Liu, Kannan Srinivasan, Srinivasan Parthasarathy",
    venue: "ACM MobiWac 2023",
    year: 2023,
    citations: null,
    image: "./Figure/swift.png",
    area: "Millimeter Wave"
    // links: [
    //   { label: "Code / Dataset", href: "https://github.com/xinliulab/24InfoCom_FTP"}
    // ]
  },
  {
    title: "LightThief: Your Optical Communication Information is Stolen behind the Wall",
    href: "./publication/Paper_LightThief.pdf",
    authors: "Xin Liu, Wei Wang, Guanqun Song, Ting Zhu",
    venue: "USENIX Security 2023",
    year: 2023,
    citations: null,
    selected: true,
    image: "./Figure/LightThief.png",
    area: ["Battery-Free IoT", "Integrated Sensing and Communication", "Security & Privacy"],
  },
  {
    title: " A Secured Protocol for IoT Devices in Tactical Networks",
    href: "./publication/Paper_MILCOM.pdf",
    authors: "wei Wang, Zicheng Chi, Xin Liu, Ananth Vishnu Bhaskar, Ankit Baingane, Ryan Jahnige, Qingquan Zhang, Ting Zhu",
    venue: "IEEE MILCOM 2022",
    year: 2022,
    citations: null,
    image: "./Figure/milcom.png",
    area: ["Shared-Spectrum Wireless Network", "Security & Privacy"]
  },
  {
    title: "I Can See the Light: Attacks on Autonomous Vehicles Using Invisible Lights",
    href: "./publication/Paper_ICSL.pdf",
    authors: "Wei Wang, Yao Yao, Xin Liu, Xiang Li, Hao Pei, Ting Zhu",
    venue: "ACM CCS 2021",
    year: 2021,
    citations: null,
    image: "./Figure/ICSL.png",
    area: "Security & Privacy"
  },
  {
    title: "Exploiting Wi-Fi AP for Simultaneous Data Dissemination among Wi-Fi and ZigBee Devices",
    href: "./publication/Paper_ETC.pdf",
    authors: "Wei Wang, Xin Liu, Yao Yao, Ting Zhu",
    venue: "IEEE ICNP 2021",
    year: 2021,
    citations: null,
    image: "./Figure/etc.png",
    area: ["Shared-Spectrum Wireless Network"]
  },
  {
    title: "Verification and Redesign of OFDM Backscatter",
    href: "./publication/Paper_TScatter.pdf",
    authors: "Xin Liu, Zicheng Chi, Wei Wang, Yao Yao, Pei Hao, Ting Zhu",
    venue: "USENIX NSDI 2021",
    year: 2021,
    citations: null,
    selected: true,
    image: "./Figure/TScatter.png",
    area: "Battery-Free IoT",
    links: [
      { label: "Code", href: "https://github.com/EMDCYY/TScatter" },
      // { label: "Circuit", href: "https://github.com/pengyuzhang/HitchHike" },
      { label: "Presentation", href: "https://www.youtube.com/watch?v=He8KyfwjxqYr" }
    ]
  },
   {
    title: "Countering Cross-Technology Jamming Attack",
    href: "./publication/Paper_WiSec20.pdf",
    authors: "Zicheng Chi, Yan Li, Xin Liu, Wei Wang, Yao Yao, Ting Zhu, Yanchao Zhang",
    venue: "ACM WiSec 2020",
    year: 2020,
    citations: null,
    image: "Figure/WiSec20.png",
    area: ["Shared-Spectrum Wireless Network", "Security & Privacy"],
  }, 
  {
    title: "VMscatter: A Versatile MIMO Backscatter",
    href: "./publication/Paper_VMscatter.pdf",
    authors: "Xin Liu, Zicheng Chi, Wei Wang, Yao Yao, Ting Zhu",
    venue: "USENIX NSDI 2020",
    year: 2020,
    citations: null,
    selected: true,
    image: "./Figure/VMscatter.png",
    area: "Battery-Free IoT",
    links: [
      { label: "Code", href: "https://github.com/EMDCYY/VMscatter" },
      // { label: "Circuit", href: "https://github.com/EMDCYY/VMscatter" },
      { label: "Presentation", href: "https://www.youtube.com/watch?v=VmTwuIvwjZ8" }
    ]
  },
  {
    title: "Leveraging Ambient LTE Traffic for Ubiquitous Passive Communication",
    href: "./publication/Paper_LScatter.pdf",
    authors: "Zicheng Chi, Xin Liu (co-primary), Wei Wang, Yao Yao, Ting Zhu",
    venue: "ACM SIGCOMM 2020",
    year: 2020,
    citations: null,
    selected: true,
    image: "./Figure/LScatter.png",
    area: "Battery-Free IoT",
  },
  {
    title: "Parallel Inclusive Communication for Connecting Heterogeneous IoT Devices at the Edge",
    href: "./publication/Paper_PIC.pdf",
    authors: "Zicheng Chi, Yan Li, Xin Liu, Yao Yao, Yanchao Zhang, Ting Zhu",
    venue: "ACM SenSys 2019",
    year: 2019,
    citations: null,
    selected: null,
    image: "./Figure/PIC.png",
    area: "Shared-Spectrum Wireless Network",
    award: "Best Paper Award Candidate"
  },
  {
    title: "CRF: Coexistent Routing and Flooding using Wi-Fi Packets in Heterogeneous IoT Networks",
    href: "./publication/Paper_CRF.pdf",
    authors: "Wei Wang, Xin Liu, Yao Yao, Yan Pan, Zicheng Chi, Ting Zhu",
    venue: "IEEE INFOCOM 2019",
    year: 2019,
    citations: null,
    image: "./Figure/CRF.png",
    area: "Shared-Spectrum Wireless Network",
  },
  {
    title: "Passive-ZigBee: Enabling ZigBee Communication in IoT Networks with 1000X+ Less Power Consumption",
    href: "./publication/Paper_PassiveZigBee.pdf",
    authors: "Yan Li, Zicheng Chi, Xin Liu, Ting Zhu",
    venue: "ACM SenSys 2018",
    year: 2018,
    citations: null,
    selected: null,
    image: "./Figure/PassiveZigbee.png",
    area: ["Battery-Free IoT", "Shared-Spectrum Wireless Network"],
    award: "Best Paper Runner-up Award"
  },
  {
    title: "EAR: Exploit Uncontrollable Ambient RF Signals in Heterogeneous Networks for Gesture Recognition",
    href: "./publication/Paper_EAR.pdf",
    authors: "Zicheng Chi, Yao Yao, Tiantian Xie, Xin Liu, Zhichuan Huang, Wei Wang, Ting Zhu",
    venue: "ACM SenSys 2018",
    year: 2018,
    citations: null,
    image: "./Figure/EAR.png",
    area: "Integrated Sensing and Communication",
  },
  {
    title: "Chiron: Concurrent High Throughput Communication for IoT Devices",
    href: "./publication/Paper_Chiron.pdf",
    authors: "Yan Li, Zicheng Chi, Xin Liu, Ting Zhu",
    venue: "ACM MobiSys 2018",
    year: 2018,
    citations: null,
    image: "./Figure/Chiron.png",
    area: "Shared-Spectrum Wireless Network"
  },
    {
    title: "Aegis: An Interference-Negligible RF Sensing Shield",
    href: "./publication/Paper_Aegis.pdf",
    authors: "Yao Yao, Yan Li, Xin Liu, Zicheng Chi, Wei Wang, Tiantian Xie, Ting Zhu",
    venue: "IEEE INFOCOM 2018",
    year: 2018,
    citations: null,
    image: "./Figure/aegis.png",
    area: ["Integrated Sensing and Communication", "Security & Privacy"],
  }
];

const orderedAreas = [
  "Integrated Sensing and Communication",
  "Battery-Free IoT",
  "Millimeter Wave",
  "Shared-Spectrum Wireless Network",
  "Security & Privacy",
  "Foundation Models & AI"
];

const publicationOrder = new Map(publications.map((pub, index) => [pub.title, index]));

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

function renderNews() {
  const container = document.getElementById("news-list");
  container.innerHTML = newsItems
    .map((item) => {
      const links = (item.links || [])
        .map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
        .join(" | ");
      return `
        <article class="timeline-item">
          <div><strong>[${item.date}]</strong> ${item.text}${links ? ` (${links})` : ""}</div>
        </article>
      `;
    })
    .join("");
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
  const currentStudents = students.filter((student) => student.group !== "alumni");
  const alumniStudents = students.filter((student) => student.group === "alumni");

  const renderStudent = (student) => {
    const name = student.href
      ? `<a class="student-name-link" href="${student.href}" target="_blank" rel="noopener noreferrer">${student.name}</a>`
      : student.name;
    const publications = (student.publications || [])
      .map((publication) => {
        if (!publication.href) {
          return `<span class="student-publication">${publication.title}</span>`;
        }
        return `<a class="student-publication" href="${publication.href}" target="_blank" rel="noopener noreferrer">${publication.title}</a>`;
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
  areaNav.innerHTML = ["Selected", ...orderedAreas, "All"]
    .map((area) => `<button class="area-chip ${activeArea === area ? "active" : ""}" type="button" data-area="${area}">${area}</button>`)
    .join("");

  areaNav.querySelectorAll(".area-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveArea(btn.dataset.area);
      const publicationsSection = document.getElementById("publications");
      publicationsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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
  const formattedAuthors = emphasizeMyName(pub.authors);
  const links = (pub.links || [])
    .map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">[${link.label}]</a>`)
    .join(" ");

  const badges = (pub.badges || [])
    .map((badgePath) => `<img src="${badgePath}" alt="Research artifact badge">`)
    .join("");

  return `
    <article class="pub-item" data-area="${getAreas(pub).join(", ")}">
      <img src="${pub.image}" alt="${pub.title}">
      <div>
        <div class="pub-title"><a href="${pub.href}" target="_blank" rel="noopener noreferrer">${pub.title}</a></div>
        <div class="pub-authors">${formattedAuthors}</div>
        <div class="pub-meta-row">
          <div class="pub-venue">${pub.venue}</div>
          ${pub.award ? `<div class="award-label">${pub.award}</div>` : ""}
          ${badges ? `<div class="badge-row">${badges}</div>` : ""}
          ${links ? `<div class="pub-links">${links}</div>` : ""}
        </div>
      </div>
    </article>
  `;
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
  updateActiveSection();
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

function init() {
  renderNews();
  renderTeaching();
  renderStudents();
  buildFilters();
  buildAreaNav();
  renderPublications();
  setupNavHighlight();
  setupAudioButton();
}

document.addEventListener("DOMContentLoaded", init);
