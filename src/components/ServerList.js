import React, { Component } from 'react';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';
import MdAccessTime from 'react-icons/lib/md/access-time';

class ServerList extends Component {
  render() {
    const columns = [{
      Header: 'ID',
      headerClassName: 'header-width',
      accessor: 'id'
    }, {
      Header: 'NAME',
      headerClassName: 'header-width',
      accessor: 'name'
    }, {
      Header: 'AVERAGE UPTIME',
      headerClassName: 'header-width',
      accessor: 'active-up-time',
      Cell: row => (
        <div><MdAccessTime className='icons-margin' />{row.value}</div>
      )
    }, {
      Header: 'STATUS',
      headerClassName: 'header-width',
      accessor: 'state',
      Cell: row => {
        switch (row.value) {
          case 'Active':
            return (<div className='circle-green'><div className='icons'>{row.value}</div></div >)
          case 'Inactive':
            return (<div className='circle-grey'><div className='icons'>{row.value}</div></div >)
          case 'Panic':
            return (<div className='circle-orange'><div className='icons'>{row.value}</div></div >)
          case 'Not responding/Unavailable':
            return (<div className='circle-red'><div className='icons'>{row.value}</div></div >)
          default:
            return (
              <div></div>
            )
        }
      }
    }]


    return (
      <div>
        <h1 className='heading-list'>Servers list</h1>
        <ReactTable className='-highlight -striped'
          pageSize='10'
          data={this.props.data}
          columns={columns}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                this.props.history.push({
                  pathname: '/detail',
                  search: '?id=' + rowInfo.original.id,
                  state: { data: rowInfo.original }
                });
                if (handleOriginal) {
                  handleOriginal()
                }
              }
            }
          }}
        />
      </div>
    )
  }
}

const ServerListWithRouter = withRouter(ServerList);
export default ServerListWithRouter;