import Div3 from "./Div3"
const Div2 = ({n, setN}) => {
    return (
        <div className="bg-orange-500 text-orange-50 m-2 p-10 w-11/12">
            <h1 className="text-orange-50">Div2</h1>
            <Div3 n={n} setN={setN}/>
        </div>
    )
}

export default Div2
