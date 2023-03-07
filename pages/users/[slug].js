export const getStaticPath = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const res = await fetch(url);
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toStrig() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default Details;
