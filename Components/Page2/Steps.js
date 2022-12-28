import React, { useState } from 'react'
import { s } from 'react-native-wind';
import { styles } from './Style';
import { Text, TouchableHighlight, View } from 'react-native'

function Steps(props) {
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(!display)
    }
    return (
        <View style={s`flex relative mt-5 w-full flex-row items-start`}>
            <View style={[s`w-3 h-3 mt-0.5 rounded-full border-2 border-primary bg-white mr-2`]}>
            </View>
            {props.i + 1 !== props.recipeStep.length ? <View style={[s`absolute h-full w-0.5 bg-primary`, styles.stepCenter]}></View> : null}
            <TouchableHighlight  style={s`mt-0 flex flex-column items-start w-full`} onPress={handleDisplay} underlayColor={'transparent'}>
                <View style={s`mt-0 flex flex-column items-start w-full`}>
                    <Text style={[s`mt-0 w-full`, styles.SemiBold]}>Step {props.number}</Text>
                    <Text style={[s`text-gray w-full ${display ? 'flex' : 'none'}`, styles.medium]}>{props.step}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Steps;