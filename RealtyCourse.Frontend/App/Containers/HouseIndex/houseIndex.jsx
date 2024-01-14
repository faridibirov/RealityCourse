import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getHouses } from './houseIndexActions.jsx';
import { Table, Spin } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
class HouseIndex extends React.Component {

    componentDidMount() {
        const id = this.props.match.paramsid;
        this.props.getHouses(id)
    }

    render() {
        let housesInfo = this.props.housesInfo;
        let isLoading = this.props.isLoading;

        let columnsInfo = [
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
                    <Link to={"/house/read/" + record.id}><SearchOutlined/>View</Link>
                )
            }]
           
        return (<div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Houses list</h3>
            <Table
                dataSource={housesInfo}
                columns={columnsInfo}
                loading={isLoading }
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
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getHouses: () => dispatch(getHouses())
    };
};

export default connect(mapStateToProps, mapActionsToProps)(HouseIndex);