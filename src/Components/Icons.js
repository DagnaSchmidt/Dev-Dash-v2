import React from 'react';
import { connect } from "react-redux";

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