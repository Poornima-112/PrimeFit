import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    
    const { isLoggedIn } = useAuth();

    return (
        <>
            <header>
                <div className="logo-brand">
                    <NavLink to="/">PrimeFit</NavLink>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/"> Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/About"> About </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/Contact"> Contact </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Service"> Service </NavLink>
                        </li>

                        {isLoggedIn ? 
                        <li>
                            <NavLink to="/Logout"> Logout </NavLink>
                        </li>

                        : <>
                        <li>
                            <NavLink to="/Register"> Register </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Login"> Login </NavLink>
                        </li>
                        </>
                        }

                        
                    </ul>
                </nav>
            </header>
        </>
    );
};



