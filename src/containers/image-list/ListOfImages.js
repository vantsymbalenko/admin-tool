import React, {Component} from 'react';
import {connect} from 'react-redux';
import {UNSENT, DONE} from 'constants/generalConstants';
import { getImages } from 'actions/imagesActions';
import {ImageCard} from "components/image-card/ImageCard";

import 'containers/image-list/image-list.css';
import {Loader} from "../../components/loader/Loader";

class ListOfImages extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
       if (this.props.images.isGettingImages === UNSENT){
           this.props.getImages();
       }
    }

    render() {
        if(this.props.images.isGettingImages !== DONE){
            return(
                <Loader/>
            )
        }
        return (
            <section className={"images-list"}>
                {Object.keys(this.props.images.listOfImages).map((item, index) => {
                    return(
                        <ImageCard
                            key={item}
                            id={item}
                            image={this.props.images.listOfImages[item].image}
                        />
                    );
                })}
            </section>
        );
    }
}

//default props
ListOfImages.defaultProps = {};

//prop types
ListOfImages.propTypes = {};


const mapStateToProps = ({images}) => {
    return {
        images
    };
};

const mapStateToDispatch = {
    getImages
};

export default connect(mapStateToProps, mapStateToDispatch)(ListOfImages);