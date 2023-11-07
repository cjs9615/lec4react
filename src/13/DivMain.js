import Div1 from "./Div1"
import { useState } from "react"
const DivMain = () => {
    const [n, setN] = useState(0);
    return (
        <main className="container">
            <div className="bg-orange-900 text-orange-50 m-10 p-10">
                <h1 className="text-orange-50">DivMain</h1>
                    n = {n}, n2 = {n * 2}
                <Div1 n={n} setN={setN} />
            </div>
        </main>
    )
}

export default DivMain
