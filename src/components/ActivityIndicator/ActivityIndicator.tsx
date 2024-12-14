import React from 'react';

import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {ThemeColors} from '../../theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';

type Props = Omit<ActivityIndicatorProps, 'color'> & {
  color: ThemeColors;
};

export function ActivityIndicator({color, ...activityIndicatorProps}: Props) {
  const {colors} = useAppTheme();
  return <RNActivityIndicator color={colors[color]} {...ActivityIndicator} />;
}
