function showNav() {
	if (navbarCollapsed.style.display == "flex") {
		navbarCollapsed.style.display = "none";
		navMain.style.display = "flex";
		animationParticle.style.display = "block";
		arrow.style.display = "block";
	} else {
		navbarCollapsed.style.display = "flex";
		navMain.style.display = "none";
		animationParticle.style.display = "none";
		arrow.style.display = "none";
	}
}
