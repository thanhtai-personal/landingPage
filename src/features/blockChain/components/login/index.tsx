import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import backgroundImage from 'root/asserts/images/banner.jpg'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: 'calc(100vh - 70px)',
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: 'yellow'
    }
  })
))()

interface ILoginProps {

}

const Login = (props: ILoginProps) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Container maxWidth={'sm'}>

      </Container>
    </div>
  )
}

export default Login