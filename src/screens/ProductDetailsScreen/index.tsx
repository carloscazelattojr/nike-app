import React from 'react';
import { Image, View, FlatList, useWindowDimensions, Text, ScrollView, Pressable } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { cartSlice } from '@/store/slice/cartSlice';

export default function ProductDetailsScreen() {

    const { width } = useWindowDimensions();

    const navigation = useNavigation();
    const product = useSelector((state) => state.products.selectedProduct);
    const dispatch = useDispatch();


    const addToCart = () => {
        dispatch(cartSlice.actions.addCartItem({ product: product }));
        navigation.goBack();
        navigation.navigate('Cart');
    }

    return (
        <View style={styles.container}>
            {/* Image Carousel */}
            <ScrollView>
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image
                            source={{ uri: item }}
                            style={{
                                width: width, aspectRatio: 1
                            }}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />


                <View style={styles.main}>
                    {/* Title */}
                    <Text style={styles.title}>{product.name}</Text>

                    {/* Price */}
                    <Text style={styles.price}>$ {product.price}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            <Pressable style={styles.button} onPress={addToCart}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
            {/* Navigation icon */}

        </View>
    );
}