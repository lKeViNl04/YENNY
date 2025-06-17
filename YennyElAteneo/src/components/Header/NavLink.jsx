import Link from "./Link";

export default function NavLink({ to, children }) {
    return (
        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
            <Link to={to}>{children}</Link>
        </li>
    );
}
