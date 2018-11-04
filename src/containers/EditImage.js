import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditImage extends Component {
    render() {
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}

//default props
EditImage.defaultProps = {};

//prop types
EditImage.propTypes = {};


const mapStateToProps = () => {
    return {};
};

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(EditImage);