const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
 const teampature = document.querySelector('.temperature');
 const description  = document.querySelector('.description');
 const humidity  = document.getElementById('humidity');
 
 


  const wind_speed  = document.getElementById('wind-speed');



async function checkWeather(city){
	const api_key = "64476cc9c6941ead51bb5fec25520bb3";
	const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';

	const weather_data = await fetch('${url}').then(response => 
		response.json());

	console.log(weather_data);

}
searchBtn.addEventListener('click', ()=>{
	checkWeather(inputBox.value);
});