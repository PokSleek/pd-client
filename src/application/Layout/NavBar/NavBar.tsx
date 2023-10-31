import { NavLink } from 'react-router-dom'
import { Paths } from '@/application/Router'

export const NavBar = () => {
    return (
        <div>
            <h1>Personal Dictionary</h1>
            <ul>
                <li>
                    <NavLink
                        to={Paths.home}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={Paths.about}
                    >
                        About
                    </NavLink>
                    <li>
                    <NavLink
                        to={Paths.dictionary}
                    >
                        Dictionary
                    </NavLink>
                </li>
                </li>
            </ul>
        </div>
    )
}