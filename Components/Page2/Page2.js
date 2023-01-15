import '../../wind.config';
import { Text, View, ImageBackground, TouchableHighlight, SafeAreaView, ActivityIndicator } from 'react-native';
import { s } from 'react-native-wind';
import { styles } from './Style';
import {useFonts, KumbhSans_400Regular, KumbhSans_500Medium, KumbhSans_600SemiBold, KumbhSans_700Bold,
} from '@expo-google-fonts/kumbh-sans';
import { useState, useEffect } from 'react'
import Steps from './Steps';
import RecipeDet from './RecipeDet';
import SimilarRecipe from './SimilarRecipe';
import { FontAwesome5 } from '@expo/vector-icons';



function Page2({navigation, route}) {
    let [fontsLoaded] = useFonts({
        KumbhSans_400Regular,
        KumbhSans_500Medium,
        KumbhSans_600SemiBold,
        KumbhSans_700Bold,
    });
    
    const [data, setData] = useState({});
    const [recipeStep, setRecipeStep] = useState([]);
    const [calories, setCalories] = useState(0);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(route.params.itemId);
    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${'abe7b86f391c4e3fb12b5a6b7074be63'}&includeNutrition=true`)
            .then(res => res.json())
            .then((res) => {
                setData(res);
                setRecipeStep(res.analyzedInstructions[0].steps);
                setCalories(Math.floor(res.nutrition.nutrients[0].amount))
                setLoading(false);
                setIngredients(res.extendedIngredients)
            })
            .catch(() => {
                console.log('err')
            });

    }, [id]);

    return !loading ? <SafeAreaView style={s`w-full h-full bg-white flex flex-col box-border`}>
        <ImageBackground source={data.image} resizeMode="cover" style={s`w-full h-80 resize-cover`}>
            <View style={s`w-full flex items-center justify-between flex-row box-border px-4 py-6`}>
                <TouchableHighlight onPress={() => navigation.goBack()} underlayColor={'transparent'}>
                    <View style={s`box-border w-12 h-12 p-4 flex justify-center items-center rounded-full bg-primary shadow-2xl shadow-black`}>
                        <FontAwesome5 name="angle-left" style={s`bg-primary text-lg text-black`} />
                    </View>
                </TouchableHighlight>
            </View>
        </ImageBackground>
        <View style={s`bg-white box-border w-full bg-white relative`}>
            <View style={[s`p-4 absolute box-border w-full -top-10 items-center flex flex-col bg-white shadow-2xl shadow-black`, styles.detailCard]}>
                <Text style={[s`w-full text-xl`, styles.bold]}>
                    {data && data.title}
                </Text>

                {data ? <View style={[s`w-full flex flex-row justify-between overflow-hidden n px-1 py-8`, styles.card]}>
                    <RecipeDet desc='Mins' icon='clock' number={data.readyInMinutes} />
                    <RecipeDet desc='Servings' icon='user-alt' number={data.servings} />
                    <RecipeDet desc='Cal' icon='hotjar' number={calories} />
                    <RecipeDet desc='Easy' icon='layer-group' number={0} />
                </View> : null}
                <View style={s`w-full mb-4`}>
                    <Text style={[s`text-lg`, styles.SemiBold]}>Ingredients</Text>
                    <View style={s`w-full px-2 py-0 flex flex-col`}>
                        {ingredients && ingredients.map((e, i) => {
                            return (
                                <View key={`intgr-${i}`} style={s`flex mt-2 w-full flex-row items-center`}>
                                    <View style={[s`w-3 h-3 rounded-full bg-primary mr-2`]}></View>
                                    <Text style={[s`mr-1 capitalize`, styles.SemiBold]}>{e.name}</Text>
                                </View>
                            )
                            
                        })}
                    </View>
                </View>
                {recipeStep.length > 0 ? <View style={s`w-full h-full mb-4`}>
                    <Text style={[s`text-lg`, styles.SemiBold]}>Directions</Text>
                    <View style={s`w-full px-2 h-full py-0 flex flex-col`}>
                        {recipeStep.map((e, i) => {
                            return e !== '' ? <Steps i={i} recipeStep={recipeStep} number={e.number} step={e.step} key={`steps${i}`} /> : null
                        })}
                    </View>
                </View> : null}
                <SimilarRecipe setId={setId} id={id} />

            </View>

        </View>

    </SafeAreaView> : <View><ActivityIndicator size="large" color="#eab32d" style={s`my-10`} /></View>
}

export default Page2;