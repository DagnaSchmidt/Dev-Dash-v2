import React from 'react';
import '../../Styles/Components_Styles/Notes/Notes.css';
import { connect } from "react-redux";

const Notes = () => {
  return (
    <section className='notes'>
      <div className='notes__left'>

      </div>
      <div className='notes__right'>

      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);