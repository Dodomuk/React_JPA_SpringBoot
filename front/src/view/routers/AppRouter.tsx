import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Main from '../main';
import Club from '../club';
import Member from '../member';
import Nav from '../Nav/Nav';
import Slick from '../../frontPage/Slick';

const routes = [
	// Common
	{
		path: 'main',
		component: Main,
	},
	{
		path: 'club',
		component: Club,
	},
	{
		path: 'member',
		component: Member,
	},
];

class AppRouter extends Component {
	render() {
		return (
			<>
			<Nav/>
			<Switch>
				{routes.map((singleRoute) => {
					const { path, ...otherProps } = singleRoute;
					return <Route key={path} exact path={`/${path}`} {...otherProps} />;
				})}
			</Switch>
             <Slick/>
			</>
		);
	}
}

export default AppRouter;
