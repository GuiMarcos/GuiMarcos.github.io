let navOpen = 0;
let scrollPosition = 0;
let time = 500;
function showNav() {
  if (!navOpen) {
    scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    console.log(scrollPosition);
  }
  if (navbarCollapsed.style.display == "flex") {
    navbarCollapsed.style.display = "none";
    visibleContent.style.display = "block";
    scrollToSmoothly(scrollPosition, time);
    navOpen = 0;
  } else {
    navbarCollapsed.style.display = "flex";
    visibleContent.style.display = "none";
    document.querySelector(".chooseLanguage").style.display = "none";
    document.querySelector(".btnChooseLanguage").style.display = "block";
    navOpen = 1;
  }
}

function sendEmail() {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", () => {
    const div = document.getElementById("statusEmail");
    div.style.display = "block";
    setTimeout(() => {
      form.reset();
    }, 500); // Tempo em milissegundos antes de limpar os inputs (1 segund
  });
}

function showLanguages() {
  const divLanguages = document.querySelector(".chooseLanguage");
  const btnLang = document.querySelector(".btnChooseLanguage");
  if (divLanguages.style.display == "flex") {
    divLanguages.style.display = "none";
    btnLang.style.display = "block";
  } else {
    divLanguages.style.display = "flex";
    btnLang.style.display = "none";
  }
}

/*
   @param time: the exact amount of time the scrolling will take (in milliseconds)
   @param pos: the y-position to scroll to (in pixels)
*/
function scrollToSmoothly(pos, time) {
  var currentPos = window.scrollY;
  var start = null;
  if (time == null) time = 500;
  (pos = +pos), (time = +time);
  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    var progress = currentTime - start;
    if (currentPos < pos) {
      window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
    } else {
      window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, pos);
    }
  });
}
