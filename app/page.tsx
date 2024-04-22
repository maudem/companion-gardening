import Image from "next/image";
import * as Map from "../components/Landing/assets/New-Zone-Map_542x337.png";

export default function Home() {
  return (
    <main>
      <h1>Companion Garden app</h1>
      <input></input>
      <Image 
        src={Map}
        alt="USA map separated by hardiness growing zones"
        width={800}
        height={500}
      />

    </main>

  );
};


// ToDo:

// Calendar
  // favorites/selected seedtime and others
  // notifications for stuff to remember

// Landing
  // inputs
    // zones
    // zip code
