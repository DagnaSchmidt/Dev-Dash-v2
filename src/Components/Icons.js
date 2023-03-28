import React from 'react';
import { connect } from "react-redux";
import '../Styles/Components_Styles/Icons.css';

const Icons = ( {activeWidget} ) => {
  return (
    <section className={`icons ${activeWidget === 'none' && 'icons-closed'}`}>
        Icons
    </section>
  )
}

const mapStateToProps = state => {
    return { activeWidget: state.activeUser.activeWidget };
  };

export default connect(mapStateToProps)(Icons);