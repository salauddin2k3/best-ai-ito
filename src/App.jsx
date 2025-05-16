import AppCard from "./components/AppCard/AppCard"
import Companies from "./components/Companies/Companies"
import Exponentially from "./components/Exponentially/Exponentially"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import MindBe from "./components/MindBe/MindBe"
import AskEcon from "./components/AskEcon/AskEcon"
import Deflation from "./components/Deflation/Deflation"
import Utility from "./components/UtilityComponent/Utility"
import Ecosystem from "./components/Ecosystem/Ecosystem"
import CollaborativeBrain from "./components/CollaborativeBrain/CollaborativeBrain"

// Background Images
import ImageBG1 from "../src/assets/bg/bg-1.png"
import ImageBG2 from "../src/assets/bg/bg-2.png"
import ImageBG3 from "../src/assets/bg/bg-3.png"
import ImageBG4 from "../src/assets/bg/bg-4.png"
import ImageBG5 from "../src/assets/bg/bg-5.png"
import ImageBG6 from "../src/assets/bg/bg-6.png"
import ImageBG7 from "../src/assets/bg/bg-7.png"
import ImageBG8 from "../src/assets/bg/bg-8.png"
import ImageBG9 from "../src/assets/bg/bg-9.png"
import ImageBG10 from "../src/assets/bg/bg-10.png"

function App() {
  return (
    <div className="relative overflow-hidden">
      {/* ✅ Background Images */}
      <img src={ImageBG1} alt="bg1" className="absolute top-0 right-0 w-[40vw] z-0" />
      <img src={ImageBG2} alt="bg2" className="absolute top-0 left-0 w-[45vw] z-0" />
      <img src={ImageBG3} alt="bg3" className="absolute top-[5.5%] left-[3%] w-[50vw] z-0" />
      <img src={ImageBG5} alt="bg5" className="absolute top-[-2%] left-1/2 transform -translate-x-1/2 w-[90vw] z-0" />
      <img src={ImageBG4} alt="bg4" className="absolute top-[10%] left-[75%] w-[7vw] z-0" />
      <img src={ImageBG6} alt="bg6" className="absolute top-[17.5%] left-0 w-[43vw] z-0" />
      <img src={ImageBG7} alt="bg6" className="absolute top-[37%] right-0 z-0 w-[51vw]" />
      <img src={ImageBG8} alt="bg6" className="absolute top-[59%] left-[10%] z-0 w-[14.1vw]" />
      <img src={ImageBG9} alt="bg6" className="absolute top-[66%] left-0 z-0 w-[50.5vw]" />
      <img src={ImageBG10} alt="bg6" className="absolute top-[87%] right-0 z-0 w-[44.5vw]" />

      {/* ✅ Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Companies />
        <AppCard />
        <Exponentially />
        <MindBe />
        <AskEcon />
        <Deflation />
        <Utility />
        <Ecosystem />
        <CollaborativeBrain />
      </div>
    </div>
  )
}

export default App
