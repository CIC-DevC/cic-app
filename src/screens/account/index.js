import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {images} from '~/assets';
import colors from '~/styles/colors';
import {useSelector} from 'react-redux';
import {Avatar, Divider} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {logout} from '~/stores/actions/auth';
import {LocalizationContext} from '~/translations';

export default function AccountScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const {t} = useContext(LocalizationContext);

  function MenuItem({icon, label, onPress}) {
    const IconComponent = icon;
    return (
      <TouchableOpacity
        style={styles.menuItemWrapper}
        onPress={() => {
          onPress();
        }}>
        <IconComponent
          size={30}
          color={colors.primary}
          iconStyle={{marginRight: 15}}
        />
        <Text style={styles.menuItemLabel}>{label}</Text>
      </TouchableOpacity>
    );
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <ScrollView style={styles.container} alwaysBounceVertical={false}>
      <ImageBackground style={styles.headerImg} source={images.homeHeader} />
      <View style={styles.body}>
        <Avatar
          size={200}
          rounded
          title={user.name?.substring(0, 1).toUpperCase()}
          titleStyle={{color: '#8B8383', fontSize: 60}}
          containerStyle={styles.avatar}
          placeholderStyle={{backgroundColor: colors.white}}
          source={{
            uri: user.avatar,
          }}
        />
        <Text style={styles.usernameLabel}>{user.name}</Text>
        <Divider
          style={[
            styles.divider,
            {
              width: 200,
              marginTop: 16,
              alignSelf: 'center',
            },
          ]}
        />

        <View style={styles.menuWrapper}>
          <MenuItem
            icon={({size, color, iconStyle}) => (
              <MaterialIcons
                name="phone"
                size={size}
                color={color}
                style={iconStyle}
              />
            )}
            label={t('account.label.contact')}
            onPress={() => {}}
          />
          <Divider style={styles.divider} />
          <MenuItem
            icon={({size, color, iconStyle}) => (
              <Feather
                name="book-open"
                size={size}
                color={color}
                style={iconStyle}
              />
            )}
            label={t('account.label.term')}
            onPress={() => {}}
          />
          <Divider style={styles.divider} />
          <MenuItem
            icon={({size, color, iconStyle}) => (
              <MaterialIcons
                name="emoji-people"
                size={size}
                color={color}
                style={iconStyle}
              />
            )}
            label={t('account.label.feedback')}
            onPress={() => {}}
          />
          <Divider style={styles.divider} />
          <MenuItem
            icon={({size, color, iconStyle}) => (
              <MaterialIcons
                name="logout"
                size={size}
                color={color}
                style={iconStyle}
              />
            )}
            label={t('account.label.logout')}
            onPress={() => {
              handleLogout();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerImg: {
    position: 'absolute',
    width: '100%',
    aspectRatio: 436 / 169,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'stretch',
  },
  avatar: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 5,
    alignSelf: 'center',
    marginTop: 30,
  },
  usernameLabel: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.primary,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: 20,
  },
  divider: {
    backgroundColor: '#BDBDBD',
    height: 1,
  },
  menuWrapper: {
    marginTop: 20,
  },
  menuItemWrapper: {
    paddingVertical: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemLabel: {
    color: '#000',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
});
