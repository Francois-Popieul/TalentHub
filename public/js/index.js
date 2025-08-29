(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    const burgerMenu = document.getElementById("burger-menu");
    const burgerMenuLinkContainer = document.getElementById("burger-menu-link-container");
    if (burgerMenu && burgerMenuLinkContainer) {
        burgerMenu.addEventListener("click", () => {
            burgerMenu.classList.add("hidden");
            burgerMenuLinkContainer.classList.toggle("hidden");
        });
    }

}));
//# sourceMappingURL=index.js.map
