function createDivWithBackgroundChange() {
    const div = document.createElement('div');
    div.classList.add('hatter-div');

    div.addEventListener('click', function() {
        const originalBackground = div.style.backgroundImage;
        div.style.backgroundImage = 'url("./pic/pic2.jpg")';

        setTimeout(() => {
            div.style.backgroundImage = originalBackground;
        }, 2000);
    });

    return div;
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const newDiv = createDivWithBackgroundChange();
    container.appendChild(newDiv);
});