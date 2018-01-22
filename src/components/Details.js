import React from 'react';
import PropTypes from 'prop-types';

import ServerLocation from './ServerLocation';

const Details = (props) => {
  const { data } = props.location.state;
  const fields = [];
  let i = 0;
  Object.keys(data).forEach((key) => {
    if (key !== 'location' && key !== 'createdAt' && key !== 'average-uptime') {
      /* eslint-disable */
      fields.push(
        <tr key={i}>
          <td>{key}</td>
          <td>{data[key]}</td>
        </tr>);
    }
    i += 1;
  });

  return (
    <div>
      <table className="detail-table">
        <tbody>
          {fields}
        </tbody>
      </table>
      <ServerLocation data={this.props.location.state.data.location} />
    </div>
  );
};

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.object.isRequired,
    }),
  }).isRequired,
};

export default Details;
