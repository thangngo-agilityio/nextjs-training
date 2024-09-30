import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

// Components
import { Avatar } from '../common';

// Icons
import { Logout } from '@/icons';

type TUserDropdown = {
  src?: string;
  alt?: string;
  onClick: () => void;
};

const UserDropdown = ({ src, alt, onClick }: TUserDropdown) => (
  <Menu>
    <MenuButton as="button" aria-label="Options">
      <Avatar src={src} alt={alt} />
    </MenuButton>
    <MenuList>
      <MenuItem icon={<Logout />} onClick={onClick}>
        Logout
      </MenuItem>
    </MenuList>
  </Menu>
);

export default UserDropdown;
