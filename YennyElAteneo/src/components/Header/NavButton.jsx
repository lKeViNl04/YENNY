import {NavLink} from "react-router-dom";

export default function NavButton({ href, onClick, className = "", children }) {
    const baseStyles = "px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide transition-all";

   

    if (href) {
        return (
        <NavLink
            to={href}
            className={`${baseStyles} ${className}`}
        >
            {children}
        </NavLink>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
        {children}
        </button>
    );
}
