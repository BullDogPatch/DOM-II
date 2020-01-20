// Your code goes here

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.style.color = 'red';
        console.log('click')
    })
})