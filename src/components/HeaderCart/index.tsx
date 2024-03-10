import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from '@/store/slice/cartSlice';

import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from './styles';


export default function HeaderCart() {

    const navigation = useNavigation();
    const numberOfItems = useSelector(selectNumberOfItems);
    return (
        <>
            {
                numberOfItems > 0
                    ? (
                        <Pressable
                            style={styles.button}
                            onPress={() => navigation.navigate("Cart")}
                        >
                            <FontAwesome5
                                name="shopping-cart"
                                size={20}
                                color="gray"
                            />

                            <Text style={styles.number}>{numberOfItems}</Text>
                        </Pressable>

                    )
                    : null
            }
        </>
    );
}