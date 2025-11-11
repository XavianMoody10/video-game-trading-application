import Link from "next/link";

export default function NavigationButton({ href, children }) {
  return (
    <Link
      href={href}
      className=" block text-center bg-white border border-white w-full p-2 font-semibold rounded-sm font-quicksand hover:bg-green-600 hover:border-green-600 hover:text-white duration-150"
    >
      {children}
    </Link>
  );
}
