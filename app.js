function main() {
    let items = document.querySelectorAll("#Menu li");
    let mobileItems = document.querySelectorAll("#mobileMenu li");
    let divs = document.querySelectorAll(".ContentDiv");
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let mobileItem = mobileItems[i];
        item.addEventListener('click', function () {
            items.forEach((item) => item.classList.remove("Selected"));
            item.classList.add("Selected");
            divs.forEach((item) => item.classList.remove("visible"));
            document.getElementById(item.getAttribute("target")).classList.add("visible");
            mobileItems.forEach((item) => item.classList.remove("SelectedMobile"));
            mobileItem.classList.add("SelectedMobile");
        });
    }
    for (let i = 0; i < mobileItems.length; i++) {
        let item = mobileItems[i];
        let desktopItem = items[i];
        item.addEventListener('click', function () {
            mobileItems.forEach((item) => item.classList.remove("SelectedMobile"));
            item.classList.add("SelectedMobile");
            divs.forEach((item) => item.classList.remove("visible"));
            document.getElementById(item.getAttribute("target")).classList.add("visible");
            items.forEach((item) => item.classList.remove("Selected"));
            desktopItem.classList.add("Selected");
        });
    }
}
main();