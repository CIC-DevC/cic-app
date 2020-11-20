import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { icons } from '~/assets';
import colors from '~/styles/colors';
import commonStyles from '~/styles';

export default function CardItem() {
  return (
    <View style={[commonStyles.containerRadius, styles.container]}>
      <View style={styles.body}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={[commonStyles.largeText, styles.title]}>PAYMENTS</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={icons.like} width={23} height={23} />
            <Text
              style={[
                commonStyles.largeText,
                { marginLeft: 7, color: colors.green },
              ]}
            >
              Perfect
            </Text>
          </View>
        </View>
        <Text style={[commonStyles.normalText, { marginBottom: 9 }]}>
          Status of your payments you’ve made
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={[
              commonStyles.largeText,
              { color: colors.green, marginRight: 7 },
            ]}
          >
            5/7
          </Text>
          <Text style={commonStyles.normalText}>Payments are on time</Text>
        </View>
      </View>
      <View style={[commonStyles.containerRadius, styles.bellWrapper]}>
        <Image source={icons.bell} width={18} height={22} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 15,
    paddingRight: 6,
  },
  bellWrapper: {
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.17)',
  },
  title: {
    flex: 1,
    color: colors.primary,
  },
});
