import React, { useEffect } from 'react'

interface IDocumentTitleProps {

}

const useDocumentTitle = (ComposedComponent: React.FC) => {
  const DocumentTitleComponent = (props: IDocumentTitleProps) => {

    useEffect(() => {
      let title = window.location.href
      if (title.endsWith('/')) title = title.slice(0, -1)
      document.title = title
    }, [])

    return (
      <ComposedComponent {...props} />
    )
  }

  return DocumentTitleComponent
}

export default useDocumentTitle

