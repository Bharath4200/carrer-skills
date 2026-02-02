const colors = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #43cea2, #185a9d)",
  "linear-gradient(135deg, #ff512f, #dd2476)",
  "linear-gradient(135deg, #00b09b, #96c93d)",
  "linear-gradient(135deg, #fc466b, #3f5efb)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #56ccf2, #2f80ed)",
  "linear-gradient(135deg, #8360c3, #2ebf91)",
  "linear-gradient(135deg, #ff9966, #ff5e62)",
  "linear-gradient(135deg, #11998e, #38ef7d)"
];

const careers = [

/* ================= IT & TECH ================= */
{ name: "Frontend Developer", desc: "Build website UI", duration: "6–8 months", dailyTime: "2–3 hrs", skills: ["HTML","CSS","JS","React"] },
{ name: "Backend Developer", desc: "Server & APIs", duration: "8–10 months", dailyTime: "3 hrs", skills: ["Java","SQL","Spring"] },
{ name: "Full Stack Developer", desc: "Frontend + Backend", duration: "10–12 months", dailyTime: "3–4 hrs", skills: ["HTML","JS","Backend"] },
{ name: "Data Analyst", desc: "Analyze data", duration: "5–6 months", dailyTime: "2 hrs", skills: ["Excel","SQL","Python"] },
{ name: "Data Scientist", desc: "Data & ML models", duration: "10–12 months", dailyTime: "3 hrs", skills: ["Python","ML","Stats"] },
{ name: "ML Engineer", desc: "Machine learning systems", duration: "12 months", dailyTime: "3–4 hrs", skills: ["Python","ML","DL"] },
{ name: "AI Engineer", desc: "AI applications", duration: "12 months", dailyTime: "3 hrs", skills: ["AI","ML","Python"] },
{ name: "Cyber Security Analyst", desc: "System security", duration: "8 months", dailyTime: "2–3 hrs", skills: ["Networking","Security"] },
{ name: "Ethical Hacker", desc: "Penetration testing", duration: "10 months", dailyTime: "3 hrs", skills: ["Linux","Networking"] },
{ name: "Cloud Engineer", desc: "Cloud infrastructure", duration: "6–8 months", dailyTime: "2 hrs", skills: ["AWS","Linux"] },
{ name: "DevOps Engineer", desc: "CI/CD pipelines", duration: "8 months", dailyTime: "3 hrs", skills: ["Docker","Linux"] },
{ name: "Blockchain Developer", desc: "Blockchain apps", duration: "10 months", dailyTime: "3 hrs", skills: ["Solidity","Ethereum"] },
{ name: "Mobile App Developer", desc: "Android/iOS apps", duration: "6–8 months", dailyTime: "2 hrs", skills: ["Java","Flutter"] },
{ name: "Game Developer", desc: "Game development", duration: "12 months", dailyTime: "3 hrs", skills: ["Unity","C#"] },
{ name: "UI/UX Designer", desc: "User experience design", duration: "4–6 months", dailyTime: "2 hrs", skills: ["Figma","UX"] },

/* ================= GOVERNMENT ================= */
{ name: "IAS Officer", desc: "Civil services", duration: "2–3 years", dailyTime: "6 hrs", skills: ["UPSC","GS"] },
{ name: "IPS Officer", desc: "Police services", duration: "2–3 years", dailyTime: "6 hrs", skills: ["UPSC","Law"] },
{ name: "IRS Officer", desc: "Revenue services", duration: "2 years", dailyTime: "6 hrs", skills: ["UPSC","Tax"] },
{ name: "Indian Army Officer", desc: "Army services", duration: "1–2 years", dailyTime: "5 hrs", skills: ["NDA","SSB"] },
{ name: "Indian Navy Officer", desc: "Navy services", duration: "1–2 years", dailyTime: "5 hrs", skills: ["NDA","SSB"] },
{ name: "Indian Air Force Officer", desc: "Airforce services", duration: "1–2 years", dailyTime: "5 hrs", skills: ["NDA","SSB"] },
{ name: "Bank PO", desc: "Bank officer", duration: "8 months", dailyTime: "4 hrs", skills: ["Aptitude","Reasoning"] },
{ name: "SSC Officer", desc: "Govt jobs", duration: "6–8 months", dailyTime: "4 hrs", skills: ["Quant","English"] },
{ name: "Railway Officer", desc: "Railway jobs", duration: "6 months", dailyTime: "4 hrs", skills: ["Technical","Aptitude"] },
{ name: "Judicial Officer", desc: "Judge", duration: "2 years", dailyTime: "6 hrs", skills: ["Law","Judiciary"] },
{ name: "State PSC Officer", desc: "State services", duration: "1–2 years", dailyTime: "5 hrs", skills: ["GS","State syllabus"] },

/* ================= SPORTS ================= */
{ name: "Cricketer", desc: "Professional cricket", duration: "Years", dailyTime: "6 hrs", skills: ["Fitness","Skill"] },
{ name: "Footballer", desc: "Professional football", duration: "Years", dailyTime: "6 hrs", skills: ["Stamina","Technique"] },
{ name: "Athlete", desc: "Track & field", duration: "Years", dailyTime: "5 hrs", skills: ["Speed","Strength"] },
{ name: "Badminton Player", desc: "Professional badminton", duration: "Years", dailyTime: "5 hrs", skills: ["Agility"] },
{ name: "Kabaddi Player", desc: "Kabaddi sport", duration: "Years", dailyTime: "5 hrs", skills: ["Strength"] },
{ name: "Sports Coach", desc: "Train athletes", duration: "6 months", dailyTime: "4 hrs", skills: ["Coaching"] },
{ name: "Fitness Trainer", desc: "Physical training", duration: "4 months", dailyTime: "3 hrs", skills: ["Workout","Nutrition"] },

/* ================= CINEMA & MEDIA ================= */
{ name: "Actor", desc: "Film acting", duration: "No limit", dailyTime: "Practice", skills: ["Acting","Expression"] },
{ name: "Film Director", desc: "Movie direction", duration: "Years", dailyTime: "5 hrs", skills: ["Storytelling"] },
{ name: "Film Producer", desc: "Film production", duration: "Years", dailyTime: "5 hrs", skills: ["Management"] },
{ name: "Screenwriter", desc: "Script writing", duration: "6 months", dailyTime: "3 hrs", skills: ["Writing"] },
{ name: "Cinematographer", desc: "Camera work", duration: "1 year", dailyTime: "4 hrs", skills: ["Camera","Lighting"] },
{ name: "Video Editor", desc: "Video editing", duration: "4 months", dailyTime: "2 hrs", skills: ["Premiere Pro"] },
{ name: "Music Director", desc: "Music composition", duration: "Years", dailyTime: "Practice", skills: ["Music"] },
{ name: "Playback Singer", desc: "Singing", duration: "Years", dailyTime: "Practice", skills: ["Voice"] },
{ name: "YouTuber", desc: "Content creator", duration: "Flexible", dailyTime: "3 hrs", skills: ["Creativity"] },

/* ================= MEDICAL ================= */
{ name: "Doctor", desc: "Medical practitioner", duration: "5+ years", dailyTime: "6 hrs", skills: ["Medicine"] },
{ name: "Nurse", desc: "Patient care", duration: "3 years", dailyTime: "5 hrs", skills: ["Care"] },
{ name: "Pharmacist", desc: "Medicine expert", duration: "4 years", dailyTime: "4 hrs", skills: ["Pharmacy"] },
{ name: "Physiotherapist", desc: "Physical therapy", duration: "4 years", dailyTime: "4 hrs", skills: ["Rehab"] },

/* ================= BUSINESS & OTHERS ================= */
{ name: "Business Analyst", desc: "Business analysis", duration: "6 months", dailyTime: "2 hrs", skills: ["Excel","SQL"] },
{ name: "Product Manager", desc: "Product planning", duration: "1 year", dailyTime: "3 hrs", skills: ["Agile"] },
{ name: "Digital Marketer", desc: "Online marketing", duration: "4 months", dailyTime: "2 hrs", skills: ["SEO","Ads"] },
{ name: "Chartered Accountant", desc: "Finance expert", duration: "3–4 years", dailyTime: "6 hrs", skills: ["Accounts"] },
{ name: "Entrepreneur", desc: "Startup founder", duration: "No limit", dailyTime: "Flexible", skills: ["Leadership"] },
{ name: "Teacher", desc: "Teaching profession", duration: "1 year", dailyTime: "4 hrs", skills: ["Teaching"] },
{ name: "Professor", desc: "College faculty", duration: "PhD", dailyTime: "5 hrs", skills: ["Research"] },
{ name: "Graphic Designer", desc: "Visual design", duration: "4 months", dailyTime: "2 hrs", skills: ["Photoshop"] }
];

/* ====== LOGIC ====== */
const careerCards = document.getElementById("careerCards");
const careerDetails = document.getElementById("careerDetails");

function loadCareers(list = careers) {
  careerCards.innerHTML = "";

  list.forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "career-card";

    // 🎨 Apply different color to each card
    div.style.background = colors[index % colors.length];

    div.innerHTML = `
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
    `;

    div.onclick = () => showDetails(c);
    careerCards.appendChild(div);
  });
}

const doraemon = document.getElementById("doraemon");
const message = document.getElementById("doraemon-msg");

doraemon.addEventListener("click", () => {
  message.style.display =
    message.style.display === "block" ? "none" : "block";
});



function showDetails(c) {
  careerDetails.innerHTML = `
    <h2>${c.name}</h2>
    <p><b>Duration:</b> ${c.duration}</p>
    <p><b>Daily Time:</b> ${c.dailyTime}</p>
    <ul>${c.skills.map(s => `<li>✔ ${s}</li>`).join("")}</ul>
  `;
}

function searchCareer() {
  const v = document.getElementById("searchInput").value.toLowerCase();
  loadCareers(careers.filter(c => c.name.toLowerCase().includes(v)));
}

loadCareers();

