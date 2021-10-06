function loadBirthdayMessage() {
    const body = document.querySelector('body');

    const h1HappyBirthday = document.createElement('h1');
    h1HappyBirthday.textContent = "Happy Birthmas!!"
    h1HappyBirthday.id = "h1HappyBirthday";
    h1HappyBirthday.classList.add('card');

    return h1HappyBirthday;
}

export default loadBirthdayMessage;