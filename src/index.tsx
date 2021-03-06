import React from 'react';
import propTypes from 'prop-types';
import { useTrail, animated, useSpring } from 'react-spring';
import DivHooksComponent from './div-hooks-component';
const AnimationMagnify: React.FC<AnimationMagnifyProps> = ({
	height,
	width,
	padding,
	opacity,
	backgroundImage,
	backgroundRepeat,
	backgroundColor,
	backgroundSize,
	/* Content */
	widthContent,
	magnifyingDiv,
	backgroundAttachmentContent,
	backgroundPositionContent,
	backgroundSizeContent,
}) => {
	const rootStyle = {
		height: height,
		width: width,
		padding: padding,
		backgroundColor: backgroundColor,
		backgroundImage: backgroundImage,
		backgroundRepeat: backgroundRepeat,
		backgroundSize: backgroundSize,
		opacity: opacity,
	};

	return (
		<div style={rootStyle}>
			<DivHooksComponent
				backgroundImage={backgroundImage}
				backgroundAttachmentContent={backgroundAttachmentContent}
				widthContent={widthContent}
				magnifyingDiv={magnifyingDiv}
				backgroundPositionContent={backgroundPositionContent}
				backgroundSizeContent={backgroundSizeContent}
			/>
		</div>
	);
};
interface AnimationMagnifyProps {
	height?: string;
	width?: string;
	padding?: string;
	opacity?: string;
	backgroundColor?: string;
	backgroundAttachment?: string;
	backgroundImage?: string;
	backgroundRepeat?: string;
	backgroundSize?: string;
	/* Content */
	widthContent?: string;
	backgroundAttachmentContent?: string;
	backgroundPositionContent?: string;
	magnifyingDiv?: number;
	backgroundSizeContent?: string;
}
AnimationMagnify.propTypes = {
	height: propTypes.string,
	width: propTypes.string,
	padding: propTypes.string,
	opacity: propTypes.string,
	backgroundColor: propTypes.string,
	backgroundAttachment: propTypes.string,
	backgroundImage: propTypes.string,
	backgroundRepeat: propTypes.string,
	backgroundSize: propTypes.string,
	/* Content */
	widthContent: propTypes.string,
	backgroundAttachmentContent: propTypes.string,
	backgroundPositionContent: propTypes.string,
	magnifyingDiv: propTypes.number,
	backgroundSizeContent: propTypes.string,
};

AnimationMagnify.defaultProps = {
	height: '400px',
	width: '100%',
	padding: '0',
	opacity: '0.8',
	backgroundImage:
		'url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundColor: '#fff',
	backgroundSize: 'cover',
	/* Content */
	magnifyingDiv: 4,
	widthContent: '100px',
	backgroundAttachmentContent: 'fixed',
	backgroundPositionContent: '0%',
	backgroundSizeContent: '120% 120%',
};

export default AnimationMagnify;
