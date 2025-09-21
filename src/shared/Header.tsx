import { Link } from "react-router-dom";


export default function Header() {

    return <div>

        <nav style={{}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>

    </div>;

}