import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import reportingRightImage from 'root/asserts/images/homeBg.svg'

interface ReportingProps {

}

const useStyles = (props: ReportingProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto'
    },
    rightElement: {
      float: 'right',
      marginRight: theme.spacing(4),
      width: '60%',
      marginBottom: 0
    },
    leftElement: {
      float: 'left',
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      maxWidth: '410px',
      marginRight: theme.spacing(20)
    },
    playNowBtn: {
      marginTop: theme.spacing(2),
      backgroundColor: 'white',
      color: 'purple',
      width: '140px',
      height: '40px',
      '&:hover': {
        backgroundColor: 'white',
        boxShadow: `0 0 10px 0 white`,
      }
    },
    title: {
      marginTop: theme.spacing(2),
    },
    subTitle: {
      marginTop: theme.spacing(2),
      fontSize: '16px'
    },
    bannerContent: {
      display: 'flex'
    }
  }),
))()

const Reporting = (props: ReportingProps) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Grid item xs={12} className={classes.bannerContent}>
          <Grid item xs={5} className={classes.leftElement}>
            <Typography className={classes.title} variant={'h4'}>What if you can earn while having fun?</Typography>
            <Typography className={classes.subTitle} variant={'h6'}>
            Beside the excitement that DrakenX brings, you will also have the opportunity to make a profit with your coins and tokens.
             Everything is fully decentralized and transparent!
            </Typography>
            
          </Grid>
          <Grid item xs={7} className={classes.rightElement}>
            <picture>
              <img alt='reporting-item' src={reportingRightImage} style={{ height: '300px', width: 'auto' }}>
              </img>
            </picture>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Reporting