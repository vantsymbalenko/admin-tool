import React, { Component } from 'react';
import {connect} from 'react-redux';
import 'components/modal-body/modal-body.css';

class ModalBody extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            isSize: false
        };
    }
    componentDidMount(){
        let newImg = new Image();

        newImg.onload = () => {
            var height = newImg.height;
            var width = newImg.width;
            this.setState({
                width: width,
                height: height,
                isSize: true
            });
        };
        newImg.src = this.props.image.image;
    }
    render(){
        return (
            <React.Fragment>
                <div className={"modal-body"}>
                    <div className="modal-body-image-content">
                        <img
                            src={this.props.image.image}
                            alt="item"
                            className={"image-content-image"}
                            // width={this.state.width}
                            // height={this.state.height}
                        />
                    </div>
                    <div className={"modal-body-description"}>
                        this is description
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({images}, ownProps) => {
    return {
        image: images.listOfImages[ownProps.id]
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody);