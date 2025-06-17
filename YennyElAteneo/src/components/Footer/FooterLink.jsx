export default function FooterLink({ to ="#",children }) {
    return (
        <li>
            <a href={to} className="hover:text-accent-green text-gray-400 text-sm font-normal transition-all">
                {children}
            </a>
        </li>
    );
}
