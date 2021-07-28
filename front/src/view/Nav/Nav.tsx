import React, { Component } from 'react';
import { Link, NavLink, RouteComponentProps } from 'react-router-dom';
import NavItem from './sub-comp/NavItem';
import '../main/Main.css';
interface Props extends RouteComponentProps {}

class Nav extends Component {
	//

	render() {
		//
		const menuList = ['', 'main', 'club', 'member'];

		return (
			<>
				<nav className="navtop">
					{menuList.map((menu) => {
						if (menu === '') {
							return (
								<h2>
									<NavLink exact to="/">
										TravelClub
									</NavLink>
								</h2>
							);
						}
						return (
							<NavItem key={menu}>
								<NavLink exact to={`/${menu}`}>
									{menu}
								</NavLink>
							</NavItem>
						);

					})}
				</nav>
			</>
		);
	}
}

export default Nav;
