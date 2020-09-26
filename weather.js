const weather = document.querySelector(".js-weather");
const API_KEY = "136fc90f5f8372a0ec02ad872d1f3e88";
const COORDS = "coords";

function getWeather(lat, lng){//특정 url호출
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place =json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){//좌표저장
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };//객체 변수의 이름과 객체의 key이름을 같게하기 위해서하는 방법
    saveCoords(coordsObj) ;
    getWeather(latitude,longitude)
}

function handleGeoError(){
    console.log('Cant access geo location.')
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);//이거말고도 또있음

}

function loadCoords(){
const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords =JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    //get weather
    }

}





function init(){
    loadCoords();
}

init();