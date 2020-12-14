import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Container, Typography, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
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
      paddingBottom: theme.spacing(5),
      flexGrow: 1
    },
    riskWarning: {
      borderTop: 'solid 1px',
      fontSize: '12px',
      color: 'white',
      opacity: 0.4,
      paddingTop: theme.spacing(2),
      width: '100%'
    },
    footerText: {
      opacity: 0.4,
      color: 'white'
    },
    footerLogo: {
      marginBottom: theme.spacing(3)
    },
    footerTextTitle: {
      opacity: 0.7,
      fontWeight: 500,
      color: 'white'
    },
    linkText: {
      opacity: 0.4,
      cursor: 'pointer',
      color: 'white',
      '&:hover': {
        color: 'blue'
      }
    }
  }),
))()

const Footer = (props: FooterProps) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Container maxWidth={'lg'}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <img alt='footer-logo' src={drakenxImage} className={classes.footerLogo} />
                <Typography className={classes.footerText} variant='body2'>© Copyright by DrakenX 2020.</Typography>
                <Typography className={classes.footerText} variant='body2'>All rights reserved</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.footerTextTitle} variant='body2'>Instroduce & support</Typography>
                <Typography className={classes.linkText} variant='body2'>About us</Typography>
                <Typography className={classes.linkText} variant='body2'>FAQs</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.footerTextTitle} variant='body2'>Security & Privacy</Typography>
                <Typography className={classes.linkText} variant='body2'>Terms and Conditions</Typography>
                <Typography className={classes.linkText} variant='body2'>Risk Warning</Typography>
                <Typography className={classes.linkText} variant='body2'>Liability and Indemnity</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.footerTextTitle} variant='body2'>Community</Typography>
                <Typography className={classes.linkText} style={{ opacity: 1, color: 'steelblue' }} variant='body2'><TelegramIcon />Telegram</Typography>
                <Typography className={classes.linkText} style={{ opacity: 1, color: 'blue' }} variant='body2'><FacebookIcon />Facebook</Typography>
                <Typography className={classes.linkText} style={{ opacity: 1, color: 'steelblue' }} variant='body2'><TwitterIcon />Twitter</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Grid item xs={12} className={classes.riskWarning}>
          <span style={{ fontWeight: 600 }}>Risk Warning: </span>
            Trading and investing in digital options involves significant level of risk and is not suitable
              and/or appropriate for all clients. Please make sure you carefully consider your investment objectives,
              level of experience and risk appetite before buying or selling any digital asset. You should be aware
                of and fully understand all the risks associated with trading and investing in digital assets
                , you should not invest funds you cannot afford to lose. You are granted limited non-exclusive rights
                to use the IP contained in this site for personal, non-commercial, non-transferable use only in
                  relation to the services offered on the site
          </Grid>
      </Container>.
    </div>
  )
}

export default Footer