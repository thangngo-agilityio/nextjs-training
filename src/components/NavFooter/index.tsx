import Link from 'next/link';

type TNavFooter = {
  title?: string;
  path: string;
  name?: string;
};

const NavFooter = ({ path, name }: TNavFooter) => (
  <Link
    href={path}
    style={{
      fontSize: '16px',
      color: '#B6C197',
      fontWeight: '400',
    }}
  >
    {name}
  </Link>
);

export default NavFooter;
