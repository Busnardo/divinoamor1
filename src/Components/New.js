import react from "react";
import { view, text, StyleSheet, image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function New(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <image>
                source={props.cover}
                style={styles.cover}
        </image>

            <view style={styles.content}>
                <text style={styles.title}>{props.name}</text>

                <view style={styles.dot}>
                </view>    

                <text style={styles.badge}>novo</text>

            </view>    

    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
        height: 250,
        width: 200,
        elevation: 2.
        /* borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5, */
    },
    cover: {
        width: 170,
        height: 110,
        borderRadius: 10,

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,

    },
    title: {
        fontSize: 12,
        color: '#000'

    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: 'red',
        marginHorizontal: 4,

    },
    badge: {
        color: 'red',
        fontSize: 9

    },
    description: {
        fontSize: 9,
        color: '#000'
    }
    

});