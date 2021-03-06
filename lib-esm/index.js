import React from 'react';
import propTypes from 'prop-types';
import DivHooksComponent from './div-hooks-component';
var AnimationMagnify = function (_a) {
    var height = _a.height, width = _a.width, padding = _a.padding, opacity = _a.opacity, backgroundImage = _a.backgroundImage, backgroundRepeat = _a.backgroundRepeat, backgroundColor = _a.backgroundColor, backgroundSize = _a.backgroundSize, widthContent = _a.widthContent, magnifyingDiv = _a.magnifyingDiv, backgroundAttachmentContent = _a.backgroundAttachmentContent, backgroundPositionContent = _a.backgroundPositionContent, backgroundSizeContent = _a.backgroundSizeContent;
    var rootStyle = {
        height: height,
        width: width,
        padding: padding,
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize,
        opacity: opacity,
    };
    return (React.createElement("div", { style: rootStyle },
        React.createElement(DivHooksComponent, { backgroundImage: backgroundImage, backgroundAttachmentContent: backgroundAttachmentContent, widthContent: widthContent, magnifyingDiv: magnifyingDiv, backgroundPositionContent: backgroundPositionContent, backgroundSizeContent: backgroundSizeContent })));
};
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
    backgroundImage: 'url(https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#fff',
    backgroundSize: 'cover',
    magnifyingDiv: 4,
    widthContent: '100px',
    backgroundAttachmentContent: 'fixed',
    backgroundPositionContent: '0%',
    backgroundSizeContent: '120% 120%',
};
export default AnimationMagnify;
//# sourceMappingURL=index.js.map