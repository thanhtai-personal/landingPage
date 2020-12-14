import React from 'react'
import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import reportingRightImage from 'root/asserts/images/homeBg.svg'

interface ReportingProps {

}

const reports = [
  {
    key: 'player',
    number: '20K+',
    text: 'Players'
  },
  {
    key: 'drkDeposit',
    number: '80M+',
    text: 'DRK deposited'
  },
  {
    key: 'drkSwapped',
    number: '2B+',
    text: 'DRK Swapped'
  }
]

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
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
      width: props.minWidth1000 ? '60%' : '100%',
      marginTop: props.minWidth1000 ? '0' : theme.spacing(3),
      marginBottom: 0
    },
    leftElement: {
      float: 'left',
      width: props.minWidth1000 ? '40%' : '100%',
      maxWidth: props.minWidth1000 ? '410px' : '100%',
      padding: props.minWidth1000 ? 'inherit' : `${
        theme.spacing(2)
      } ${
        theme.spacing(20)
      } ${
        theme.spacing(2)
      } ${
        theme.spacing(20)
      }`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
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
    },
    rightElementImage: {
      width: props.minWidth1000 ? 'auto' : '100%',
      height: props.minWidth1000 ? '300px' : 'auto',
      marginTop: props.minWidth1000 ? 0 : theme.spacing(5)
    },
    reportNumber: {
      color: '#556df6',
      fontSize: '25px'
    },
    reportText: {
      color: '#15181d',
      fontSize: '13px',
      lineHeight: '24px'
    }
  }),
))()

const Reporting = (props: ReportingProps) => {
  const minWidth1000 = useMediaQuery('(min-width:1265px)')
  const classes = useStyles({ minWidth1000 })

  const leftElement = (<>
    <Typography className={classes.title} variant={'h4'}>What if you can earn while having fun?</Typography>
    <Typography className={classes.subTitle} variant={'h6'}>
      Beside the excitement that DrakenX brings, you will also have the opportunity to make a profit with your coins and tokens.
      Everything is fully decentralized and transparent!
    </Typography>
    <Grid item container xs={12}>
      {reports.map((rp: any) => (<Grid key={rp.key} item xs={4}>
      <Typography className={classes.reportNumber}>{rp.number}</Typography>
      <Typography className={classes.reportText}>{rp.text}</Typography>
      </Grid>))}
    </Grid>
  </>)

  const rightElement = (
    <picture>
      <img alt='reporting-item' src={reportingRightImage} className={classes.rightElementImage}>
      </img>
    </picture>
  )

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        {minWidth1000 ? <Grid item container xs={12}>
          <Grid item xs={6} className={classes.leftElement}>
            {leftElement}
          </Grid>
          <Grid item xs={5} className={classes.rightElement}>
            {rightElement}
          </Grid>
        </Grid>
          :
          <>
          <Grid item xs={12} className={classes.leftElement}>
            {leftElement}
          </Grid>
          <Grid item xs={12}>
            {rightElement}
          </Grid>
        </>
        }
      </Container>
    </div>
  )
}

export default Reporting