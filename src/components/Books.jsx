import useFetch from "../useFetch";

const Books = () => {
  const { data, loading, error } = useFetch(
    "https://d04d69ac-c233-4ab4-bced-b94f636394aa-00-15shw5bbnt4z0.worf.replit.dev/books",
  );
  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {data?.book.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
