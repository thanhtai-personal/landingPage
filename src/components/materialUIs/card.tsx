import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardMedia, CardActions, CardContent, Typography } from '@material-ui/core'
import Button, { buttonType } from './button'

const useStyles = (props: any) => (makeStyles((theme: Theme) => createStyles({
  media: {
    height: '280px'
  },
  card: {
    marginRight: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  actionButton: {
    padding: '10px 10px 10px 10px',
    borderRadius: '5px',
    cursor: props.actions?.disabled ? 'not-allowed !important' : 'pointer'
  }
}),
))()

const MaterialUICard = (props: any) => {
  const classes = useStyles(props)
  const { mediaImage, className, content: { title, description }, actions: { buttonText, ButtonIcon, disabled } } = props
  return (
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
  )
}

export default MaterialUICard