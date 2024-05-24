import useFetch from "../useFetch";

const BooksByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://d04d69ac-c233-4ab4-bced-b94f636394aa-00-15shw5bbnt4z0.worf.replit.dev/book/${title}`,
  );

  return (
    <div>
      <h1>{data?.book.title}</h1>
      <p>
        <strong>Author: </strong>
        {data?.book.author}
      </p>
      <p>
        <strong>Release Year: </strong>
        {data?.book.publishedYear}
      </p>
      <p>
        <strong>Genre: </strong>
        {data?.book.genre.join(", ")}
      </p>
    </div>
  );
};

export default BooksByTitle;
