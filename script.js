const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e){
    console.log(this.classList.value);
    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: true, // this will make the event bubble up
    once : true // this will make the event fire only once
}));

button.addEventListener('click', () => {
    console.log('Click!!!');
}, {
    once : true // this will make the event fire only once
});
