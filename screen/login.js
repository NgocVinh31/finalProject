import React from 'react'
import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
export default function login({ navigation }) {
    return (
            <SafeAreaView>
           <Image style={style.header_image} source={{uri:"https://toplist.vn/images/800px/the-coffee-house-325686.jpg"}}/>
           <View style={style.main}>

{/* 
           làm phần main1 */}
           <View style={style.main1}>
               <Text style={style.main1_tittle}>Chào mừng bạn đến với</Text>
               <Image style={style.main1_image} source={{uri: "https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2020/09/9.-the-coffee-house.jpg"}}></Image>
           </View>

{/* làm phần main2 */}
           <View style={style.main2}>
               <View style={style.container}>
               <View style={[style.main2_item_1, style.main2_item_2]}>
               <View style={style.main2_item_2_frame} >
               <Image style={style.main2_item_2_frame_image} source={{uri: "https://foreverbedding.net/static/version1623050375/frontend/Forever/default/vi_VN/images/flags/flag_vi.png"}}></Image>
               <Text style={style.text1} > +84</Text>
               </View>
               <TextInput style={style.main2_item_1_input} keyboardType="phone-pad" placeholder={"Nhập số điện thoại"}></TextInput>
               </View>
               <TouchableOpacity onPress={() => navigation.navigate('Buy')} style={[style.main2_item_1, style.main2_item_1_button]}><Text style={style.text2} >Đăng nhập</Text></TouchableOpacity>
               </View>
           </View>

           {/* làm phần main3 */}
           <View style={style.container}>
           <View style={style.main3}>
               <Text style={style.main3_item1}></Text>
               <Text style={style.main3_item2}>Hoặc</Text>
               <Text style={style.main3_item1}></Text>
           </View>
           </View>



           {/* làm phần main4 */}
           <View style={style.main4}>
               <View style={style.container}>
                   <TouchableOpacity style={[style.main4_item, style.main4_item_face]}><Icon style={style.main4_icon} name="facebook" size={25} color="blue" /><Text style={style.text2}>Tiếp tục bằng Facebook</Text></TouchableOpacity>
                   <TouchableOpacity style={[style.main4_item, style.main4_item_google]}><Icon style={style.main4_icon} name="google" size={25} color="red" /><Text style={style.text1}>Tiếp tục bằng Goole</Text></TouchableOpacity>
               </View>
           </View>
           </View>

           {/* làm phần dấu x */}

           <TouchableOpacity style={style.button_close}><Icon name="times" size={30} color="white" /></TouchableOpacity>
        </SafeAreaView>
    )
}


const style=StyleSheet.create({
    text1:{
        fontSize:17,
    },
    text2: {
        fontSize: 17,
        color:"white"
    },
    container: {
        paddingLeft:15,
        paddingRight: 15, 
    },
    header_image: {
        width: "100%",
        height: 400,
        resizeMode: "cover",
        position:"absolute",
        zIndex:0,
        top: -60
    },
    main: {
        marginTop: 200,
        backgroundColor: "white",
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex:2,
    },

    // làm phần main1
    main1: {
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 50,
    },
    main1_tittle: {
        fontSize: 17,
    },
    main1_image: {
        width: "70%",
        height: 50,
        resizeMode: "cover",
    },

    // làm phần main2
    main2: {
        marginTop: 20,
        marginBottom: 20,
    },
    main2_item_1: {
        width: "100%",
        height: 50,
        borderWidth:1,
        marginBottom: 20,
        borderColor: "#8080806b",
        borderRadius: 10,
    },

    // làm phần chỗ ô đầu tiên của main2
    main2_item_2: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    // làm phần chỗ +84
    main2_item_2_frame: {
        width: "30%",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth:1,
        borderColor: "#8080806b",
    },
    main2_item_2_frame_image: {
        width:"30%",
        height: 30,
        resizeMode:"contain",
    },
    main2_item_2_frame_text: {
        fontSize:17,
    },
    // hết làm phần chỗ +84
    main2_item_1_input: {
        width:"65%",
        fontSize: 17,
    },
    // làm phần nut đăng nhập ở main2
    main2_item_1_button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#808080cf",
    },
    // làm phần main3
    main3: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    main3_item1: {
        width: "42%",
        height: 1,
        borderWidth: 0.8,
        opacity: 0.4,
    },
    main3_item2: {
        width: "15%",
        fontSize: 17,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign:"center",
        color: "gray",
    },

    // làm phần main4

    main4_item: {
        width: "100%",
        height: 60,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 15,
        flexDirection: "row",
    },
    main4_item_face: {
        backgroundColor: "blue",
        borderColor: "blue",
    },
    main4_icon: {
        borderRadius: 50,
        marginRight: 10,
        borderWidth:1,
        width: 35,
        height: 35,
        textAlign: "center",
        lineHeight: 35,
        backgroundColor: "white",
        borderColor: "white",
    },
    // làm phần dấu x để tắt
    button_close:{
        position: "absolute",
        zIndex: 2,
        top: 10,
        right: 10,
        backgroundColor: "gray",
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    }
});

