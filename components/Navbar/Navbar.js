import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link href={"/"}>
            <a>
              <h1>&lt;ashliecodes/&gt;</h1>
            </a>
          </Link>
        </div>

        <Link href={"/about"}>
          <a>about</a>
        </Link>
        <Link href={"/projects"}>
          <a>projects</a>
        </Link>
        <Link href={"/contact"}>
          <a>contact</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
