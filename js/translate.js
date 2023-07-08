function translateSite(lang) {
  aboutSectionTranslate(lang);
  skillsSectionTranslate(lang);
  portfolioSectionTranslate(lang);
  contactSectionTranslate(lang);
  showLanguages();
}

function aboutSectionTranslate(lang) {
  const about = document.getElementById("about");
  const aboutTop = about.querySelector(".aboutTop");
  let aboutTopPT = ' Sobre <span class="green">Mim</span>';
  let aboutTopEN = ' About <span class="green">Me</span>';
  const textAbout = about.querySelector(".textAbout");
  let textAboutPT =
    "Atualmente, estou estudando para me tornar um desenvolvedor web Full-Stack. Estou totalmente dedicado e comprometido com minha futura carreira. Já adquiri certas habilidades necessárias para criar excelentes sites, mas estou sempre em busca de adquirir novas habilidades. Com o objetivo de aprimorar tanto minhas habilidades técnicas quanto interpessoais, estou procurando ativamente minha primeira oportunidade no mercado de trabalho como júnior ou estagiário. Isso me proporcionará oportunidades valiosas para trabalhar em projetos incríveis e desafiadores.";
  let textAboutEN =
    "Currently, I am pursuing my studies to become a proficient Full-Stack Web Developer, and I am deeply dedicated and committed to my future career. I have already acquired certain skills necessary for building great websites, but I am constantly striving to acquire new ones. In order to further enhance both my hard and soft skills, I am actively seeking my first experience in the job market as a junior or intern. This will provide me with valuable opportunities to work on exciting and challenging portfolio.";
  const myJob = about.querySelector(".myJob");
  let myJobPT =
    "Trabalhando para me tornar um  <span class='green'> Desenvolvedor </span>";
  let myJobEN = " Working to become a <span class='green'>Dev</span>";
  const myName = about.querySelector(".myName");
  let myNameEN = 'I am <span class="green">Guilherme';
  let myNamePT = 'Eu sou <span class="green">Guilherme';
  const nameTopics = about.querySelector(".nameTopics");
  const ageTopics = about.querySelector(".ageTopics");
  const phoneTopics = about.querySelector(".phoneTopics");
  const addressTopics = about.querySelector(".addressTopics");
  let nameTopicsPT = "Nome: ";
  let nameTopicsEN = "Name: ";
  let ageTopicsPT = "Idade: ";
  let ageTopicsEN = "Age: ";
  let phoneTopicsEN = "Phone: ";
  let phoneTopicsPT = "Fone: ";
  let addressTopicsPT = "Endereço: ";
  let addressTopicsEN = "Address: ";
  const cvDownloadBtn = about.querySelector(".cvDownloadBtn");
  let cvDownloadBtnPT = "Baixe meu CV";
  let cvDownloadBtnEN = "Download my CV";

  if (lang == "pt") {
    aboutTop.innerHTML = aboutTopPT;
    textAbout.innerHTML = textAboutPT;
    myJob.innerHTML = myJobPT;
    myName.innerHTML = myNamePT;
    nameTopics.innerHTML = nameTopicsPT;
    ageTopics.innerHTML = ageTopicsPT;
    phoneTopics.innerHTML = phoneTopicsPT;
    addressTopics.innerHTML = addressTopicsPT;
    cvDownloadBtn.innerHTML = cvDownloadBtnPT;
  } else {
    aboutTop.innerHTML = aboutTopEN;
    textAbout.innerHTML = textAboutEN;
    myJob.innerHTML = myJobEN;
    myName.innerHTML = myNameEN;
    nameTopics.innerHTML = nameTopicsEN;
    ageTopics.innerHTML = ageTopicsEN;
    phoneTopics.innerHTML = phoneTopicsEN;
    addressTopics.innerHTML = addressTopicsEN;
    cvDownloadBtn.innerHTML = cvDownloadBtnEN;
  }
}

function skillsSectionTranslate(lang) {
  const skills = document.getElementById("skills");
  const skillsTop = skills.querySelector(".skillsTop");
  let skillsTopPT = ' Minhas <span class="green">Habilidades</span>';
  let skillsTopEN = ' My <span class="green">Skills</span>';
  if (lang == "pt") {
    skillsTop.innerHTML = skillsTopPT;
  } else {
    skillsTop.innerHTML = skillsTopEN;
  }
}

function portfolioSectionTranslate(lang) {
  const portfolio = document.getElementById("portfolio");
  const portfolioTop = portfolio.querySelector(".portfolioTop");
  let portfolioTopPT = ' Meus <span class="green">Projetos</span>';
  let portfolioTopEN = ' My <span class="green">Projects</span>';
  const titleCard1 = portfolio.querySelector(".titleCard1");
  const titleCard2 = portfolio.querySelector(".titleCard2");
  const titleCard3 = portfolio.querySelector(".titleCard3");
  const textCard1 = portfolio.querySelector(".textCard1");
  const textCard2 = portfolio.querySelector(".textCard2");
  const textCard3 = portfolio.querySelector(".textCard3");
  let titleCard1PT = "Projeto Venda de Carros";
  let titleCard2PT = "Projeto Starbucks";
  let titleCard3PT = "Projeto SpaceX";
  let titleCard1EN = "Car Sales Project";
  let titleCard2EN = "Starbucks Project";
  let titleCard3EN = "SpaceX Project";
  let textCard1PT =
    "Esse projeto simula um site de venda de carros, foi refatorado utilizando Bootstrap e Sass, o projeto original foi feito em CSS puro.";
  let textCard1EN =
    "This project simulates a car selling website. It has been refactored using Bootstrap and Sass, while the original project was built with pure CSS.";
  let textCard2PT =
    "Esse projeto é uma ideia simples de landing Page da empresa starbucks, foi refatorado utilizando Bootstrap e Sass, o projeto original foi feito em CSS puro.";
  let textCard2EN =
    "This project is a simple idea of a landing page for the company Starbucks. It has been refactored using Bootstrap and Sass, while the original project was built with pure CSS.";
  let textCard3PT =
    "Esse projeto foi feito baseado na pagina da SpaceX, contando com simplificações e simulações, foi feito com o uso de uma biblioteca para animações (AOS), alem de CSS através de Bootstrap e Sass";
  let textCard3EN =
    "This project was based on the SpaceX website, incorporating simplifications and simulations. It was developed using an animation library (AOS), as well as CSS through Bootstrap and Sass.";
  const btnRep = portfolio.querySelector(".btnRep");
  let btnRepPT = "Ver Códigos Fonte";
  let btnRepEN = "View Source Codes";
  const btnSeeMore = portfolio.querySelector(".btnSeeMore");
  let btnSeeMorePT = "Mais Projetos";
  let btnSeeMoreEN = "More Projects";

  if (lang == "pt") {
    portfolioTop.innerHTML = portfolioTopPT;
    titleCard1.innerHTML = titleCard1PT;
    titleCard2.innerHTML = titleCard2PT;
    titleCard3.innerHTML = titleCard3PT;
    textCard1.innerHTML = textCard1PT;
    textCard2.innerHTML = textCard2PT;
    textCard3.innerHTML = textCard3PT;
    btnRep.innerHTML = btnRepPT;
    btnSeeMore.innerHTML = btnSeeMorePT;
  } else {
    portfolioTop.innerHTML = portfolioTopEN;
    titleCard1.innerHTML = titleCard1EN;
    titleCard2.innerHTML = titleCard2EN;
    titleCard3.innerHTML = titleCard3EN;
    textCard1.innerHTML = textCard1EN;
    textCard2.innerHTML = textCard2EN;
    textCard3.innerHTML = textCard3EN;
    btnRep.innerHTML = btnRepEN;
    btnSeeMore.innerHTML = btnSeeMoreEN;
  }
}

function contactSectionTranslate(lang) {
  const contact = document.getElementById("contact");
  const contactTop = contact.querySelector(".contactTop");
  let contactTopPT = ' Envie uma <span class="green">Mensagem</span>';
  let contactTopEN = ' Message <span class="green">Me</span>';
  const contactThanks = contact.querySelector(".contactThanks");
  let contactThanksPT = "Obrigado por entrar em contato, responderei em breve!";
  let contactThanksEN = "Thank you for contacting me, I'll get in touch soon!";
  const name = contact.querySelector("#name");
  const subject = contact.querySelector("#subject");
  const message = contact.querySelector("#message");
  let namePT = "Nome";
  let nameEN = "Name";
  let subjectPT = "Assunto";
  let subjectEN = "Subject";
  let messagePT = "Eu tenho um trabalho para voce!";
  let messageEN = "I have a job for you!";

  if (lang == "pt") {
    contactTop.innerHTML = contactTopPT;
    contactThanks.innerHTML = contactThanksPT;
    name.placeholder = namePT;
    subject.placeholder = subjectPT;
    message.placeholder = messagePT;
  } else {
    contactTop.innerHTML = contactTopEN;
    contactThanks.innerHTML = contactThanksEN;
    name.placeholder = nameEN;
    subject.placeholder = subjectEN;
    message.placeholder = messageEN;
  }
}

function closeBtnChoose() {
  document.querySelector(".chooseLanguage").style.display = "none";
  document.querySelector(".btnChooseLanguage").style.display = "block";
}
