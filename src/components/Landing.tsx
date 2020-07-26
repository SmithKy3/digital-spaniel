import * as React from 'react';
import styled from 'styled-components';
import logo from 'Images/logo.png';
import 'Styles/landing.less';

const StyledLogo = styled.img`
	position: absolute;
	top: 2%;
	left: 15%;
	width: 20%;
`;

export const Landing: React.FC<{}> = () => {
	return (
		<section>
			<div id="landing-wrapper">
				<div className="flex-half-screen">
					<StyledLogo src={logo} />

					<div id="landing-bio">
						<h3>BRAND, DEV, ECOM, MARKETING</h3>

						<h2>
							We unleash
							<br />
							<span>business potential</span>
						</h2>

						<p>
							We create brand experiences which are memorable and distinct. Our
							experienced team create and develop brands with personality and
							resonance.
						</p>

						<button>
							<p>Let's talk</p>
						</button>
					</div>
				</div>

				<div className="flex-half-screen" id="spaniel" />
			</div>
		</section>
	);
};
