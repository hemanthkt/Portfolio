import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiArduino } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiArduino
            className="text-7xl text-cyan-400"
            style={{ color: "#00979C" }}
          ></SiArduino>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAdobepremierepro
            className="text-7xl text-cyan-400"
            style={{ color: "#E298F2" }}
          ></SiAdobepremierepro>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch
            className="text-7xl text-cyan-400"
            style={{ color: "#DE3412" }}
          ></SiPytorch>
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700"></BiLogoPostgresql>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws
            className="text-7xl text-cyan-400"
            style={{ color: "#FF9900" }}
          ></FaAws>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
