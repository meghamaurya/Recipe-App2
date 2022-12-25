import '../../wind.config';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight } from 'react-native';
import { s } from 'react-native-wind';
import { FaAngleLeft, FaRegBookmark, FaLayerGroup, FaUserFriends, FaHotjar, FaRegClock } from "react-icons/fa";
import { styles } from './Style';
import {
    useFonts,
    KumbhSans_100Thin,
    KumbhSans_200ExtraLight,
    KumbhSans_300Light,
    KumbhSans_400Regular,
    KumbhSans_500Medium,
    KumbhSans_600SemiBold,
    KumbhSans_700Bold,
    KumbhSans_800ExtraBold,
    KumbhSans_900Black,
  } from '@expo-google-fonts/kumbh-sans';

const Data = [
    {
        icon: FaRegClock,
        number: '35',
        desc: 'mins'
    },
    {
        icon: FaUserFriends,
        number: '03',
        desc: 'Servings'
    },
    {
        icon: FaHotjar,
        number: '103',
        desc: 'Cal'
    },
    {
        icon: FaLayerGroup,
        desc: 'Easy'
    }
]

const Ingredients = [
    {
        title: '2',
        desc: 'Eggs'
    },
    {
        title: '1 Cup',
        desc: 'All purpose flour'
    },
    {
        title: '1/2 Cup',
        desc: 'Whole milk'
    },
    {
        title: '2 Tablespoon',
        desc: 'Butter'
    }
]

function Page2() {
    let [fontsLoaded] = useFonts({
        KumbhSans_100Thin,
        KumbhSans_200ExtraLight,
        KumbhSans_300Light,
        KumbhSans_400Regular,
        KumbhSans_500Medium,
        KumbhSans_600SemiBold,
        KumbhSans_700Bold,
        KumbhSans_800ExtraBold,
        KumbhSans_900Black,
      });

      if(!fontsLoaded) {
        return null
      }
    return (
        <View style={s`w-full h-full bg-white flex flex-column box-border`}>
            <ImageBackground source='https://spoonacular.com/recipeImages/511728-312x231.jpg' resizeMode="cover" style={s`w-full h-80 resize-cover`}>
                <View style={s`w-full flex items-center justify-between flex-row box-border px-4 py-6`}>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => console.log('ikgh')}>
                        <View style={s`p-4 rounded-full bg-primary shadow-2xl shadow-black`}>
                            <FaAngleLeft style={s`text-xl bg-primary text-black`} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={'transparent'} onPress={() => console.log('ikgh')}>
                        <View style={[s`p-4 rounded-full bg-white`, styles.favBtn]}>
                            <FaRegBookmark style={s`text-xl`} />
                        </View>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
            <View style={s`bg-white box-border w-full bg-white relative`}>
                <View style={[s`p-4 absolute box-border w-full -top-10 items-center flex flex-column bg-white shadow-2xl shadow-black`, styles.detailCard]}>
                    <View style={s`w-10 h-0.5 rounded-full mt-2 mb-8 bg-secondary`}></View>
                    <Text style={[s`w-full text-xl`, styles.bold]}>
                        Crepes with Orange and Honey
                    </Text>
                    <Text style={[s`w-full text-sm text-gray`, styles.SemiBold]}>
                        Wester
                    </Text>

                    <View style={[s`w-full flex flex-row justify-between px-1 py-8`, styles.card]}>
                        {Data.map((e, i) => {
                            return (
                                <View key={`det-${i}`} style={[s`bg-primary p-2 box-border h-full rounded-full flex flex-column items-center`, styles.EachCard]}>
                                    <View style={s`p-3 rounded-full bg-white shadow-2xl shadow-black`}>
                                        <e.icon style={s`text-xl text-black`} />
                                    </View>
                                    <View style={e.number ? s`` : s`h-25`}></View>
                                    {e.number ? <Text style={[s`text-base`, styles.SemiBold]}>{e.number}</Text> : null}
                                    <View style={s``}></View>
                                    <Text style={[s`text-sm`, styles.medium]}>{e.desc}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={s`w-full mb-4`}>
                        <Text style={[s`text-lg`, styles.SemiBold]}>Ingredients</Text>
                        <View style={s`w-full px-2 py-0 flex flex-column`}>
                            {Ingredients.map((e, i) => {
                                return (
                                    <View  key={`intgr-${i}`} style={s`flex mt-2 w-full flex-row items-center`}>
                                        <View style={[s`w-3 h-3 rounded-full bg-primary mr-2`]}></View>
                                        <Text style={[s`mr-1`, styles.SemiBold]}>{e.title}</Text>
                                        <Text style={[s`text-gray`, styles.medium]}>{e.desc}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View style={s`w-full mb-4`}>
                        <Text style={[s`text-lg`, styles.SemiBold]}>Directions</Text>
                        <View style={s`w-full px-2 py-0 flex flex-column`}>
                            {Ingredients.map((e, i) => {
                                return (
                                    <View  key={`intgr-${i}`} style={s`flex mt-2 w-full flex-row items-center`}>
                                        <View style={[s`w-3 h-3 rounded-full bg-primary mr-2`]}></View>
                                        <Text style={[s`mr-1`, styles.SemiBold]}>{e.title}</Text>
                                        <Text style={[s`text-gray`, styles.medium]}>{e.desc}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Page2;