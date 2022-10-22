import {Navbar} from "../components";
import { Outlet } from "react-router-dom";

const Page = () => {
    return ( <>
        <Navbar />
        <Outlet/>
    </> );
}
 
export default Page;
