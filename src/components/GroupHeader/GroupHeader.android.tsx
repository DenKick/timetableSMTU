import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useTheme, useNavigation} from '@react-navigation/native';

import {GroupHeaderPropList} from '../../types/types';

const GroupHeader: React.FC<GroupHeaderPropList> = ({title}) => {
  const {colors} = useTheme();
  const arrowColor = Platform.OS === 'android' ? colors.text : colors.primary;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: colors.card}]}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handlePress}
          activeOpacity={0.6}>
          <FontAwesomeIcon icon={faArrowLeft} color={arrowColor} size={20} />
        </TouchableOpacity>
        <Text style={[styles.text, {color: colors.text}]}>Группа {title}</Text>
      </View>
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
    marginLeft: 36,
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
