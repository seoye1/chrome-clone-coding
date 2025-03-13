const API_KEY = ""; // 보안상 api 키는 가렸음

function onGeoOk(position){ // 사용자의 현재 위치(위도, 경도) 를 가져오는 함수.
  const lat = position.coords.latitude; // position 객체에서 위도 가져옴.
  const lon = position.coords.longitude; // position 객체에서 경도 가져옴.
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // 위도 경도 api
  // units=metric 옵션을 추가해 섭씨 온도(°C) 로 데이터를 받음
  fetch(url).then((response )=> response.json())
      .then((data)=>{ // fetch(url)로 날씨 데이터를 받은 후, .then(response => response.json())으로 json 형태로 변함.

        // 실제로 날씨 데이터를 html에 표시
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp.toFixed(2)}°C`; // toFixed(): 숫자를 소수점 아래 지정한 자릿수까지 반올림해서 문자열로 반환

        // 도시 이름, 날씨 상태, 현재 온도 표시
  });
  /* fetch(url): API 요청을 보내서 날씨 데이터를 받아옴.
.then(response => response.json()): 받은 응답을 JSON 형식으로 변환.
.then((data) => { ... }): 변환된 데이터를 이용해 HTML에 표시. */

}

function onGeoError(){ // 위치 가져오기 실패 시(에러 처리 함수)
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);