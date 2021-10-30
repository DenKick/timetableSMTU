import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {AboutHeaderPropList} from '../../types/types';

const AboutHeader: React.FC<AboutHeaderPropList> = ({heading}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={[styles.text, {color: colors.text}]}>{heading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 34,
    fontWeight: '300',
  },
  container: {
    paddingVertical: 15,
  },
  headingContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    width: '100%',
  },
  iconContainer: {
    alignSelf: 'center',
  },
});

export default AboutHeader;
