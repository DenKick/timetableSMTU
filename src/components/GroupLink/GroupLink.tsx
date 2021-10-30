import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {GroupLinkPropList, GroupScreenParamTypes} from '../../types/types';

const GroupLink: React.FC<GroupLinkPropList> = ({title}) => {
  const navigation = useNavigation<GroupScreenParamTypes>();
  const handlePress = () => {
    navigation.navigate('Group', {id: title});
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>
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
