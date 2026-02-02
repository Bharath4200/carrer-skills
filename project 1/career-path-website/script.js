// Canvas Background Animation
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = [];
for(let i=0;i<50;i++){
  circles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,radius:Math.random()*20+5,dx:(Math.random()-0.5)*1.5,dy:(Math.random()-0.5)*1.5,color:`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.3)`});
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  circles.forEach(c=>{
    ctx.beginPath();
    ctx.arc(c.x,c.y,c.radius,0,Math.PI*2);
    ctx.fillStyle=c.color;
    ctx.fill();
    c.x+=c.dx; c.y+=c.dy;
    if(c.x<0||c.x>canvas.width)c.dx*=-1;
    if(c.y<0||c.y>canvas.height)c.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

// 50–100 careers data (sample 10 here)
const careersData = {
  "Frontend Engineer": {skills:["HTML","CSS","JS","React"],roadmap:["HTML & CSS 2w","JS 3w","React 3w","Projects 4w"],estimated_time:"12w",color:"#FFD700"},
  "Backend Engineer": {skills:["Node","Express","DB"],roadmap:["Node 2w","Express 2w","DB 3w","Projects 3w"],estimated_time:"10w",color:"#FF8C00"},
  "Data Analyst": {skills:["Excel","SQL","Python"],roadmap:["Excel 1w","SQL 2w","Python 2w","Projects 3w"],estimated_time:"8w",color:"#00BFFF"},
  "Machine Learning Engineer": {skills:["Python","ML","DL"],roadmap:["Python 2w","ML 3w","DL 3w","Projects 3w"],estimated_time:"11w",color:"#32CD32"},
  "IAS": {skills:["Polity","Current Affairs"],roadmap:["Syllabus 1w","NCERT 3w","Current Affairs 6w","Mock 4w"],estimated_time:"14w",color:"#8A2BE2"},
  "IPS": {skills:["Law","Fitness"],roadmap:["Syllabus 1w","Law 4w","Current Affairs 6w","Physical 4w"],estimated_time:"15w",color:"#FF1493"},
  "Software Tester": {skills:["Selenium","Manual Testing"],roadmap:["Learn 2w","Projects 2w"],estimated_time:"6w",color:"#20B2AA"},
  "Cloud Engineer": {skills:["AWS","Azure"],roadmap:["AWS 3w","Azure 3w","Projects 2w"],estimated_time:"8w",color:"#FF4500"},
  "UI/UX Designer": {skills:["Figma","Adobe XD"],roadmap:["Learn 2w","Practice 3w","Projects 3w"],estimated_time:"8w",color:"#8B0000"},
  "Cyber Security Analyst": {skills:["Networking","Python","Pen Testing"],roadmap:["Learn 3w","Practice 3w","Projects 3w"],estimated_time:"9w",color:"#4B0082"}
};

// Elements
const searchBtn = document.getElementById('searchBtn');
const careerInput = document.getElementById('careerInput');
const resultDiv = document.getElementById('result');
const autocompleteList = document.getElementById('autocomplete');
const doraemonBtn = document.getElementById('doraemonBtn');

// Doraemon animation
let eyesClosed = false;
doraemonBtn.addEventListener('click', ()=>{
  eyesClosed = !eyesClosed;
  doraemonBtn.src = eyesClosed ? 'assets/doraemon-closed.png' : 'assets/doraemon.png';
  const career = careerInput.value.trim();
  showCareer(career);
});

// Autocomplete
careerInput.addEventListener('input', ()=>{
  const query = careerInput.value.toLowerCase();
  autocompleteList.innerHTML = '';
  if(!query) return;
  Object.keys(careersData).filter(c=>c.toLowerCase().includes(query)).forEach(s=>{
    const li=document.createElement('li');
    li.textContent = s;
    li.addEventListener('click',()=>{
      careerInput.value=s;
      autocompleteList.innerHTML='';
      showCareer(s);
    });
    autocompleteList.appendChild(li);
  });
});

// Search
searchBtn.addEventListener('click', ()=>{
  const career = careerInput.value.trim();
  showCareer(career);
});

// Display Career Cards
function showCareer(career){
  const data = careersData[career];
  if(!data){ resultDiv.innerHTML=`<p>No data found for "${career}"</p>`; return; }

  let html = `<div class="career-card" style="border-color:${data.color}">`;
  html += `<h2>${career}</h2><h3>Skills Required:</h3><ul>`;
  data.skills.forEach(s=>html+=`<li>${s}</li>`);
  html += `</ul><h3>Roadmap:</h3>`;
  data.roadmap.forEach(step=>html+=`<div class="progress-container"><div class="progress-bar" style="background:${data.color};"></div><p>${step}</p></div>`);
  html += `<h3>Estimated Time: ${data.estimated_time}</h3></div>`;
  resultDiv.innerHTML = html;
}
