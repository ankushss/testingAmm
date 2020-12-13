import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Album = ({ title, id, navigation }) => {
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate('Photos', { id })}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.font}>{id}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={{ ...styles.font, flex: 0.9 }}>{title}</Text>
                    <Image style={styles.icon} source={{ uri: 'https://static.thenounproject.com/png/1879587-200.png' }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Album

const styles = StyleSheet.create({
    container: {
        height: 130,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        justifyContent: 'center',
        shadowOffset: { width: 5, height: 5, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    heading: {
        justifyContent: 'center',
        marginHorizontal: 10
    },
    body: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: 'green',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 5
    },
    font: {
        fontSize: 22,
        fontWeight: '500'
    },
    icon: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    }
})
