import ButtonBlue from "../comm/ButtonBlue"
import { useRef,useState,useEffect } from "react"
import getxy from "./getxy.json"
import { Link } from "react-router-dom"

const FcstMain = () => {
    //state변수
    const [dt, setDt] = useState(); // 날짜
    const [area, setArea] = useState(); // 지역
    const [x, setX] = useState(); //해당지역의 x좌표
    const [y, setY] = useState(); //해당지역의 y좌표

    //select -> option 생성
    //console.log(getxy);
    const ops = getxy.map((item) =>
        <option value={item.행정구역코드} key={item.행정구역코드}>
            {item["1단계"]}
        </option>
    )

    //입력폼
    const dtRef = useRef();
    const selRef = useRef();

    const handleFcstClick = (e) => {
        e.preventDefault();
    }

    //사용자정의함수 : 날짜 변경시 발생
    const handleDtChange = () => {
        setDt(dtRef.current.value.replaceAll('-',''))
    }

    //사용자정의함수 : 지역 선택 발생
    const handleAreaChange = () => {
        if (selRef.current.value === '') return;
        //1.sel의 값을 가져오기
        //selRef.current.value
        //2.getxy에서 sel값과 행정구역코드가 같은 자료 추출
        const temp = getxy.filter((item) => 
            item.행정구역코드 === parseInt(selRef.current.value)
        )[0]

        console.log(temp)

        //3.상태변수 area, x, y를 변경
        setArea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
    }

    //컴포넌트 생성시
    useEffect(() => {
        dtRef.current.focus();
    },[])

    //dt 상태변수가 변경이 되었을 경우
    useEffect(() => {
        console.log("dt" , dt)
    },[dt])

    //area, x, y 상태변수가 변경되었을 경우
    useEffect(() => {
        console.log("area" , area, x, y)
    },[area, x, y])
    return (
        <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 p-10">
                <div className="col-span-1 md:col-span-2 font-bold text-xl">단기예보 입력정보</div>
                <div>
                    <input ref={dtRef} type='date' id="dt" name="dt" onChange={handleDtChange} />
                </div>
                <div>
                    <select ref={selRef} className="" id='sel' name='sel' onChange={handleAreaChange}>
                        <option value=''>지역 선택</option>
                        {ops}
                    </select>
                </div>
                <div>
                    {
                        (dt === undefined) | (x === undefined) 
                            ? <ButtonBlue caption='초단기예보' handleClick={handleFcstClick} />
                            : <Link to={`/ultra/${dt}/${area}/${x}/${y}`}><ButtonBlue caption='초단기예보' /></Link>
                    }
                </div>
                <div>
                    {
                        (dt === undefined) | (x === undefined) 
                            ? <ButtonBlue caption='단기예보' handleClick={handleFcstClick} />
                            : <Link to={`/vilage/${dt}/${area}/${x}/${y}`}><ButtonBlue caption='단기예보' /></Link>
                    } 
                </div>
            </div>
        </form>
    )
}

export default FcstMain
