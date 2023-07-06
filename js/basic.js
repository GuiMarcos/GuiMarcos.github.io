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
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var body = document.getElementById("body").value;

  // Realiza alguma validação dos campos, se necessário

  // Cria um objeto FormData com os valores do formulário
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("body", body);

  // Envia uma requisição AJAX para o arquivo mail.php
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "./php/mail.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
      // Aqui você pode realizar ações adicionais após o envio do email
    }
  };
  xhr.send(formData);
}
