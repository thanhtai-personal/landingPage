import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import icAgency from 'root/asserts/images/ic-agency.svg'
import icExchangeWallet from 'root/asserts/images/ic-exchange-wallet.svg'
import icPlayGame from 'root/asserts/images/ic-play-game.svg'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
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
  }),
))()

const LeftMenuTab = (props: any) => {
  const { minWidth767 } = props
  const classes = useStyles(props)
  return (
    <div className={classes.leftMenuWrap}>
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
        </div>
  )
}

export default LeftMenuTab