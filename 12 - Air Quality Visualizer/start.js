(() => {
  // เริ่มเขียนโค้ด

const KEY = '1ca0c71c-85ba-42ab-be1f-b02cee789984';

async function getAirQuality({city, state, country}){
  const response = await fetch(
    `https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${KEY}`
  );
  const {data: { current } } = await response.json();
  const {pollution, weather} = current;
  return {
    aqi: pollution.aqius,
    tem: weather.tp,
    hum: weather.hu,
    wind: weather.ws
  };
}

function displayAirQaulity ({city, state, country, aqi, tem, hum, wind}){
  const cityE = document.querySelector('.city');
  const stateCountryE = document.querySelector('.state-country');
  const aquiE = document.querySelector('.aqi > h1');
  const temE = document.querySelector('.temperature');
  const humE = document.querySelector('.humidity');
  const windE = document.querySelector('.wind');

  cityE.innerText = city;
  stateCountryE.innerText = `${state}, ${country}`;
  aquiE.innerText = aqi;
  temE.innerText = `Temp: ${tem}`;
  humE.innerText = `Humidity: ${hum}%`;
  windE.innerText = `Wind: ${wind} m/s`;
  
}

function setAirColor(aqi){
  if(aqi <= 50){
    document.documentElement.style.setProperty(
      '--current-aqi-color',
      'var(--good-aqi-color)'
    );
  }else if(aqi <= 100){
    document.documentElement.style.setProperty(
      '--current-aqi-color',
      'var(--medium-aqi-color)'
    );
  }else{
    document.documentElement.style.setProperty(
      '--current-aqi-color',
      'var(--bad-aqi-color)'
    );
  }
}

async function run (){
  const city = 'Dhaka';
  const state = 'Dhaka';
  const country = 'Bangladesh';

 const {aqi, tem, hum, wind} = await getAirQuality({city, state, country});

 displayAirQaulity({
   city,
   state,
   country,
   aqi,
   tem,
   hum,
   wind
 });

 setAirColor(aqi);
}
run();
})();
