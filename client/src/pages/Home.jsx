import { useEffect, useState } from "react";
import avatar from "/avatar.png";
import "../styles/chalk.css";

export default function Home() {
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowAvatar(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const letters = [
    { char: "P", class: "text-black bg-white rotate-[-6deg]" },
    { char: "O", class: "text-white rotate-[4deg]" },
    { char: "R", class: "rotate-[-10deg] text-yellow-300" },
    { char: "T", class: "rotate-[8deg] text-green-300" },
    { char: "F", class: "rotate-[-8deg] text-pink-300" },
    { char: "O", class: "rotate-[4deg] text-blue-300" },
    { char: "L", class: "rotate-[12deg] text-purple-300" },
    { char: "I", class: "rotate-[-6deg] text-orange-300" },
    { char: "O", class: "rotate-[6deg] text-white" },
  ];

  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-center px-4 overflow-hidden pt-10 bg-[url("/black.jpg")] bg-cover bg-center'>
      <div className='rotate-[-25deg] text-blue-500 text-base md:text-xl tracking-wide fade-in-delay'>
        '25
      </div>

      <div className='text-4xl md:text-[9rem] leading-none flex flex-wrap justify-center items-centere'>
        {letters.map((l, i) => (
          <span key={i} className={`chalk-letter ${l.class} px-2 mx-1`}>
            {l.char}
          </span>
        ))}
      </div>

      {showAvatar && (
        <img
          src={avatar}
          alt='Avatar'
          className='w-70 h-70 md:w-85 md:h-85 rounded-full border-4 border-white shadow-lg object-cover m-10 fade-in'
        />
      )}

      <div className='text-white text-3xl md:text-6xl font-bold fade-in-delay'>
        AYASA BENJAMIN
      </div>
    </div>
  );
}
