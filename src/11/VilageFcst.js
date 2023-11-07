import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const VilageFcst = () => {
    const [items, setItems] = useState();
    // 파라미터로 전송되는 자료 추출
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    //컴포넌트 생성시 
    useEffect(() => {
        const apikey = 'ewEZSCK5Wyu9bQtvqiyfNO7gZQ097cEFt4Vf7SYjop4Ba3etdnHJdvXHv4sEg0AcsMhQzVCOLocFZw5yhgnrgg%3D%3D';
        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + `serviceKey=${apikey}`;
        url = url + '&numOfRows=60&pageNo=1';
        url = url + `&base_date=${dt}&base_time=0500`;
        url = url + `&nx=${x}&ny=${y}&dataType=json`;

        console.log(url)
        fetch(url)
        .then(resp => resp.json())
        .then(data => setItems(data.response.body.items.item))
        .catch(err => console.log(err))

    },[])

    return (
        <div>
            VilageFcst : 단기예보
        </div>
    )
}

export default VilageFcst
