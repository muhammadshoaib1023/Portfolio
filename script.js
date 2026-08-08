const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
if(menuBtn){menuBtn.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);});}
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav-links>a:not(.hire-nav)")];
const activeObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));}});
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>activeObserver.observe(s));
