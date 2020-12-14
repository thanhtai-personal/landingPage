import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import drakenxImage from 'root/asserts/images/drakenx.svg'
import {
  Facebook as FacebookIcon
  , Telegram as TelegramIcon
  , Twitter as TwitterIcon
} from '@material-ui/icons'

interface FooterProps {

}

const useStyles = (props: FooterProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5)
    },
    riskWarning: {
      borderTop: 'solid 1px',
      fontSize: '12px',
      color: 'white',
      opacity: 0.4,
      paddingTop: theme.spacing(2)
    },
    contactArea: {
      paddingBottom: theme.spacing(3),
      color: 'white'
    },
    footerText: {
      opacity: 0.4
    },
    footerLogo: {
      marginBottom: theme.spacing(3)
    },
    footerTextTitle: {
      opacity: 0.7,
      fontWeight: 500
    },
    linkText: {
      opacity: 0.4,
      cursor: 'pointer',
      '&:hover': {
        color: 'blue'
      }
    }
  }),
))()

const Footer = (props: FooterProps) => {
    const classes = useStyles(props)
    return (
      <Container maxWidth={'lg'} className={classes.root}>
        <Grid xs={12} className={classes.contactArea}>
          <Grid xs={4}>
            <img alt='footer-logo' src={drakenxImage} className={classes.footerLogo} />
            <Typography className={classes.footerText} variant='body2'>© Copyright by DrakenX 2020.</Typography>
            <Typography className={classes.footerText} variant='body2'>All rights reserved</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography className={classes.footerTextTitle} variant='body2'>Instroduce & support</Typography>
            <Typography className={classes.linkText} variant='body2'>About us</Typography>
            <Typography className={classes.linkText} variant='body2'>FAQs</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography className={classes.footerTextTitle} variant='body2'>Security & Privacy</Typography>
            <Typography className={classes.linkText} variant='body2'>About us</Typography>
            <Typography className={classes.linkText} variant='body2'>FAQs</Typography>
          </Grid>
          <Grid xs={2}>
            <Typography className={classes.footerTextTitle} variant='body2'>Community</Typography>
            <Typography className={classes.linkText} style={{ opacity: 1, color: 'steelblue' }} variant='body2'><TelegramIcon />Telegram</Typography>
            <Typography className={classes.linkText} style={{ opacity: 1, color: 'blue' }} variant='body2'><FacebookIcon />Facebook</Typography>
            <Typography className={classes.linkText} style={{ opacity: 1, color: 'steelblue' }} variant='body2'><TwitterIcon />Twitter</Typography>
          </Grid>
        </Grid>
        <Grid xs={12} className={classes.riskWarning}>
          <span style={{ fontWeight: 600 }}>Risk Warning: </span>
           Trading and investing in digital options involves significant level of risk and is not suitable
            and/or appropriate for all clients. Please make sure you carefully consider your investment objectives,
             level of experience and risk appetite before buying or selling any digital asset. You should be aware
              of and fully understand all the risks associated with trading and investing in digital assets
              , you should not invest funds you cannot afford to lose. You are granted limited non-exclusive rights
               to use the IP contained in this site for personal, non-commercial, non-transferable use only in
                relation to the services offered on the site
        </Grid>
      </Container>
    )
}

export default Footer