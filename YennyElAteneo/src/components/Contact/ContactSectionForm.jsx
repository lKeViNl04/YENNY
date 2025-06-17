import { PhoneIcon, BugIcon, InfoIcon, NewspaperIcon } from "lucide-react";

const contacts = [
  {
    icon: <PhoneIcon className="w-5 h-5 text-blue-500" />,
    title: "Technical support",
    email: "support@example.com",
    phone: "+1 234-567-89",
  },
  {
    icon: <InfoIcon className="w-5 h-5 text-blue-500" />,
    title: "Sales questions",
    email: "sales@example.com",
    phone: "+1 234-567-89",
  },
  {
    icon: <NewspaperIcon className="w-5 h-5 text-blue-500" />,
    title: "Press",
    email: "press@example.com",
    phone: "+1 234-567-89",
  },
  {
    icon: <BugIcon className="w-5 h-5 text-blue-500" />,
    title: "Bug report",
    email: "bugs@example.com",
    phone: "+1 234-567-89",
  },
];

export default function ContactForm() {
  return (
    <div className="bg-black/80 text-white rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 backdrop-blur-sm">
      <div className="col-span-1 md:col-span-2 text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Send us a message
        </h2>
      </div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-transparent border border-white/30 px-4 py-2 rounded-md placeholder-white"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-transparent border border-white/30 px-4 py-2 rounded-md placeholder-white"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full bg-transparent border border-white/30 px-4 py-2 rounded-md placeholder-white"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-accent-green hover:bg-emerald-800 text-white py-2 rounded-md"
        >
          SEND
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-start space-x-3 min-w-0">
            <div className="p-2 rounded-md bg-white/10 shrink-0">
              {contact.icon}
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-white truncate">
                {contact.title}
              </h4>
              <p className="text-sm text-white/80 break-words">
                {contact.email}
              </p>
              <p className="text-sm text-white/80 break-words">
                {contact.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
