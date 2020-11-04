import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | ReNeDuSaEx</title>
      </Head>
      <AppLayout>프로필 페이지</AppLayout>
    </>
  );
};

export default Profile;
