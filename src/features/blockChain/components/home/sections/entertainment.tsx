import React from 'react'
import {
  Container, Grid, Typography
  , Card, CardContent, CardMedia
  , CardActions, Button
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PlayArrow as PlayArrowIcon } from '@material-ui/icons'
import icGame1Image from 'root/asserts/images/icGame1.svg'
import icGame2Image from 'root/asserts/images/icGame2.svg'
import icGame3Image from 'root/asserts/images/icGame3.svg'
interface EntertainmentProps {

}

const useStyles = (props: EntertainmentProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: 'white',
      padding: '50px 0 75px'
    },
    media: {
      height: '280px'
    },
    gameCard: {
      marginRight: theme.spacing(2),
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    gameCards: {
      marginTop: theme.spacing(3),
      marginBottom: '4px',
      bottom: 0,
    }
  })
))()

const Entertainment = (props: EntertainmentProps) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant={'h4'} style={{ fontWeight: 600 }}>Entertainment Utopia</Typography>
        <Typography variant={'h6'} style={{ color: 'gray', fontSize: '14px' }}>
          Built on DRK Chain with absolute decentralization and transparency
        </Typography>
        <Grid container className={classes.gameCards}>
          <Grid item xs={4}>
            <Card className={classes.gameCard}>
              <CardMedia
                className={classes.media}
                image={icGame1Image}
                title='Paella dish'
              />
              <CardContent>
                <Typography variant={'h5'}>DTrade</Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Place your Long and Short positions which are automatically closed after 30 seconds!
                  A fast-paced and fun trading experience!
                </Typography>
              </CardContent>
              <CardActions>
                {/* update milti theme later */}
                <Button size='small' color='primary' style={{
                  backgroundColor: '#556df6', color: 'white'
                  , padding: '10px 10px 10px 10px'
                }}>
                  <PlayArrowIcon /> Play
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.gameCard}>
              <CardMedia
                className={classes.media}
                image={icGame2Image}
                title='Paella dish'
              />
              <CardContent>
                <Typography variant={'h5'}>DRocket</Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  How high can your rocket reach? Try and earn more DRX now!
                </Typography>
              </CardContent>
              <CardActions>
                {/* update milti theme later */}
                <Button disabled size='small' color='primary' style={{
                  backgroundColor: '#556df6', color: 'white'
                  , padding: '10px 10px 10px 10px', borderRadius: '5px'
                }}>
                  <PlayArrowIcon /> Comming Soon
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card className={classes.gameCard}>
              <CardMedia
                className={classes.media}
                image={icGame3Image}
                title='Paella dish'
              />
              <CardContent>
                <Typography variant={'h5'}>DRKats</Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Gain insight into the market environment in seconds. Make better decisions and realise gains in minutes.
                </Typography>
              </CardContent>
              <CardActions>
                {/* update milti theme later */}
                <Button disabled size='small' color='primary' style={{
                  backgroundColor: '#556df6', color: 'white'
                  , padding: '10px 10px 10px 10px'
                }}>
                  <PlayArrowIcon /> Comming Soon
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Entertainment