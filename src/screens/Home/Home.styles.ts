import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../theme/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputHeaderContainer: {
    marginHorizontal: SPACING.space_32,
    marginTop: SPACING.space_24,
  },
  containerGap32: {
    gap: SPACING.space_32,
  },
});
