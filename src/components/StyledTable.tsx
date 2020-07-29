import * as React from 'react';
import 'Styles/StyledTable.less';

interface TableColumn {
	text: string;
	href?: string;
	isHeading?: boolean;
}

export interface TableRow {
	columns: TableColumn[];
}

export const StyledTable: React.FC<{
	id: string;
	rows: TableRow[];
}> = props => {
	const tableContents = props.rows.map((row, index) => {
		const columns = row.columns.map((column, index) => {
			const columnContent = column.href ? (
				<a href={column.href}>{column.text}</a>
			) : (
				<a>{column.text}</a>
			);

			return column.isHeading ? (
				<th key={index}>{columnContent}</th>
			) : (
				<td key={index}>{columnContent}</td>
			);
		});

		return <tr key={index}>{columns}</tr>;
	});

	const id = props.id || '';

	return (
		<table id={id} className="styled-table">
			<tbody>{tableContents}</tbody>
		</table>
	);
};
