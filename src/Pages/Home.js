import react from "react";
import { View, text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import New from "../components/New";

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#fff', }}

        >
            <view style={style.header}>
                <view style={style.InputArea}>
                    <Feather name='search' size={24} color='black' />
                    <TextInput
                        placeholder="o que esta procurando?"
                        style={style.input}
                    />
                </view>
            </view>

            <view style={styles.contentnew}>
                <text style={styles.title}> novidades</text>
            </view>
            <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
                <New
                    cover={require('../assets/banner.webp')}
                    name="divino amor"
                    description="avada quedabra"
                    onpress={() => navigation.navigate('Detail') }
                />

                <New
                    cover={require('../assets/banner.webp')}
                    name="divino amor"
                    description="avada quedabra"
                    onpress={() => { }}
                />

                <New
                    cover={require('../assets/banner.webp')}
                    name="divino amor"
                    description="avada quedabra"
                    onpress={() => { }}
                />

            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },

    InputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,

    },
    input: {
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'

    },
    contentnew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontSize: 18,
    }

});