import style from "./Taccident.module.css"

const TaccidentNav = ({title, c, sel, setSel}) => {
    console.log(sel)

    const handleClick = (k) => {
        setSel(k);
    }
    
    const liTag = c.map((item, idx) => 
        <li key={`li${idx}`}>
            <button className={item === sel ? style.bt1 : style.bt2} onClick={() => handleClick(item)}>{item}</button>
        </li>
    );
    return (
        <nav>
            <ul>
                <li><strong>{title}</strong></li>
            </ul>
            <ul>
                {liTag}
            </ul>
        </nav>
    )
}

export default TaccidentNav
