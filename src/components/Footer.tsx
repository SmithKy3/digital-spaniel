import * as React from 'react';
import {
	LinksTableRows,
	ContactDetailsTableRows,
} from 'Data/FooterTableContent';
import { StyledTable } from 'Components/StyledTable';
import 'Styles/footer.less';

export const Footer: React.FC<{}> = () => {
	return (
		<section id="footer">
			<div id="footer-left">
				<h2>
					We're a brands
					<br />
					<span>best friend</span>
				</h2>

				<button>
					<p>Let's talk</p>
				</button>
			</div>

			<div id="footer-right">
				<a id="contact" />
				<StyledTable id={'links-table'} rows={LinksTableRows} />
				<StyledTable id={'contact-table'} rows={ContactDetailsTableRows} />
			</div>
		</section>
	);
};
