import { useState } from "react"
import NavBar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"

const App = () =>{

        const [category, setCategory]= useState("General");


        return(

                <div>
                        <NavBar setCategory={setCategory}/>
                        <NewsBoard category={category}/>
                        <NewsItem/>


                </div>
        )
}


export default App