import Hh1 from "../comm/Hh1";
import style from "./Box.module.css";
import { useRef, useState, useEffect } from "react";

const Box = () => {
  //날짜선택 
  const dt = useRef();
  
  //선택된 날짜
  const [cdt, setCdt] = useState();

  const getFetch = (targetDt) => {
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt="
    url = url + targetDt;
        fetch(url)
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err))
  }

  //컴포넌트 생성시 포커스
  useEffect(() => {
    //dt.current.focus();
    // const today = new Date();
    // let day = today.getDay();
    // if (day < 10) day = "0" + day.toString(); 
    // const yesterday = today.getFullYear().toString() + (today.getMonth()+1).toString() + day;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let y = `${yesterday.getFullYear()}`;
    let m = (yesterday.getMonth() + 1 < 10) ? `0${yesterday.getMonth() + 1}` : `${yesterday.getMonth() + 1}`;
    let d = (yesterday.getDate() < 10) ? `0${yesterday.getDate()}` : `${yesterday.getDate()}`;

    console.log(y+m+d);

    //어제 날짜로 기본값 설정
    dt.current.value = `${y}-${m}-${d}`;
    setCdt(y+m+d);

    
  }, [])

  useEffect(() => {
    getFetch(cdt);
  }, [cdt])

  const handleChange = () => {
    setCdt(dt.current.value.replaceAll("-", ""));
  }

  return (
    <main className="container">
      <Hh1 title='박스오피스' />
      <article>
        <header>
          <div className={style.dt}>선택날짜 {cdt}</div>
          <form>
            
            <input ref={dt} type='date' id="dt" name="dt" onChange={handleChange}/>
          </form>
        </header>
      </article>
    </main>
  )
}

export default Box;
