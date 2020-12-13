import AsyncStorage from '@react-native-async-storage/async-storage';

export const setWishlistData = async (data) => {
    console.log({ data })
    try {
        // await AsyncStorage.setItem('@wishlist', JSON.stringify(data ?? []))
    } catch (e) {
        console.log(e)
    }
}

export const getWishlistData = async () => {
    try {
        const data = await AsyncStorage.getItem('@wishlist')
        return data;
    } catch (e) {
        console.log(e)
    }
}