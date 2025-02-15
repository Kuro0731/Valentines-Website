function moveRandomEl(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
    elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}

document.addEventListener("DOMContentLoaded", function() {
    const moveRandom = document.querySelector('#move-random');

    if (moveRandom) {
        console.log("Found #move-random on", window.location.pathname);

        moveRandom.addEventListener('mouseenter', function(e) {
            moveRandomEl(e.target);
        });

        moveRandom.addEventListener('touchstart', function(e) {
            e.preventDefault();  
            moveRandomEl(e.target);
        });
    } else {
        console.log("No #move-random found on", window.location.pathname, "- Skipping event listener.");
    }
});
