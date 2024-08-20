
let btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        alert('Mouse clicked');
    });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);
