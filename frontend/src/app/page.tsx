import Image from "next/image";
import sadSunIcon from "../../public/icons/sad-sun.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Container ">
        <div className="flex flex-col">
          <h2>Your streaks</h2>
          <button>Share</button>
        </div>
        <div>
          <div>
            <h2>🔥 231</h2>
            <Image src={sadSunIcon} alt="sad sun icon" />
            <p>Wake up early</p>
          </div>
          <div>
            <p>+</p>
          </div>
          <div>
            <p>+</p>
          </div>
          <div>
            <p>+</p>
          </div>
        </div>
        <div>
          <h2>Friends</h2>
          <div>
            <div></div>
            <a>Ha</a>
          </div>
        </div>
      </div>
    </main>
  );
}
