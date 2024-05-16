let weather = {
    apikey:"c60abc8d9f7fa87273aeba5933c1a27a", // Replace this with your actual API key

    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },

    // displayWeather: function(data) {
    //     const { name } = data;
    //     const { icon, description } = data.weather[0];
    //     const { temp, humidity } = data.main;
    //     const { speed } = data.wind;
    //     document.querySelector(".city").innerText = "Weather in " + name;
    //     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    //     document.querySelector(".description").innerText = description;
    //     document.querySelector(".temp").innerText = temp + "°C";
    //     document.querySelector(".feels-like").ATTRIBUTE_NODE

    //     document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    //     document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    //     document.querySelector(".weather").classList.remove("loading");
    //     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    // },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { uvi, dew_point, clouds, visibility } = data;
    
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = "Temperature: " + temp + "°C";
        document.querySelector(".feels-like").innerText = "Feels like: " + "DATA_UNAVAILABLE"; // Feels like temperature not available in the provided data
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".max-uv").innerText = "Max UV: " + uvi;
        document.querySelector(".dew-point").innerText = "Dew Point: " + dew_point;
        document.querySelector(".cloud-cover").innerText = "Cloud Cover: " + clouds + "%";
        document.querySelector(".visibility").innerText = "Visibility: " + visibility + " meters";
    
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    

    search : function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Mumbai");

