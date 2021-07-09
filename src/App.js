import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {   
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {(this.props.loading) ? <h4>Loading...</h4> : <h4>Here They Are!</h4>}
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App)

