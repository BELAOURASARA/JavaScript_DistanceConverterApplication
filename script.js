(function(){
        let convertionType="miles";
		const h1= document.querySelector("h1");
		const intro= document.querySelector("div p");
		const answerDiv=document.getElementById("answer");

		document.addEventListener("keydown", function(event){
			if (event.code==="KeyK"){
				convertionType="kilometer";
				h1.innerHTML="Kilometers to Miles Converter";
				intro.innerHTML="Type in a number of kilometers and click the button to convert the distance to miles.";
			}
			if(event.code==="KeyM"){
				convertionType="miles";
				h1.innerHTML="Miles to Kilometers Converter";
				intro.innerHTML="Type in a number of miles and click the button to convert the distance to kilometers.";

			}
		});

		document.getElementById("convert").addEventListener("submit", function(event){
			event.preventDefault();
			const distance = parseFloat(document.getElementById('distance').value);
			const h2=document.querySelector("#answer h2");
			if(distance){
				if(convertionType==="miles"){
                    const convertedDistance= (distance * 1.609344 ).toFixed(3); //in order to round the result
                    h2.innerHTML=`${distance} miles converts to ${convertedDistance} kilometers`;
				}
				else{
                    const convertedDistance= (distance * 0.62137119 ).toFixed(3); //in order to round the result
					h2.innerHTML=`${distance} kilometers converts to ${convertedDistance} miles`;
				}
				h2.className="";
			}
			else{
				h2.innerHTML="please enter a NUMBER !";
				h2.className="";
			}
		});
})();
		

