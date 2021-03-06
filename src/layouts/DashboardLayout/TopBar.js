import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Toolbar,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';
import FeedbackTwoToneIcon from '@material-ui/icons/FeedbackTwoTone';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
      style={{ background: '#5f6267' }}
    >
      <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
      </IconButton>  
        <Grid item xs={3}>
          <Typography
            color="inherit"
            variant="h4"
          >
           kobigo
          </Typography>
        </Grid>
        <Grid item xs={1} align="center">
        <Typography
            color="inherit"
            variant="h1"
          >
           |
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1}>
        <IconButton aria-label="ArrowBackIcon" color="inherit">
        <ArrowBackIcon />
        <ArrowForwardIcon />
        </IconButton> 
        </Grid>
        <Grid item xs={4}>
          <Typography
            color="inherit"
            variant="h4"
          >
           Genel Bakış
          </Typography>
        </Grid>
        <Grid container spacing={3}>
        <Box p={2} flexGrow={2} />
        <Grid item xs align="center">
            <SearchIcon />
            <Typography
              color="inherit"
              variant="subtitle2"
            >
              <Link href="#" onClick={preventDefault} color="inherit">GETİR</Link>
            </Typography>
          </Grid>
          <Grid item xs align="center">
            <BarChartIcon />
            <Typography
              color="inherit"
              variant="subtitle2"
            >
             <Link href="#" onClick={preventDefault} color="inherit">RAPORLAR</Link>
            </Typography>
          </Grid>
          <Grid item xs align="center">
            <SettingsIcon />
            <Typography
              color="inherit"
              variant="subtitle2"
            >
              <Link href="#" onClick={preventDefault} color="inherit">AYARLAR</Link>
            </Typography>
          </Grid>
          <Grid item xs align="center">
            <NotificationImportantIcon />
            <Typography
              color="inherit"
              variant="subtitle2"
            >
              <Link href="#" onClick={preventDefault} color="inherit">BİLDİRİMLER</Link>
            </Typography>
          </Grid>
          <Grid item xs align="center">
            <HelpOutlineIcon />
            <Typography
              color="inherit"
              variant="subtitle2"
            >
              <Link href="#" onClick={preventDefault} color="inherit">YARDIM</Link>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              color="inherit"
              variant="h1"
            >
              |
            </Typography>
          </Grid>
          </Grid>
        <Box flexGrow={1} />
        <Grid item xs={2} align="right">
            <Typography
              color="inherit"
              variant="caption"
            >
              Mert KANBUR
            </Typography>
            <Typography
              color="inherit"
              variant="h6"
            >
              Hesabım
            </Typography>
          </Grid>
          <Avatar alt="Mert Kanbur" src="/static/images/avatar/1.jpg" />
      </Toolbar>
      <div className={classes.root}>
      <AppBar style={{ background: '#ffffff' }} position="static">
        <Toolbar>
        <Box flexGrow={1} />
          <Grid item spacing={3}>
          <Button
            endIcon={<BarChartIcon />}
            size="small"
            variant="text"
            color="action"
          >
            </Button>
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Raporlar
            </Typography>
          </Button>
          </Grid>
          <Box flexGrow={3} />
          <Grid item xs={1} align="center">
          <WbSunnyIcon 
          color="action" 
          />
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              ÖNERİLER
            </Typography>
          </Grid>
          <Grid item xs={1} align="center">
          <FeedbackTwoToneIcon 
          color="action" 
          />
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              GERİ BİLDİRİM
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
