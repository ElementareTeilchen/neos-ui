import {themr} from '@friendsofreactjs/react-css-themr';
import identifiers from '../identifiers';
import style from './style.css';
import IconButton from './iconButton';

const ThemedIconButton = themr(identifiers.iconButton, style)(IconButton);

//
// Dependency injection
//
import injectProps from './../_lib/injectProps';
import Icon from './../Icon';
import Button from './../Button';

export default injectProps({
    IconComponent: Icon,
    ButtonComponent: Button
})(ThemedIconButton);
