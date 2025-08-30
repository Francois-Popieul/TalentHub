const body: HTMLElement | null = document.querySelector("body");
const burgerMenu: HTMLElement | null = document.getElementById("burger-menu");
const burgerMenuLinkContainer: HTMLElement | null = document.getElementById("burger-menu-link-container");
if (burgerMenu) {
    burgerMenu.addEventListener("click", (e) => {
        e.stopPropagation();
    })
}
if (body && burgerMenuLinkContainer) {
    body.addEventListener("click", () => {
        if (!burgerMenuLinkContainer.classList.contains("hidden")) {
            burgerMenuLinkContainer.classList.toggle("hidden");
        };
    })
}
if (burgerMenu && burgerMenuLinkContainer) {
    burgerMenu.addEventListener("click", () => {
        burgerMenuLinkContainer.classList.toggle("hidden");
    })
}