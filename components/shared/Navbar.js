import NavbarItem from 'components/shared/NavbarItem';

const Navbar = () => {
  return (
    <div className='w-full bg-black text-white py-4 px-5'>
      <div className='w-full max-w-7xl mx-auto flex justify-between'>
        <div className='capitalize'>todo app</div>
        <ul className='w-2/3 flex justify-end px-16'>
          <NavbarItem item='todos' />
          <NavbarItem item='notes' />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
