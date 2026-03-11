const newsItems = [
  {
    date: "Mar 2026",
    icon: "award",
    text: "Honored to receive this summer's Dean's Faculty Travel Award. I will use this opportunity to share our research and further increase FSU's research visibility and impact."
  },
  {
    date: "Feb 2026",
    icon: "cloud",
    text: "Honored to be awarded the FSU-AWS Research Acceleration Award. We will leverage $20K AWS cloud credits to accelerate research on large-scale wireless channel rendering."
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
        label: "Go Noles",
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
    name: "CIS 5370: Computer Security",
    href: "https://xinliulab.github.io/FSU-CIS5370-Computer-Security/",
    evaluations: [
      { label: "S25", href: "./publication/CIS5370-0001.sp25COMPUTERSECURITY_XinLiu.pdf" }
    ]
  },
  {
    name: "CIS 4(5)930: Future Edge Networks and Distributed Intelligence",
    href: "https://xinliulab.github.io/FSU-CIS4930-CIS5930-Future-Edge-Networks/",
    evaluations: [
      { label: "S26", href: "" }
    ]
  }
];

const students = [
  {
    name: "Zhuoyuan Liu",
    role: "Ph.D. student",
    period: "Fall 2025 - now"
  },
  {
    name: "Bofan Li",
    role: "Ph.D. student",
    period: "Spring 2025 - now",
    href: "https://bofan1120.github.io/"
  },
  {
    name: "Zhankai Ye",
    role: "Ph.D. student",
    period: "Fall 2024 - now"
  }
];

const publications = [
  {
    title: "2FiA: Towards WiFi Sensing-Based Authentication with Unique Biometrics",
    href: "https://www.computer.org/csdl/proceedings-article/sp/2026/606500b617/2bojwh1qN2w",
    authors: "Bofan Li, Zhankai Ye, Weikuan Yu, Yongning Tang, Xin Liu",
    venue: "IEEE S&P 2026",
    year: 2026,
    image: "./Figure/2FiA.png",
    area: "Integrated Sensing and Communication",
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
    title: "O-JRC: An Open Source Software Platform for mmWave Joint Radar-Communication Development and Experimentation",
    href: "https://doi.org/10.1016/j.comnet.2025.111337",
    authors: "Xin Liu, Haocheng Zhu, Eylem Ekici",
    venue: "Computer Networks 2025",
    year: 2025,
    image: "./Figure/ojrc.png",
    area: ["Integrated Sensing and Communication", "Millimeter Wave Communication"], 
    links: [
      { label: "Website", href: "https://u.osu.edu/ekici/jrc-testbed/" },
      { label: "Code", href: "https://github.com/mmWave-MIMO-Testbed/O-JRC" }
    ]
  },
  {
    title: "FTP: Enabling Fast Beam-Training for Optimal mmWave Beamforming",
    href: "./publication/Paper_FTP.pdf",
    authors: "Wei-Han Chen, Xin Liu (co-primary), Kannan Srinivasan, Srinivasan Parthasarathy",
    venue: "IEEE INFOCOM 2024",
    year: 2024,
    image: "./Figure/ftp.png",
    area: "Millimeter Wave Communication",
    links: [
      { label: "Code / Dataset", href: "https://github.com/xinliulab/24InfoCom_FTP" }
    ]
  },
  {
    title: "LightThief: Your Optical Communication Information is Stolen behind the Wall",
    href: "./publication/Paper_LightThief.pdf",
    authors: "Xin Liu, Wei Wang, Guanqun Song, Ting Zhu",
    venue: "USENIX Security 2023",
    year: 2023,
    image: "./Figure/LightThief.png",
    area: ["Ultra-Low-Power Communication", "Integrated Sensing and Communication", "Security"],
  },
  {
    title: "Verification and Redesign of OFDM Backscatter",
    href: "./publication/Paper_TScatter.pdf",
    authors: "Xin Liu, Zicheng Chi, Wei Wang, Yao Yao, Pei Hao, Ting Zhu",
    venue: "USENIX NSDI 2021",
    year: 2021,
    image: "./Figure/TScatter.png",
    area: "Ultra-Low-Power Communication",
    links: [
      { label: "Code", href: "https://github.com/EMDCYY/TScatter" },
      { label: "Circuit", href: "https://github.com/pengyuzhang/HitchHike" },
      { label: "Talk", href: "https://www.youtube.com/watch?v=He8KyfwjxqYr" }
    ]
  },
  {
    title: "VMscatter: A Versatile MIMO Backscatter",
    href: "./publication/Paper_VMscatter.pdf",
    authors: "Xin Liu, Zicheng Chi, Wei Wang, Yao Yao, Ting Zhu",
    venue: "USENIX NSDI 2020",
    year: 2020,
    image: "./Figure/VMscatter.png",
    area: "Ultra-Low-Power Communication",
    links: [
      { label: "Code", href: "https://github.com/EMDCYY/VMscatter" },
      { label: "Circuit", href: "https://github.com/EMDCYY/VMscatter" },
      { label: "Talk", href: "https://www.youtube.com/watch?v=VmTwuIvwjZ8" }
    ]
  },
  {
    title: "Leveraging Ambient LTE Traffic for Ubiquitous Passive Communication",
    href: "./publication/Paper_LScatter.pdf",
    authors: "Zicheng Chi, Xin Liu (co-primary), Wei Wang, Yao Yao, Ting Zhu",
    venue: "ACM SIGCOMM 2020",
    year: 2020,
    image: "./Figure/LScatter.png",
    area: "Ultra-Low-Power Communication",
  },
  {
    title: "Parallel Inclusive Communication for Connecting Heterogeneous IoT Devices at the Edge",
    href: "./publication/Paper_PIC.pdf",
    authors: "Zicheng Chi, Yan Li, Xin Liu, Yao Yao, Yanchao Zhang, Ting Zhu",
    venue: "ACM SenSys 2019",
    year: 2019,
    image: "./Figure/PIC.png",
    area: "Cross-Technology Communication"
  },
  {
    title: "Chiron: Concurrent High Throughput Communication for IoT Devices",
    href: "./publication/Paper_Chiron.pdf",
    authors: "Yan Li, Zicheng Chi, Xin Liu, Ting Zhu",
    venue: "ACM MobiSys 2018",
    year: 2018,
    image: "./Figure/Chiron.png",
    area: "Cross-Technology Communication"
  },
  {
    title: "Passive-ZigBee: Enabling ZigBee Communication in IoT Networks with 1000X+ Less Power Consumption",
    href: "./publication/Paper_PassiveZigBee.pdf",
    authors: "Yan Li, Zicheng Chi, Xin Liu, Ting Zhu",
    venue: "ACM SenSys 2018",
    year: 2018,
    image: "./Figure/PassiveZigbee.png",
    area: ["Ultra-Low-Power Communication", "Cross-Technology Communication"]
  },
  {
    title: "EAR: Exploit Uncontrollable Ambient RF Signals in Heterogeneous Networks for Gesture Recognition",
    href: "./publication/Paper_EAR.pdf",
    authors: "Zicheng Chi, Yao Yao, Tiantian Xie, Xin Liu, Zhichuan Huang, Wei Wang, Ting Zhu",
    venue: "ACM SenSys 2018",
    year: 2018,
    image: "./Figure/EAR.png",
    area: "Integrated Sensing and Communication",
  },
  {
    title: "I Can See the Light: Attacks on Autonomous Vehicles Using Invisible Lights",
    href: "./publication/Paper_ICSL.pdf",
    authors: "Wei Wang, Yao Yao, Xin Liu, Xiang Li, Hao Pei, Ting Zhu",
    venue: "ACM CCS 2021",
    year: 2021,
    image: "./Figure/ICSL.png",
    area: "Security"
  }
];

const orderedAreas = [
  "Ultra-Low-Power Communication",
  "Cross-Technology Communication",
  "Millimeter Wave Communication",
  "Integrated Sensing and Communication",
  "Security"
];

let activeArea = "All";

function getAreas(pub) {
  return Array.isArray(pub.area) ? pub.area : [pub.area];
}

function sortByYearDesc(items) {
  return [...items].sort((a, b) => (b.year - a.year) || a.title.localeCompare(b.title));
}

function newsIconSvg(name) {
  const icons = {
    award: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='8' r='4'/><path d='m8 14 1.5 6L12 18l2.5 2 1.5-6'/></svg>",
    cloud: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9.7-1.4A4 4 0 0 0 7 18z'/></svg>",
    paper: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M6 2h9l5 5v15H6z'/><path d='M14 2v6h6'/></svg>",
    grant: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='12' r='8'/><path d='M8 12h8M12 8v8'/></svg>",
    flag: "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M5 3v18'/><path d='M5 4h11l-2 4 2 4H5'/></svg>"
  };
  return icons[name] || icons.paper;
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
          <span class="news-icon" aria-hidden="true">${newsIconSvg(item.icon)}</span>
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
            return `<span>${item.label}</span>`;
          }
          return `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`;
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
  container.innerHTML = students
    .map((student) => {
      const name = student.href
        ? `<a href="${student.href}" target="_blank" rel="noopener noreferrer">${student.name}</a>`
        : student.name;
      return `<li>${name}, ${student.role}, ${student.period}</li>`;
    })
    .join("");
}

function buildFilters() {
  const filterContainer = document.getElementById("pub-filters");
  const allAreas = ["All", ...orderedAreas];
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
  areaNav.innerHTML = ["All", ...orderedAreas]
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
  const sortedPubs = sortByYearDesc(publications);

  const filteredPubs = sortedPubs.filter((pub) => activeArea === "All" || getAreas(pub).includes(activeArea));
  resultMeta.textContent = `${filteredPubs.length} publication${filteredPubs.length === 1 ? "" : "s"} shown`;

  if (activeArea === "All") {
    const pubCards = filteredPubs
      .map((pub) => {
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
              <div class="pub-authors">${pub.authors}</div>
              <div class="pub-venue"><em>${pub.venue}</em></div>
              ${links ? `<div class="pub-links">${links}</div>` : ""}
              ${badges ? `<div class="badge-row">${badges}</div>` : ""}
            </div>
          </article>
        `;
      })
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

  const areaPubs = filteredPubs;
  const pubCards = areaPubs
    .map((pub) => {
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
            <div class="pub-authors">${pub.authors}</div>
            <div class="pub-venue"><em>${pub.venue}</em></div>
            ${links ? `<div class="pub-links">${links}</div>` : ""}
            ${badges ? `<div class="badge-row">${badges}</div>` : ""}
          </div>
        </article>
      `;
    })
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

function setupNavHighlight() {
  const sections = [...document.querySelectorAll("main section")];
  const navLinks = [...document.querySelectorAll(".section-link")];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach((section) => observer.observe(section));
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
