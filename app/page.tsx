import Link from "next/link"

export default function Home() {
  return (
    <div>
          <div className="flex flex-col items-center">
      <h1 className="text-blue-800 font-bold text-4xl">Esteban Jennings</h1>
      <p className="text-blue-800 font-bold mb-5">Front End Developer</p>
      
      <p className="text-white font-bold text-3xl">I Build Apps With React, Typescript and Tailwind while Priotirizing Simpleness</p>

            <div className="text-blue-500">
      <Link 
      href="https://github.com/RandomsandGrain" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-3xl hover:underline"
      >
        Visit My Github!
      </Link>
             </div>
         </div>
    </div>
  );
}
