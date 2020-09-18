import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';
import mockData from '../../mockData.json'

export default class HomeScreen extends Component {
    state = {
        isLoading: true,
        isError: false,
        data: {},

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
                isError: false,
                data: mockData.homeData.data
            })
        }, 1000)
    }
    render() {
        const { data, isLoading, isError } = this.state
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        color='red' />
                </View>
            )
        }
        if (isError) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Lỗi</Text>
                </View>
            )
        }

        return (
            <SafeAreaView style={styles.container} >
                <View>
                    <ImageBackground
                        source={require('../../assets/images/img_bookshelf.png')}
                        style={{ width: width, height: 172 }}>
                        <Text style={styles.txt_header}>Tôi muốn mua sỉ</Text>

                        <View style={styles.v_row}>
                            <View style={styles.v_listsp}>
                                <Text style={styles.txt_listsp} >Danh mục sản phẩm</Text>
                            </View>
                            <View style={styles.v_location}>
                                <Text style={styles.txt_location}>Toàn quốc</Text>
                                <Image
                                    resizeMethod='contain'
                                    source={require('../../assets/images/ic_arrow_down.png')}
                                    style={{ width: 11.53, height: 6.65, marginRight: 6.2 }} />
                            </View>
                        </View >
                        <Text style={styles.txt}>
                            Để tìm kiếm khách hàng được tốt nhất bạn nên đăng ký đúng danh mục sản phẩm !
                        </Text>
                        <View style={{ alignItems: 'center', flex: 1 }}>
                            <View style={styles.v_button}>
                                <Text style={styles.txt_button}>Đăng tin</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <Text style={styles.txt_keysearch}>Từ khóa tìm kiếm</Text>
                    <FlatList
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        numColumns={this.state.data.listpost.length / 4}
                        style={styles.list_post}
                        data={this.state.data.listpost}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem
                                    item={item} index={index} />
                                // <Text>{item.namekey}</Text>
                            )
                        }}
                    />
                    <Text style={styles.txt_list}>Danh mục sản phẩm cẩn mua</Text>

                </View>
                {/* <FlatList
                    style={styles.list_post}
                    data={this.state.data.listpost}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} />
                            // <Text>{item.namekey}</Text>
                        )
                    }}
                /> */}
            </SafeAreaView>
        );
    }
}
class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',

            }}>
                <View style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    backgroundColor: 'white',
                    borderColor: '#8F929E',
                    borderWidth: 1,
                    borderRadius: 10,
                }}>
                    <Text
                        style={{ marginVertical: 10, marginHorizontal: 10 }}
                    >#{this.props.item.namekey}</Text>
                </View>
            </View>
        )
    }

}
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',

    },
    list_post: {
        backgroundColor: 'white'
    },
    txt_header: {
        color: 'white',
        fontSize: 20,
        marginTop: 15,
        marginLeft: 11,
        fontWeight: '500'
    },
    v_row: {
        marginHorizontal: 3,
        marginTop: 8,
        flexDirection: 'row'
    },
    v_listsp: {
        backgroundColor: '#DFDFDE',
        borderRadius: 17,
        flex: 1,
        marginRight: 4
    },
    txt_listsp: {
        color: '#979797',
        fontSize: 14,
        marginVertical: 9,
        marginLeft: 8,
    },
    v_location: {
        backgroundColor: '#DFDFDE',
        borderRadius: 17,
        width: 91,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt_location: {
        marginVertical: 10,
        marginLeft: 6,
        color: '#2A2A2A',
        fontSize: 13,
        flex: 1,

    },
    txt: {
        marginTop: 6,
        marginHorizontal: 15,
        fontSize: 12,
        color: 'white'
    },
    v_button: {
        marginTop: 6, width: 115,
        backgroundColor: '#69AAFF',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 13
    },
    txt_button: {
        marginVertical: 8,
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    txt_keysearch: {
        marginVertical: 8,
        marginLeft: 11,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500'
    },
    txt_list: {
        marginVertical: 11,
        marginLeft: 11,
        fontSize: 18,
        color: '#141414',
        fontWeight: '500'

    }
})
