"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [navLinks, setNavLinks] = useState<string[]>([]);
  const params = useParams();

  useEffect(() => {
    const fetchTranslations = async () => {
      if (!params?.locale) {
        setNavLinks([]);
        return;
      }
      try {
        const res = await fetch(`/translations/${params.locale}.json`);
        if (!res.ok) {
          setNavLinks([]);
          return;
        }
        const data = await res.json();
        setNavLinks(data?.HomePage?.navlinks || []);
      } catch (error) {
        setNavLinks([]);
      }
    };

    fetchTranslations();
  }, [params?.locale]);

  return (
    <header>
      <nav className="max-w-[1400px] mx-auto w-11/12 py-3 flex items-center justify-between">
        <h3 className="text-2xl text-blue-500 ">
          <Link href={"/"}>Next Internationalization</Link>
        </h3>
        <ul className="flex gap-6 mt-4 bg-red-200 w-52 h-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={`/${link.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
