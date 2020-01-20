// Your code goes here

// change the anchor tags to red when clicked
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.style.color = 'red';
        console.log('click')
    })
});


// make images go large when mouse enters and leaves
const img = document.querySelectorAll('img');
img.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        event.target.style.transform = 'scale(1.2)';
        event.target.style.transition = 'transform 0.3s'
        console.log('works')
    })
});

// images go back to normal when mouse leaves
img.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)';
        event.target.style.transition = 'transform 0.3s'
    })
});

// keydown event
const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    body.style.backgroundColor = '#FFEBCD';
});


// window resize event
const button = document.querySelector('.btn');
window.addEventListener('resize', () => {
    button.style.color = 'red';
    //console.log('boo')
});

//double click event
const logoHeader = document.querySelector('.logo-heading');
logoHeader.addEventListener('dblclick', () => {
    logoHeader.style.color = 'blue';
})