import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Header } from "react-native-elements";
import Notifications from "@component/Notifications";
import R from "@R";
export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          containerStyle={{
            backgroundColor: "#69AAFF",
            justifyContent: "space-around"
          }}
          placement="left"
          leftComponent={{
            text: "Thông báo",
            style: { color: "#fff", fontSize: 20 }
          }}
        />
        <Notifications
          img={R.images.avt1}
          text="Yêu cầu thêm danh mục của ban đã được phê duyệt"
          time="9:20 AM"
          unseen
        />
        <Notifications
          img={R.images.avt2}
          text="Khách hàng Trần Minh Anh cần mua Nhụy hoa nghệ tây tại Hà Nội"
          time="25/06/2020"
        />
        <Notifications
          img={R.images.avt2}
          text="Yêu cầu thêm danh mục của bạn bị từ chối"
          time="25/06/2020"
        />
        <Notifications
          img={R.images.avt4}
          text="Khách hàng Tạ Thị Bưởi tìm kiếm danh mục nước hoa thảo dược"
          time="25/06/2020"
        />
      </View>
    );
  }
}
