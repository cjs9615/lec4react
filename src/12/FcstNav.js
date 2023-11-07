import { Link } from "react-router-dom"
import { BsHouseFill } from "react-icons/bs";
const FcstNav = () => {
    return (
        <nav className="flex justify-between items-center mt-5">
            <ul>
                <li className="text-lg font-bold">기상청 예보</li>
            </ul>
            <ul>
                <li>
                    <Link to='/'>
                        <BsHouseFill className="text-4xl font-bold"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default FcstNav
