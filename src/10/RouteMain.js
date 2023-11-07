import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"

const RouteMain = () => {
    return (
        <main className="container">
        <BrowserRouter>
            
                <h1 className="text-2xl font-bold text-center mx-5 my-10">react dom 라우팅</h1>
                <RouteNav/>
            
            
            <Routes>
                
                <Route path="/" element={<RouteHome/>}></Route>
                <Route path="/page1/:item" element={<RoutePage1/>}></Route>
                <Route path="/page2" element={<RoutePage2/>}></Route>
            </Routes>
        </BrowserRouter>
        </main>
    )
}

export default RouteMain
