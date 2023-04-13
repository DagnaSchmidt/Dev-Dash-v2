import React from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { connect } from "react-redux";

const Notes = () => {
  return (
    <div>Notes</div>
  )
}

const mapStateToProps = state => {
  return { };
};
const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);