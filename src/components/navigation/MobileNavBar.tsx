import * as React from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import {
	BaseNavBar,
	SCROLLING_UP_CLASS,
	SCROLLING_DOWN_CLASS,
} from './BaseNavBar';

const NAV_SHOW_ANIMATION_LENGTH = 1;
const NAV_OPEN_OFFSET = 0;
const NAV_HIDDEN_OFFSET = -100;

export const MobileNavBar: React.FC<{}> = () => {
	const [isOpen, setOpen] = React.useState(false);
	const [navOffset, setNavOffset] = React.useState(NAV_HIDDEN_OFFSET);

	function handleMenuToggle(openState: boolean): void {
		if (openState) {
			const { body } = document;
			body.classList.remove(SCROLLING_UP_CLASS);
			body.classList.remove(SCROLLING_DOWN_CLASS);
			setOpen(openState);
			setNavOffset(NAV_OPEN_OFFSET);
		} else {
			setNavOffset(NAV_HIDDEN_OFFSET);
			setTimeout(() => setOpen(openState), NAV_SHOW_ANIMATION_LENGTH * 1000);
		}
	}

	return (
		<>
			{!isOpen && (
				<button id="nav-show" onClick={() => handleMenuToggle(true)}>
					<MdMenu />
				</button>
			)}

			<BaseNavBar
				rightOffset={navOffset}
				animationLength={NAV_SHOW_ANIMATION_LENGTH}
			>
				<button id="nav-hide" onClick={() => handleMenuToggle(false)}>
					<MdClose />
				</button>
			</BaseNavBar>
		</>
	);
};
