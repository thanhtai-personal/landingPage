import React from 'react'
import { Container, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import bannerImage from 'root/asserts/images/banner.jpg'
import rightElementImage from 'root/asserts/images/rightElement.svg'
import Button, { buttonType } from 'root/components/materialUIs/button'

interface BannerProps {

}

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: '100%',
      backgroundImage: `url(${bannerImage})`,
      minHeight: '460px',
      justifyContent: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    rightElement: {
      float: 'right',
      marginRight: theme.spacing(2),
      height: '100%',
      paddingLeft: props.minWidth1400 ? '50px' : theme.spacing(1),
    },
    leftElement: {
      float: 'left',
      maxWidth: '410px',
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    playNowBtn: {
      marginTop: theme.spacing(2),
      width: '140px',
      height: '40px',
    },
    title: {
      marginTop: theme.spacing(2),
      color: 'white'
    },
    subTitle: {
      marginTop: theme.spacing(2),
      color: 'white',
      fontSize: '16px'
    },
    bannerContent: {
      display: 'flex'
    },
    rightElementImage: {
      marginTop: '68px',
      height: props.minWidth1400 ? '100%' : 'auto',
      minHeight: props.minWidth1400 ? '410px' : 'auto',
      width: props.minWidth1400 ? 'auto' : '100%',
      bottom: 0
    },
    bannerContentGrid: {
      height: '100%'
    }
  }),
))()

const Banner = (props: BannerProps) => {
  const minWidth1400 = useMediaQuery('(min-width:1230px)')
  const minWidth800 = useMediaQuery('(min-width:800px)')
  const classes = useStyles({ minWidth1400 })

  const leftElement = <>
    <Typography className={classes.title} variant={'h4'}>Fun Blockchain Games that Earn.</Typography>
    <Typography className={classes.subTitle} variant={'h6'}>
      The ultimate entertainment platform within the Draken DeFi Universe.
      DRX token is the currency to access all features and games.
            </Typography></>
  const rightElement = <img alt='banner-item' src={rightElementImage} className={classes.rightElementImage}></img>

  return (
    <div className={classes.banner}>
      <Container maxWidth='lg' className={classes.bannerContent}>
        <Grid item container xs={12} className={classes.bannerContentGrid}>
          <Grid item xs={6} className={classes.leftElement}>
            {leftElement}
            <Button type={buttonType.Default} className={classes.playNowBtn}>PLAY NOW</Button>
          </Grid>
          <Grid item xs={6} className={classes.rightElement}>
            {rightElement}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Banner