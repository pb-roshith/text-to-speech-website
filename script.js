const textarea=document.querySelector("textarea");
spee=document.querySelector("button");


function stt(t){
  let u=new SpeechSynthesisUtterance(t);
  speechSynthesis.speak(u);
}

spee.addEventListener("click", e => {
  if(textarea !== ""){
    stt(textarea.value);
  }
});
