import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ProgressPlugin } from 'webpack';

export const BaseNavBar: React.FC<{}> = props => {
	return (
		<nav id="navigation">
			<NavLink to="/" className="nav-link" activeClassName="active">
				Services
			</NavLink>
			<NavLink to="/about" className="nav-link" activeClassName="active">
				About
			</NavLink>
			<NavLink to="/blog" className="nav-link" activeClassName="active">
				Blog
			</NavLink>
			<NavLink to="/contact" className="nav-link" activeClassName="active">
				Contact
			</NavLink>
			{props.children}
		</nav>
	);
};
