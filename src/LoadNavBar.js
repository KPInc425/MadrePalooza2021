function loadNavBar() {
    console.log("Navbar Loaded...")
    const body = document.querySelector("body");

    const navBarContainer = document.createElement('div');
    navBarContainer.id = "navBarContainer";

    body.appendChild(navBarContainer);
}

export default loadNavBar;