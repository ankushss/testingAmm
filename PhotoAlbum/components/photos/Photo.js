import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { addToWishlist, removeFromWishlist } from '../../store/wishlist/wishlistActionCreators';

const heartOutline = 'https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png';
const heartFilled = 'https://img.icons8.com/windows/452/filled-heart.png';

const Photo = ({ item, albumId, isWishlistComp, ...props }) => {

    const [favourite, setFavourite] = useState(false);

    const onPressFavourite = () => {
        if (!favourite) {
            props.addToWishlist({ ...item, albumId });
        } else {
            props.removeFromWishlist(item.id, albumId);
        }
        setFavourite(!favourite)
    }

    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }} style={styles.image} source={{ uri: item.url }}>
                <TouchableWithoutFeedback onPress={onPressFavourite}>
                    <Image style={favourite ? { ...styles.icon, tintColor: 'orange' } : { ...styles.icon, tintColor: 'white' }} source={favourite ? { uri: heartFilled } : { uri: heartOutline }} />
                </TouchableWithoutFeedback>
            </ImageBackground>
            <View style={styles.heading}>
                <Text numberOfLines={1} style={styles.font}>{item.title}</Text>
            </View>
        </View>
    )
}

export default connect(null, { addToWishlist, removeFromWishlist })(Photo)

const styles = StyleSheet.create({
    container: {
        height: 250,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    image: {
        height: 200,
        resizeMode: 'contain',
    },
    heading: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    font: {
        fontSize: 22,
        fontWeight: '500',
        marginHorizontal: 10,
    },
    icon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        margin: 20,
        tintColor: 'white'
    }
})
