import React from 'react';
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { CartListItemProps } from '@/models/CartListItemProps';
import { cartSlice } from '@/store/slice/cartSlice';

export default function CartListItem({ cartItem }: CartListItemProps) {

    const dispatch = useDispatch();

    const increaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({ productId: cartItem.product.id, amount: 1 }))
    };

    const decreaseQuantity = () => {
        dispatch(cartSlice.actions.changeQuantity({ productId: cartItem.product.id, amount: -1 }))

    };


    return (
        <View style={styles.container}>
            <Image source={{ uri: cartItem.product.image }} style={styles.image} />
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{cartItem.product.name}</Text>
                <Text style={styles.size}>Size {cartItem.size}</Text>
                {/* 
                <View style={styles.footerPriceUnit}>
                    <Text style={styles.size}>{cartItem.product.price} $USD</Text>
                </View> */}

                <View style={styles.footer}>
                    <Feather
                        onPress={decreaseQuantity}
                        name="minus-circle"
                        size={24}
                        color="gray"
                    />
                    <Text style={styles.quantity}>{cartItem.quantity}</Text>
                    <Feather
                        onPress={increaseQuantity}
                        name="plus-circle"
                        size={24}
                        color="gray"
                    />
                    <Text style={styles.itemTotal}>{cartItem.product.price * cartItem.quantity} $USD</Text>
                </View>
            </View>
        </View>
    );
}