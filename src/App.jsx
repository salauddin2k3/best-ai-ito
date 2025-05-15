import AppCard from "./components/AppCard/AppCard"
import Companies from "./components/Companies/Companies"
import Exponentially from "./components/Exponentially/Exponentially"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Test from "./components/Test/Test"

// Background Images
import ImageBG1 from "../src/assets/bg/bg-1.png"
import ImageBG2 from "../src/assets/bg/bg-2.png"
import ImageBG3 from "../src/assets/bg/bg-3.png"
import ImageBG4 from "../src/assets/bg/bg-4.png"
import ImageBG5 from "../src/assets/bg/bg-5.png"


import MindBe from "./components/MindBe/MindBe"
import AskEcon from "./components/AskEcon/AskEcon"
import Deflation from "./components/Deflation/Deflation"
import Utility from "./components/UtilityComponent/Utility"
import Ecosystem from "./components/Ecosystem/Ecosystem"
import CollaborativeBrain from "./components/CollaborativeBrain/CollaborativeBrain"


function App() {

  return (
    <>
      <div className="">
        <div 
        style={{ 
          backgroundImage: `url(${ImageBG1}), url(${ImageBG2}), url(${ImageBG3}), url(${ImageBG5}), url(${ImageBG4})`,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat, no-repeat",
          backgroundPositionX: "right, left, 8%, center, 81%",
          backgroundPositionY: "top, -.1%, 6.5%, -2%, 10%",
          backgroundSize: "609px, 750px, 790px, 1800px, 145px"
          }} >
          <Navbar></Navbar>
          <Hero></Hero>
          <Companies></Companies>
          <AppCard></AppCard>
          <Exponentially></Exponentially>
          <MindBe></MindBe>
          <AskEcon></AskEcon>
          <Deflation></Deflation>
          <Utility></Utility>
          <Ecosystem></Ecosystem>
          <CollaborativeBrain></CollaborativeBrain>
        </div>
      </div>
    </>
  )
}

export default App
