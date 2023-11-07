import { useRecoilValue } from "recoil"
import Div3 from "./Div3"
import { DivAtom4 } from "./DIvAtom"
const Div2 = () => {
    const n4 = useRecoilValue(DivAtom4)
    return (
        <div className="bg-orange-500 text-orange-50 m-2 p-10 w-11/12">
            <h1 className="text-orange-50">Div2</h1>
            n4 = {n4}
            <Div3/>
        </div>
    )
}

export default Div2
