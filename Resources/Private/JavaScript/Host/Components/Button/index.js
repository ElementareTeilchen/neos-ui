import React, {PropTypes} from 'react';
import mergeClassNames from 'classnames';
import {executeCallback} from 'Shared/Utilities/';
import styles from './style.css';

const Button = props => {
    const {
        children,
        className,
        isFocused,
        isDisabled,
        onClick,
        onMouseDown,
        onMouseUp,
        onMouseEnter,
        onMouseLeave,
        hoverStyle,
        style,
        ...directProps
    } = props;
    const classNames = mergeClassNames({
        [styles.btn]: true,
        [styles['btn--clean']]: style === 'clean',
        [styles['btn--transparent']]: style === 'transparent',
        [styles['btn--cleanHover']]: hoverStyle === 'clean',
        [styles['btn--brandHover']]: hoverStyle === 'brand',
        [styles['btn--darkenHover']]: hoverStyle === 'darken',
        [className]: className && className.length
    });
    const attributes = {
        className: classNames,
        onClick: e => executeCallback({e, cb: onClick}),
        onMouseDown: e => executeCallback({e, cb: onMouseDown}),
        onMouseUp: e => executeCallback({e, cb: onMouseUp}),
        onMouseEnter: e => executeCallback({e, cb: onMouseEnter}),
        onMouseLeave: e => executeCallback({e, cb: onMouseLeave}),
        ref: btn => {
            const method = isFocused ? 'focus' : 'blur';

            //
            // Initially focus the btn if the propType was set.
            //
            if (btn !== null) {
                btn[method]();
            }
        }
    };

    //
    // Disable the btn if the prop was set.
    //
    if (isDisabled) {
        attributes.disabled = 'disabled';
    }

    return (
        <button {...attributes} {...directProps}>
            {children}
        </button>
    );
};
Button.propTypes = {
    // ARIA & UI related propTypes.
    isFocused: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,

    // Style related propTypes.
    style: PropTypes.oneOf(['clean', 'transparent']).isRequired,
    hoverStyle: PropTypes.oneOf(['clean', 'brand', 'darken']).isRequired,
    className: PropTypes.string,

    // Interaction related propTypes.
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,

    // Contents of the Button.
    children: PropTypes.node.isRequired
};
Button.defaultProps = {
    style: 'clean',
    hoverStyle: 'clean',
    isFocused: false,
    isDisabled: false
};

export default Button;
