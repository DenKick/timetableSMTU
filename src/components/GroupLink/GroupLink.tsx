import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import {GroupLinkPropList, GroupScreenParamTypes} from '../../types/types';

const GroupLink: React.FC<GroupLinkPropList> = ({title}) => {
  const navigation = useNavigation<GroupScreenParamTypes>();
  const {colors} = useTheme();

  const color: string | undefined =
    Platform.OS === 'android' ? colors.background : undefined;

  const handlePress = () => {
    navigation.navigate('Group', {id: title});
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={0.8}>
      <Text style={[styles.title, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GroupLink;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242, 242, 247)',
    borderRadius: 10,
    flexBasis: '30%',
    paddingVertical: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
  },
});
