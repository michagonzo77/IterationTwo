import { Link } from 'react-router-dom';
import michaellogo from "../static/images/MichaelLogo.png"
export const Nav = (props) => {


    return (
        <div class="mainNav">
            <div className="d-flex justify-content-between">
                <div className="logoNav">
                    <img class="logo" src={michaellogo}></img>
                </div>
                <div className="linksNav">
                    <ul class="d-flex list-unstyled gap-5">
                        <li>About</li>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}