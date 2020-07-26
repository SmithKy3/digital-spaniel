import * as React from 'react';

export const ServicesTable: React.FC<{}> = () => {
	return (
		<table id="services-table">
			<tbody>
				<tr>
					<th>BRAND</th>
					<th>MARKETING</th>
				</tr>
				<tr>
					<td>Brand Strategy</td>
					<td>Digital</td>
				</tr>
				<tr>
					<td>Logo & Name</td>
					<td>Market Research</td>
				</tr>
				<tr>
					<td colSpan={2}>Identity & Collateral</td>
				</tr>
				<tr>
					<th>DEVELOPMENT</th>
				</tr>
				<tr>
					<td>eCommerce</td>
				</tr>
				<tr>
					<td>Web Development</td>
				</tr>
				<tr>
					<td>Mobile Apps</td>
				</tr>
			</tbody>
		</table>
	);
};
