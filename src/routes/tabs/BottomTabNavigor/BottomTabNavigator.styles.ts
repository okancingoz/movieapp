import {StyleSheet} from 'react-native';
import {BORDERRADIUS, COLORS, SPACING} from '../../../theme/theme';

export default StyleSheet.create({
  activeTabBackground: {
    color: COLORS.Black,
    padding: SPACING.space_16,
    borderRadius: BORDERRADIUS.radius_12 * 10,
  },
});
