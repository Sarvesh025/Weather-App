const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e61af02798msh95d83466693c2eep143b86jsn7f8dca1bfd3e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}

    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        getWeather(city.value);
    });
    
    getWeather("Kolkata");
    

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        chennai_temp.innerHTML = response.temp
        chennai_feels_like.innerHTML = response.feels_like
        chennai_humidity.innerHTML = response.humidity
        chennai_min_temp.innerHTML = response.min_temp
        chennai_max_temp.innerHTML = response.max_temp
        chennai_wind_speed.innerHTML = response.wind_speed
        chennai_wind_degrees.innerHTML = response.wind_degrees
        chennai_sunrise.innerHTML = response.sunrise
        chennai_sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        delhi_temp.innerHTML = response.temp
        delhi_feels_like.innerHTML = response.feels_like
        delhi_humidity.innerHTML = response.humidity
        delhi_min_temp.innerHTML = response.min_temp
        delhi_max_temp.innerHTML = response.max_temp
        delhi_wind_speed.innerHTML = response.wind_speed
        delhi_wind_degrees.innerHTML = response.wind_degrees
        delhi_sunrise.innerHTML = response.sunrise
        delhi_sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=goa', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        goa_temp.innerHTML = response.temp
        goa_feels_like.innerHTML = response.feels_like
        goa_humidity.innerHTML = response.humidity
        goa_min_temp.innerHTML = response.min_temp
        goa_max_temp.innerHTML = response.max_temp
        goa_wind_speed.innerHTML = response.wind_speed
        goa_wind_degrees.innerHTML = response.wind_degrees
        goa_sunrise.innerHTML = response.sunrise
        goa_sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bangalore', options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        bangalore_temp.innerHTML = response.temp
        bangalore_feels_like.innerHTML = response.feels_like
        bangalore_humidity.innerHTML = response.humidity
        bangalore_min_temp.innerHTML = response.min_temp
        bangalore_max_temp.innerHTML = response.max_temp
        bangalore_wind_speed.innerHTML = response.wind_speed
        bangalore_wind_degrees.innerHTML = response.wind_degrees
        bangalore_sunrise.innerHTML = response.sunrise
        bangalore_sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));

    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e61af02798msh95d83466693c2eep143b86jsn7f8dca1bfd3e',
            'X-RapidAPI-Host': 'world-clock.p.rapidapi.com'
        }
    };
    
    const getTime =(city)=>{
        
    fetch('https://world-clock.p.rapidapi.com/json/utc/now' + city, option)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            
            hour.innerHTML = response.hour
            minute.innerHTML = response.minute
            second.innerHTML = response.second
        
        
        })
        .catch(err => console.error(err));

    }




    // setInterval(()=>{
    //     d = new Date();
    
    //     htime = d.getHours();
    //     mtime = d.getMinutes();
    //     stime = d.getSeconds();
    
    //     hRotation = 30*htime + mtime/2;
    //     mRotation = 6*mtime;
    //     sRotation = 6*stime;
    
    //     hour.style.transform = `rotate(${hRotation}deg)`;
    //     minute.style.transform = `rotate(${mRotation}deg)`;
    //     second.style.transform = `rotate(${sRotation}deg)`;
    // }, 1000);

    // if(hRotation <= 150){
    //     document.body.style.background = "url('/images/night.jpg')";
    // }
    // else{
    //     body.style.background = "url('/image/morning.jpg')";
    // }