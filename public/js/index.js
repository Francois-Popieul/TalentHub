(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    const body = document.querySelector("body");
    const burgerMenu = document.getElementById("burger-menu");
    const burgerMenuLinkContainer = document.getElementById("burger-menu-link-container");
    if (burgerMenu) {
        burgerMenu.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
    if (body && burgerMenuLinkContainer) {
        body.addEventListener("click", () => {
            if (!burgerMenuLinkContainer.classList.contains("hidden")) {
                burgerMenuLinkContainer.classList.toggle("hidden");
            }
        });
    }
    if (burgerMenu && burgerMenuLinkContainer) {
        burgerMenu.addEventListener("click", () => {
            burgerMenuLinkContainer.classList.toggle("hidden");
        });
    }

}));
//# sourceMappingURL=index.js.map
