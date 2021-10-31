import React from 'react';
import {ScrollView} from 'react-native';

import Header from '../../components/Header/Header';
import Accordeon from '../../components/Accordeon/Accordeon';
import GroupLink from '../../components/GroupLink/GroupLink';

import {departments} from '../../configs/departments';

const RenderDepartments = () => {
  const renderedDepartments = departments.map(item => {
    return (
      <Accordeon key={item} title={item}>
        <GroupLink title={'1111'} />
        <GroupLink title={'2222'} />
        <GroupLink title={'3333'} />
        <GroupLink title={'4444'} />
        <GroupLink title={'5555'} />
        <GroupLink title={'6666'} />
      </Accordeon>
    );
  });

  return <>{renderedDepartments}</>;
};

const Home: React.FC = () => {
  return (
    <>
      <Header heading="Расписание" withSearch withImage />
      <ScrollView>
        <RenderDepartments />
      </ScrollView>
    </>
  );
};

export default Home;
