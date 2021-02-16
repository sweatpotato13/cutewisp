import React, { Component } from "react";
import Particles from "react-tsparticles";
import "./Home.css";

class App extends Component {
    render() {
        return (
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: "#000"
                    },
                    detectRetina: false,
                    fpsLimit: 30,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            resize: true
                        }
                    },
                    particles: {
                        color: {
                            value: "#fff"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1080
                            },
                            limit: 0,
                            value: 400
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 0.25,
                                sync: false
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.05
                            },
                            value: 1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: {
                                enable: true,
                                minimumValue: 0.5
                            },
                            value: 1
                        }
                    }
                }}
            />
        );
    }
}

interface Props { }

const Home: React.FC = (props: Props) => {
    return (
        <><App></App>
            <div className="wisp">
                <img className="img-fluid" id="gh-mark" src="https://i.imgur.com/T1jsC1F.png"></img>
            </div>
            <div className="links">
                <a className="btn btn-link" href="https://github.com/sweatpotato13">
                    <img className="img-fluid" id="gh-mark" src="https://i.imgur.com/1H9rucl.png"></img>
                </a>
                <a className="btn btn-link" href="https://code.cutewisp.com">
                    <img className="img-fluid" id="gh-mark" src="https://i.imgur.com/jx5DIti.png"></img>
                </a>
                <a className="btn btn-link" href="https://blog.cutewisp.com">
                    <img className="img-fluid" id="gh-mark" src="https://i.imgur.com/YxuMuMj.png"></img>
                </a>
            </div>
        </>
    );
};

export default Home;
