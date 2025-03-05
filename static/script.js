const apiKey ="a4279ff12b650fd6f0b5f0bf1516435e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=   document.querySelector(".weather-icon");


async function checkWeather(city){
    let CompleteapiUrl="";
    if(city!=""){
        CompleteapiUrl =apiUrl+city+`&appid=${apiKey}`
    }
    else{
        CompleteapiUrl =apiUrl+"Mumbai"+`&appid=${apiKey}`; 
    }
    const response = await fetch(CompleteapiUrl);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{

        var data = await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        if(data.weather[0].main=='Cloud'){
         weatherIcon.src="weather-app-img/images/clouds.png";
        }
        else if(data.weather[0].main=='Rain'){
            weatherIcon.src="weather-app-img/images/rain.png";
        }
        else if(data.weather[0].main=='Drizzle'){
            weatherIcon.src="weather-app-img/images/drizzle.png";
        }
        else if(data.weather[0].main=='Mist'){
            weatherIcon.src="weather-app-img/images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})