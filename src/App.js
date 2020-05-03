import React, { Component } from 'react';
import Header from './component/header'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const dark = createMuiTheme ({
  palette: {
    type: "dark"
  }
});

const light = createMuiTheme ({
  palette: {
    type: "light"
  }
});

class App extends Component {

  componentDidMount() {
    window.document.title = "COVID-19 INDIA";
  }

  render() {
    return (
      <>
        <ThemeProvider theme={this.props.darkMode ? dark : light}>
          <Paper>
            <Header/>
          </Paper>
        </ThemeProvider>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
      darkMode: state.app.darkMode
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {

    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);