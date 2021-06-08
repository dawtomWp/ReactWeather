import React, {Component} from 'react'
import StartPanel from './StartPanel/StartPanel';
import CurrentLocationWeather from './CurrentLocationWeather/CurrentLocationWeather';
import Button from './Button/Button';
import {RiMenu4Fill} from 'react-icons/ri';
import SearchWeather from './SearchWeather/SearchWeather';


class App extends Component {
  state = {
    startSetup: true,
    weatherType: ''
  }
  handleChoose = (e) => {
    const type = e.target.getAttribute('purpose')
    this.setState({
      weatherType: type,
      startSetup: !this.state.startSetup
    })
  }
  handleShowSettings = () => this.setState({startSetup: true})

  render () {
    
   const {startSetup, weatherType} = this.state

   return (
    <div className="App">
         {startSetup ? <StartPanel buttonMethod={this.handleChoose}/> : null}
       <nav className={"menu"}>
         {!startSetup ? <Button className="burger" click={this.handleShowSettings} children={<RiMenu4Fill />}/> : null}
       </nav>
       {(weatherType === 'showLocation' && startSetup === false ?  <CurrentLocationWeather /> : null) 
       || 
        (weatherType === 'searchLocation' && startSetup === false ?  <SearchWeather /> : null)}
       {}
    </div>
    );
  }
}

export default App;
