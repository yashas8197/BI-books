import BooksByTitle from "./components/BooksByTitle";
import Books from "./components/Books";
import BookByAuthor from "./components/BookByAuthor";
import AddBookForm from "./components/AddBookForm";

export default function App() {
  return (
    <main>
      <AddBookForm />
      <Books />
      <BooksByTitle title="To Kill a Mockingbird" />
      <BookByAuthor author="Harper Lee" />
    </main>
  );
}
