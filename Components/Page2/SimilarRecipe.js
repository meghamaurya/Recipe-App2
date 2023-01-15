import React, {useState, useEffect} from 'react'
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { s } from 'react-native-wind';
import { styles } from './Style';
import { FontAwesome5 } from '@expo/vector-icons';
import {useRef} from 'react'


function SimilarRecipe(props) {
    const scrollRef = useRef();
    const [data, setData] = useState([]);
    const {id, setId} = props;

    /* Scroll to top when similar recipe is clicked */
    const onScrollTouch = (id) => {
        setId(id);
        scrollRef.current?.scrllTo({
            y: 0,
            animated: true,
            behavior: 'smooth'
        });
    }


    /* Gets Similar Recipes */
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=abe7b86f391c4e3fb12b5a6b7074be63&number=5`)
        .then(res => res.json())
        .then((res) => {
            setData(res)
        })
        .catch((err) => {
            console.log('Err', err)
        })
    }, [props])
    
    return data.length > 0 ? <View style={s`w-full flex flex-col`}>
    <Text style={[s`text-lg`, styles.SemiBold]}>Similar Recipes</Text>
    <ScrollView style={s`flex w-full flex-col`}>
        <View style={s`w-full flex flex-col`}>
            {data.map((eleme, index) => {
                return (
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => onScrollTouch(eleme.id)} key={`similar-${index}`} style={s`w-full flex flex-col mt-4`}>
                        <View style={s`w-full flex flex-col`}>
                        
                        <View style={s`flex flex-row items-center mx-0 self-start box-border bg-primary rounded-full px-1.5 py-0.5`}>
                                <FontAwesome5 name="clock" style={s`text-black w-3.5 h-3.5`} />
                                <Text style={[s`text-black text-xs ml-1`, styles.medium]}>{eleme.readyInMinutes} Mins</Text>
                            </View>
                        <Text style={[s`w-full text-base text-black`, styles.medium]} numberOfLines={1}>{eleme.title}</Text>
                    </View>
                    </TouchableHighlight>
                )
            })}
        </View>

    </ScrollView>
</View> : null
}

export default SimilarRecipe;