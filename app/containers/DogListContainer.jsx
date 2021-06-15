import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';


import * as actions from '../actions/actions';
import styles from './scss/dogList.scss';
import DisplayButton from '../components/DisplayButton';
import DisplayFilter from '../components/DisplayFilter';

const cx = classNames.bind(styles);

class DogListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dogFilteredList, activeDogBreed } = this.props;

    // default content if axios is still fetching the file
    let dogList = <div> Loading...</div>
    if (!dogList) {
      return null 

    }
    if (dogFilteredList) {
       dogList = dogFilteredList.map( (doggoBreed) => {
        const title = doggoBreed[0].toUpperCase() + doggoBreed.substring(1);
        return (
        <DisplayButton
        key={doggoBreed} breed={doggoBreed}
        handleClick={this.props.changeActiveBreed}
        isHighligthed={activeDogBreed === doggoBreed}
        >
            {title}
      
        </DisplayButton>) 
      })
    } else { 
        dogList = <div>Found nothing. Please try again.</div>
      
    };


    return (
      <div className="doggo-container">
      <header>
      <h1>Dogs!</h1>
        <DisplayFilter filterList={this.props.filterList} />
      </header>
              {dogList}
      </div>
    );
  }
};

DogListContainer.PropTypes = {
  data: PropTypes.object,
  performSampleAction: PropTypes.func,
}

function mapStateToProps(state) {
  console.log(state, "STATE")
  return {
    dogFilteredList: state.breeds.filteredList,
    dogList: state.breeds.dogList,
    activeDogBreed: state.breeds.activeDogBreed
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeActiveBreed: (breed) => {
       dispatch(actions.changeActiveBreed(breed))
    },

    updateTitleAction: () => {
      dispatch(sampleActions.updateTitle('This is a different title'));
    },

    filterList: () => {
      dispatch(actions.filterList(document.getElementById('search_txt').value));

    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogListContainer);
