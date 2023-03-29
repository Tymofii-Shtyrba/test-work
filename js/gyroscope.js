const axises = document.querySelectorAll('span');

let gyroscope = new Gyroscope({frequency: 100});

gyroscope.addEventListener('reading', e => {
  axises[0].textContent = `Axis X: ${(gyroscope.x * 100).toFixed}`;
  axises[0].textContent = `Axis Y: ${(gyroscope.y * 100).toFixed}`;
  axises[0].textContent = `Axis Z: ${(gyroscope.z * 100).toFixed}`;


});
gyroscope.start();