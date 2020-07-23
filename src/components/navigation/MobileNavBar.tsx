import * as React from 'react';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';
import { BaseNavBar } from './BaseNavBar';

export const MobileNavBar: React.FC<{}> = () => {
	const [isOpen, setOpen] = React.useState(false);

	if (!isOpen) {
		return <MdMenu id="nav-show" onClick={() => setOpen(true)} />;
	} else {
		return (
			<BaseNavBar>
				<MdClose id="nav-hide" onClick={() => setOpen(false)} />
			</BaseNavBar>
		);
	}
};
