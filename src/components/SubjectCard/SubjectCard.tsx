import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {SubjectCardPropList} from '../../types/types';

const SubjectCard: React.FC<SubjectCardPropList> = ({
  title,
  timeStart,
  timeEnd,
  teacher,
  audience,
  type,
}) => {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <View
        style={[styles.timeContainer, {borderRightColor: colors.notification}]}>
        <Text style={[styles.time, {color: colors.text}]}>{timeStart}</Text>
        <Text style={[styles.time, {color: colors.text}]}>{timeEnd}</Text>
      </View>
      <View style={styles.subjectContainer}>
        <View>
          <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
          <Text style={[styles.audience, {color: colors.text}]}>
            {audience}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.type, {color: colors.notification}]}>
            {type}
          </Text>
          <Text style={[styles.teacher, {color: colors.notification}]}>
            {teacher}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    flex: 1,
    flexBasis: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },
  timeContainer: {
    paddingRight: 10,
    marginRight: 10,
    borderRightWidth: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 17,
    textAlign: 'center',
  },
  title: {
    fontSize: 17,
    textAlign: 'left',
  },
  audience: {
    marginTop: 10,
  },
  type: {
    fontSize: 15,
    marginRight: 5,
  },
  teacher: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
  },
  subjectContainer: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
