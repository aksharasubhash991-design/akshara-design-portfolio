const filters=document.querySelectorAll(".filter");
const projects=document.querySelectorAll(".project");
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(f=>f.classList.remove("active"));
  btn.classList.add("active");
  const selected=btn.dataset.filter;
  projects.forEach(p=>p.hidden=selected!=="all" && p.dataset.category!==selected);
}));
const lightbox=document.getElementById("lightbox");
const image=document.getElementById("lightbox-image");
const caption=document.getElementById("lightbox-caption");
document.querySelectorAll(".artwork").forEach(btn=>btn.addEventListener("click",()=>{
  image.src=btn.dataset.image; image.alt=btn.dataset.title;
  caption.textContent=btn.dataset.title;
  lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false");
}));
function closeBox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");image.src="";}
document.querySelector(".close").addEventListener("click",closeBox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeBox();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeBox();});
