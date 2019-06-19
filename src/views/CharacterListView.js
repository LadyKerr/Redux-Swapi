import React from "react";
import { connect } from "react-redux";
import { getSwapi } from '../actions';
import { CharacterList } from "../components";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
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

