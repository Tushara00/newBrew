(function(){
  const text = "ꖾꗍꗇⱤꕯꖦ'ꕷ ꕗⱤꗍⱲ";
  const title = document.getElementById("brew-title");
  const colors = ["#FFA500", "#FFFFFF", "#1E90FF"];
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.style.transition = "color 2s ease";
    span.style.color = colors[0];
    title.appendChild(span);
  }
  let currentColor = 0;
  setInterval(() => {
    const spans = title.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      setTimeout(() => {
        spans[i].style.color = colors[(currentColor + 1) % colors.length];
      }, i * 200);
    }
    currentColor = (currentColor + 1) % colors.length;
  }, 4000);
})();