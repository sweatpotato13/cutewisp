import React, { Component } from "react";
import AudioPlayer from "../../components/audio/audio";
import "./Home.css";

class App extends Component {
    render() {
        return (
            <div>
                <img className="bgimage" src="https://i.imgur.com/7AgrJqo.png"></img>
            </div>
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
            <div className="center">
                <div>
                    <AudioPlayer />
                </div>
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