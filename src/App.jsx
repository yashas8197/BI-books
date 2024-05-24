import BooksByTitle from "./components/BooksByTitle";
import Books from "./components/Books";
import BookByAuthor from "./components/BookByAuthor";

export default function App() {
  return (
    <main>
      <Books />
      <BooksByTitle title="To Kill a Mockingbird" />
      <BookByAuthor author="Harper Lee" />
    </main>
  );
}
