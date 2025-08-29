const burgerMenu: HTMLElement | null = document.getElementById("burger-menu");
const burgerMenuLinkContainer: HTMLElement | null = document.getElementById("burger-menu-link-container");
if (burgerMenu && burgerMenuLinkContainer) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.add("hidden");
        burgerMenuLinkContainer.classList.toggle("hidden");
    })
}