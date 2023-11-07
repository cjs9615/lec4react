import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import getcode from "./getcode.json";

const UltraSrtFcst = () => {
    const [items, setItems] = useState();
    const [trs, setTrs] = useState();
    const [myItem, setMyItem] = useState([]);
    const selRef = useRef();
    // 카테고리-> option
    const ops = getcode
        .filter((item) => item['예보구분'] === '초단기예보')
        .map((item) =>
            <option value={item['항목값']} key={item['항목값']}>
                {item["항목명"]}({item["항목값"]})
            </option>
        )   
    console.log(ops)

    


    // 파라미터로 전송되는 자료 추출
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    // 이벤트처리
    const handleSelect = () => {
        if (items === undefined) return;

        let temp = items
            .filter((item) => item["category"] === selRef.current.value)
        let tempcd = getcode
            .filter((code) => code['예보구분'] === '초단기예보' && code["항목값"] === selRef.current.value)        

        let tempdata = temp.map((i) => [
            tempcd['항목명'], i['category'], i['fcstTime'], i['fcstValue'], tempcd['단위']
        ])

        console.log(tempdata)
        
            // .map((i) => 
            //     <tr key={i['fcstTime']}>
            //         <td>{selRef.current.value.split(',')[0]}</td>
            //         <td>{i['fcstTime']}</td>
            //         <td>{i['fcstValue']} {selRef.current.value.split(',')[2]}</td>
            //     </tr>
            // )
        setTrs(temp);
    }

    //컴포넌트 생성시 
    useEffect(() => {
        const apikey = 'ewEZSCK5Wyu9bQtvqiyfNO7gZQ097cEFt4Vf7SYjop4Ba3etdnHJdvXHv4sEg0AcsMhQzVCOLocFZw5yhgnrgg%3D%3D';
        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + `serviceKey=${apikey}`;
        url = url + '&numOfRows=60&pageNo=1';
        url = url + `&base_date=${dt}&base_time=0630`;
        url = url + `&nx=${x}&ny=${y}&dataType=json`;

        //console.log(url)
        fetch(url)
        .then(resp => resp.json())
        .then(data => setItems(data.response.body.items.item))
        .catch(err => console.log(err))

    },[])

    useEffect(() => {
        console.log(myItem)
    },[myItem])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 p-10">
            <div className="font-bold text-xl">
                초단기예보 : {area} ({dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)})    
            </div>
            <div>
                <select ref={selRef} id='sel' name='sel' onChange={handleSelect}>
                    <option value=''>항목선택</option>
                    {ops}
                </select>
            </div>
            <div className="col-span-2">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>항목명</th>
                            <th>예측시간</th>
                            <th>예측값</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UltraSrtFcst
