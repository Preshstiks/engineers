import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-orange-500 font-PTsans font-bold py-6 text-white">
      <div className="pl-[6%] space-x-12">
        <Link className="text-xl" href="/">
          HOME
        </Link>
        <Link className="text-xl" href="/">
          ABOUT US
        </Link>
        <Link className="text-xl" href="/">
          OUR PROJECTS
        </Link>
        <Link className="text-xl" href="/">
          TESTIMONIALS
        </Link>
        <Link className="text-xl" href="/">
          BLOG
        </Link>
        <Link className="text-xl" href="/">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
