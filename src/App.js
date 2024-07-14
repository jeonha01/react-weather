import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

let lang = "kr"

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다

function App() {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState(null)
  const [apiError, setAPIError] = useState("");
  const [icon, setIcon] = useState(null);
  const cities = ['Paris', 'München', 'London', 'Madrid']
  const variants = ['primary', 'danger', 'light', 'warning']
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    })
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c80e0084d2561acf60206541abf57eb2&lang=${lang}&units=metric`
      const response = await fetch(url)
      const data = await response.json()
      setWeather(data)
      setIcon(data.weather[0].icon)
      setLoading(false)
    } catch (err) {
      setAPIError(err.message)
      setLoading(false)
    }
  }

  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c80e0084d2561acf60206541abf57eb2&lang=${lang}&units=metric`
      const response = await fetch(url)
      const data = await response.json()
      setWeather(data)
      setIcon(data.weather[0].icon)
      setLoading(false)
    } catch (err) {
      setAPIError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (city == null) {
      setLoading(true);
      getCurrentLocation()
    } else {
      setLoading(true);
      getWeatherByCity()
    }
  }, [city])

  const bgChange = (city) => {
    if (city === "Paris") {
      return "Paris"
    } else if (city === "München") {
      return "München"
    } else if (city === "London") {
      return "London"
    } else if (city === "Madrid") {
      return "Madrid"
    } else if (city === null) {
      return "current"
    }
  }

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null)
    } else {
      setCity(city)
    }
  }

  return (
    <div className={`App ${bgChange(city)}`}>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={loading}

            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"

          />
        </div>) : !apiError ? (<div className='container'>

          <WeatherBox weather={weather} icon={icon} />
          <WeatherButton cities={cities} handleCityChange={handleCityChange} variants={variants} selectedCity={city} />
        </div>) : (
        apiError
      )}
    </div>

  );
}

export default App;
