import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/user.png" width={100} height={77} alt="Logo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about"> About</Link>
      <Link href="/users "> User Listing</Link>
    </nav>
  );
};

export default Navbar;
