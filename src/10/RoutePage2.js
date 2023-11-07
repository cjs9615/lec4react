import { useLocation } from "react-router-dom"
import queryString from "query-string";
const RoutePage2 = () => {
    const item = useLocation().search;
    return (
        <article>
            page2 : {item}
        </article>
    )
}

export default RoutePage2
