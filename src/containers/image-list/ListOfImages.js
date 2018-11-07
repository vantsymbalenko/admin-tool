import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ImageCard} from "components/image-card/ImageCard";
import {Loader} from 'components/loader/Loader';
import ModalBody from 'components/modal-body/ModalBody';
import {UNSENT, DONE} from 'constants/generalConstants';
import { getImages } from 'actions/imagesActions';
import ReactModal from 'react-modal';
import 'containers/image-list/image-list.css';

ReactModal.setAppElement('#root');

class ListOfImages extends Component {
    constructor(props){
        super(props);
        this.state = {
            isShowModal: false,
            id: null
        };
    }

    componentDidMount(){
       if (this.props.images.isGettingImages === UNSENT){
           this.props.getImages();
       }
    }

    handleOpenModal = (e) => {
        this.setState({
            isShowModal : true,
            id: e.target.id
        });
    };

    handleCloseModal = () => {
        this.setState({
            isShowModal : false,
        });
    };

    render() {
        if(this.props.images.isGettingImages !== DONE){
            return(
                <Loader/>
            )
        }

        const imageRows = [];
        const imagesPerRow = 3;
        const imagesKeys = Object.keys(this.props.images.listOfImages);

        for(let i=0; i<imagesKeys.length; i+=imagesPerRow){
            imageRows.push((
                <div className="image-row" key={imagesKeys[i]}>
                    {imagesKeys.slice( i, i + imagesPerRow ).map(item => {
                        return(
                            <ImageCard
                                id={item}
                                key={item}
                                openModal={this.handleOpenModal}
                                image={this.props.images.listOfImages[item].image}
                            />
                        );
                    })}
                </div>
            ));
        }

        return (
            <React.Fragment>
                <section className={"images-list"}>
                    {imageRows}
                </section>
                <ReactModal
                    isOpen={this.state.isShowModal}
                    contentLabel="Details about image"
                    className="modal"
                    onRequestClose={this.handleCloseModal}
                    overlayClassName="overlay"
                >
                   <ModalBody id={this.state.id}/>
                </ReactModal>
            </React.Fragment>
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