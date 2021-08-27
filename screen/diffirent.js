import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Header from "./header_1"
export default function diffirent() {
    return (
        <SafeAreaView>
            <Header name={"Khác"}/>
            <ScrollView>
            <View style={[Style.container, Style.main]}>
            
            <View style={Style.main_item}>
            <Text style={[Style.textTittle, Style.main_tittle]}>Tiện tích</Text>
                <TouchableOpacity style={Style.main_item_1}>
                   <Icon style={Style.main_item_icon} name="document-text-outline" size={30} color="orange" />
                    <Text style={Style.text}>Lịch sử đơn hàng</Text>
                </TouchableOpacity>
                <View style={Style.row}>
                <TouchableOpacity style={[Style.main_item_1, Style.main_item_2]}>
                   <Icon style={[Style.main_item_icon, Style.main_item_icon_border_music]} name="musical-note" size={30} color="green" />
                    <Text style={Style.text}>Nhạc đang phát</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[Style.main_item_1, Style.main_item_2]}>
                   <Icon style={Style.main_item_icon} name="document-text-outline" size={30} color="purple" />
                    <Text style={Style.text}>Điều khoản</Text>
                </TouchableOpacity>
                </View>
            </View>



            <View style={Style.main_item}>
            <Text style={[Style.textTittle, Style.main_tittle]}>Hỗ trợ</Text>

            <View style={Style.main_item_3}>
            <TouchableOpacity style={[Style.row, Style.main_item_3_border, Style.main_item_3_item]}>
            <Text style={[Style.text, Style.main_tittle]}> <Icon name="star-outline" size={20} color="black" /> Đánh giá đơn hàng</Text>
            <Icon name="chevron-forward" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={[Style.row,Style.main_item_3_item]}>
            <Text style={[Style.text, Style.main_tittle]}> <Icon1 name="message-square" size={20} color="black" /> Liên hệ góp ý</Text>
            <Icon name="chevron-forward" size={30} color="black" />
            </TouchableOpacity>
            </View>
            </View>




            <View style={Style.main_item}>
            <Text style={[Style.textTittle, Style.main_tittle]}>Tiện tích</Text>

            <View style={Style.main_item_3}>
            <TouchableOpacity style={[Style.row, Style.main_item_3_border, Style.main_item_3_item]}>
            <Text style={[Style.text, Style.main_tittle]}> <Icon1 name="user" size={20} color="black" /> Thông tin cá nhân</Text>
            <Icon name="chevron-forward" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={[Style.row,Style.main_item_3_item,Style.main_item_3_border]}>
            <Text style={[Style.text, Style.main_tittle]}> <Icon name="map-outline" size={20} color="black" /> Địa chỉ đã lưu</Text>
            <Icon name="chevron-forward" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={[Style.row,Style.main_item_3_item, Style.main_item_3_border]}>
            <Text style={[Style.text, Style.main_tittle]}> <Icon name="settings-outline" size={20} color="black" /> Cài đặt</Text>
            <Icon name="chevron-forward" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={[Style.row,Style.main_item_3_item]}>
            <Text style={[Style.text, Style.main_tittle]}> <Icon name="log-in-outline" size={20} color="black" /> Đăng nhập</Text>
            <Icon name="chevron-forward" size={30} color="black" />
            </TouchableOpacity>
            </View>
            </View>

            
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Style =StyleSheet.create({
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
     // làm phần main
     main: {
        backgroundColor: "#80808020",
        paddingBottom: 100,
    }, 
    main_tittle: {
        margin: 7,
    },
    main_item: {
        marginBottom: 20,
    },
    main_item_1: {
        margin: 7,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
    },
    main_item_icon: {
        marginBottom: 20,
    },
    main_item_2: {
        width: "45%",
    },
    main_item_3: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
    },
    main_item_3_border:{
        borderBottomWidth:1,
        borderColor: "#80808050"
    }, 
    main_item_3_item: {
        padding: 10,
    },
    main_item_icon_border_music: {
        borderWidth:3,
        width: 35,
        height: 35,
        textAlign: "center",
        lineHeight: 35,
        borderColor: "green",
    }
});
