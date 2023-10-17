import GalleryCard from "../comm/GalleryCard"


const GalleryItem = ({item}) => {
    console.log("gi", item)
    const tags = item.map((i, idx) => 
        <GalleryCard key={i.galContentId} imgsrc={i.galWebImageUrl.replace('http', 'https')} 
        title={i.galTitle} 
        content={i.galPhotographyLocation} 
        spTag={i.galSearchKeyword.split(",")}/>
        //<div id="">{i.galTitle}</div>
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {tags}
        </div>
    )
}

export default GalleryItem
