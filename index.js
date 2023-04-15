const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  '#000000','#000000', '#070707','#070707', '#0d0d0d','#0d0d0d', '#121212','#121212', '#171717','#171717', '#1a1a1a','#1a1a1a', '#1e1e1e','#1e1e1e', '#222222','#222222'
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.2;
    y += (nextCircle.y - y) * 0.2;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();



// links animations:

const navLinks = document.querySelectorAll(".nav-links li");
const topCursor = document.querySelector(".circle")
console.log(topCursor)
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        topCursor.classList.add("link-grow");
    });
    link.addEventListener('mouseleave', () => {
        topCursor.classList.remove("link-grow");
    });
})