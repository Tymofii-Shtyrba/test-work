const axises = document.querySelectorAll('span');

let gyroscope = new Gyroscope({frequency: 10});

gyroscope.addEventListener('reading', e => {
  axises[0].textContent = `Axis X: ${gyroscope.x}`;
  axises[1].textContent = `Axis Y: ${gyroscope.y}`;
  axises[2].textContent = `Axis Z: ${gyroscope.z}`;

});
gyroscope.start();