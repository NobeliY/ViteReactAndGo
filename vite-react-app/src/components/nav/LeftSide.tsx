import {Component} from 'react';
import {ReactSVG} from "react-svg";
import Logo from "../../assets/Logo.svg";
import GitHub from "../../assets/GitHub.svg";

class LeftSide extends Component {
    logo = (
        <div className="logo">
            <ReactSVG src={Logo}/>
            <h1>REPAER</h1>
        </div>
    )
    github = (
        <a className="github" href="https://github.com/NobeliY">
            <ReactSVG src={GitHub}/>
        </a>
    );
    render() {

        return (
            <div className={"overlay_sides.overlay_sides_left"}>
                {this.logo}
                {this.github}

            </div>
        );
    }
}

export default LeftSide;