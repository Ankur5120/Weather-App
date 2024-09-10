
        const apiKey = "1853c37b4c3a72d25867f81c9ec59a32";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        
        const serachBox = document.querySelector(".search input");
        const serachBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");
        async function checkWeather(city){
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();
    
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
        
            if(data.weather[0].main == "Cloud"){
                 weatherIcon.src = "weather-app-img/images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                 weatherIcon.src = "weather-app-img/images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                 weatherIcon.src = "weather-app-img/images/rain.png";
            }
            else if(data.weather[0].main == "Clear"){
                 weatherIcon.src = "weather-app-img/images/clear.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                 weatherIcon.src = "weather-app-img/images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                 weatherIcon.src = "weather-app-img/images/mist.png";
            }
            
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            }
            
        }
    
        serachBtn.addEventListener("click", ()=>{
            checkWeather(serachBox.value);
        })
