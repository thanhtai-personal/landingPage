import { createMuiTheme } from '@material-ui/core'

const darkTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#000'
      }
    }
  }
});

export default darkTheme