import React, { useState } from 'react'
import { View, Text, Image, TextInput, FlatList, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Store from "./store"
const Header = () => {
    return (
        <View style={style.header}>
            <View style={style.header1}>
                <Image style={style.header1_image} source={{ uri: "https://lh3.googleusercontent.com/iJVlSfvuDXmlijPsWrPLiq7NvrFdEq0Z4b2ljH26UTUIYfURe9kIAQKgS6TKUjS64YmL" }}></Image>
                <View style={style.header1_text}>
                    <Text style={style.header1_text_text}>Giao đến <Ionicons name="chevron-down-sharp" size={20} color="black" /></Text>
                    <Text style={style.header1_text_text1}>Các sản phẩm sẽ được giao đến địa chỉ của bạn</Text>
                </View>
            </View>

            <View style={style.header2}>
                <View style={style.header2_input}>
                    <TextInput style={style.header2_input_input}></TextInput>
                    <Ionicons style={style.header2_input_icon} name="chevron-down-sharp" size={20} color="black" />
                </View>
                <TouchableOpacity style={style.header2_button}>
                <Ionicons name="search" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={style.header2_button}>
                <Ionicons name="heart-outline" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const DATA = [
    {
      id: '1',
      title: 'Thùng 24 Lon Cà Phê Sữa Đá',
      text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
      price: 336,
      image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
    },
    {
        id: '2',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '3',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '4',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '5',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '6',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '7',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '8',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '9',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '10',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '11',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '12',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '13',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
  ];





  const List1 = [
    {
      id: '1',
      title: 'Thùng 24 Lon Cà Phê Sữa Đá',
      text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
      price: 336,
      image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
    },
    {
        id: '2',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '3',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '4',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
  ];


  const list3 = [
    {
      id: '1',
      title: 'Thùng 24 Lon Cà Phê Sữa Đá',
      text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
      price: 336,
      image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
    },
    {
        id: '2',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '3',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
      {
        id: '4',
        title: 'Thùng 24 Lon Cà Phê Sữa Đá',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },

      {
        id: '5',
        title: 'Thùng 24 Lon Cà Phê Sữa Đásvdsfvdfbdfb',
        text: "Ưu đãi thùng 24 lon cà phê sữa đá còn 289,000đ....",
        price: 336,
        image: "https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_large.jpg"
      },
  ];

const renderItem=({item})=>{
    return(
        <View style={style.mainItem}>
        <Text>{item.id}</Text>
        <View style={style.mainItem_text}>
        <Text style={style.mainItem_text_tittle}>{item.title}</Text>
        <Text style={style.mainItem_text_text}>{item.text}</Text>
        <Text style={style.mainItem_text_price}>{item.price}.000đ</Text>
        </View>
        <Image style={style.mainItem_image} source={{uri: item.image}}></Image>
        </View>
    )
    }
export default function buy() {
    return (
        <SafeAreaView style={{height: "100%"}}>
            <Header />
        <View style={style.main}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={style.mainList}
         />
        </View>
        </SafeAreaView>
    )
}

const style =StyleSheet.create({
    header: {
        paddingTop: 7,
    },
    header1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    header1_image: {
        width: "20%",
        height: 50,
        resizeMode: "contain",
    },
    header1_text: {
        width: "80%",
    },
    header1_text_text: {
        fontSize: 15,
        fontWeight: "bold",
    },
    header1_text_text1: {
        fontSize: 15,
        opacity: 0.5,
    },
    header2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#80808020",
        padding: 15,
    },
    header2_input: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#80808045",
        borderColor: "#80808045",
        height: 50,
        paddingLeft: 6,
        paddingRight: 6,
    },
    header2_input_input: {
        width: "90%",
    },
    header2_button: {
        width:50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#80808045",
        borderRadius: 10,
        backgroundColor: "#80808045",
    },
    // làm phần main
    main: {
        backgroundColor: "#80808020",
        padding: 15,
        height: "100%",
        flex: 1,
    },
    mainItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
    },
    mainItem_text: {
        width: "70%",
    },
    mainItem_text_tittle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10
    },
    mainItem_text_text: {
        fontSize: 15,
        opacity: 0.5,
        marginBottom: 10,
    },
    mainItem_text_price: {
        fontSize: 15,
    },
    mainItem_image: {
        width: "30%",
        height: 100,
    }
});
