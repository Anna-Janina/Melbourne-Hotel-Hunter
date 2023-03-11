const signupPopup = document.querySelector('.signup-popup');
const signupButton = document.querySelector('.signup-button');
const closeButton = document.querySelector('.close-button');


signupButton.addEventListener('click',() => {
    signupPopup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    signupPopup.style.display = 'none';
});
