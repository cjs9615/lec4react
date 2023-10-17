import style from "./Lotto.module.css";
import { useEffect, useState } from "react";
import LottoNums from "./LottoNums";
const Lotto = () => {
    const [num, setNum] = useState();

    //버튼 클릭
    const handleClick = (() => {
        let temp = [];

        while(temp.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (temp.indexOf(n) < 0) temp.push(n);
        }

        setNum(temp);
    })

    useEffect(() => {
        console.log(num);
    }, [num]);

    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또생성</h1>
                </header>
                {num ? <LottoNums ns={num}/> : "숫자가없습니다."}
                <footer>
                    <button onClick={handleClick}>생성하기</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;