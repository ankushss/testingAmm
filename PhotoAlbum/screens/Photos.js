import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TextInput, Text, View, FlatList, Image, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import Photo from '../components/photos/Photo'

import { fetchPhotos } from '../store/photos/photosActionCreators'
import { fetchWishlist } from '../store/wishlist/wishlistActionCreators'

const Photos = (props) => {
    const { photos, isLoading, error } = props.photos;
    const { id } = props.route.params;

    useEffect(() => {
        props.fetchPhotos(id);
    }, []);

    const appendData = () => {
        props.fetchPhotos(id);
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_heading}>
                <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                    <Image style={styles.icon} source={{ uri: 'https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767531-1502435.png' }} />
                </TouchableWithoutFeedback>
                <Text style={styles.heading}>Photos</Text>
            </View>
            <TextInput style={styles.search} placeholder="Search by title" placeholderTextColor='grey' />
            <FlatList
                ListFooterComponent={isLoading && <View style={{ paddingTop: 10, paddingBottom: 10 }}><ActivityIndicator size='large' /></View>}
                data={photos}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0}
                onEndReached={appendData}
                renderItem={({ item }) => <Photo item={item} albumId={id} />}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        photos: state.photo
    }
}

export default connect(mapStateToProps, { fetchPhotos, fetchWishlist })(Photos)

const styles = StyleSheet.create({
    container_heading: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 50,
    },
    heading: {
        fontSize: 25,
        fontWeight: "700",
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    icon: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    search: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 5,
        marginBottom: 10,
        marginHorizontal: 20
    }
})
