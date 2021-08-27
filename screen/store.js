import React from 'react'
import { View, Text, SafeAreaView, TextInput, Image, FlatList, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Header from "./header_1"


const HeaderStore=()=>{
    return (
        <View style={{backgroundColor: "white"}}>
        <Header name={"Cửa hàng"}/>
        <View style={style.container} >
            <View style={style.header}>
            <View style={style.header_item1}>
            <Icon name="search" size={30} color="black" />
            <TextInput style={style.header_item1_input} placeholder={"Nhập tên đường, quận...."}></TextInput>
            </View>

            <Text style={style.header_item2}>Đóng</Text>
            </View>
        </View>
    </View>
    )
}


const DATA = [
    {
      id: "1",
      title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
      Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
      distance: 15,
    },
    {
        id: "2",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "3",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "4",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "5",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "6",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "7",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "8",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "9",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "10",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "11",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "12",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "13",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "14",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "15",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "16",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
    {
        id: "17",
        title: "86 Cao Thắng, Quận 3, Hồ Chí Minh, Viêt Nam",
        Image: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg",
        distance: 15,
    },
  ];
export default function store() {

    const List=({item})=>{
        return(
            <View style={style.listItem}>
            <Text>{item.id}</Text>
            <Image  style={style.listItem_image} source={{uri: item.Image }}></Image>
            <View style={style.listItem_text}>
                <Text style={style.listItem_text_name_store}>the coffee house</Text>
                <Text style={style.listItem_text_tittle}>{item.title}</Text>
                <Text style={style.listItem_text_distance}>cách đây: {item.distance} km</Text>
            </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{height: '100%', borderWidth: 3, borderColor: 'blue'}}>
          <HeaderStore/>
          <View style={[style.main,  {flex: 1,}]}>
            <View style={[style.container, {flex: 1,}]}>
                <Text style={style.mainTittle}>Các cửa hàng khác</Text>
                
                    <FlatList
                        data={DATA}
                        renderItem={List}
                        keyExtractor={(item) => item.id}
                    />
            </View>
          </View>
        </SafeAreaView>

    )
}

const style=StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth:3, borderColor: 'green',
    },

    // làm phần header
    header: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop: 10,
        padding: 7,
    },
    header_item1: {
        width: "85%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        borderColor: "#80808080",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#80808080",
    },
    header_item1_input: {
        width: "85%",
        fontSize: 17,
    },
    header_item2: {
        fontSize: 17,
        color:"red",
        width: "15%",
        textAlign: "center",
    },
    // làm phần main
    main: {
        backgroundColor: "#80808020",
    },
    mainTittle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 15,
        marginTop: 15,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 7,
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 5,
    },
    listItem_image: {
        width: "40%",
        height: 100,
        borderRadius: 10,
    },
    listItem_text: {
        width: "55%",
    },
    listItem_text_name_store: {
        fontSize: 14,
        color: "gray",
        marginTop: 7,
        marginBottom: 5,
        textTransform: "uppercase",
    },
    listItem_text_tittle: {
        fontSize: 17,
        marginBottom: 7,
    },
    listItem_text_distance: {
        fontSize: 16,
        color: "gray",
    }
});