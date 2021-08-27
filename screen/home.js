import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/EvilIcons'
import Swiper from 'react-native-swiper'
import HeaderTop from "./header_1"


const DATA1 = [
    {
      id: "1",
      title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
      image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
      date: "23/08"
    },
    {
        id: "2",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "3",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "4",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "5",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "6",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "7",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "8",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "9",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
      {
        id: "10",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg",
        date: "23/08"
      },
  ];


  const DATA2 = [
    {
      id: "1",
      title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
      image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
      date: "23/08"
    },
    {
        id: "2",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "3",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "4",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "5",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "6",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "7",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "8",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "9",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
      {
        id: "10",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/article/bannerhome-freeship_dec45eaf64c84bd693884264423d2064_grande.jpg",
        date: "23/08"
      },
  ];



  const DATA3 = [
    {
      id: "1",
      title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
      image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
      date: "23/08"
    },
    {
        id: "2",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "3",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "4",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "5",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "6",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "7",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "8",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "9",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
      {
        id: "10",
        title: "Mừng Tuổi Mới, Nhà Mời 50%(23/08 - 29/08)",
        image: "https://file.hstatic.net/1000075078/file/28827277_2051622368445112_5970865629524999462_o_2x_grande.jpg",
        date: "23/08"
      },
  ];


  const renderItem=({item})=>{
      return(
          <View style={style.list_item}>
              <Image style={style.list_item_image} source={{uri: item.image}}/>
              <View style={style.list_item_text}>
                  <Text style={style.list_item_text_tittle}>{item.title}</Text>
                 <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "40%"}}><Icon name="calendar" size={20} color="black" /><Text style={style.list_item_text_date}>{item.date}</Text></View>
              </View>
          </View>
      )
  }


  const HeaderFooter=()=>{
      return(
          <View style={style.HeaderFooter}>
          <Image style={style.HeaderFooter_image} source={{uri: "https://cdn.pixabay.com/photo/2021/08/22/15/48/nature-6565499_960_720.jpg"}}/>
          <View style={style.HeaderFooter_text}>
              <View style={style.HeaderFooter_text_frame}>
              <Image style={{width: "100%", height: 300, borderRadius: 15,}} source={{uri: "https://cdn.pixabay.com/photo/2015/10/02/15/00/diary-968592_960_720.jpg"}}></Image>
              <View style={{position: "absolute", top: 15, left: 15}} >
              <Text style={{fontSize: 25, color: "white", textTransform: "uppercase", fontWeight: "500", marginBottom: 5, }}>Lương Ngọc Vinh</Text>
              <View style={{flexDirection: "row", width: "40%", justifyContent: "space-between", alignItems: "center"}} >
              <Text style={{fontSize: 15, color: "white", textTransform: "uppercase", fontWeight: "500", }}>0 Bean</Text>
              <Text style={{fontSize: 20, color: "white", textTransform: "uppercase", fontWeight: "500", }} >-</Text>
              <Text style={{fontSize: 15, color: "white", textTransform: "uppercase", fontWeight: "500", }} >Mới</Text>
              </View>
              </View>
              <Text style={{width: 120, height: 40, lineHeight: 40, textAlign: "center", color: "white", backgroundColor: "transparent", textTransform: "uppercase", fontWeight: "600", position: "absolute", top: 0, right: 5, borderColor: "white", borderWidth: 1}}><Icon1 name="chevron-down" size={25} color="white" /> Tích điểm</Text>
              </View>
          </View>
          </View>
      )
  }
export default function home() {
    const [dataList, setdataList]=useState(DATA1);
    const MainHeader=()=>{
        return(
            <View>
            <HeaderFooter/>
                <View style={[style.mainHeader]}>
            <View style={style.mainHeader1}>
            <View style={[style.mainHeader1_item, {borderRightWidth: 1}]}>
            <Image style={style.mainHeader1_item_image} source={{uri: "https://cdn.ntlogistics.vn/images/NTX/new_images/danh-gia-shipper-giao-hang-nhanh-qua-viec-dam-bao-an-toan-hang-hoa.jpg"}}/>
            <Text style={style.mainHeader1_item_text}>Giao hàng </Text>
            </View>
    
            <View style={style.mainHeader1_item}>
            <Image style={style.mainHeader1_item_image} source={{uri: "https://cdn.ntlogistics.vn/images/NTX/new_images/danh-gia-shipper-giao-hang-nhanh-qua-viec-dam-bao-an-toan-hang-hoa.jpg"}}/>
            <Text style={style.mainHeader1_item_text}>Mang đi</Text>
            </View>
            </View>
            <View style={style.mainHeader2}>
            <Swiper style={style.wrapper} showsButtons={true} autoplay={true} autoplayTimeout={3}>
            <View style={style.slide}>
              <Image style={style.slideImage} source={{uri: "https://file.hstatic.net/1000075078/file/hinode_-_img_9322_e733cde7255641d0be8a31afc879b379_1024x1024.jpg"}}/>
            </View>
            <View style={style.slide}>
            <Image style={style.slideImage} source={{uri: "https://file.hstatic.net/1000075078/file/tch-hai_ba_trung_398a9c92be4a4c46885d0a7bc2a9c456_1024x1024.jpg"}}/>
            </View>
            <View style={style.slide}>
            <Image style={style.slideImage} source={{uri: "https://file.hstatic.net/1000075078/file/1212-tch-p4_04feaa750de14848b25e19fea8d46135_1024x1024.jpg"}}/>
            </View>
            <View style={style.slide}>
            <Image style={style.slideImage} source={{uri: "https://file.hstatic.net/1000075078/file/3e0a8783_master.jpg"}}/>
            </View>
            <View style={style.slide}>
            <Image style={style.slideImage} source={{uri: "https://image.bnews.vn/MediaUpload/Org/2021/01/23/the-coffee-house2.jpg"}}/>
            </View>
          </Swiper>
            </View>
            <Text style={style.mainHeader3_tittle} >Khám phá thêm</Text>
            <View style={style.MainHeader4}>
            <View style={[style.MainHeader4_item, style.MainHeader4_item_s]} >
                <Text style={[style.MainHeader4_item_text, {color: "#ff5e00"}]}>Ưu đãi đặc biệt</Text>
            </View>
            <View style={style.MainHeader4_item} >
                <Text style={style.MainHeader4_item_text} onPress={()=>{
                    setdataList(DATA2);
                }}>Cập nhập từ nhà</Text>
            </View>
            <View style={style.MainHeader4_item} >
                <Text onPress={()=>{
                    setdataList(DATA3);
                }} style={style.MainHeader4_item_text}>#CoffeeLover</Text>
            </View>
            </View>
            </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{height: "100%"}}>
        <HeaderTop name={"Chào bạn mới"}/>
            <View style={style.container}>
        <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={MainHeader}
      />
        </View>
        </SafeAreaView>
    )
}

const style =StyleSheet.create({

    container: {
        paddingLeft: 10,
        paddingRight: 10,
        height: "100%",
        paddingBottom: 120,
    },
    // làm phần main header 
    mainHeader: {
        paddingTop: 15,
    },
    mainHeader1: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    mainHeader1_item: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    mainHeader1_item_image: {
        width: 70,
        height: 50,
        resizeMode: "cover",
    },
    mainHeader1_item_text:{
        marginTop: 10,
        fontSize: 15,
    },
    mainHeader2: {
      width: "100%",
      height: 250,
      marginTop: 20,
      borderRadius: 10,
    },
    wrapper: {
        borderRadius: 10,
    },
    slide: {
        borderRadius: 20,
    },
    slideImage: {
      width: "100%",
      height: 250,
      borderRadius: 20,
    },
    mainHeader3_tittle: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    MainHeader4: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 10,
    },
    MainHeader4_item: {
        width: "31%",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    MainHeader4_item_s: {
        borderRadius: 10,
        backgroundColor: "#8080804f",
    },
    MainHeader4_item_text: {
        fontSize: 15,
        fontWeight: "bold",
    },
    list_item: {
        width: "45%",
        margin: 7,
    },
    list_item_image: {
        width: "100%",
        height: 100,
    },
    list_item_text: {
        marginTop: 7,
    },
    list_item_text_tittle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 7,
    },
    list_item_text_date: {
        fontSize: 13,
        color: "gray",
        marginLeft: 10,
    },
    // làm phần headerFooter
    HeaderFooter: {
        width: "100%",
        height: 400,
        position: "relative",
    },
    HeaderFooter_image: {
        width: "100%",
        height: 400,
    },
    HeaderFooter_text: {
        width: "90%",
        height: 300,
        position: "absolute",
        top: 50,
        left: 20,
    },
    HeaderFooter_text_frame: {
        position: "relative",
    }
})