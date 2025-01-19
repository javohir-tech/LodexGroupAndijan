
//components
import { MainNavbar } from '../Components'

//react router dom 
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <MainNavbar />
            <main>
                <Outlet/>
            </main>
        </>
    )
}
