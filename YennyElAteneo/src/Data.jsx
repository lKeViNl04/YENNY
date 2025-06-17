/*SHOP*/
export const genres = [
  "Mystery",
  "Sci-Fi",
  "Romance",
  "Thriller",
  "Philosophical Fiction",
  "Biography",
  "Politics",
  "Fantasy",
  "Literary Fiction",
  "Psychological Thriller"
]

export const languages = ["English", "Spanish", "French", "German", "Japanese"];
export const formats = ["Hardcover", "Paperback", "Ebook", "Audiobook"];

/**/
/*HOME*/

export const cards = [
  {
    title: "Fast Shipping",
    text: "Same-day delivery. Free over $35,000.",
    icon: "Delivery-Truck",
  },
  {
    title: "Secure Payments",
    text: "Cards, transfers, and protected platforms.",
    icon: "Lock",
  },
  {
    title: "Customer Support",
    text: "Contact us via WhatsApp, email, or social media.",
    icon: "Customer-Service",
  },
  {
    title: "Promotions",
    text: "Check out our banking promotions",
    icon: "Percentage",
  },
];

export const logos = (
  <>
    <li>
      <img
        src="/img/banco-ciudad-logo.svg"
        alt="bancociudad"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/banco-icbc-logo.svg"
        alt="bancoicbc"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/banco-macro-logo.svg"
        alt="bancomacro"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/banco-nacion-logo.svg"
        alt="banconacion"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/banco-provincia-logo.svg"
        alt="bancoprovincia"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/banco-santander-logo.svg"
        alt="bancosantander"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/cuotasimple-logo.svg"
        alt="cuotasimple"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/naranjaX-logo.svg"
        alt="naranjaX"
        className="h-12 object-contain"
      />
    </li>
    <li>
      <img
        src="/img/uala-logo.svg"
        alt="uala"
        className="h-12 object-contain"
      />
    </li>
  </>
);
/**/
/*Login*/
export const UserData = [
  {
    id: 1,
    name: "Yenny",
    email: "hola@mundo.com",
    password: "12345678",
    is_admin: false,
  },
  {
    id: 2,
    name: "El Ateneo",
    email: "adios@vida.com",
    password: "87654321",
    is_admin: true,
  },
];

/* */

/*Cart */

export const productsData = [
  {
    id: 1,
    name: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    genre: "Magical Realism",
    image:
      "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg",
    price: 20,
    quantity: 1,
  },
  {
    id: 2,
    name: "1984",
    author: "George Orwell",
    genre: "Dystopia",
    image:
      "https://contentv2.tap-commerce.com/cover/large/9788426400260_1.jpg?id_com=1156&back=fad2e1",
    price: 15,
    quantity: 1,
  },
  {
    id: 3,
    name: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    image: "https://www.edicontinente.com.ar/image/titulos/9788499082479.jpg",
    price: 25,
    quantity: 1,
  },
];
