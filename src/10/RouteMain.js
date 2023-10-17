import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"

const RouteMain = () => {
    return (
        <main className="container">
        <BrowserRouter>
            <RouteNav/>
            <Routes>
                
                <Route path="/" element={<RouteHome/>}></Route>
                <Route path="/page1" element={<RoutePage1/>}></Route>
                <Route path="/page2" element={<RoutePage2/>}></Route>
            </Routes>
        </BrowserRouter>
        </main>
    )
}

export default RouteMain
