import { FcInfo } from "react-icons/fc";
import ButtonBlue from "../comm/ButtonBlue";
import { useRef, useEffect, useState } from "react";
import GalleryCard from "../comm/GalleryCard";

const Gallery = () => {
    //input box
    const txt1 = useRef() ;

    //키워드 상태 변수
    const [kw, setKw] = useState();
    //목록 상태 변수
    const [item, setItem] = useState();

    const [tags, setTags] = useState();

    const handleOk = (e) => {
        e.preventDefault();
        console.log("ok");
        if (txt1.current.value === "") return;

        setKw(txt1.current.value);
    }

    const handleCancle = (e) => {
        e.preventDefault();
        txt1.current.value = "";
        setTags();
        txt1.current.focus();
    }

    const getData = (kw) => {
        console.log("gt", kw)
        const serviceKey = 'ewEZSCK5Wyu9bQtvqiyfNO7gZQ097cEFt4Vf7SYjop4Ba3etdnHJdvXHv4sEg0AcsMhQzVCOLocFZw5yhgnrgg%3D%3D';
        //키워드 인코딩
        const enKw = encodeURI(kw);
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?";
        url = url + `serviceKey=${serviceKey}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;
        url = url + `&arrange=A`; //A=촬영일, B=제목, C=수정일
        url = url + `&keyword=${enKw}`;
        url = url + `&_type=json`;

        fetch(url)
        .then(resp => resp.json())
        .then(data => 
            setItem(data.response.body.items.item)    
        )
        .catch((err) => console.log(err))
    }

    //컴포넌트 생성시
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //컴포넌트 업데이트
    useEffect(() => {
        console.log(kw);
        getData(kw);
    }, [kw]);

    useEffect(() => {
        console.log(item);
        if(item === undefined) return;
        setTags(item.map((i) => 
            <GalleryCard key={i.galContentId} imgsrc={i.galWebImageUrl.replace('http', 'https')} 
            title={i.galTitle} 
            content={i.galPhotographyLocation} 
            spTag={i.galSearchKeyword.split(",")}
            refv={txt1}/>
        ));
    }, [item]);

    return (
        <main className="container">
            <article>
                <header className="flex justify-between items-center">
                    <div className="text-3xl font-bold">
                        한국관광공사 관광사진 정보
                    </div>
                    <div>
                        <FcInfo className="text-4xl font-bold" />
                    </div>
                </header>
                <form>
                    <div className="grid">
                        <div>
                            <input type="text" ref={txt1} id="txt1" name="txt1" placeholder="키워드를 입력하세요" />
                        </div>
                        <div className="grid">
                            <ButtonBlue caption='확인' handleClick={handleOk} />
                            <ButtonBlue caption='취소' handleClick={handleCancle} />
                        </div>
                    </div>
                </form>
            </article>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    {tags}
                </div>
            </section>
        </main>
    )
}

export default Gallery
