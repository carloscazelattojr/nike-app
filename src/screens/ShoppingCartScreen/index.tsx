import React from 'react';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import CartListItem from '@/components/CartListItem';
import { cartSlice, selectDeliveryPrice, selectSubtotal, selectTotal } from '@/store/slice/cartSlice';
import { useNavigation } from '@react-navigation/native';

const ShoppingCartTotals = () => {

    const navigation = useNavigation();
    const subTotal = useSelector(selectSubtotal);
    const delivery = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    const dispatch = useDispatch();

    const handleCheckout = () => {
        Alert.alert("Checkout", "you will be directed to checkout page. Thanks.");
        dispatch(cartSlice.actions.clearCartItems())
        navigation.goBack();
    }


    return (
        <>
            <View style={styles.totalsContainer}>
                <View style={styles.row}>
                    <Text style={styles.text}>Subtotal</Text>
                    <Text style={styles.text}>{subTotal} US$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Delivery</Text>
                    <Text style={styles.text}>{delivery} US$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textBold}>Total</Text>
                    <Text style={styles.textBold}>{total} US$</Text>
                </View>

            </View>
            {
                subTotal > 0 && (
                    <Pressable style={styles.button} onPress={handleCheckout}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </Pressable>
                )
            }
        </>
    )
}



export default function ShoppingCartScreen() {

    const cartItems = useSelector(state => state.cart.items);

    return (
        <>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />


        </>
    );
}