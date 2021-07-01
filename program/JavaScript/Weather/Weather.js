var submit = document.querySelector("#sub");

submit.addEventListener("click", () =>
{
	var city = document.getElementById('City').value;
	var data;
	var t, h, w, d;
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09f01603ab59577ed4b2e086f52c6186&units=metric`)
		.then(data => data.json())
		.then(data =>
		{
			t = data.main.temp;
			h = data.main.humidity;
			w = data.wind.speed;
			d = data.weather[0].main;

			document.getElementById('info').style.border = "1px solid white";
			if(d=='Clear')
			{
				document.body.style.backgroundImage = "url('sunny.gif')";
				document.getElementById('icon').style.backgroundImage = "url(sun.png)";
			}

			else if(d=='Clouds')
			{
				if(data.weather[0].description=='broken clouds' || data.weather[0].description=='few clouds')
				{
					document.body.style.backgroundImage = "url('cloudy2.gif')";
					document.getElementById('icon').style.backgroundImage = "url(cloudy.png)";
					d = "Few " + d;
				}
				else
				{
					document.body.style.backgroundImage = "url('cloud.gif')";
					document.getElementById('icon').style.backgroundImage = "url(cloud.png)";
				}
			}
			else if(d=='Rain')
			{
				document.body.style.backgroundImage = "url('rain.gif')";
				document.getElementById('icon').style.backgroundImage = "url(rain.png)";
			}
			else if(d=='Haze')
			{
				document.body.style.backgroundImage = "url('haze.gif')";
				document.getElementById('icon').style.backgroundImage = "url(haze.png)";
			}
			else if(d=='Dust')
			{
				document.body.style.backgroundImage = "url('dust.gif')";
				document.getElementById('icon').style.backgroundImage = "url(dust.png)";
			}
			else if(d=='Mist')
			{
				document.body.style.backgroundImage = "url('mist.gif')";
				document.getElementById('icon').style.backgroundImage = "url(mist.png)";
			}
			else if(d=='Snow')
			{
				document.body.style.backgroundImage = "url('snow.gif')";
				document.getElementById('icon').style.backgroundImage = "url(snow.png)";
			}
			else if(d=='Thunderstorm')
			{
				document.body.style.backgroundImage = "url('storm.gif')";
				document.getElementById('icon').style.backgroundImage = "url(storm.png)";
			}
			else if(d=='Drizzle')
			{
				document.body.style.backgroundImage = "url('drizzle.gif')";
				document.getElementById('icon').style.backgroundImage = "url(drizzle.png)";	
			}
		
			document.getElementById('today').innerText = `Today`
			document.getElementById('place').innerText = `${city}`
			document.getElementById('day').innerText = `${d}`
			document.getElementById('temp').innerText = `Temperature: ${t}˚C`
			document.getElementById('hum').innerText = `Humidity: ${h}`
			document.getElementById('wind').innerText = `Wind: ${w}`;


		})

});
