import next from "next";
import Link from "next/link";

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/sobre'>
          <a>Sobre</a>
        </Link>
      </div>
    </div>
  )
}

export default Contato