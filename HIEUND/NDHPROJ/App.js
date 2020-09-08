/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Image
          source={require('./assets/icon_search.png')}
          style={styles.searchImage}
        />
        <Text style={styles.searchText}>Search</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dating</Text>
        <View style={styles.iconSetting}>
          <Image
            style={styles.imageSetting}
            source={require('./assets/icon_setting.png')}
          />
        </View>
      </View>
      <View style={styles.container_action_block}>
        {_buttons(
          require('./assets/icon_user.png'),
          'Profile',
          _navToProfile,
          true,
        )}
        {_buttons(
          require('./assets/icon_heart.png'),
          'Liked you',
          _navToLikedYou,
        )}
        {_buttons(
          require('./assets/icon_message.png'),
          'Matches',
          _navToMatches,
        )}
      </View>
      <View style={styles.profileContainer}>
        <View>
          <Image
            style={styles.mainImage}
            source={require('./assets/profile.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.reaction}>
          <Image
            source={require('./assets/icon_close.png')}
            style={{marginRight: 10}}
          />
          <Image source={require('./assets/icon_heart-line.png')} />
        </View>
        <View style={{margin: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Hân,22</Text>
          <Text style={{fontSize: 15}}>From Hanoi,Vietnam</Text>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.suggestedStoriesText}>Suggested Stories</Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{margin: 5}}>
            {_stories(require('./assets/icon_plus.png'), 'Add Story', true)}
            {_stories(require('./assets/elle.jpg'), 'Elle')}
            {_stories(require('./assets/scarlett.jpg'), 'Scarlett')}
            {_stories(require('./assets/olsen.jpg'), 'Olsen')}
            {_stories(require('./assets/lisa.jpg'), 'Lisa')}
          </ScrollView>
        </View>
      </View>
      <View style={styles.taskBarContainer}>
        {_taskBarButtons(require('./assets/icon_home.png'))}
        {_taskBarButtons(require('./assets/icon_tv.png'))}
        {_taskBarButtons(require('./assets/icon_users.png'))}
        {_taskBarButtons(require('./assets/icon_heart_taskbar.png'))}
        {_taskBarButtons(require('./assets/icon_noti.png'))}
        {_taskBarButtons(require('./assets/icon_bar.png'))}
      </View>
    </SafeAreaView>
  );
};
_navToProfile = () => {
  alert('No profile');
};
_navToLikedYou = () => {
  alert('Nobody likes you');
};
_navToMatches = () => {
  alert('Nobody matches you');
};
_stories = (img, name, isAddStory) => {
  return (
    <View style={styles.storiesContainer}>
      {/* <View style={styles.stories}>
        <Image source={img} style={styles.imageStories} />
      </View> */}
      {isAddStory ? (
        <View>
          <Image source={img} style={styles.addStory} />
        </View>
      ) : (
        <View style={styles.stories}>
          <Image source={img} style={styles.imageStories} />
        </View>
      )}
      <Text style={styles.nameStories}>{name}</Text>
    </View>
  );
};
_buttons = (img, title, action, isWarning) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}>
      <View style={styles.action_block}>
        <Image source={img} style={styles.imagePro} />
        <Text style={styles.textBlock}>{title}</Text>
        {isWarning ? (
          <View style={styles.isWarning}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>!</Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
_taskBarButtons = (img) => {
  return (
    <View style={styles.buttonsTaskBar}>
      <Image source={img} style={styles.iconButtonsTaskBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  search: {flexDirection: 'row'},
  searchImage: {height: 13, width: 13},
  searchText: {fontSize: 13, fontWeight: 'bold'},
  header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 3,
  },
  headerText: {flex: 1, fontSize: 28, fontWeight: 'bold'},
  iconSetting: {
    width: 36,
    height: 36,
    backgroundColor: '#E4E5EB',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSetting: {width: 24, height: 24},
  action_block: {
    height: 40,
    width: 110,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4e5ea',
    borderRadius: 40,
    padding: 3,
  },
  imagePro: {width: 20, height: 20, marginHorizontal: 4},
  textBlock: {fontWeight: 'bold', padding: 5, fontSize: 16},
  container_action_block: {flexDirection: 'row', marginTop: 20},
  isWarning: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    position: 'absolute',
    right: -5,
    top: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    backgroundColor: '#FAFAFA',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    margin: 20,
    width: 380,
    height: 480,
    borderRadius: 15,
  },
  mainImage: {width: 380, height: 360, marginTop: 30},
  reaction: {
    flexDirection: 'row',
    position: 'absolute',
    top: 360,
    left: 230,
  },
  suggestedStoriesText: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 23,
  },
  stories: {
    width: 68,
    height: 68,
    borderWidth: 3,
    borderColor: '#976AFF',
    borderRadius: 34,
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStories: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  addStory: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 6,
  },
  storiesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
  },
  taskBarContainer: {flex: 1, flexDirection: 'row'},
  buttonsTaskBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  iconButtonsTaskBar: {
    width: 30,
    height: 30,
  },
});

export default App;
