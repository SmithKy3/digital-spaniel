import * as React from 'react';
import { StyledTable } from 'Components/StyledTable';
import { ServicesTableRows } from 'Data/ServicesTableContent';
import 'Styles/services.less';

export const Services: React.FC<{}> = () => {
	return (
		<section id="services">
			<div id="capabilities-wrapper">
				<div className="flex-half-screen">
					<div id="capabilities-bio">
						<h2>
							What are
							<br />
							<span>we capable of</span>
						</h2>

						<p>
							By focusing on design as an enabler and putting a huge emphasis on
							our clients as co-producers, we create innovative, sustainable
							marketing that enhances brand experience and user engagement.
						</p>

						<button>
							<p>Our process</p>
						</button>
					</div>
				</div>

				<div className="flex-half-screen">
					<StyledTable id={'services-table'} rows={ServicesTableRows} />
				</div>
			</div>
		</section>
	);
};
