import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import './style.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      num: 0,
      btnTxt: 'VAI'
    }
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpa = this.limpa.bind(this)
  }

  vai(){

    let state = this.state
    if(this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
      state.btnTxt = 'VAI'
    }
    else {
      this.timer = setInterval(() => {
        let state = this.state
        state.num += 0.1
        this.setState(state)
      }, 100)
      state.btnTxt = 'PAUSA'
    }

    this.setState(state)
    
  }

  limpa(){
    if(this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.num = 0
    state.btnTxt = 'VAI'
    this.setState(state)
  }
  
  render(){
    return(
      <div className='container'>
        <img src={require('./assets/cronometer.png').default} className='img'/>
        <br/>
        <a className='timer'>{this.state.num.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='btn' onClick={this.vai}>{this.state.btnTxt}</a>
          <br/>
          <a className='btn' onClick={this.limpa}>LIMPAR</a>
          <br/>
        </div>
      </div>
    )
  }
}

export default App;
