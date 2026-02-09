function openGift(){
  document.getElementById("overlay").style.display="none";
  document.getElementById("content").style.display="block";
  document.getElementById("song").play();
  startFloating();
}

function startFloating(){
  setInterval(()=>{
    let el=document.createElement("div");
    el.innerHTML="🍫";
    el.style.position="fixed";
    el.style.left=Math.random()*100+"vw";
    el.style.bottom="0";
    el.style.fontSize="24px";
    el.style.animation="float 6s linear";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),6000);
  },700);
}

const s=document.createElement("style");
s.innerHTML="@keyframes float{to{transform:translateY(-100vh);opacity:0;}}";
document.head.appendChild(s);