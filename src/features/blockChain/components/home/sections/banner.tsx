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
      position: 'relative',
      float: 'right',
      marginRight: theme.spacing(2),
      height: '100%',
      minHeight: '460px',
      width: '60%',
      paddingLeft: props.minWidth1280 ? '50px' : theme.spacing(1),
    },
    leftElement: {
      float: 'left',
      width: props.minWidth1280 ? '40%' : '90%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexBasis: props.minWidth1280 ? 'inherit' : 'auto',
      maxWidth: props.minWidth1280 ? '410px' : '100%',
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
      display: 'flex',
      height: '100%',
      minHeight: '460px'
    },
    rightElementImage: {
      height: props.minWidth1280 ? '100%' : 'auto',
      minHeight: props.minWidth1280 ? '410px' : 'auto',
      width: props.minWidth1280 ? 'auto' : '100%',
      bottom: 0,
      position: 'absolute',
      left: 0,
      minWidth: props.minWidth450 ? '410px' : 'auto',
    },
    bannerContentGrid: {
      height: '100%',
      minHeight: '460px',
    }
  }),
))()

const Banner = (props: BannerProps) => {
  const minWidth1280 = useMediaQuery('(min-width:1280px)')
  const minWidth450 = useMediaQuery('(min-width:450px)')
  const classes = useStyles({ minWidth1280, minWidth450 })

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
        <Grid item container className={classes.bannerContentGrid}>
          <Grid item xs={5} className={classes.leftElement}>
            {leftElement}
            <Button type={buttonType.Default} className={classes.playNowBtn}>PLAY NOW</Button>
          </Grid>
          <Grid item xs={7} className={classes.rightElement}>
            {rightElement}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Banner