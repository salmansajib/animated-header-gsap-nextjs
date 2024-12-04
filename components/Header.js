import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="px-3 h-[100px] text-gray-200 flex items-center border-b border-gray-50/10">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
