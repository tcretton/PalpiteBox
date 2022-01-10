import next from "next";
import Link from "next/link";

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <div>
        <Link href='/contato'>
          <a>Contato</a>
        </Link>
      </div>
    </div>
  )
}

export default Contato