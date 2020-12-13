import React, { useEffect, useState, useContext } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { fetchWishlist } from '../store/wishlist/wishlistActionCreators'
import Photo from '../components/photos/WishlistPhoto'

import { setWishlistData } from '../utils/HelperFunctions'

const Wishlist = (props) => {

    const { wishlist } = props.wishlist;

    useEffect(() => {
        props.fetchWishlist();
        setWishlistData(wishlist)
    }, [wishlist])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Albums</Text>
            {wishlist.length <= 0 && <Text style={styles.text}>There are no items in the wishlist!!</Text>}
            <FlatList
                data={wishlist}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Photo item={item} albumId={item.albumId} />}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        wishlist: state.wishlist
    }
}

export default connect(mapStateToProps, { fetchWishlist })(Wishlist)

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "700",
        marginTop: 50,
        marginHorizontal: 20,
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    }
})
