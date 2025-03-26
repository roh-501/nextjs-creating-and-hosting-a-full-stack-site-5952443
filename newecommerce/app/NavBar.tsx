import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/products" className="tex-gray-700 hover:text-black">
              Products {" "}
            </Link>
            <Link href="/cart" className="tex-gray-700 hover:text-black">
              Cart
            </Link> <Link href="/checkout" className="tex-gray-700 hover:text-black">
              Check Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
