import { useState, useEffect } from "react";
const Box = () => {
    //let boxlist = [];
    const [boxlist, setBoxlist] = useState();
    const [listTag, setlistTag] = useState();
    const [moviedetail, setMoviedetail] = useState();
    const [detailTag, setdetailTag] = useState();

    const handleClick = (item) => {
        console.log(item);
        setdetailTag(
            <div>
                <span>영화코드&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;{item.movieCd}</span><br/>
                <span>개봉일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;{item.openDt} </span><br/>
                <span>누적관객수 : &nbsp;{item.audiAcc}명 </span>
            </div>
        );
        // let url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
        // url = url + item.movieCd;
        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(data => setMoviedetail(data.movieInfoResult.movieInfo))
        //     .catch((err) => console.log(err))

        // if (moviedetail) {
        //     setdetailTag(
        //         <>
        //         <span>코드 : </span>
        //         <span>{item.movieCd}</span>
        //         <span>영화명 : </span>
        //         <span>{item.movieNm}</span>
        //         <span>제작상태 : </span>
        //         <span>{item.prdtStatNm}</span>
        //         </>
        //     );
        // }
    }

    //컴포넌트 생성시 한번 실행
    useEffect(() => {
        let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918";
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch((err) => console.log(err))
    }, []);

    //state 변수가 변경될때 마다 실행
    useEffect(() => {
        console.log(boxlist);
        
        if (boxlist) {
            setlistTag(boxlist.map((item, idx) => 
                <tr key={'nv' + idx} onClick={() => handleClick(item)}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td>
                        {item.rankInten == 0 
                        ? "-"
                        : item.rankInten > 0
                            ? "👍" + item.rankInten
                            : "👎" + Math.abs(item.rankInten)                        
                        }
                        </td>
                </tr>
            ));
        }

    }, [boxlist])

    console.log(boxlist);

    return (
        <main className="container">
            <article>
                <header><h1>박스오피스</h1></header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTag}
                    </tbody>
                </table>
                <footer>
                    <div>{detailTag}</div>
                </footer>
            </article>
        </main>
    );
}

export default Box;