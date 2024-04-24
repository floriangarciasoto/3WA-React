import {Outlet} from "react-router-dom";
import NavBar from "../../NavBar/index.jsx";
import Logs from "../../Logs/index.jsx";

const MainTemplate = () => {

    return (
        <main>
            <NavBar />
            <Outlet />
            <Logs />
        </main>
    )
}

export default MainTemplate