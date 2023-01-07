import React from 'react';
import { View, Text } from 'react-native'
import { s } from 'react-native-wind';
import { styles } from './Style';


function RecipeDet(props) {
    return (
        <View style={[s`bg-primary p-2 box-border h-full rounded-full flex flex-col items-center`, styles.EachCard]}>
            <View style={s`p-3 rounded-full bg-white mb-1 shadow-2xl shadow-black`}>
                <props.icon style={s`text-xl text-black`} />
            </View>
            <View style={props.number ? s`` : s`h-25`}></View>
            {props.number ? <Text style={[s`text-base`, styles.SemiBold]}>{props.number}</Text> : null}
            <View style={s``}></View>
            <Text style={[s`text-xs p-1`, styles.medium]}>{props.desc}</Text>
        </View>
    )
}

export default RecipeDet