import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Maximize as MaximizeIcon,
  Hexagon as HexagonIcon,
  Folder as FolderIcon,
  Users as UsersIcon,
  ShoppingBag as ShoppingBagIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon 
} from 'react-feather';
import { Progress } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import NavItem from './NavItem';

const items = [
  {
    href: '/app/dashboard',
    icon: HomeIcon,
    title: 'Genel Bakış',
  },
  {
    href: '/app/customers',
    icon: MailIcon,
    title: 'İletişim Kutusu'
  },
  {
    href: '/app/products',
    icon: ShoppingCartIcon,
    title: 'Siparişler'
  },
  {
    href: '/app/account',
    icon: UsersIcon,
    title: 'Müşterileri'
  },
  {
    href: '/app/settings',
    icon: FolderIcon,
    title: 'Ürünler'
  },
  {
    href: '/login',
    icon: HexagonIcon,
    title: 'Pazarlama'
  },
  {
    href: '/register',
    icon: MaximizeIcon,
    title: 'Satış Kanalları'
  },
  {
    href: '/register',
    icon: ShoppingBagIcon,
    title: 'E-Ticaret Site'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      style={{ background: '#3c4043' }}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Progress percent={30} showInfo={false} />
        <Typography
            color="textSecondary"
            variant="caption"
          >
           Kapasite: 50Gb, Kullanılan: 3,41 Gb
          </Typography>
      </Box>
      <Divider
      style={{ background: '#5f6267' }}
      />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
