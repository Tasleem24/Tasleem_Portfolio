const skills=document.querySelectorAll(".skill span");

window.addEventListener("scroll",()=>{

skills.forEach(skill=>{

skill.style.transition="2s";

});

});
