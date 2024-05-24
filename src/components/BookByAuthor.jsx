import useFetch from "../useFetch";
const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://d04d69ac-c233-4ab4-bced-b94f636394aa-00-15shw5bbnt4z0.worf.replit.dev/books/author/${author}`,
  );

  console.log(data);
  return (
    <div>
      <h1>Book By {data?.books.author}</h1>
      <ul>
        <li>{data?.books.title}</li>
      </ul>
    </div>
  );
};

export default BookByAuthor;
