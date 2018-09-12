import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';
import NavigationBar from './NavigationBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

import './App.css';
import HexGridComponent from './HexGridComponent';


let services = [
    {
        name: "Ocean1",
        link: "https://ocean.thedive.com/"
    },
    {
        name: "Ocean2",
        link: "https://ocean2.thedive.com"
    },
    {
        name: "Ocean3",
        link: "https://ocean.thedive.com"
    },
    {
        name: "Ocean4",
        link: "https://ocean2.thedive.com"
    },
    {
        name: "Ocea5",
        link: "https://ocean.thedive.com"
    },
    {
        name: "Ocean6",
        link: "https://ocean2.thedive.com"
    },
]





export default class LaunchPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
        particlesSpeed: 2,
        interactivity: {}
    }
    this.stopParticles = this.stopParticles.bind(this)
    this.resumeParticles = this.resumeParticles.bind(this)
  }
  stopParticles(){
  }
  resumeParticles(){
    //   this.setState({interactivity:{}})
  }
  componentDidMount (){
    console.log('Component has been rendered');
    setTimeout(()=>{
        if(document.getElementById("servicesContainerId"))
        document.getElementById("servicesContainerId").classList.add("loaded")
    }, 500)
  }
  
  render() {
    return (
      <div className="LaunchPad">
        {/* <NavigationBar /> */}
        <Particles className="particles-wrapper"
            params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": false,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity":{
                    "detect_on": "window",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 200,
                        "line_linked": {
                          "opacity": 1
                        }
                      },
                      "bubble": {
                        "distance": 70,
                        "size": 5,
                        "duration": 2,
                        "opacity": 3,
                        "speed": 3
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  } ,
            }} />

        {/* <Section1/>
        <Section2/>
        <Section3/>
        <Section1/> */}

        {/* <div id="servicesContainerId" className="servicesContainer">
            <div className="first-line-services line-services">
                <Link to={services[0].link} target="_blank" className="service-box first-left" onMouseEnter={this.stopParticles} onMouseLeave={this.resumeParticles}>
                    <div className="service-path">
                        {services[0].name}
                    </div>
                </Link>
                <Link to={services[1].link} target="_blank" className="service-box first-right" onMouseEnter={this.stopParticles} onMouseLeave={this.resumeParticles}>
                    <div className="service-path">
                    {services[1].name}
                    </div>
                </Link>
            </div>
            <div className="second-line-services line-services">
                <Link to={services[2].link} target="_blank" className="service-box second-left" onMouseEnter={this.stopParticles} onMouseLeave={this.resumeParticles}>
                    <div className="service-path">
                    {services[2].name}
                    </div>
                </Link>
                <img height="250px" width="auto" src="https://www.thedive.com/wp-content/themes/thedive/images/thedive-logo-2x.png" alt="TheDive Logo" />
                <Link to={services[3].link} target="_blank" className="service-box second-right" onMouseEnter={this.stopParticles} onMouseLeave={this.resumeParticles}>
                    <div className="service-path">
                    {services[3].name}
                    </div>
                </Link>
            </div>
            <div className="third-line-services line-services">
                <Link to={services[4].link} target="_blank" className="service-box third-left" onMouseEnter={this.stopParticles} onMouseLeave={this.resumeParticles}>
                    <div className="service-path">
                    {services[4].name}
                    </div>
                </Link>
                <Link to={services[5].link} target="_blank" className="service-box third-right" onMouseEnter={this.stopParticles} onMouseLeave={this.resumeParticles}>
                    <div className="service-path">
                    {services[5].name}
                    </div>
                </Link>
            </div>
            
        </div>
         */}
         <HexGridComponent />
        

        
      </div>
    );
  }
}

