function showNav() {
  if (navbarCollapsed.style.display == "flex") {
    navbarCollapsed.style.display = "none";
    visibleContent.style.display = "block";
    document.querySelector(".is-active").scrollIntoView({
      behavior: "smooth",
    });
  } else {
    isElementVisible(document.getElementById("home"));
    isElementVisible(document.getElementById("about"));
    isElementVisible(skills);
    //isElementVisible(portfolio);
    //isElementVisible(contact);
    navbarCollapsed.style.display = "flex";
    visibleContent.style.display = "none";
  }
}

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
    element.classList.add("is-active");
  else element.classList.remove("is-active");
  return;
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
