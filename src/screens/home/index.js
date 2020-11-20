import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { images } from '~/assets';
import colors from '~/styles/colors';
import CardItem from './cardItem';
import commonStyles from '~/styles';
import { LocalizationContext } from '~/translations';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const { t } = useContext(LocalizationContext);

  const user = useSelector((state) => state.auth.user);

  const score = user.score ? Math.round((1 - user.score) * 1000) : 0;

  function getScoreStatus() {
    if (score <= 200) {
      return t('scoreStatus.poor');
    } else if (score <= 400) {
      return t('scoreStatus.belowAverage');
    } else if (score <= 600) {
      return t('scoreStatus.average');
    } else if (score <= 800) {
      return t('scoreStatus.good');
    } else {
      return t('scoreStatus.veryGood');
    }
  }

  return (
    <ScrollView style={styles.container} alwaysBounceVertical={false}>
      <ImageBackground style={styles.headerImg} source={images.homeHeader} />
      <View style={styles.body}>
        <Text style={styles.helloText}>{t('common.hello')}</Text>
        <View style={[commonStyles.containerRadius, styles.scoreWrapper]}>
          <Text
            style={[
              styles.labelWhite,
              commonStyles.largeText,
              { marginBottom: 7 },
            ]}
          >
            {t('home.label.yourScore')}
          </Text>
          <ImageBackground
            style={styles.scoreImgWrapper}
            source={images.scoreIncre}
          >
            <Text
              style={[
                styles.labelWhite,
                {
                  fontSize: 40,
                  lineHeight: 47,
                },
              ]}
            >
              {score}
            </Text>
            <Text
              style={[
                styles.labelWhite,
                {
                  fontSize: 20,
                  lineHeight: 23,
                },
              ]}
            >
              {getScoreStatus()}
            </Text>
          </ImageBackground>
        </View>
        <Text style={styles.titleLabel}>{t('home.label.summaryReport')}</Text>
        <View style={{ marginBottom: 16 }}>
          <CardItem />
        </View>
        <View style={{ marginBottom: 16 }}>
          <CardItem />
        </View>
        <View style={{ marginBottom: 16 }}>
          <CardItem />
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
  helloText: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 14,
    marginTop: 55,
    marginLeft: 20,
    marginBottom: 20,
  },
  scoreWrapper: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingTop: 7,
  },
  labelWhite: {
    fontWeight: 'bold',
    color: colors.white,
  },
  scoreImgWrapper: {
    width: 196,
    height: 122,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  titleLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: colors.primary,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
});
