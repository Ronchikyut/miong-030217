// console.log("App javascript has been loaded!");

// console.log("Hello Philippines!");

			function x(){

				var fn =document.querySelector('#fn').value;
				var sn =document.getElementById('sn').value;
				var sum = parseInt(fn) + parseInt(sn);
				// console.log("The sum is " + sum);

				document.querySelector('.result').innerHTML= sum;


}


$(function(){
	$.ajax({
		url:"http://omdbapi.com/?t=Game%20of%20Thrones"
	}).done(function(data){
		console.log(data);
		let html = `

		<h1>${data.Title}</h1>	
			The Title is ${data.Title}<br/>
			The Actors/Actresses are ${data.Actors}
			<br/>

			<img src ="${data.Poster}"/>
			<br/>
			<a href="/Users/WEBDEV2A/Desktop/miong-030217/app.html">Home</a> |
	<a href="/Users/WEBDEV2A/Desktop/miong-030217/about.html">About</a> |
	<a href="/Users\WEBDEV2A\Desktop\miong-030217/API.html">API</a>

		`;

		document.querySelector('.app').innerHTML = html;

	});
})

