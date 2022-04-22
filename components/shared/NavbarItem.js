import Link from 'next/link';

const NavbarItem = (props) => {
  const path = `/${props.item}`;

  return (
    <li className='ml-7 cursor-pointer text-lg capitalize'>
      <Link href={path}>{props.item}</Link>
    </li>
  );
};

export default NavbarItem;
