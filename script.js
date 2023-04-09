const divs = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: true // this will make the event bubble up
}));