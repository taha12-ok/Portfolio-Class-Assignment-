import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-center justify-center md:flex-row-reverse items-center md:items-start mt-12">
      <div className="md:w-1/2 flex justify-center md:justify-center mb-4 md:mb-0">
        <Image
          src="/mypic.png"
          width={300}
          height={300}
          alt="Picture of Taha Shabbir"
          className="rounded-3xl shadow-lg"
        />
      </div>  
      <div className="md:w-3/4 md:pr-18 text-center md:text-center">
        <div className="text-5xl font-bold text-red-900">Hi, I’m Taha Shabbir</div>
        <br></br>
        <div className="text-lg mt-12 leading-relaxed">
          I’m currently pursuing a BSc in Computer Science at Sindh Madarassah-tul-Islam, where I’m in my 4th semester. Alongside my academic journey, I’m a GIAIC student under the Governor Initiative Program, actively exploring cutting-edge fields such as AI, web development, and the metaverse.
        </div>
        <br></br><br></br>
        <div><div className="text-4xl font-bold text-blue-900">I’m an Next.JS Developer</div></div>
      </div>
    </div>
  </>
  
  
  );
}
