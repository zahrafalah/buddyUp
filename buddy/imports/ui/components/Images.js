
import PropTypes from "prop-types";
import React from "react";
import styles from "./Images.css";



class Images extends React.Component {
    static propTypes = {
        photos : PropTypes.array /* { src, id, bigSrc}*/,
        columns : PropTypes.number,
        InformationElement : PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            fullScreenImage : null,
			fullScreenImageIndex : null
        }
    }

    render() {
        return (
            <div >
                {this.getGridElements()}
                {this.getFullScreenImage(this.state.fullScreenImage)}
            </div>
        );
    }

    getGridElements() {
        const {photos}  = this.props;
        const classNames = this.isShowInfo() ? [styles.imageGridItem, styles.column1] : [styles.imageGridItem];
        const style = this.isShowInfo() ? {} : {width : this.getPercentWidth() + '%'};

        return photos.map((photo, index) => (
            <div className={classNames.join(' ')}
                 style={style}
                 key={photo.id}>
                {this.getImageElement(photo, index)}
            </div>

        ));
    }

    getImageElement = (photo, index) => {
        const InformationElement = this.props.InformationElement ? this.props.InformationElement : DefaultInfoElement;
        const classNames = this.isShowInfo() ? [styles.imageWrapper, styles.column1Image] : [styles.imageWrapper];
        const style = {backgroundImage : `url(${photo.src})`};

        return (
            <div >
                <div className={classNames.join(' ')}
                     onClick={this.image_clickHandler(photo, index)}
                     style={style}>
					<a href="#">{photo.title}</a>
                </div>
                {this.isShowInfo() ? <InformationElement photo={photo}/> : null }

            </div>
        );
    };

   


  


    isShowInfo = () => this.props.columns == 10;
    getPercentWidth = () => 100 / this.props.columns - 1;
    getNextPhotoIndex = currentIndex => this.props.photos.length > currentIndex + 1 ? currentIndex + 1  : 0;
    getPreviousPhotoIndex = currentIndex => currentIndex - 1 >= 0 ? currentIndex - 1  : this.props.photos.length - 1;
    getPhoto = index => this.props.photos.length > index ? this.props.photos[index] : null;
 
};




export default Images;
