import { keyframes } from 'styled-components';

// Fades
export const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const fadeInDown = keyframes`
	0% {
		transform: translateY(-20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const fadeInUp = keyframes`
	0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`;

export const fadeInScaleDown = keyframes`
	0% {
		transform: scale(1.05);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
`;

// Move

export const MoveUp = keyframes`
	0% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(-5px);
	}
`;

// Loading Screen

export const LoadScreen = keyframes`
	0% {
		transform: scaleX(2);
		opacity: 1;
	}
	60% {
		opacity: 0;
	}
	99% {
		transform: scaleY(50.5);
		opacity: 0;
	}
	100% {
		transform: scaleY(0);
		opacity: 0;
	}
`;


// Cool Animations

export const Comic = keyframes`

{
	0%,10% {
		transform:translateY(0) rotate(0);
		transform-origin:50% 50%
	}
	1.5% {
		transform:translateY(-10px) rotate(6deg)
	}
	3.0% {
		transform:translateY(8px) rotate(-6deg)
	}
	4.5% {
		transform:translateY(-8px) rotate(3.6deg)
	} 
	6.0% {
		transform:translateY(4px) rotate(-2.4deg)
	}
	7.5% {
		transform:translateY(-3px) rotate(1.2deg)
	}
}

`;