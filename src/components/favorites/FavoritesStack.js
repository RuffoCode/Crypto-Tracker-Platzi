import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "./FavoritesScreen";
import FavoriteDetailScreen from '../favoriteDetail/FavoriteDetailScreen';
import Colors from "cryptoTracker/src/res/colors";
const Stack = createStackNavigator();

const FavoritesStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.blackPearl,
                    shadowOpacity: Colors.blackPearl
                },
                headerTintColor: Colors.white
            }}
        >
            <Stack.Screen name="Favorites" component={FavoritesScreen} />
            <Stack.Screen name="FavoriteDetail" component={FavoriteDetailScreen} />
        </Stack.Navigator>
    );
}

export default FavoritesStack;
