import * as React from 'react';
import styled from 'styled-components';
import landingSpaniel from 'Images/landing_spanielX2.png';
import logo from 'Images/logo.png';

export const Landing: React.FC<{}> = () => {
	return (
		<LandingWrapper>
			<LandingHalf>
				<Logo src={logo} />

				<Bio>
					<h3>BRAND, DEV, ECOM, MARKETING</h3>

					<h2>
						<span>We unleash</span>
						<br />
						business potential
					</h2>

					<p>
						We create brand experiences which are memorable and distinct. Our
						experienced team create and develop brands with personality and
						resonance.
					</p>

					<div>Let's talk</div>
				</Bio>
			</LandingHalf>

			<LandingHalf background={landingSpaniel}></LandingHalf>
		</LandingWrapper>
	);
};

const LandingWrapper = styled.section`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-flow: row nowrap;
	align-content: center;

	@media screen and (max-width: ${props => props.theme.sizing.tablet}px) {
		flex-flow: column nowrap;
	}
`;

const LandingHalf = styled.div<{ background?: string }>`
  position: relative;
  width: 50%;
  min-height: 100vh;
  flex: 1 1 auto;

  ${({ background }) =>
		background &&
		`
    background-image: url(${background});
    background-size: cover;
    `}

  @media screen and (max-width: ${props => props.theme.sizing.tablet}px) {
    width: 100%;
    height: max-content;
  }
`;

const Logo = styled.img`
	position: absolute;
	top: 2%;
	left: 15%;
	width: 20%;
`;

const Bio = styled.div`
	position: absolute;
	top: 30%;
	left: 30%;
	width: 45%;
	height: max-content;

	${({ theme }) => `
        h3 {
            font-family: ${theme.fonts.families.openSans};
            font-weight: ${theme.fonts.weights.regular};
            color: ${theme.colors.highlightPink};
        }

        h2 {
            font-family: ${theme.fonts.families.raleway};
            font-weight: ${theme.fonts.weights.semiBold};
            color: ${theme.colors.mediumGrey};
            margin: 2rem 0;

            span {
                color: ${theme.colors.darkNavy};
            }
        }

        p {
            font-size: 1.25rem;
            font-family: ${theme.fonts.families.openSans};
            font-weight: ${theme.fonts.weights.regular};
            color: ${theme.colors.mediumGrey};
        }

        div {
            width: max-content;
            margin: 4rem 0;
            padding: 0.2em 0;

            font-family: ${theme.fonts.families.openSans};
            font-weight: ${theme.fonts.weights.semiBold};
            color: ${theme.colors.darkNavy};

            border-width: 0 0 .2em 0;
            border-color: ${theme.colors.highlightPink};
            border-style: solid;}
        }
    `}
`;
