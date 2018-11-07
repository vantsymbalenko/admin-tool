import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputForm} from 'components/inputs/InputForm';
import 'containers/add-image/add-image.css';

class AddImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            previewImageUrl : null
        };
    }

    onChangeImageHandler = e => {
        const oFReader = new FileReader();
        const file = e.target.files[0];
        if(file){
            oFReader.onloadend = () => {
                this.setState({
                    image: file,
                    previewImageUrl: oFReader.result
                });
            };
            oFReader.readAsDataURL(file);
        }
    };

    render() {
        return (
            <div className={"add-image-container"}>
                <div className="preview-image">
                    <img
                        className={"preview-image-image"}
                        src={this.state.previewImageUrl || require("assets/no-image.png")}
                        alt="preview" width={300} height={300}
                    />
                </div>
                <div className={"add-image-settings"}>
                    {/*<input*/}
                        {/*type="file"*/}
                        {/*onChange={this.onChangeImageHandler}*/}
                    {/*/>*/}
                    <InputForm
                        value={"aads"}
                        name={"name"}
                        labelText={"Tshis is label"}
                    />
                </div>
            </div>
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