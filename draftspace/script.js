const canvas = document.getElementById('cloudCanvas');
const ctx = canvas.getContext('2d');

const frames = 10;
let currentFrame = 0;

// Define the abstract cloud path for each frame
// Define the abstract cloud path for each frame
const cloudPaths = [
  // Frame 1
  [ 
    { method: 'moveTo', args: [50, 50] },
    { method: 'arc', args: [50, 50, 20, Math.PI * 0.5, Math.PI * 1.5] },
    // More arcs or lines can be added here
  ],
  // Frame 2
  [
    { method: 'moveTo', args: [50, 50] },
    { method: 'arc', args: [50, 50, 22, Math.PI * 0.45, Math.PI * 1.55] },
    // Modifications to the arcs or lines
  ],
  // ...repeat this pattern for all 10 frames, each with slight modifications
];

function drawCloud(frame) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  ctx.beginPath();

  // Iterate through the path definitions for the current frame
  cloudPaths[frame].forEach(path => {
    ctx[path.method](...path.args);
  });

  ctx.closePath();
  ctx.lineWidth = 2;
  ctx.stroke();
}

// ...rest of the code remains unchanged


function animateCloud() {
  drawCloud(currentFrame);
  currentFrame = (currentFrame + 1) % frames; // Loop through frames
  requestAnimationFrame(animateCloud); // Loop the animation
}

// Initialize the animation
animateCloud();
