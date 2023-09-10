import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header
      id="header"
      className="max-w-[960px] mx-auto py-0 px-[4%] text-center flex justify-between items-center my-auto"
    >
      <h1 className="w-[120px] leading-none px-0 py-2.5">
        <Link href="index.html">
          <Image src="/img/logo.svg" alt="Profile" width={120} height={40} />
        </Link>
      </h1>
      <nav>
        <ul className="flex px-2.5 py-0">
          <li className="ml-[30px]">
            <Link href="#about" className="text-[#24292e] hover:opacity-70">
              About
            </Link>
          </li>
          <li className="ml-[30px]">
            <Link href="#bicycle" className="text-[#24292e] hover:opacity-70">
              Bicycle
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
