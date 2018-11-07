import React from 'react';
import PropTypes from 'prop-types';
import 'components/image-card/image-card.css';

export const ImageCard = (props) => {
    return(
        <div className={"image-card"}>
            <span className={"fa fa-edit fz-20 image-card-edit-icon"}/>
            <span className={"fa fa-trash fz-20 image-card-delete-icon"}/>
            <img
                src={props.image}
                id={props.id}
                alt={`item`}
                className={"image-card-image"}
                onClick={props.openModal}
            />
        </div>
    );
};

ImageCard.propTypes = {
    image: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    openModal: PropTypes.func
};