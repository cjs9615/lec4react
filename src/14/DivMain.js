import Div1 from "./Div1"
import { DivAtom, DivAtom2 } from "./DIvAtom"
import { useRecoilValue } from "recoil"

const DivMain = () => {
    const n = useRecoilValue(DivAtom);
    const n2 = useRecoilValue(DivAtom2);

    return (
        <main className="container">
            <div className="bg-orange-900 text-orange-50 m-10 p-10">
                <h1 className="text-orange-50">DivMain</h1>
                    n = {n}, n2 = {n2}
                <Div1/>
            </div>
        </main>
    )
}

export default DivMain
