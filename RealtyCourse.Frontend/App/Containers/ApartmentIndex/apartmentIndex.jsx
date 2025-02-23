﻿import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApartments } from './apartmentIndexActions.jsx';
import { Table, Divider } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

class ApartmentIndex extends React.Component {

    componentDidMount() {
        document.title = "React Realty Course - Apartments";
        this.props.getApartments(new Object())
    }



    columnsInfo = [
        {
            title: '#',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'House ID',
            dataIndex: 'houseId',
            key: 'houseId',
            render: (text, record) => (
                <Link to={"/house/read/" + record.houseId}>{record.houseId}</Link>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Link to={"/apartment/read/" + record.id}><SearchOutlined />View</Link>
            )
        }];

    handleTableChange(pagination, filter, sorter) {
        this.props.getApartments(pagination);
    }


    render() {
        let apartmentsInfo = this.props.apartmentsInfo.map(item => ({ ...item, key: item.id }));
        let isLoading = this.props.isLoading;
        let totalCount = this.props.totalCount;



        return (
            <>
                <Divider orientation={"center"}>Apartments list</Divider>
                <Table
                    dataSource={apartmentsInfo}
                    columns={this.columnsInfo}
                    loading={isLoading}
                    pagination={{ total: totalCount }}
                    onChange={this.handleTableChange.bind(this)}
                />
            </>
        );
    }
};



let mapStateToProps = (state) => {
    return {
        apartmentsInfo: state.ApartmentIndexReducer.apartmentsInfo,
        isLoading: state.ApartmentIndexReducer.isLoading,
        totalCount: state.ApartmentIndexReducer.totalCount
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartments: (pagination) =>
            dispatch(getApartments(pagination)),
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentIndex);