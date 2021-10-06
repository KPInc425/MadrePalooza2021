function loadNavBar() {
    console.log("Navbar Loaded...")
    const body = document.querySelector("body");
    
    const navBarContainer = document.createElement('div');
    navBarContainer.id = "navBarContainer";
    navBarContainer.classList.add('card');

    const btnWelcome = document.createElement('button');
    btnWelcome.textContent = "Welcome";
    btnWelcome.id = "btnWelcome";
    btnWelcome.classList.add('card');

    const btnZenQuote = document.createElement('button');
    btnZenQuote.textContent = "Zen Quote";
    btnZenQuote.id = "btnZenQuote";
    btnZenQuote.classList.add('card');

    const btnMenu = document.createElement('button');
    btnMenu.textContent = "Birthday Menu";
    btnMenu.id = "btnMenu";
    btnMenu.classList.add('card');

    const btnWillowsPresent = document.createElement('button');
    btnWillowsPresent.textContent = "Willow's Gift";
    btnWillowsPresent.id = "btnWillowsPresent"
    btnWillowsPresent.classList.add('card');
    
    const btnPastYears = document.createElement('button');
    btnPastYears.textContent = "Past Years";
    btnPastYears.id = "btnPastYears";
    btnPastYears.classList.add('card');

    navBarContainer.appendChild(btnWelcome);
    navBarContainer.appendChild(btnZenQuote);
    navBarContainer.appendChild(btnMenu);
    navBarContainer.appendChild(btnWillowsPresent);
    navBarContainer.appendChild(btnPastYears);

    body.appendChild(navBarContainer);
}

export default loadNavBar;