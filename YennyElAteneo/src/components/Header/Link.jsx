import {NavLink} from "react-router-dom";

export default function Link({ className="",to, children }){
    return(
        <NavLink
            to={to}
            className={({ isActive }) =>
            `block font-medium text-1xl ${
                isActive ? "text-accent-blue ": "text-white hover:text-accent-blue "
            }`
            }
        >
            {children}
        </NavLink>
    );
}