'use client';
import dynamic from 'next/dynamic';

const SignIn = dynamic(() => import('@/ui/pages/Login'));

export default SignIn;
