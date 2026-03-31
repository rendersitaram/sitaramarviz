const elements = document.querySelectorAll("h1, h2, h3, p, .card, .btn");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});
// open popup
document.querySelectorAll(".card img").forEach(img=>{
  img.addEventListener("click", ()=>{
    document.getElementById("imgPopup").style.display = "flex";
    document.getElementById("popupImg").src = img.src;
  });
});

// close popup
function closePopup(){
  document.getElementById("imgPopup").style.display = "none";
}
document.getElementById("imgPopup").addEventListener("click", (e)=>{
  if(e.target.id === "imgPopup"){
    closePopup();
  }
});



function playVideo(){
  const video = document.getElementById("myVideo");
  const btn = document.querySelector(".play-btn");

  video.play();
  btn.style.display = "none";
}