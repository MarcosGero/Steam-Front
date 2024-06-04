import React from 'react';
import ImageGallery from 'react-image-gallery';

class ImageRender extends React.Component {
    renderVideo(item) {
        return (
            <div className="image-gallery-image">
                <div className="video-wrapper">
                    <video controls>
                        <source src={item.original} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        );
    }

    render() {
        const items = this.props.items.map(item => {
            if (item.original.endsWith('.webm')) {
                item.renderItem = () => this.renderVideo(item);
            }
            return item;
        });

        return <ImageGallery items={items} showPlayButton={false} showFullscreenButton={false} />;
    }
}

export default ImageRender;
