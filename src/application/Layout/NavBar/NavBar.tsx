import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <h1>Personal Dictionary</h1>
            <ul>
                <li>
                    <NavLink
                        to={'/'}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/about'}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}