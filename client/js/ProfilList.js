import React, { PropTypes } from 'react';

export default class ProfilList extends React.Component {
  render() {
    console.log(JSON.stringify("LOL = " + this.props.profils));
  }

}

ProfilList.propTypes = {
  profils: PropTypes.array.isRequired
};
