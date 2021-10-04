function loadFooterBar() {
    console.log("Footerbar Loaded...")
    const body = document.querySelector("body");
    const footerContainer = document.createElement('div');
    footerContainer.id = "footerContainer";

    body.appendChild(footerContainer);
}

export default loadFooterBar;