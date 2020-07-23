import * as React from 'react';

export interface Theme {
	colors: Record<string, string>;
	fonts: {
		families: Record<string, string>;
		weights: Record<string, number>;
	};
	sizing: {
		tablet: number;
	};
}

export const theme: Theme = {
	colors: {
		highlightPink: '#C0345E',
		lightGrey: '#19293A1A',
		mediumGrey: '#506473',
		darkGrey: '#596D7A',
		navy: '#344657',
		darkNavy: '#19293A',
	},

	fonts: {
		families: {
			openSans: `'Open Sans', Arial, sans-serif`,
			raleway: `'Raleway', 'Trebuchet MS', sans-serif`,
		},
		weights: {
			light: 300,
			regular: 400,
			semiBold: 600,
			bold: 700,
			extraBold: 800,
		},
	},

	sizing: {
		tablet: 1024,
	},
};
