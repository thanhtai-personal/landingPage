import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import bannerImage from 'root/asserts/images/banner.jpg'
import rightElement from 'root/asserts/images/rightElement.svg'
import Button, { buttonType } from 'root/components/materialUIs/button'

interface BannerProps {

}

const useStyles = (props: BannerProps) => (makeStyles((theme: Theme) =>
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
    }
  }),
))()

const Banner = (props: BannerProps) => {
  const classes = useStyles(props)


  return (
    <div className={classes.banner}>
      <Container maxWidth='lg'>
        <Grid item xs={12} className={classes.bannerContent}>
          <Grid item xs={5} className={classes.leftElement}>
            <Typography className={classes.title} variant={'h4'}>Fun Blockchain Games that Earn.</Typography>
            <Typography className={classes.subTitle} variant={'h6'}>
              The ultimate entertainment platform within the Draken DeFi Universe.
              DRX token is the currency to access all features and games.
            </Typography>
            <Button type={buttonType.Default} className={classes.playNowBtn}>PLAY NOW</Button>
          </Grid>
          <Grid item xs={7} className={classes.rightElement}>
            <picture>
              <img alt='banner-item' src={rightElement} style={{ height: '460px', width: 'auto' }}>
              </img>
            </picture>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Banner