const express = require("express");
const app = express();

// Middleware
app.use(express.json());

let books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
];

// intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our Bookstore!",
  });
});

// get all books
app.get("/get", (req, res) => {
  res.json(books);
});

// get a single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === parseInt(req.params.id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// add a book
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };
  books.push(newBook);
  res.status(200).json({
    message: "New book added",
    data: newBook,
  });
});

// update a book
app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;
    res.status(200).json({
      message: `Book ${findCurrentBook.id} updated`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// delete a book
app.delete("/delete/:id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: `Book ${req.params.id} deleted`,
      data: deletedBook,
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
