import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import Loading from '../component/Loading';

export default HomeScreen = () => {


    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false)
    const [data, setData] = useState({})

    // userEffect tương đương componentDidMount 
    useEffect(() => {
        getData();
    }, [])

    getData = async () => {
        try {
            const response = await axios.get('http://3.0.209.176/api/GetHome');
            const jsonResponse = response.data
            setData(jsonResponse.data)
            setLoading(false)
            setError(false)
        } catch (error) {
            alert(JSON.stringify(error))
            setLoading(false)
            setError(true)
            setData({})
        }
    }


    if (isLoading) {
        return (
            <Loading />
        );
    } else if (isError) {
        return (
            <View style={styles.title}>
                <Text>Đã có lỗi xảy ra</Text>
            </View>
        );

    } else {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text_title}>Danh mục sản phảm cần mua </Text>
                    <Text style={styles.text_title_2}>Tất cả </Text>
                </View>
                <FlatList style={styles.list_post}
                    //data={data.listpost}
                    data={data.listpost}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.body}>
                                <CustomScreen
                                    Namekey={item.namekey}
                                    Username={item.username}
                                    img={require('../assets/ic_location.png')}
                                    Province={item.province}
                                    Phone={item.phone}
                                    ImgTime={require('../assets/ic_time.png')}
                                    Modified_date={item.modified_date}
                                />
                            </View>
                        );
                    }}
                />

            </SafeAreaView>
        )
    }
    // return (
    //     <View style={styles.container}>
    //         <Text >
    //             HelloHook
    //     </Text>
    //     </View>
    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    list_post: {
        flex: 1,

    },
    title: {
        height: 40,
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_title: {
        flex: 1,
        fontSize: 20,
        marginHorizontal: 8
    },
    text_title_2: {
        fontSize: 18,
        color: '#2ECCFA',
    },


    body: {
        marginTop: 10,
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'column'

    },
    body_2: {
        height: 30,
        backgroundColor: '#64FE2E'
    },

    text_body: {
        fontSize: 18
    },
    body_3: {
        height: 70,
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boder_img: {
        width: 60,
        height: 60,
        backgroundColor: '#81DAF5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    information: {
        height: 60,
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5
    },
    top: {
        flexDirection: 'row',

    },
    Top_information: {
        backgroundColor: '#D8D8D8',
        height: 30,
        flex: 1


    },
    left: {
        flexDirection: 'row',
    },
    Bottom_information: {
        height: 30,
        backgroundColor: 'yellow',
        flex: 1
    },
    // left_information: {
    //     height: 60,
    //     width: 180,
    //     backgroundColor: 'blue',
    //     flexDirection: 'column'
    // },
    left_top: {
        height: 30,
        width: 100,
        backgroundColor: '#DF01D7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    left_bottom: {
        height: 30,
        width: 180,
        backgroundColor: '#81F7F3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img_location: {
        height: 20,
        width: 20
    },
    img_time: {
        height: 16,
        width: 16,
        marginRight: 5
    }
})


