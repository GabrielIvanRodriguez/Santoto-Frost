import {Fragment} from "react";
import './NavBarItem.css';

const NavBarItem = (props) => {
    return (
        <Fragment>
            <li>
                <p className="item">
                    {props.texto}
                </p>
            </li>
        </Fragment>
    )
}

export default NavBarItem
