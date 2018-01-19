import React, { Component } from 'react';

import ServerLocation from './ServerLocation';

export default class Details extends Component {
  render() {
    const { data } = this.props.location.state;
    const fields = [];
    let i = 0;
    Object.keys(data).forEach((key) => {
      if (key !== 'location' && key !== 'createdAt' && key !== 'average-uptime') {
        fields.push(
          <tr key={i}>
            <td>{key}</td>
            <td>{data[key]}</td>
          </tr>
        )
      }
      i++;
    })

    return (
      <div>
        <table className='detail-table'>
          <tbody>
            {fields}
          </tbody>
        </table>
        <ServerLocation data={this.props.location.state.data.location} />
      </div>
    )
  }
}