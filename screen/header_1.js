import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function header_diffirent(props) {
    return (

        <SafeAreaView style={Style.header}>
            <View style={[Style.container]}>
                <View style={Style.row}>
                    <Text style={Style.textTittle}>{props.name}</Text>
                    <View style={[Style.row, Style.header_frame]}>
                    <TouchableOpacity style={Style.header_frame_item}><Icon name="ticket-confirmation-outline" color="black" size={30} /><Text>{props.count}</Text></TouchableOpacity>
                    <TouchableOpacity style={Style.header_frame_item}><Icon name="bell-outline" color="black" size={30} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


const Style = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    textTittle: {
        fontSize: 25,
        fontWeight: "700",
    },
    text: {
        fontSize: 17,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    // làm phần header
    header: {
        padding: 5,
    },
    header_frame_item: {
        width: 60,
        height: 45,
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});



