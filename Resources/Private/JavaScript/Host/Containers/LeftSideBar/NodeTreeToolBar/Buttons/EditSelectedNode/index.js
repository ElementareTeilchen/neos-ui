import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {IconButton} from '../../../../../Components/';

@connect()
export default class EditSelectedNode extends Component {
    static propTypes = {
        className: PropTypes.string
    }

    render() {
        return (
            <IconButton
                className={this.props.className}
                onClick={this.editSelectedNode.bind(this)}
                icon="pencil"
                hoverStyle="clean"
                />
        );
    }

    editSelectedNode() {
        console.log('edit selected node');
    }
}