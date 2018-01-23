import React from 'react';

import ServerLocation from './ServerLocation';

const Details = (props) => {
  // eslint-disable-next-line
  const { data } = props.location.state;
  const properties = data.location;
  const fields = [];
  let i = 0;
  Object.keys(data).forEach((key) => {
    if (key !== 'location' && key !== 'createdAt' && key !== 'average-uptime') {
      // eslint-disable-next-line
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
      <ServerLocation data={properties} />
    </div>
  );
};

export default Details;
