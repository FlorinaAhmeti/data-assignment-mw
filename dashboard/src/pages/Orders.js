import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { getDataWithPage } from "../endpoint/getData";
import Loading from "../components/loading/index";
import {CircularProgress} from '@material-ui/core'

const Orders = () => {
  const [page, setPage] = useState(0);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadmore, setLoadMore] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const dataOrder = await getDataWithPage("orders", page);
    setOrders(dataOrder.data);
    setLoading(false);
  }, []);

  const showData = () => {
    if (orders) {
      return orders.map((res) => (
        <tr>
          <th>{res.order_id}</th>
          <th>{res.user_id}</th>
          <th>{res.order_number}</th>
          <th>{res.orders_day_of_week}</th>
          <th>{res.order_hour_of_day}</th>
          <th>{res.days_since_prior_order}</th>
        </tr>
      ));
    }
  };

  const loadMore = async () => {
    setLoadMore(true);
    const dataOrder = await getDataWithPage("orders", page + 1);
    setPage(page + 1);
    setOrders([...orders, ...dataOrder.data]);
    setLoadMore(false);
  };

  return (
    <Container>
      {!loading ? (
        <>
          <Table striped bordered hover size="sm" style={{ marginTop: "4rem" }}>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>User Id</th>
                <th>Order Number</th>
                <th>Order's Day Of The week</th>
                <th>Order's Hour Of The Day</th>
                <th>Days Since Prior Order</th>
              </tr>
            </thead>
            <tbody>{showData()}</tbody>
          </Table>
          {!loadmore ?
          <Button
            onClick={() => {
              loadMore();
            }}
          >
            Load More
          </Button>
          :<CircularProgress />}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Orders;
