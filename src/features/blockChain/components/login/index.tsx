import React from 'react'
import { Container, Paper } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import backgroundImage from 'root/asserts/images/banner.jpg'

const useStyles = (props: any) => (makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '99vw',
      height: 'calc(100vh - 87px)',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover'
    }
  })
))()

interface ILoginProps {

}

const Login = (props: ILoginProps) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <Container maxWidth={'xs'}>
        <Paper style={{ width: '100px', height: '200px', backgroundColor: 'white'}}>
          
        </Paper>
      </Container>
    </div>
  )
}

export default Login