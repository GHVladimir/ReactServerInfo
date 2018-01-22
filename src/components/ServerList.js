import React, { Component } from 'react';
import ReactTable from 'react-table';
import { withRouter } from 'react-router-dom';
import MdAccessTime from 'react-icons/lib/md/access-time';
import PropTypes from 'prop-types';

class ServerList extends Component {
  navigateToDetails(data) {
    this.props.history.push({
      pathname: '/detail',
      search: `?id=${data.id}`,
      state: { data },
    });
  }
  render() {
    const columns = [{
      Header: 'ID',
      headerClassName: 'header-height',
      accessor: 'id',
      minWidth: 10,
    }, {
      Header: 'NAME',
      headerClassName: 'header-height',
      accessor: 'name',
      minWidth: 50,
    }, {
      Header: 'AVERAGE UPTIME',
      headerClassName: 'header-height',
      accessor: 'uptime',
      sortable: false,
      Cell: row => (
        <div><MdAccessTime className="icons-margin" />{row.value}</div>
      ),
    },
    {
      Header: 'STATUS',
      headerClassName: 'header-height',
      accessor: 'state',
      minWidth: 50,
      Cell: (row) => {
        switch (row.value) {
          case 'Active':
            return (<div className="circle-green"><div className="icons">{row.value}</div></div >);
          case 'Inactive':
            return (<div className="circle-grey"><div className="icons">{row.value}</div></div >);
          case 'Panic':
            return (<div className="circle-orange"><div className="icons">{row.value}</div></div >);
          case 'Not responding/Unavailable':
            return (<div className="circle-red"><div className="icons">{row.value}</div></div >);
          default:
            return (
              <div />
            );
        }
      },
    }];

    return (
      <div>
        <h1 className="heading-list">Servers list</h1>
        <ReactTable
          className="-highlight -striped"
          pageSize="10"
          showPageSizeOptions={false}
          data={this.props.data}
          columns={columns}
          getTdProps={(state, rowInfo) => ({
            onClick: (e, handleOriginal) => {
              this.navigateToDetails(rowInfo.original);
              if (handleOriginal) {
                handleOriginal();
              }
            },
          })}
        />
      </div>
    );
  }
}

ServerList.propTypes = {
  /* eslint-disable */
  history: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

const ServerListWithRouter = withRouter(ServerList);
export default ServerListWithRouter;