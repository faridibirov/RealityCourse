import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';
import { Table, Spin } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
class HouseIndex extends React.Component {

    componentDidMount() {
        this.props.getHouses(new Object())
    }

    handleTableChange(pagination, filters, sorter) {
        this.props.getHouses(pagination)
    }

      columnsInfo = [
    {
        title: '#',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: 'Creation date',
        dataIndex: 'creationDateTime',
        key: 'creationDate'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Link to={"/house/read/" + record.id}><SearchOutlined />View</Link>
        )
    }]


    render() {
        let housesInfo = this.props.housesInfo.map(item=>({ ...item, key: item.id }));
        let isLoading = this.props.isLoading;
        let totalCount = this.props.totalCount;
           
        return (<div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Houses list</h3>
            <Table
                dataSource={housesInfo}
                columns={this.columnsInfo}
                loading={isLoading}
                pagination={{ total: totalCount }}
                onChange={this.handleTableChange.bind(this) }
            />
        </div>
        );
    }
};



let mapStateToProps = (state) => {
    return {
        housesInfo: state.HouseIndexReducer.housesInfo,
        error: state.HouseIndexReducer.error,
        isLoading: state.HouseIndexReducer.isLoading,
        totalCount: state.HouseIndexReducer.totalCount
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouses: (pagination) => dispatch(getHouses(pagination))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseIndex);