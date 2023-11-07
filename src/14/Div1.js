import { useRecoilValue } from 'recoil'
import Div2 from './Div2'
import { DivAtom3 } from './DIvAtom'
const Div1 = () => {
    const n3 = useRecoilValue(DivAtom3)
    return (
        <div className="bg-orange-700 text-orange-50 m-2 p-10 w-11/12">
            <h1 className="text-orange-50">Div1</h1>
            n3 = {n3}
            <Div2/>
        </div>
    )
}

export default Div1
