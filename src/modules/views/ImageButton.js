import React, { PropTypes } from 'react'
import {
    TouchableOpacity,
    Image
} from 'react-native'

class ImageButton extends React.Component {
    render() {
        const { src, imageStyle, buttonStyle, action } = this.props
        return (
            <TouchableOpacity
                style={buttonStyle}
                onPress={action}>
                <Image
                    source={src}
                    style={imageStyle}
                />
            </TouchableOpacity>
        )
    }
}

ImageButton.propTypes = {
    src: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
    imageStyle: PropTypes.number,
    buttonStyle: PropTypes.number,
    action: PropTypes.func
}

export default ImageButton


