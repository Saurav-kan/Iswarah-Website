export default function Navbar() {
  return (
    <>
    <div>
    <div className="relative flex justify-center items-center">
        <h1 className="text-6xl font-bold text-center my-4">
            I S W A R A H
        </h1>

        <h4 className="text-xl font-bold absolute right-0  p-8">Cart(0)</h4>
    </div>

    
      <nav className="bg-white-800 p-4 shadow-sm">
        <div className="container mx-auto flex justify-center ">
          <div>
            <a href="/" className="text-black-300 hover:text-gray px-3 text-3xl">
              Home
            </a>
            <a href="/shop" className="text-black-300 hover:text-gray px-3 text-3xl">
              Shop
            </a>
            <a href="/about" className="text-black-300 hover:text-gray px-3 text-3xl">
              About
            </a>
            <a href="/contact" className="text-black-300 hover:text-gray px-3 text-3xl">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
    </>
    
  );
}
