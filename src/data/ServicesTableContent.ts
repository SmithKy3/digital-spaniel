import { TableRow } from 'Components/StyledTable';

export const ServicesTableRows: TableRow[] = [
	{
		columns: [
			{ text: 'BRAND', isHeading: true },
			{ text: 'MARKETING', isHeading: true },
		],
	},
	{ columns: [{ text: 'Brand Strategy' }, { text: 'Digital' }] },
	{ columns: [{ text: 'Logo & Name' }, { text: 'Market research' }] },
	{ columns: [{ text: 'Identity & Collateral' }] },
	{ columns: [{ text: 'DEVELOPMENT', isHeading: true }] },
	{ columns: [{ text: 'eCommerce' }] },
	{ columns: [{ text: 'Web Development' }] },
	{ columns: [{ text: 'Mobile Apps' }] },
];
