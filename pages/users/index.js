import Link from "next/link";
export const getStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

const Users = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>

      {users.map((user) => (
        <div className="" key={user.id}>
          <Link className="" href={"#"}>
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
