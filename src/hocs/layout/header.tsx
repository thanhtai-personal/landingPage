import React, { useCallback } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import {
  AppBar, Toolbar, Typography
  , IconButton, ButtonGroup
  , Grid, FormControl
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
      paddingRight: 0
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
      padding: '0 10px',
    },
    registerButton: {
      height: '32px',
      minWidth: '50px',
      borderRadius: '0 33px 33px 0',
      padding: '0 10px',
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
      right: '0',
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
      fontFeatureSettings: '"tnum","tnum"',
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
    linkInButton: {
      color: 'white',
      textDecoration: 'none'
    }
  }),
))()


const Header = (props: HeaderProps) => {
  const minWidth767 = useMediaQuery('(min-width:767px)')
  const classes = useStyles(props)
  const { isFixed } = props
  const [isOpenLanguage, setIsOpenLanguage] = React.useState<boolean>(false);

  const handleLanguagesMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setIsOpenLanguage(!isOpenLanguage);
  }, [isOpenLanguage])

  return (
    <AppBar position={isFixed ? 'fixed' : 'static'} className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title}>
          {minWidth767 ? <img alt='drakenx-image' src={drakenxImage}></img>
            : <img alt='drakenx-image-no-text' src={drakenxImageNotext}></img>}
        </Typography>
        <div className={classes.rightMenu}>
          <ButtonGroup className={classes.authButtonGroup}>
            <Button className={classes.loginButton} type={buttonType.Primary}><Link className={classes.linkInButton} to='/login'>Login</Link></Button>
            <Button className={classes.registerButton} type={buttonType.Secondary}><Link className={classes.linkInButton} to='/registration'>Register</Link></Button>
          </ButtonGroup>
          <IconButton className={classes.settingsIcon}
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleLanguagesMenu}
            color='inherit'
          ><SettingsIcon />
          </IconButton>
          <Grid className={classes.menuLanguages} style={{ display: isOpenLanguage ? 'flex' : 'none' }}>
            <div className={classes.settingItems}>
              <Typography className={classes.languageLabel} align={'left'}><LanguageIcon className={classes.languageIcon} />Languages</Typography>
              <FormControl className={classes.actions}>
                <SelectionMenu defaultValue={'english'}  className={classes.languageSelection} onClickItem={() => { }} items={[{
                  key: 'english', label: (
                    <div className={classes.languageMenuOption}>
                      <img alt='en-us-img' src={enFlagImage} className={classes.selectIcon} />
                      <ListItemText className={classes.selectText} primary='English' />
                    </div>
                  )
                }]} />
              </FormControl>
            </div>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header