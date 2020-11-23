import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  containerRadius: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    borderRadius: 5,
    elevation: 4,
    backgroundColor: '#fff',
  },
  normalText: {
    fontSize: 10,
    lineHeight: 12,
  },
  mediumText: {
    fontSize: 12,
    lineHeight: 14,
  },
  largeText: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  primaryButton: {
    paddingHorizontal: 40,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: colors.primary,
    height: 37,
    paddingVertical: 0,
  },
});
export default styles;
