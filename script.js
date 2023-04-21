function volume_sphere(event) {
	// console.log(event);
	event.preventDefault();
    //Write your code here
	const radius = document.getElementById("radius").value
	let formula =1.33*3.14*(radius*radius*radius);
	document.getElementById("volume").value = Number(formula).toFixed(4)
  // console.log(formula)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
