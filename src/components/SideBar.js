import { getAuth } from 'firebase/auth';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducers/authSlice';

const SideBar = ({ navigation }) => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        const auth = getAuth()
        auth.signOut()
        dispatch(logout())

        navigation.navigate("Login")
    }

    return (
        <View className="flex-1 bg-neutral-800 p-5">
            <View className="bg-orange-800 mt-10 border-y-2 p-5">
                <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
                    <Text className="text-white font-semibold text-base">Favorite</Text>
                </TouchableOpacity>
            </View>

            <View className="bg-orange-800 border-y-2  p-5">
                <TouchableOpacity onPress={handleLogOut}>
                    <Text className="text-white font-semibold text-base">LogOut</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default SideBar;
