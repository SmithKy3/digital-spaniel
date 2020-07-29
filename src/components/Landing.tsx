import * as React from 'react';
import styled from 'styled-components';
import logo from 'Images/logo.png';
import 'Styles/landing.less';

export const Landing: React.FC<{}> = () => {
	return (
		<section id="landing">
			<div id="landing-left">
				<img id="logo" src={logo} />

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

			<div id="landing-right" />
		</section>
	);
};
