import React from 'react';




const Card = ({name, email, id}) => {
	return(
		<div id = "karta" className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
			<h2>{name} </h2>
			<p> {email} </p>
			</div>
		</div>
	);
}

const karta = document.getElementById("karta");
karta.addEventListener("mousemove", (event) => {
	let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
	karta.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

export default Card;


/*
const karta = document.getElementById("karta");
karta.addEventListener("mousemove", (event) => {
	let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
	let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
	karta.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});
*/
