import React, { useCallback } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  AppBar, Toolbar, Typography
  , IconButton, ButtonGroup
  , Grid, FormControl, Select
} from '@material-ui/core'
import {
  Settings as SettingsIcon
  , Language as LanguageIcon
} from '@material-ui/icons'
import Button, { buttonType } from 'root/components/materialUIs/button'
import drakenxImage from 'root/asserts/images/drakenx.svg'

interface HeaderProps {

}

const headerBackgroundColor = '#15181d'

const useStyles = (props: HeaderProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '70px',
      width: '100%',
      backgroundColor: headerBackgroundColor,
      borderBottom: '1px solid #2d3339'
    },
    title: {
      flexGrow: 1,
    },
    settingsIcon: {
      opacity: '0.6',
      borderLeft: '2px solid #242a31',
      padding: '20px',
      cursor: 'pointer',
      '&:hover': {
        borderBottom: ''
      }
    },
    toolBar: {
      paddingRight: 0
    },
    authButtonGroup: {
      marginRight: theme.spacing(3)
    },
    loginButton: {
      textTransform: 'none',
      border: 'none',
      borderRadius: '33px 0 0 33px',
      fontWeight: 600,
    },
    registerButton: {
      textTransform: 'none',
      border: 'none',
      borderRadius: '0 33px 33px 0',
      fontWeight: 600,
    },
    menuLanguages: {
      backgroundColor: headerBackgroundColor,
      position: 'absolute',
      float: 'right',
      marginRight: 0,
      top: '65px',
      right: '0',
      padding: theme.spacing(2)
    },
    formControl: {

    },
    languageSelection: {
      backgroundColor: '#556df6',
      color: 'white',
      display: 'flex',
      textAlignLast: 'center',
      width: '120px',
      float: 'right',
      marginLeft: theme.spacing(5),
      borderRadius: '5px'
    },
    languageOption: {
      borderRadius: '5px',
      backgroundColor: '#556df6',
    },
    languageLabel: {
      verticalAlign: 'baseline',
      opacity: '0.4'
    },
    languageIcon: {
      fontSize: '1.2rem',
      top: '3px',
      opacity: '0.4',
      cursor: 'pointer',
      '&:hover': {
        opatity: '1',
        color: 'white'
      }
    }
  }),
))()


const Header = (props: HeaderProps) => {
  const classes = useStyles(props)

  const [isOpenLanguage, setIsOpenLanguage] = React.useState<boolean>(false);

  const handleLanguagesMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setIsOpenLanguage(!isOpenLanguage);
  }, [isOpenLanguage])

  return (
    <header className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title}>
            {/* eslint-disable-next-line */}
            <picture>
              {/* eslint-disable-next-line */}
              <img alt='drakenx-image' src={drakenxImage}></img>
              {/* eslint-disable-next-line */}
            </picture>
          </Typography>
          <ButtonGroup className={classes.authButtonGroup}>
            <Button className={classes.loginButton} type={buttonType.Primary}>Login</Button>
            <Button className={classes.registerButton} type={buttonType.Secondary}>Register</Button>
          </ButtonGroup>
          <IconButton className={classes.settingsIcon}
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleLanguagesMenu}
            color='inherit'
          ><SettingsIcon />
          </IconButton>
          <Grid className={classes.menuLanguages} style={{ display: isOpenLanguage ? 'flex' : 'none' }}>
            <LanguageIcon className={classes.languageIcon} />
            <Typography className={classes.languageLabel} align={'center'}>Languages</Typography>
            <FormControl className={classes.formControl}>
              <Select
                native
                className={classes.languageSelection}
              >
                <option className={classes.languageOption} value={'english'}>English</option>
              </Select>
            </FormControl>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header