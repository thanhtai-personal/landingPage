import React, { useCallback } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { ButtonType } from './enums'

const useStyles = (props: any) => (makeStyles((theme: Theme) => createStyles({
  customMaterialUI: {
    textTransform: 'none',
    backgroundColor: props?.backgroundColor,
    color: props?.textColor,
    '&:hover': {
      boxShadow: `0 0 10px 0 ${props?.boxShadowColor}`,
      backgroundColor: props?.backgroundHoverColor,
      color: props?.textHoverColor,
    }
  }
}),
))()

const MaterialUIButton = (props: any) => {
  const getConstantFromButtonType = useCallback((type) => {
    switch(type) {
      case ButtonType.Primary:
        return {
          backgroundColor: '#556df6',
          textColor: 'white',
          boxShadowColor:'#556df6',
          backgroundHoverColor: '#556df6',
          textHoverColor:'white'
        }
      case ButtonType.Secondary:
        return {
          backgroundColor: '#f79339',
          textColor: 'white',
          boxShadowColor:'#f79339',
          backgroundHoverColor: '#f79339',
          textHoverColor:'white'
        }
      case ButtonType.Default:
        return {
          backgroundColor: 'white',
          textColor: '#556df6',
          boxShadowColor:'white',
          backgroundHoverColor: 'white',
          textHoverColor:'#556df6'
        }
      default:
        return {};
    }
  }, [])
  const classes = useStyles(getConstantFromButtonType(props?.type))
  return <Button {...props} className={[ classes.customMaterialUI, props.className ].join(' ')}/>
}

export const buttonType = ButtonType

export default MaterialUIButton