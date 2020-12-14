import React from 'react'
import {
  Container, Grid, Typography, useMediaQuery
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PlayArrow as PlayArrowIcon } from '@material-ui/icons'
import icGame1Image from 'root/asserts/images/icGame1.svg'
import icGame2Image from 'root/asserts/images/icGame2.svg'
import icGame3Image from 'root/asserts/images/icGame3.svg'
import Card from 'root/components/materialUIs/card'
interface EntertainmentProps {

}

const cards = [
  {
    key: 'DTrade',
    mediaImage: icGame1Image,
    content: {
      title: 'DTrade',
      description: `
      Place your Long and Short positions which are automatically closed after 30 seconds!
      A fast-paced and fun trading experience!`
    },
    actions: {
      buttonText: 'Play',
      ButtonIcon: PlayArrowIcon,
      disabled: false
    }
  },
  {
    key: 'DRocket',
    mediaImage: icGame2Image,
    content: {
      title: 'DRocket',
      description: `How high can your rocket reach? Try and earn more DRX now!`
    },
    actions: {
      buttonText: 'Comming Soon',
      ButtonIcon: PlayArrowIcon,
      disabled: true
    }
  },
  {
    key: 'DRKats',
    mediaImage: icGame3Image,
    content: {
      title: 'DRKats',
      description: `Gain insight into the market environment in seconds. Make better decisions and realise gains in minutes.`
    },
    actions: {
      buttonText: 'Comming Soon',
      ButtonIcon: PlayArrowIcon,
      disabled: true
    }
  }
]

const useStyles = (props: EntertainmentProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: 'white',
      padding: '50px 0 75px'
    },
    gameCards: {
      marginTop: theme.spacing(3),
      marginBottom: '4px',
      bottom: 0,
    }
  })
))()

const Entertainment = (props: EntertainmentProps) => {
  const minWidth900 = useMediaQuery('(min-width:900px)')
  const minWidth500 = useMediaQuery('(min-width:500px)')
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant={'h4'} style={{ fontWeight: 600 }}>Entertainment Utopia</Typography>
        <Typography variant={'h6'} style={{ color: 'gray', fontSize: '14px' }}>
          Built on DRK Chain with absolute decentralization and transparency
        </Typography>
        <Grid item container xs={12} className={classes.gameCards}>
          {cards.map((card: any, index: number) => (<Grid key={`${card.key}-${index}`} item xs={minWidth500 ? minWidth900 ? 4 : 6: 12}>
            <Card 
              key={`${card.key}-${index}`}
              mediaImage={card.mediaImage}
              content={card.content}
              actions={card.actions}
              disabled={card.disabled}
            />
          </Grid>))}
        </Grid>
      </Container>
    </div>
  )
}

export default Entertainment