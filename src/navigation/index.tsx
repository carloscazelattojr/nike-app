import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsScreen from '@/screens/ProductsScreen';
import ProductDetailsScreen from '@/screens/ProductDetailsScreen';
import ShoppingCartScreen from '@/screens/ShoppingCartScreen';
import HeaderCart from '@/components/HeaderCart';

const { Screen, Navigator } = createNativeStackNavigator();

export default function NavigationApp() {

    return (
        <NavigationContainer>
            <Navigator >
                <Screen
                    name='Products'
                    component={ProductsScreen}
                    options={{
                        headerRight: () => <HeaderCart />
                    }}
                />
                <Screen
                    name='ProductDetails'
                    component={ProductDetailsScreen}
                    options={{
                        title: "Product Detail"
                    }}
                />
                <Screen
                    name='Cart'
                    component={ShoppingCartScreen}
                    options={{
                        title: "Shopping Cart"
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}