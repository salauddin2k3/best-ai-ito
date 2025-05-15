import AppCard from "./components/AppCard/AppCard"
import Companies from "./components/Companies/Companies"
import Exponentially from "./components/Exponentially/Exponentially"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Test from "./components/Test/Test"
import FirstImageBG from "../src/assets/bg-1.png"
import SecondImageBG from "../src/assets/bg-2.png"
import ThirdImageBG from "../src/assets/bg-3.png"
import MindBe from "./components/MindBe/MindBe"
import AskEcon from "./components/AskEcon/AskEcon"
import Deflation from "./components/Deflation/Deflation"
import Utility from "./components/UtilityComponent/Utility"


function App() {

  return (
    <>
      <div className="">
        <div 
        style={{ 
          backgroundImage: `url(${FirstImageBG}), url(${SecondImageBG}), url(${ThirdImageBG})`,
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
          backgroundPositionX: "right, left, 8%",
          backgroundPositionY: "top, 15%, 40%",
          backgroundSize: "609px"
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
        </div>
      </div>
    </>
  )
}

export default App
