import React, { useEffect, useState, useContext } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import AlbumComponent from '../components/album/Album'
import { FlatList } from 'react-native-gesture-handler'
import { AlbumStackNavigationContext } from '../components/context/context'

import { fetchAlbums } from '../store/albums/albumActionCreators'

const Album = (props) => {
    const { albums, isLoading, error } = props.album;

    const Navigation = useContext(AlbumStackNavigationContext);

    useEffect(() => {
        props.fetchAlbums();
    }, [])

    const appendData = () => {
        props.fetchAlbums();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Albums</Text>
            <FlatList
                ListFooterComponent={isLoading && <View style={{ paddingTop: 10, paddingBottom: 10 }}><ActivityIndicator size='large' /></View>}
                data={albums}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0}
                onEndReached={appendData}
                renderItem={({ item }) => <AlbumComponent id={item.id} title={item.title} navigation={Navigation} />}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        album: state.album
    }
}

export default connect(mapStateToProps, { fetchAlbums })(Album)

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
    }
})
