import React from 'react';
import {useRoute} from '@react-navigation/core';
import {ScrollView} from 'react-native';

import Accordeon from '../../components/Accordeon/Accordeon';
import GroupHeader from '../../components/GroupHeader/GroupHeader.android';
import SubjectCard from '../../components/SubjectCard/SubjectCard';

import {days} from '../../configs/days';

import {GroupScreenRoutePropList} from '../../types/types';

const RenderDays = () => {
  const renderedDays = days.map(item => {
    return (
      <Accordeon key={item} title={item}>
        <SubjectCard
          title="Высшая математика"
          timeStart="10:10"
          timeEnd="11:40"
          teacher="Сорокин Вадим Николаевич"
          type="Лекция"
          audience="ЦДО Дистанционно"
        />
        <SubjectCard
          title="Химия"
          timeStart="11:50"
          timeEnd="13:20"
          teacher="Богданова Светлана Ефимовна"
          type="Лекция"
          audience="ЦДО Дистанционно"
        />
      </Accordeon>
    );
  });

  return <>{renderedDays}</>;
};

const Group: React.FC = () => {
  const route = useRoute<GroupScreenRoutePropList>();
  const groupId = route.params.id;

  return (
    <>
      <GroupHeader title={groupId} />
      <ScrollView>
        <RenderDays />
      </ScrollView>
    </>
  );
};

export default Group;
