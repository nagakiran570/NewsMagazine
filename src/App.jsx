import { useState } from "react";
import NavBar from "./components/NavBar";
import Newsboard from "./components/Newsboard";

function App() {
  const [category,setCategory]=useState("business")
  return (
    <>
      <NavBar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </>
  )
}

export default App
