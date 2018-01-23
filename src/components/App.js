import 'react-table/react-table.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/global.css';
import '../styles/bootswatch.css';

import ServerList from './ServerList';
import Details from './Details';
import Header from './Header';
import { infoFetchData } from '../actions';

/* eslint-disable */
class App extends Component {
  componentDidMount() {
    this.props.fetchData('http://5a5da501d748830012334ec7.mockapi.io/servers');
  }

  render() {
    const ServerListPage = () => (
      <ServerList data={this.props.info} />);

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <div className="loader" />;
    }

    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={ServerListPage} />
          <Route path="/detail" component={Details} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ getInfo, infoHasErrored, infoIsLoading }) => ({
  info: getInfo,
  hasErrored: infoHasErrored,
  isLoading: infoIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(infoFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
