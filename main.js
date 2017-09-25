function createWard(ward, mouseEvent) {
	const origAudio = document.getElementById(ward+"-audio");
	const newAudio = origAudio.cloneNode()
	const origImage = document.getElementById(ward+"-image");
	const newImage = origImage.cloneNode();

	newAudio.play()

	newImage.style.top = (mouseEvent.clientY - 198) + "px";
	newImage.style.left = (mouseEvent.clientX - 143) + "px";
	newImage.classList.remove("preload");
	const body = document.getElementsByTagName("body")[0];
	body.appendChild(newImage);
}

function click(mouseEvent) {
	const percentChanceLaugh = 0.10;
	let ward;
	if (Math.random() < 0.10){
		ward = "Necro";	
	} else {
		ward = "VenoWard"
	}
	createWard(ward, mouseEvent);
}

document.addEventListener("click", click);