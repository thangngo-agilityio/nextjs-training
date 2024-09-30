import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

// Icons
import { Logout } from '@/icons';
import { Avatar } from '../common';

const UserDropdown = () => (
  <Menu>
    <MenuButton as="button" aria-label="Options">
      <Avatar />
    </MenuButton>
    <MenuList>
      <MenuItem icon={<Logout />}>Logout</MenuItem>
    </MenuList>
  </Menu>
);

export default UserDropdown;
