import {Component} from 'react';
import LeftSide from "./LeftSide.tsx";


class Navigation extends Component {
    render() {
        return (
            <div className={"navigation"}>
                <LeftSide/>

            </div>
        )
    }
}

export default Navigation;