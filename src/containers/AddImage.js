import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddImage extends Component {
    render() {
        return (
            <React.Fragment>
                ADD
            </React.Fragment>
        );
    }
}

//default props
AddImage.defaultProps = {};

//prop types
AddImage.propTypes = {};


const mapStateToProps = () => {
    return {};
};

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(AddImage);