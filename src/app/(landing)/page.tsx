import dynamic from 'next/dynamic';

// Pages
const homePage = dynamic(() => import('@/ui/pages/Home'));

export default homePage;
