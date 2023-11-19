const apiKey = '59d8ed585f9bfeaf93e469ff131cbc03';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city) {


  if (city === ' ') {
    alert("Enter city name")
    return;
  }


  const respone = await fetch(apiUrl+city+`&appid=${apiKey}`);
  var data = await respone.json();


  if (respone.status === 200) {
    document.querySelector('.weather').style.display = 'block'
    let image = document.querySelector('.img-box');
    document.querySelector('#city').innerHTML = data.name;
    let tempData = data.main.temp;
    tempData = Math.round(tempData);
    console.log(tempData);
    document.querySelector('.temperature').innerHTML = tempData;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`;

    if (data.weather[0].main =='Smoke') {
        image.src = 'images/mist.png';
    } else if (data.weather[0].main =='Clouds') {
      image.src = 'images/clouds.png';
    } else if (data.weather[0].main =='Rain') {
      image.src = 'images/rain.png';
    } else if (data.weather[0].main =='Drizzle') {
      image.src = 'images/drizzle.png';
    } else if (data.weather[0].main =='Snow') {
      image.src = 'images/snow.png';
    }else {
      image.src = 'images/clear.png';
    }
  } else {
    document.querySelector('.input').value = ' ';
    document.querySelector('.weather').style.display = 'none'
    alert("Enter Valid City");
  }


}

const search = document.querySelector('.search').addEventListener('click',() => {
  let city =  document.querySelector('.input').value
  checkWeather(city);
})


