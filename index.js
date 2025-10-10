const DOMSelectors = {
  name: document.getElementById("name"),
  image: document.getElementById("img"),
  price: document.getElementById("price"),
  button: document.getElementById("button"),
};

const glasses = [
  {
    id: 0,
    name: "Kro 02",
    image: "Kro 02.avif",
    price: 500,
    color: ["Silver", "Clear"],
  },
  {
    id: 1,
    name: "Manifesto 031",
    image: "Manifesto 031.avif",
    price: 544,
    color: ["Gold", "Silver"],
  },
  {
    id: 2,
    name: "Milky Way 02BL",
    image: "Milky Way 02BL.avif",
    price: 660,
    color: ["Cyan", "Silver"],
  },
  {
    id: 3,
    name: "Mosh 02",
    image: "Mosh 02.avif",
    price: 405,
    color: ["Silver", "Clear"],
  },
  {
    id: 4,
    name: "Paradoxx 01",
    image: "Paradoxx 01.avif",
    price: 710,
    color: ["Black", "Blue"],
  },
  {
    id: 5,
    name: "Saga 02(V)",
    image: "Saga 02(V).avif",
    price: 290,
    color: ["Silver", "Purple"],
  },
  {
    id: 6,
    name: "Vanta 037",
    image: "Vanta 037.avif",
    price: 510,
    color: ["Gold", "Clear"],
  },
  {
    id: 7,
    name: "Ytt 02",
    image: "Ytt 02.avif",
    price: 400,
    color: ["Silver", "Clear"],
  },
  {
    id: 8,
    name: "Alto 01",
    image: "Alto 01.avif",
    price: 568,
    color: ["Black", "Clear"],
  },
  {
    id: 9,
    name: "Faust 02(MGR)",
    image: "Faust 02(MGR).avif",
    price: 444,
    color: ["Silver", "Green"],
  },
  {
    id: 10,
    name: "Odd IC3",
    image: "Odd IC3.avif",
    price: 320,
    color: ["Ivory", "Blue"],
  },
  {
    id: 11,
    name: "Kafka BRD1",
    image: "Kafka BRD1.avif",
    price: 580,
    color: ["Brown", "Purple"],
  },
  {
    id: 12,
    name: "Fuse MGR1",
    image: "Fuse MGR1.avif",
    price: 410,
    color: ["Green", "Red"],
  },
  {
    id: 13,
    name: "Era T7",
    image: "Era T7.avif",
    price: 295,
    color: ["Tortoise", "Yellow"],
  },
  {
    id: 14,
    name: "Karl C1",
    image: "Karl C1.avif",
    price: 530,
    color: ["Clear"],
  },
  {
    id: 15,
    name: "Orbit 01",
    image: "Orbit 01.avif",
    price: 470,
    color: ["Black", "Clear"],
  },
  {
    id: 16,
    name: "Fata RC8",
    image: "Fata RC8.avif",
    price: 360,
    color: ["Red", "Grey"],
  },
  {
    id: 17,
    name: "Vene GR5",
    image: "Vene GR5.avif",
    price: 250,
    color: ["Green", "Orange"],
  },
  {
    id: 18,
    name: "Vene 01(RG)",
    image: "Vene 01(RG).avif",
    price: 600,
    color: ["Black", "Brown"],
  },
  {
    id: 19,
    name: "Aba 031",
    image: "Aba 031.avif",
    price: 390,
    color: ["Gold", "Clear"],
  },
];

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <img class="img" src="img/${item.image}"/>
      <h1 class="name">${item.name}</h1>
      <p class="price">$${item.price}</p>
      <button class="btn" data-id="${item.id}">Add to Cart</button>
    </div>`
  );
}

glasses.forEach((glass) => {
  inject(glass);
});

// create and append a new paragraph element to the body

/* const newP = document.createElement("p");
newP.textContent = "This is a new paragraph!";
document.body.appendChild(newP); */

let count = 0;
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    updateCount();
    addcart(event.target);
  });
});

function updateCount() {
  count++;
  const countDisplay = document.querySelector("h5");
  countDisplay.textContent = `Count: ${count}`;
}
const cart = [];
function addcart(button) {
  //Get the glass id from the button's data attribute
  const id = button.getAttribute("data-id");

  //Find the corresponding glass object from the glasses array
  const selectedGlass = glasses.find((glass) => glass.id === Number(id));

  if (selectedGlass) {
    cart.push(selectedGlass);
    console.log(cart);
  } else {
    console.error("Glass not found");
  }
}
