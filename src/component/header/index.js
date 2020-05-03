import React, {Component} from 'react';
import './index.scss';
import AntSwitch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {setDarkMode} from './../../redux/app/actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Header extends Component {
    render() {
        return(
            <>
                <Typography component="div">
                    <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Light</Grid>
                    <Grid item>
                        <AntSwitch checked={this.props.darkMode} onChange={this.props.setDarkMode} name="theme" />
                    </Grid>
                    <Grid item>Dark</Grid>
                    </Grid>
                </Typography>
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
        setDarkMode
      },
      dispatch
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);