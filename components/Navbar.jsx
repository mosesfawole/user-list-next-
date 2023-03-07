import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>User List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about"> About</Link>
      <Link href="/users "> User Listing</Link>
    </nav>
  );
};

export default Navbar;
