import Hh1 from "../comm/Hh1"
import data from "./dataFrcst.json"
import style from "./Frcst.module.css"
import { useState, useEffect } from "react"

const Frcst = () => {

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"]
    const [cnTag, setCnTag] = useState();
  
    let dtcn = {};

    let temp = dtKey.map((item, idx) =>     
        dtcn[data[item]] = data[cnKey[idx]]
    );

    let dtTag = Object.keys(dtcn).map((item, idx) => 
        <div key={'dt' + idx} className={style.dtcnkey} onClick={() => {handleClick(item)}}>{item}</div>
    );

    const handleClick = (k) => {
        let temp = dtcn[k].split(',');
        temp = temp.map((item, idx) => { 
            let spitem = item.split(':');
            return (
            <div key={`cn + ${idx}`}>
                <span className={style.sp1}>{spitem[0]}</span>
                {spitem[1].trim() === '낮음'
                ? <span className={style.sp21}>{spitem[1]}</span>
                : spitem[1].trim() === '보통'
                ? <span className={style.sp22}>{spitem[1]}</span>
                : <span className={style.sp23}>{spitem[1]}</span>
                }
            </div>
            )
        })
        console.log(temp)
        
        setCnTag(temp);
    }
   
    return (
        <main className="container">
            <article>
                <Hh1 title={"미세먼지확인"} />
                <div className="grid">
                    {dtTag}
                </div>
                <div className="grid">
                    {cnTag}
                </div>
            </article>

        </main>
    )
}

export default Frcst
