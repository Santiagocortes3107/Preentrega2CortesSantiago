import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer} from "./components/ItemDetailContainer"
import { NavBar } from "./components/NavBar"

export default function App () {
    return (
        <BrowserRouter>
                <NavBar/>
                <Routes> 
                    <Route path="/" element = {<ItemListContainer greeting="Productos"/>}/>

                    <Route path="/category/:id" element = {<ItemListContainer greeting="Productos"/>}/>

                    <Route path="/Item/:id" element = {<ItemDetailContainer greeting="Productos"/>}/>
                </Routes>
        </BrowserRouter>
    )
}