const navbar = document.querySelector('.primary-nav');
const toggle = document.querySelector('.navbar-toggler');
const menu=document.getElementById('menu');
const closee=document.getElementById('close');



toggle.addEventListener("click",()=>{
    const checker= navbar.getAttribute("data-visible");
    if(checker==="false")
    {
    navbar.setAttribute("data-visible",true);
    toggle.setAttribute("aria-expanded",true);
    menu.style.display="none";
    closee.style.display="block";
    
}
    else
    {
    toggle.setAttribute("aria-expanded",false);
    navbar.setAttribute("data-visible",false);
    menu.style.display="block";
    closee.style.display="none";
    }
});
const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    
    items.forEach(item => {
      item.classList.remove('active');
    });
    
    item.classList.add('active');
  });
});
var greet = document.getElementById('greet');
var flirt = document.getElementById("flirt");
var flirting= ["you😘","friends😎"];
var greetings = ["hi😎", "hola😘", "konnichiwa😍", "namaste😜"];
var namee= document.getElementById('name');
var colors=["gray","#ff3465","#00fffb","#0f0"]
var heading=document.querySelector('.heading');

var currentIndex = 0;
var fonts=["Georgia","Times","cursive","Franklin Gothic Medium"]
console.log(heading);
function updateGreeting() {
  let findex= currentIndex%2;
  flirt.textContent=flirting[findex];
  greet.textContent = greetings[currentIndex];
  namee.style.textShadow=`2px 3px 0 ${colors[currentIndex]}`;
  heading.style.fontFamily=`${fonts[currentIndex]}`;
  currentIndex = (currentIndex + 1) % greetings.length;

}


updateGreeting();

setInterval(updateGreeting, 2000);

const brands=document.querySelectorAll('.item');

brands.forEach(brand =>{
  brand.addEventListener('click',()=>{
    const percentage=brand.querySelector('.percentage');
    percentage.style.visibility="visible";

    setTimeout(function(){
      percentage.style.visibility = "hidden";
    },2000);

  });
  brand.addEventListener('mouseover',()=>{
    const percentage=brand.querySelector('.percentage');
    percentage.style.visibility="visible";

    setTimeout(function(){
      percentage.style.visibility = "hidden";
    },2000);

  });
});

const projects=[
  {
    id:1,
    name:"COLOURFLIPPER jQuery",
    job:"generating random hexcodes on the go through one click ",
    img:"assets/html.svg",
    link:"https://mineghost007.github.io/colourflipper/",
  },
  {
    id:2,
    name:"COUNTER?Gamer",
    job:"Just a fun game to explore javascript and using animations extensively 🔫 ",
    img:"assets/css3.svg",
    link:"https://mineghost007.github.io/counter2023/",
  },
  {
    id:3,
    name:"TASK HORIZON",
    job:"realtime API based localstorage to store your task and keep a track",
    img:"assets/icons8-javascript.gif",
    link:"https://mineghost007.github.io/taskhorizon/",
  },

  {
    id:5,
    name:"Threejs+Blender",
    job:"Rendering blender models and placing them accordingly using viteApp ⚡ ",
    img:"assets/logothreejs.png",
    link:"i__made-it__for__some_one_special_you_can_see_one_when_i_make_one_for_you_or_wait_for_a_while",
  },

  {
    id:4,
    name:"Java+MySQL",
    job:"storing data in the mysql database through java taking both files and text as input 🗃️ ",
    img:"assets/icons8-java.svg",
    link:"https://www.youtube.com/watch?v=wSDXE13DLD8",
  },
  
  {
    id:8,
    name:"The ELECTRON 🌌",
    job:"what will be , will be and won't be at the same time 🧑‍🚀 🚀 ",
    img:"assets/icons8-astronaut-48.png",
    link:"https://photos.app.goo.gl/kofd1aVih7WFfD1VA",
  },
  
  {
    id:6,
    name:"Django quiz",
    job:"just exploring Django for the first time creating a login form for the users to play a quiz 👦 ",
    img:"assets/icons8-django.svg",
    link:"https://www.youtube.com/watch?v=E4WlUXrJgy4&ab_channel=IeuanBONZ",
  },
  
  {
    id:7,
    name:"Java,C,C++",
    job:"working on rating on all platforms such as codechef,codeforces 🖥️",
    img:"assets/icons8-c++.svg",
    link:"",
  },
  
  {
    id:9,
    name:"ComingSoon",
    job:"24/7 only goal is to code and build a whole ecosystem of tech around me",
    img:"assets/spotify.svg",
    link:"https://www.youtube.com/watch?v=E4WlUXrJgy4&ab_channel=IeuanBONZ",
  },


];
const img=document.getElementById("project-img");
const author=document.getElementById("author");
const job= document.getElementById("job");
const link= document.getElementById("link");

const nextBtn= document.querySelector('.nextBtn');
const prevBtn= document.querySelector('.prevBtn');
const randBtn= document.querySelector('.random-btn');


let currentItem=0;

window.addEventListener('DOMContentLoaded',function(){
  showproject(currentItem);
  
});

function showproject(projectt){
  const itemm=projects[projectt];
  img.src=itemm.img;
  author.textContent=itemm.name;
  job.textContent=itemm.job;
  link.setAttribute("href",`${itemm.link}`);



}
const animatedImage = document.querySelector('.cardd');
nextBtn.addEventListener("click",()=>{
  currentItem = (currentItem + 1) % projects.length;
  showproject(currentItem);
  animatedImage.style.border="2px solid #0fffbb";
  setTimeout(function(){
    animatedImage.style.border="0px";
  },500);
});

prevBtn.addEventListener("click",()=>{
  currentItem = (currentItem - 1) ;
  if(currentItem < 0)
  currentItem=projects.length-1;
  showproject(currentItem);
  animatedImage.style.border="2px solid #0fffbb";
  setTimeout(function(){
    animatedImage.style.border="0px";
  },500);
});

randBtn.addEventListener("click",()=>{
  currentItem = Math.floor(Math.random()*(projects.length));
  showproject(currentItem);
  animatedImage.style.border="2px solid #0fffbb";
  setTimeout(function(){
    animatedImage.style.border="0px";
  },500);
});

import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker=document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets:[CSS.percent(0),CSS.percent(100)]
});

scrollTracker.animate(
  {
    transform: ['scaleX(0)','scaleX(1)']
  },
  {
    duration:1,
    timeline: scrollTrackingTimeline,
  }
);

console.log(animatedImage);
const animatedImageTimeline= new ScrollTimeline({
  scrollOffsets: [
    {
      target: animatedImage , edge:"end",threshold:"1"
    },
    {
      target: animatedImage , edge:"start",threshold:"1"
    },

  ],
});
animatedImage.animate(
  {
    transform:[
      "perspective(1000px) rotateX(65deg)",
      "perspective(1000px) rotateX(-150deg)",
    ],
    opacity:["0.5","1.5"]

  },
  {
    duration:1,
    timeline:animatedImageTimeline,
  }
);


const menuu=[
  {
    id:1,
    idname:"Instagram",
    category:"social",
    handle:"https://www.instagram.com/suravaram_sankeerth/",
    img:"assets/instagram-1-svgrepo-com.svg",
  },
  {
    id:2,
    idname:"facebook",
    category:"social",
    handle:"https://l.instagram.com/?u=https%3A%2F%2Fm.facebook.com%2Fhome.php%3Ftbua%3D1&e=AT0JsPx97GTlIPasgEv0RpOS9xWXHRH91zdiQGiV5VZUmx2HRh6i95MMPULlbzHaxfLNKJ34eJRARITCmZfGl0dvjAYGRghNrplu_5xQIA206R5s-uUPIKs",
    img:"assets/facebook-svgrepo-com.svg",
  },
  {
    id:3,
    idname:"discord",
    category:"social",
    handle:"https://github.com/MINEGHOST007?tab=repositories",
    img:"assets/discord-icon-svgrepo-com.svg",
  },
  {
    id:4,
    idname:"github",
    category:"dev",
    handle:"link.html",
    img:"assets/github-color-svgrepo-com.svg",
  },
  {
    id:5,
    idname:"figma",
    category:"dev",
    handle:"https://www.figma.com/files/user/1202681414853597316?fuid=1202681414853597316",
    img:"assets/figma-svgrepo-com.svg",
  },
  {
    id:6,
    idname:"gmail",
    category:"social",
    handle:"ssankeerthreddy@gmail.com",
    img:"assets/icons8-gmail.svg",
  },
  {
    id:7,
    idname:"microsoft",
    category:"social",
    handle:"sankeerth31@hotmail.com",
    img:"assets/icons8-microsoft.svg",
  },
  {
    id:9,
    idname:"twitter",
    category:"social",
    handle:"https://www.youtube.com/watch?v=E4WlUXrJgy4&ab_channel=IeuanBONZ",
    img:"assets/icons8-twitter.svg",
  },
  {
    id:8,
    idname:"linked in",
    category:"social",
    handle:"https://www.linkedin.com/in/sankeerth-reddy-suravaram-39788b264/",
    img:"assets/icons8-linkedin.svg",
  },
  {
    id:10,
    idname:"AICF",
    category:"sports",
    handle:"https://prs.aicf.in/players/59535",
    img:"assets/icons8-chess-64.png",
  },
  {
    id:11,
    idname:"Atcoder",
    category:"sports",
    handle:"https://atcoder.jp/users/ghost007xx",
    img:"assets/logo_bk.svg",
  },
  {
    id:12,
    idname:"CF",
    category:"sports",
    handle:"https://codeforces.com/profile/GHOST007x",
    img:"assets/icons8-codeforces.-programming-competitions-and-contests,-programming-community.-48.png",
  },
  {
    id:13,
    idname:"codechef",
    category:"sports",  
    handle:"https://www.codechef.com/users/ghost007x",      
    img:"assets/icons8-codechef.svg",
  },
  {
    id:14,
    idname:"HR",
    category:"sports",
    handle:"https://www.hackerrank.com/ssankeerthreddy1",
    img:"assets/hackerrank.svg",
  },
  {
    id:15,
    idname:"GfG",
    category:"sports",
    handle:"https://auth.geeksforgeeks.org/user/ssankeertidpv/",
    img:"assets/icons8-geeksforgeeks.svg",
  },
  {
    id:16,
    idname:"Tinder",
    category:"social",
    img:"assets/icons8-tinder.svg",
    handle:"https://www.youtube.com/watch?v=E4WlUXrJgy4&ab_channel=IeuanBONZ",
  },

];


const bts = document.querySelector('.buttonss');
const sc= document.querySelector('.glasshandles');
window.addEventListener('DOMContentLoaded',function(){
  displayhandles(menuu);
  displaybtns(menuu);
});

function displaybtns(parameter){
  let displaybtns= parameter.reduce(function(values,itembtn){
    if(!values.includes(itembtn.category)){
      values.push(itembtn.category);
      //return `<button class="all" data-name="${itembtn.category}">${itembtn.category}</button>`
    }
    return values;
  },["all"]);
  //displaybtns=displaybtns.join("");
  //bts.innerHTML=displaybtns;
  //console.log(displaybtns);
  const finalbtns = displaybtns.map(function(catt){
    return `<button class="all" data-name="${catt}">${catt}</button>`;
  }).join("");
  //console.log(finalbtns);
  bts.innerHTML=finalbtns;
  const buttonss= document.querySelectorAll('.all');
  buttonss.forEach(function(btn){
    btn.addEventListener('click',function(e){
      const category=e.currentTarget.dataset.name;
      const menucat=menuu.filter(function(cat){
        if(cat.category===category)
        return cat;
      });
      displayhandles(menucat);
      if(category==='all')
      displayhandles(menuu);
    });
  });
  
}


function displayhandles(parameter){
  let displayMenu = parameter.map(function(itemmenu){
    return `<div class="handle">
    <a href="${itemmenu.handle}" target="_blank">
        <div class="imaggg">
            <img src="${itemmenu.img}" class="photo143">
        </div>
        <div class="handlename">
            <p id="idname">${itemmenu.idname}</p>
        </div>
    </a>
</div>`;
  });
  displayMenu=displayMenu.join("");
  sc.innerHTML=displayMenu;

}
