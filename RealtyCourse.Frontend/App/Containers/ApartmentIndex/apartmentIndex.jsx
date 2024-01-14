import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getApartments } from './apartmentIndexActions.jsx';
import { Table, Divider } from 'antd';
import { SearchOutlined } from "@ant-design/icons";

class ApartmentIndex extends React.Component {

    componentDidMount() {
        this.props.getApartments(1)
    }

    render() {
        let apartmentsInfo = this.props.apartmentsInfo;
        let isLoading = this.props.isLoading;


        let columnsInfo = [
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
            }]


        return (
            <>
                <Divider orientation={"center"}>Apartments list</Divider>
                    <Table
                        dataSource={apartmentsInfo}
                        columns={columnsInfo}
                    loading={isLoading}
                        />
                </>
        );
    }
};



let mapStateToProps = (state) => {
    return {
        apartmentsInfo: state.ApartmentIndexReducer.apartmentsInfo,
        error: state.ApartmentIndexReducer.error,
        isLoading: state.ApartmentIndexReducer.isLoading,
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartments: () =>
            dispatch(getApartments()),
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentIndex);