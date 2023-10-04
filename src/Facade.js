const weather = {
  today: "clear",
  tomorrow: "rainy"
}

export class Pilot {
  constructor(name) {
    this.name = name
    this.health = "healthy"
  }
  
  ill() {
    this.health = "ill"
  }

  recover() {
    this.health = "healthy"
  }

  checkHealth(){
    return (this.health === 'healthy')
  }

}

class AirPort {
  flyable(pilot, day) {
    const isPilotAvailable = pilot.checkHealth()
    const isWeatherAvailable = this.checkWeather(day)
    console.log(isPilotAvailable && isWeatherAvailable)
    return (isPilotAvailable && isWeatherAvailable);
  }

  checkWeather = (day) => (weather?.[day] === 'clear')
}

export default AirPort;
