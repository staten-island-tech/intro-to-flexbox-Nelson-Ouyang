const DOMSelectors = {
  name: document.getElementById("name"),
  image: document.getElementById("img"),
  price: document.getElementById("price"),
};

const glasses = [
  {
    name: "Kro 02",
    image: "Kro 02.avif",
    price: 500,
    color: ["Silver", "Clear"],
  },
  {
    name: "Manifesto 031",
    image: "Manifesto 031.avif",
    price: 544,
    color: ["Gold", "Silver"],
  },
  {
    name: "Milky Way 02BL",
    image: "Milky Way 02BL.avif",
    price: 660,
    color: ["Cyan", "Silver"],
  },
  {
    name: "Mosh 02",
    image: "Mosh 02.avif",
    price: 405,
    color: ["Silver", "Clear"],
  },
  {
    name: "Paradoxx 01",
    image: "Paradoxx 01.avif",
    price: 710,
    color: ["Black", "Blue"],
  },
  {
    name: "Saga 02(V)",
    image: "Saga 02(V).avif",
    price: 290,
    color: ["Silver", "Purple"],
  },
  {
    name: "Vanta 037",
    image: "Vanta 037.avif",
    price: 510,
    color: ["Gold", "Clear"],
  },
  {
    name: "Ytt 02",
    image: "Ytt 02.avif",
    price: 400,
    color: ["Silver", "Clear"],
  },
  {
    name: "Alto 01",
    image: "Alto 01.avif",
    price: 568,
    color: ["Black", "Clear"],
  },
  {
    name: "Faust 02(MGR)",
    image: "Faust 02(MGR).avif",
    price: 444,
    color: ["Silver", "Green"],
  },
  {
    name: "Odd IC3",
    image: "Odd IC3.avif",
    price: 320,
    color: ["Ivory", "Blue"],
  },
  {
    name: "Kafka BRD1",
    image: "Kafka BRD1.avif",
    price: 580,
    color: ["Brown", "Purple"],
  },
  {
    name: "Fuse MGR1",
    image: "Fuse MGR1.avif",
    price: 410,
    color: ["Green", "Red"],
  },
  {
    name: "Era T7",
    image: "Era T7.avif",
    price: 295,
    color: ["Tortoise", "Yellow"],
  },
  { name: "Karl C1", image: "Karl C1.avif", price: 530, color: ["Clear"] },
  {
    name: "Orbit 01",
    image: "Orbit 01.avif",
    price: 470,
    color: ["Black", "Clear"],
  },
  {
    name: "Fata RC8",
    image: "Fata RC8.avif",
    price: 360,
    color: ["Red", "Grey"],
  },
  {
    name: "Vene GR5",
    image: "Vene GR5.avif",
    price: 250,
    color: ["Green", "Orange"],
  },
  {
    name: "Vene 01(RG)",
    image: "Vene 01(RG).avif",
    price: 600,
    color: ["Black", "Brown"],
  },
  {
    name: "Aba 031",
    image: "Aba 031.avif",
    price: 390,
    color: ["Gold", "Clear"],
  },
];

function inject(glasses) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img class="img" src="img/${image}"/>
      <h1 class="name">${name}</h1>
      <p class="price">$${price}</p>
    </div>`
  );
}
