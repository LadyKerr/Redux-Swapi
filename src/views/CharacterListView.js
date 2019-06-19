import React from "react";
import { connect } from "react-redux";
import { getSwapi } from '../actions';
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSwapi();
  }

  render() {
    if (this.props.fetching) {
      <h4> Loading your request . . . . </h4>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error,
  }
}

export default connect (
  mapStateToProps,
  { getSwapi }
)(CharacterListView);

