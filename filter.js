const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genres: ["Classic", "Fiction"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genres: ["Classic", "Fiction"],
  },
  {
    title: "1984",
    author: "George Orwell",
    genres: ["Dystopian", "Science Fiction"],
  },
];

function filterByGenre(genres) {
  let display = document.querySelector(".card-display");
  display.innerHTML = "";
  books.forEach((book) => {
    if (book.genres.includes("Fiction")) {
      console.log(`${book.title} by ${book.author} is a Fiction book.`);
    }
  });
}
