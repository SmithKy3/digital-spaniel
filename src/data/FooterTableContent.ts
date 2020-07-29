import { TableRow } from 'Components/StyledTable';

export const LinksTableRows: TableRow[] = [
	{
		columns: [
			{ text: 'EXPLORE', isHeading: true },
			{ text: 'SERVICES', isHeading: true },
		],
	},
	{ columns: [{ text: 'Services' }, { text: 'Brand' }] },
	{ columns: [{ text: 'Work' }, { text: 'Development' }] },
	{ columns: [{ text: 'About' }, { text: 'Marketing' }] },
	{ columns: [{ text: 'Blog' }] },
	{ columns: [{ text: 'Careers' }] },
];

export const ContactDetailsTableRows: TableRow[] = [
	{ columns: [{ text: 'QUESTIONS', isHeading: true }] },
	{ columns: [{ text: 'Call Us 0121 345 678' }] },
	{
		columns: [
			{
				text: 'Email Us info@digitalspaniel.co.uk',
				href: 'mailto:info@digitalspaniel.co.uk',
			},
		],
	},
];
