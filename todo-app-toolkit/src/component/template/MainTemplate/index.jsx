import {Outlet} from "react-router-dom";
import NavBar from "../../NavBar/index.jsx";
import LogsList from "../../LogsList/index.jsx";

const MainTemplate = () => {

    return (
        <main>
            <NavBar />
            <Outlet />
            <LogsList />
        </main>
    )
}

export default MainTemplate