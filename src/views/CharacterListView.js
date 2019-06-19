import React from "react";
import { connect } from "react-redux";
import { getSwapi } from '../actions';
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this,props.getSwapi
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

const mapStateToProps = state => ({
  character: state.props,
  fetching: state.props,
  error: state.props,
})

export default connect (
  mapStateToProps,
  { getSwapi }
)(CharacterListView);

