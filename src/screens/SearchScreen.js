import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

export default function SearchScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-neutral-800 flex-1">
            <View className="mb-3 mx-4 flex-row justify-between items-center border border-neutral-500 rounded-full" >
                <TextInput
                    placeholder="Search Movie"
                    placeholderTextColor={'lightgray'}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"/>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500">
                    <XMarkIcon size="25" color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}