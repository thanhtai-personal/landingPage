import React from 'react'
import Header from './header'

const useHeader = (ComposedComponent: React.FC) => {
  const UseHeaderComponent = (props: any) => {
    return (
      <>
        <Header />
        <ComposedComponent {...props}/>
      </>
    )
  }

  return UseHeaderComponent
}

export default useHeader

