import { Outlet } from "react-router-dom"


export default function Layout() {
    return<>
        <Outlet />
        <h2>layout</h2>
    </>
}