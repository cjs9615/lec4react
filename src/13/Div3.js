import ButtonBlue from '../comm/ButtonBlue'
const Div3 = ({n, setN}) => {
    const clickAdd = () => {
        setN(n+1)
    }
    const clickMinus = () => {
        setN(n-1)
    }
    return (
        <div className="bg-orange-300 text-orange-50 m-2 p-10 w-11/12">
            <h1 className="text-orange-50">Div3</h1>
            <div className="grid grid-cols-2 gap-4">
                <ButtonBlue caption='증가' handleClick={clickAdd}/>
                <ButtonBlue caption='감소' handleClick={clickMinus}/>
            </div>
        </div>
    )
}

export default Div3
