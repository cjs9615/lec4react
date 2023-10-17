import pusandata from "./pusandata.json"
import ButtonBlue from "../comm/ButtonBlue"
import { useEffect, useRef, useState } from "react"
import GalleryCard from "../comm/GalleryCard"

const Busan = () => {
    //select box
    const sel = useRef();

    const [item, setItem] = useState();

    const [tags, setTags] = useState();

    const code = pusandata.map((item) =>
        [item['콘텐츠ID'], item['콘텐츠명'].split("(한")[0]]
    )
    console.log(code)

    const opTag = code.map((item) => 
        <option key={item[0]} value={item[0]}>{item[1]}</option>
    )

    const getData = (sel) => {
        const serviceKey = "ewEZSCK5Wyu9bQtvqiyfNO7gZQ097cEFt4Vf7SYjop4Ba3etdnHJdvXHv4sEg0AcsMhQzVCOLocFZw5yhgnrgg%3D%3D"
        let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey="
        url = url + serviceKey;
        url = url + "&pageNo=1&numOfRows=10&resultType=json&UC_SEQ="
        url = url + sel.current.value;

        fetch(url)
        .then(resp => resp.json())
        .then(data => 
            setItem(data.getFestivalKr.item[0]) 
        )
        .catch((err) => console.log(err))
    }

    const handleOk = (e, msg) => {
        e.preventDefault();
        getData(sel);
    }

    const handleCancle = (e,msg) => {
        e.preventDefault();
        console.log(msg)
    }

    const handleChange = () => {
        console.log(sel.current.value)
    }

    useEffect(() => {
        sel.current.focus();
    }, [])

    useEffect(() => {
        console.log(item)
        if(item === undefined) return;
        setTags(
            <GalleryCard key={item.UC_SEQ} imgsrc={item.MAIN_IMG_NORMAL} 
            title={item.TITLE} 
            content={item.ITEMCNTNTS.length < 100 ? item.ITEMCNTNTS.length : item.ITEMCNTNTS.slice(0,100)+"..."} 
            spTag={item.PLACE.split(',')}
            />
        );
    }, [item])

    return (
        <main className="container">
            <article>
                <header className="flex justify-between items-center">
                    <div className="text-3xl font-bold">
                        부산축제정보
                    </div>
                </header>
                <form>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-2">
                            <select ref={sel} id='sel' name='sel' onChange={handleChange}>
                                <option value=''>축제명을 선택하세요</option>
                                {opTag}
                            </select>
                        </div>
                        <div>
                            <ButtonBlue caption={'축제확인'} handleClick={(e) => handleOk(e,'Ok')}/>
                        </div>
                        <div>
                            <ButtonBlue caption={'축제취소'} handleClick={(e) => handleCancle(e,'Cancle')}/>
                        </div>
                    </div>
                </form>
            </article>
            <section>
                <div className="">
                    {tags}
                </div>
            </section>
        </main>
    )
}

export default Busan
