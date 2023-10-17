import MyComN from "./MyComN.js";
const MyCom = () => {
    let n = 10;
    let conTag ;
    if(n === undefined) {
        conTag = <div>값이없슨디ㅏ.</div>
    }
    else {
        conTag = <MyComN n={n} />
    }

    return (
        <main className="container">
            <article>
                <header>MyCom</header>
                {
                    // 상황연산 처리
                    // n === undefined
                    // ? <div>값이 없습니다.</div>
                    // : <MyComN n={n} />

                    // 변수로 처리
                    // conTag
            
                    // falsy 연산
                    n && <MyComN n={n} />
                }
            </article>
        </main>
    );
}

export default MyCom;