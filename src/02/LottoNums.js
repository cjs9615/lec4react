import style from "./Lotto.module.css"
const LottoNum = ({ns}) => {

  let nsTag = ns.map((item, idx) => {
    // if (item < 10) temp = <div key={'ns' + idx} className={style.lottonum1}>{item}</div>;
    // else if (item < 20) temp = <div key={'ns' + idx} className={style.lottonum2}>{item}</div>;
    // else if (item < 30) temp = <div key={'ns' + idx} className={style.lottonum3}>{item}</div>;
    // else if (item < 40) temp = <div key={'ns' + idx} className={style.lottonum4}>{item}</div>;
    // else temp = <div key={'ns' + idx} className={style.lottonum5}>{item}</div>;

    
    // switch (n){
    //   case 0 : temp = <div key={'ns' + idx} className={style.lottonum1}>{item}</div>; break;
    //   case 1 : temp = <div key={'ns' + idx} className={style.lottonum2}>{item}</div>; break;
    //   case 2 : temp = <div key={'ns' + idx} className={style.lottonum3}>{item}</div>; break;
    //   case 3 : temp = <div key={'ns' + idx} className={style.lottonum4}>{item}</div>; break;
    //   case 4 : temp = <div key={'ns' + idx} className={style.lottonum5}>{item}</div>; break;
    // }
    let n = Math.floor(item/10);

    return (
      idx === (ns.length-1)
      ? <div key={'nsplus'} className="{style.plus}"> + </div>
      :<div key={'ns' + idx} className={style[`lottonum${n+1}`]}>{item}</div>);
  });
  
  let n = Math.floor(ns.at(-1)/10);
  nsTag.push(<div key={'ns' + ns.length-1} className={style[`lottonum${n+1}`]}>{ns.at(-1)}</div>);
  return (
    <div className={style.lottobox}>
      {nsTag}
    </div>
  )
}

export default LottoNum
