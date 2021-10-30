import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useTheme, useNavigation} from '@react-navigation/native';

import {GroupHeaderPropList} from '../../types/types';

const GroupHeader: React.FC<GroupHeaderPropList> = ({title}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handlePress}
          activeOpacity={0.6}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            color={colors.primary}
            size={20}
          />
        </TouchableOpacity>
        <Text style={[styles.text, {color: colors.text}]}>Группа {title}</Text>
      </View>
      <Text style={[styles.heading, {color: colors.text}]}>Расписание</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  text: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
  },
  mainContainer: {
    padding: 15,
  },
  heading: {
    fontSize: 34,
    fontWeight: '300',
    marginVertical: 15,
  },
});

export default GroupHeader;
