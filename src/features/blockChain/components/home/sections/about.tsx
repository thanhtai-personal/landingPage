import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import startDividerImage from 'root/asserts/images/startDevider.svg'
import endDividerImage from 'root/asserts/images/endDevider.svg'

interface AboutProps {

}

const useStyles = (props: AboutProps) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(7),
      color: 'black'
    },
    content: {
      paddingLeft: '13%',
      width: '74%',
      textAlign: 'center',
      lineHeight: '28px',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    aboutContent: {
      width: '80%',
      marginLeft: '10%'
    }
  }),
))()

const Reporting = (props: AboutProps) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <div className={classes.aboutContent}>
          <img alt='about-start' style={{width: '100%'}} src={startDividerImage}></img>
          <Typography className={classes.content} align={'center'}>
            The combination of Games and Blockchain has created
            a fascinating solution for financial management in the virtual world.
            Beyond the entertainment offered by games, we believe DrakenX is also
            bringing more value to the community.
            The goal of DrakenX is to continuously
            launch new game genres that can be combined with
            DRK Chain to provide more entertaining-and-profitable options!
          <Typography align={'center'} style={{ color: 'blue' }}>Jacob Jones - GAMER</Typography>
          </Typography>
          <img alt='about-end' style={{width: '100%'}} src={endDividerImage}></img>
        </div>
      </Container>
    </div>
  )
}

export default Reporting