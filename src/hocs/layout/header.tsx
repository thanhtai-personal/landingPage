import React, { useCallback, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
  AppBar, Toolbar, Typography
  , IconButton, Grid, FormControl
  , useMediaQuery, ListItemText
} from '@material-ui/core'
import {
  Settings as SettingsIcon
  , Language as LanguageIcon
} from '@material-ui/icons'
import Button, { buttonType } from 'root/components/materialUIs/button'
import SelectionMenu from 'root/components/materialUIs/menuList'
import drakenxImage from 'root/asserts/images/drakenx.svg'
import drakenxImageNotext from 'root/asserts/images/logo_notext.svg'
import enFlagImage from 'root/asserts/images/en-US.svg'
import icAgency from 'root/asserts/images/ic-agency.svg'
import icExchangeWallet from 'root/asserts/images/ic-exchange-wallet.svg'
import icPlayGame from 'root/asserts/images/ic-play-game.svg'
import logodrxnew from 'root/asserts/images/logodrxnew.png'

interface HeaderProps {
  isFixed: boolean
}

const useStyles = (props: HeaderProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    toolBar: {
      height: '70px',
      background: '#15181d',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px solid #2d3339',
      padding: 0,
    },
    title: {
      cursor: 'pointer',
      padding: '0 0 0 25px',
      justifyContent: 'center',
      alignItems: 'center',
      '@media(max-width:767px)': {
        paddingLeft: '15px'
      }
    },
    rightMenu: {
      display: 'flex',
      '@media(max-width:767px)': {
        position: 'relative'
      }
    },
    settingsIcon: {
      borderLeft: '1px solid #242a31',
      borderRadius: 0,
      cursor: 'pointer',
      padding: '20px',
      '@media(max-width:767px)': {
        marginLeft: 0
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
    authButtonGroup: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '20px',
      marginRight: '20px',
    },
    loginButton: {
      height: '32px',
      minWidth: '50px',
      borderRadius: '33px 0 0 33px',
      padding: '0 30px',
      fontSize: '13px',
      fontWeight: 600,
      '@media(max-width:767px)': {
        padding: '0 15px'
      },
    },
    registerButton: {
      height: '32px',
      minWidth: '50px',
      borderRadius: '0 33px 33px 0',
      padding: '0 30px',
      fontSize: '13px',
      fontWeight: 600,
      '@media(max-width:767px)': {
        padding: '0 15px'
      },
    },
    menuLanguages: {
      zIndex: 2,
      cursor: 'auto',
      minWidth: '300px',
      flexDirection: 'column',
      position: 'absolute',
      right: 0,
      top: '60px',
      padding: '15px',
      background: '#1e2024',
      boxShadow: '0 0 10px 0 rgba(0,0,0,.6)',
      borderRadius: '4px',
      color: '#77818b',
      fontSize: '13px',
      fontWeight: 500,
    },
    settingItems: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '13px',
      paddingBottom: '13px',
    },
    languageMenuOption: {
      paddingLeft: '2px',
      display: 'flex',
      alignItems: 'center',
    },
    actions: {
      position: 'absolute',
      right: 0,
      paddingRight: '15px',
      display: 'flex',
      justifyContent: 'left',
    },
    languageSelection: {
      position: 'relative',
      backgroundColor: '#556df6',
      borderRadius: '4px!important',
      transition: 'all .3s cubic-bezier(.645,.045,.355,1) 0s',
      padding: '0 11px',
      color: '#fff',
      alignItems: 'center',
      boxSizing: 'border-box',
      margin: 0,
      fontSize: '14px',
      fontVariant: 'tabular-nums',
      lineHeight: '1.5715',
      listStyle: 'none',
      fontFeatureSettings: `'tnum','tnum'`,
      display: 'inline-block',
      cursor: 'pointer',
      width: '140px',
      maxHeight: '40px'
    },
    selectText: {
      color: '#fff',
      alignItems: 'center',
      fontSize: '12px',
      fontWeight: 300
    },
    languageLabel: {
      fontSize: '100%'
    },
    languageIcon: {
      color: 'rgb(119, 129, 139)',
      position: 'relative',
      top: '5px',
    },
    selectIcon: {
      width: '30px',
      height: '20px',
      marginRight: '4px',
      '&:after': {
        boxSizing: 'border-box'
      },
      '&:before': {
        boxSizing: 'border-box'
      }
    },
    linkButton: {
      color: 'white',
      textDecoration: 'none',
    },
    divider: {
      height: '1px',
      background: '#292c31',
      width: '98%',
      borderBottom: '#44494d',
      padding: 0,
      marginTop: '10px',
      marginBottom: '10px',
    },
    buttonSignout: {
      width: '100%'
    },

    //user tab
    user: {
      display: 'flex',
      alignItems: 'center',
      borderLeft: '1px solid #242a31',
      paddingLeft: '30px',
      marginLeft: '20px',
      minWidth: '229px',
      height: '70px',
      '@media(max-width:767px)': {
        borderLeft: 0,
        padding: '0 10px',
        marginLeft: 0,
        marginTop: '12px',
        borderRadius: '4px',
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
    userName: {
      fontWeight: 500,
      fontSize: '10px',
      color: '#77818b',
      textTransform: 'uppercase',
      display: 'flex',
      flexDirection: 'column',
    },
    useNameMini: {
      textTransform: 'none',
      marginTop: '3px',
      fontSize: '12px',
      color: '#bfcbd0',
      whiteSpace: 'nowrap',
      width: '100px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    avatar: {
      cursor: 'pointer',
      padding: '10px',
    },
    avatarArea1: {
      display: 'inlineBlock',
      verticalAlign: 'middle',
      width: '35px',
      height: '35px',
      borderRadius: '100%',
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    avatarArea2: {
      width: '35px',
      height: '35px',
      lineHeight: 'initial',
      textAlign: 'center',
      color: 'rgb(255, 255, 255)',
      borderRadius: '100%',
      background: 'rgb(255, 64, 128)',
    },
    avatarArea3: {
      display: 'table',
      tableLayout: 'fixed',
      width: '100%',
      height: '100%',
      fontSize: '11.6667px',
    },
    avatarText: {
      display: 'table-cell',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
    },
    // end user tab
    //account tab
    account: {
      display: 'flex',
      flexDirection: 'column',
      padding: '18px',
      height: '34px',
      '@media(max-width:767px)': {
        margin: '10px',
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
    //end account tab
    //left menu
    leftMenuWrap: {
      display: 'flex',
      alignItems: 'center',
      float: 'left',
    },
    leftMenu: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#15181d',
      '@media(max-width:767px)': {
        flexDirection: 'row',
      },
    },
    leftMenuList: {
      display: 'flex',
      flexDirection: 'row',
      '@media(max-width:767px)': {
        display: 'flex',
        width: '100%',
      },
    },
    leftMenuListItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '120px',
      cursor: 'pointer',
      padding: '20px',
      '@media(max-width:767px)': {
        width: '100%',
      },
      '&:hover': {
        borderBottom: '1px solid #556df6'
      }
    },
    leftMenuListItemText: {
      color: '#77818b',
      fontSize: '12px',
      fontWeight: 500,
      textTransform: 'uppercase',
      marginLeft: '4px',
    },
    abstractLink: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    }
    //end left menu
  }),
))()

const isAuthen = true

const Header = (props: HeaderProps) => {
  const minWidth767 = useMediaQuery('(min-width:767px)')
  const minWidth1190 = useMediaQuery('(min-width:1190px)')
  const classes = useStyles(props)
  const { isFixed } = props
  const [isOpenLanguage, setIsOpenLanguage] = useState<boolean>(false)

  const handleLanguagesMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setIsOpenLanguage(!isOpenLanguage);
  }, [isOpenLanguage])

  return (
    <AppBar position={isFixed ? 'fixed' : 'static'} className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title}>
          {// eslint-disable-next-line
            minWidth767 ? <img alt='drakenx-image' src={drakenxImage}></img>
              // eslint-disable-next-line
              : <img alt='drakenx-image-no-text' src={drakenxImageNotext} height='45px'></img>}
        </Typography>
        {isAuthen && <div className={classes.leftMenuWrap}>
          <div className={classes.leftMenu}>
            <ul className={classes.leftMenuList}>
              <li className={classes.leftMenuListItem}>
                {/* eslint-disable-next-line */}
                <img alt='play-img-ic' src={icPlayGame}></img>
                {minWidth767 && <span className={classes.leftMenuListItemText}>Play</span>}
              </li>
              <li className={classes.leftMenuListItem}>
                <Link className={classes.abstractLink} to='/agency'>
                  {/* eslint-disable-next-line */}
                  <img alt='agency' src={icAgency}></img>
                  {minWidth767 && <span className={classes.leftMenuListItemText}>AGENCY</span>}
                </Link>
              </li>
              <li className={classes.leftMenuListItem}>
                <Link className={classes.abstractLink} to='/exchange-wallet'>
                  {/* eslint-disable-next-line */}
                  <img alt='wallet-img' src={icExchangeWallet}></img>
                  {minWidth767 && <span className={classes.leftMenuListItemText}>WALLET</span>}
                </Link>
              </li>
            </ul>
          </div>
        </div>}
        <div className={classes.rightMenu}>
          {!isAuthen && <div className={classes.authButtonGroup}>
            <Link className={classes.linkButton} to='/login'><Button className={classes.loginButton} type={buttonType.Primary}>Login</Button></Link>
            <Link className={classes.linkButton} to='/registration'><Button className={classes.registerButton} type={buttonType.Secondary}>Register</Button></Link>
          </div>}
          {isAuthen && minWidth1190 && <div className={classes.account}>
            <Typography style={{
              color: '#fff',
              fontSize: '10px',
              textTransform: 'uppercase',
              fontWeight: 500,
            }} variant={'body2'}>DRX WALLET</Typography>
            <Typography style={{
              display: 'flex',
              color: '#fb9701',
              fontSize: '14px',
              fontWeight: 600,
              marginTop: '4px',
            }} variant={'body2'}>9999.99</Typography>
          </div>}
          {isAuthen && minWidth1190 && <div className={classes.user}>
            <div className={classes.userName}>Username<span className={classes.useNameMini}>taitran</span></div>
            <div className={classes.avatar}>
              <div className={classes.avatarArea1}>
                <div className={classes.avatarArea2} title='taitran'>
                  <div className={classes.avatarArea3}>
                    <div className={classes.avatarText}>
                      T
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
          <IconButton className={classes.settingsIcon}
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleLanguagesMenu}
            color='inherit'
          ><SettingsIcon />
          </IconButton>
          <Grid className={classes.menuLanguages} style={{ display: isOpenLanguage ? 'flex' : 'none' }}>
            {isAuthen && !minWidth1190 && <div className={classes.settingItems}>
              <Typography>TaiTran</Typography>
              <FormControl className={classes.actions}>
                <Typography><img src={logodrxnew} height='20' /></Typography>
                <Typography style={{ color: '#fb9701' }}>0.00</Typography>
              </FormControl>
            </div>}
            {isAuthen && <div className={classes.settingItems}>
              <div>
                <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='user' className='svg-inline--fa fa-user fa-w-14 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' style={{ color: 'rgb(119, 129, 139)' }}><path fill='currentColor' d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'></path></svg>
              Profile
            </div>
              <FormControl className={classes.actions}>
                <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='edit' className='svg-inline--fa fa-edit fa-w-18 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' style={{ color: 'rgb(119, 129, 139)', marginRight: '23px', cursor: 'pointer' }}><path fill='currentColor' d='M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z'></path></svg>
              </FormControl>
            </div>}
            <div className={classes.settingItems}>
              <Typography className={classes.languageLabel} align={'left'}><LanguageIcon className={classes.languageIcon} />Languages</Typography>
              <FormControl className={classes.actions}>
                <SelectionMenu defaultValue={'english'} className={classes.languageSelection} onClickItem={() => { }} items={[{
                  key: 'english', label: (
                    <div className={classes.languageMenuOption}>
                      <img alt='en-us-img' src={enFlagImage} className={classes.selectIcon} />
                      <ListItemText className={classes.selectText} primary='English' />
                    </div>
                  )
                }]} />
              </FormControl>
            </div>
            {isAuthen && <div className={classes.divider}></div>}
            {isAuthen && <div className={classes.settingItems}>
              <Button type={buttonType.Danger} className={classes.buttonSignout}>
                <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='sign-out-alt' className='svg-inline--fa fa-sign-out-alt fa-w-16 fa-lg ' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' style={{ color: '#fff' }}><path fill='currentColor' d='M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z'></path></svg>
                Sign Out
              </Button>
            </div>}
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header