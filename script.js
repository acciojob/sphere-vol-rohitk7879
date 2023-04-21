function volume_sphere(event) {
	// console.log(event);
	event.preventDefault();
    //Write your code here
	const radius = document.getElementById("radius").value
	let formula =(4/3)*Math.PI*(radius*radius*radius);
	document.getElementById("volume").value = Number(formula).toFixed(4)
  // console.log(formula)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
