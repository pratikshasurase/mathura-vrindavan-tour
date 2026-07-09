const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-orange-600">
          Mathura Vrindavan Tour
        </h1>

        <div className="space-x-6">
          <span>Home</span>
          <span>Gallery</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;