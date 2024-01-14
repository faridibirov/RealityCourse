import React from 'react';
import { render } from 'react-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Descriptions, Divider, Row, Col, Spin } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import { getApartment } from './apartmentReadActions.jsx'

class ApartmentRead extends React.Component {

    componentDidMount() {
        this.props.getApartment(1);
    }

    render() {
        let apartmentInfo = this.props.apartmentInfo;
        let isLoading = this.props.isLoading;
        let error = this.props.error;


        if (isLoading) {
            return (
                <div style={{ textAlign: "center", marginTop: "200px" }}>
                    <Spin size="large" />
                </div>
            );
        }

        if (error) {
            return (
                <div>Error in data loading: {error}</div>
            );
        }

        return (
            <div>
                <Divider orientation={"center"}>Information about single apartment</Divider>

                <Row>
                    <Col span={4}>
                        <img key="apart_logo" width={160} height={160} src="/images/interior_logo.png" />
                    </Col>
                    <Col span={20}>
                        <Descriptions bordered column={2}>
                            <Descriptions.Item label="ID in DB:"> {apartmentInfo.id}</Descriptions.Item>
                            <Descriptions.Item label="Creation date:"> {apartmentInfo.creationDateTime}</Descriptions.Item>
                            <Descriptions.Item label="House ID in DB:" span={2}> {apartmentInfo.houseId}</Descriptions.Item>
                            <Descriptions.Item label="Price:"> {apartmentInfo.price}</Descriptions.Item>
                            <Descriptions.Item label="Floor:"> {apartmentInfo.floor}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>
                <div style={{ textAlign: "center", marginTop: "50px", fontWeight: "bold" }}>
                    <Link to={"/house/index"}><RollbackOutlined />Back to apartments</Link>
                </div>
            </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        apartmentInfo: state.ApartmentReadReducer.apartmentInfo,
        isLoading: state.ApartmentReadReducer.isLoading,
        error: state.ApartmentReadReducer.error
    };
};

let mapActionsToProps = (dispatch) => {
    return {
        getApartment: (id) => dispatch(getApartment(id))
    };
};

export default connect(mapStateToProps, mapActionsToProps)(ApartmentRead);