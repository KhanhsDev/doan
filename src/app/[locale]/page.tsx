'use client';

import React from 'react';

import LoginModal from '@/components/LoginModal';
import LandingPage from '@/components/LandingPage';

const ClinicLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingPage />
      <LoginModal />
    </div>
  );
};
export default ClinicLandingPage;
