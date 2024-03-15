import { React, useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "Fiqh", slug: "fiqh" },
  { name: "Seerah", slug: "prophetic-biography" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mt-8 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-800">
        <div className="md:float-left block">
          <Link href="/">
            <span className="mb-10 cursor-pointer font-bold text-4xl text-white">
              Learn Islaam
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
