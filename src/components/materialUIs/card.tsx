import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardMedia, CardActions, CardContent, Typography } from '@material-ui/core'
import Button, { buttonType } from './button'

const useStyles = (props: any) => (makeStyles((theme: Theme) => createStyles({
  root: {
    border: 'solid 1px #15181d',
    padding: theme.spacing(2),
    height: '100%',
    marginRight: theme.spacing(2),
    borderRadius: '2%'
  },
  media: {
    height: '280px'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '2%'
  },
  actionButton: {
    padding: theme.spacing(1),
    borderRadius: '5px',
    cursor: props.actions?.disabled ? 'not-allowed !important' : 'pointer',
    color: 'white !important',
    opacity: props.actions?.disabled ? 0.4 : 1,
    backgroundColor: props.actions?.disabled ? '#bfcbd0' : '#556df6',
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2)

  }
}),
))()

const MaterialUICard = (props: any) => {
  const classes = useStyles(props)
  const { mediaImage, className, content: { title, description }, actions: { buttonText, ButtonIcon, disabled } } = props
  return (
    <div className={classes.root}>
      <Card className={[classes.card, className].join(' ')}>
        <CardMedia
          className={classes.media}
          image={mediaImage}
        />
        <CardContent>
          <Typography variant={'h5'}>{title}</Typography>
          <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button type={buttonType.Primary} className={classes.actionButton} disabled={disabled}>
            <ButtonIcon /> {buttonText}
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default MaterialUICard