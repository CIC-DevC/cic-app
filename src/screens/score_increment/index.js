import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { images } from '~/assets';
import colors from '~/styles/colors';
import commonStyles from '~/styles';
import { useSelector } from 'react-redux';

export default function ScoreIncrementScreen() {
  const user = useSelector((state) => state.auth.user);
  const score = user.score ? Math.round((1 - user.score) * 1000) : 0;

  return (
    <ScrollView style={styles.container} alwaysBounceVertical={false}>
      <ImageBackground style={styles.headerImg} source={images.homeHeader} />
      <View style={styles.body}>
        <Text style={styles.helloText}>Xin chào!</Text>
        <View style={[commonStyles.containerRadius, styles.messageWrapper]}>
          <Text
            style={[
              commonStyles.largeText,
              { color: colors.white, marginBottom: 7 },
            ]}
          >
            Improve your score
          </Text>
          <Text style={[commonStyles.mediumText, { color: colors.white }]}>
            Improve your score
          </Text>
          <View style={[commonStyles.containerRadius, styles.scoreWrapper]}>
            <Text
              style={[
                commonStyles.largeText,
                {
                  color: colors.primary,
                  textAlign: 'center',
                  flex: 1,
                  lineHeight: 29,
                },
              ]}
              numberOfLines={2}
              ellipsizeMode='tail'
              allowFontScaling={true}
            >
              {'Your Current Score is  '}
              <Text
                style={{
                  color: colors.green,
                  fontSize: 25,
                }}
              >
                {score}
              </Text>
              {' /1000'}
            </Text>
          </View>
        </View>
        <Text style={styles.titleLabel}>Here is some tips for you</Text>
        <View style={[commonStyles.containerRadius, styles.tipWrapper]}></View>
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
  helloText: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 14,
    marginTop: 55,
    marginLeft: 20,
    marginBottom: 20,
  },
  messageWrapper: {
    backgroundColor: colors.primary,
    paddingTop: 16,
    paddingHorizontal: 18,
    paddingBottom: 35,
    minHeight: 120,
  },
  titleLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: colors.primary,
    textAlign: 'center',
    marginTop: 57,
    marginBottom: 10,
  },
  scoreWrapper: {
    paddingHorizontal: 10,
    paddingTop: 5,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: -42,
    height: 70,
    left: 27,
    right: 27,
    alignItems: 'center',
    flexDirection: 'row',
  },
  tipWrapper: {
    minHeight: 300,
  },
});
