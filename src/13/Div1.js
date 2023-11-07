import Div2 from './Div2'
const Div1 = ({n, setN}) => {
    return (
        <div className="bg-orange-700 text-orange-50 m-2 p-10 w-11/12">
            <h1 className="text-orange-50">Div1</h1>
            <Div2 n={n} setN={setN}/>
        </div>
    )
}

export default Div1
