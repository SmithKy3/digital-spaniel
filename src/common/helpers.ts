import { debounce } from 'ts-debounce';

export function upperFirstLetter(str: string): string {
	const chars = str.split('');
	chars[0] = chars[0].toUpperCase();

	return chars.join('');
}

export function upperFirstEveryWord(str: string): string {
	const words = str.split(' ');

	return words.map(word => upperFirstLetter(word)).join(' ');
}
