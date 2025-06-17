export default function FooterLinkTitle({ title ,children }) {
    return (
        <div>
            <h4 className="text-accent-green font-medium text-sm mb-6">{title}</h4>
            <ul className="space-y-4">{children}</ul>
        </div>
    );
}