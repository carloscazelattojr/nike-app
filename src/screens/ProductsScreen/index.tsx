import React from 'react';
import { FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '@/store/slice/productSlice';

export default function ProductsScreen() {

    const navigation = useNavigation();
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Pressable
                    style={styles.itemContainer}
                    onPress={() => {
                        dispatch(productSlice.actions.setSelectedProduct(item.id));
                        navigation.navigate('ProductDetails')
                    }}>

                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                </Pressable>
            )}
            numColumns={2}
        />
    );
}