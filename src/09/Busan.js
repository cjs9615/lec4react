import pusandata from "./pusandata.json"
//import { useEffect, useRef, useState } from "react"
import GalleryCard from "../comm/GalleryCard"

const Busan = () => {

    
    const tags = pusandata.map((item) =>
        <GalleryCard key={item.콘텐츠ID} imgsrc={item.이미지URL} 
        title={item.제목} 
        content={item.상세내용.length < 100 ? item.상세내용.length : item.상세내용.slice(0,100)+"..."} 
        spTag={item.장소.split(',')}
        /> 

    )

    return (
        <main className="container">
            <article>
                <header className="flex justify-between items-center">
                    <div className="text-3xl font-bold">
                        부산축제정보
                    </div>
                </header>
                <div className="grid grid-cols-3 ">
                    {tags}
                </div>
            </article>
        </main>
    )
}

export default Busan
