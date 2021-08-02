import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import VerticalBar from "../components/visualizations/VerticalBar";
import HorizontalBar from "../components/visualizations/HorizontalBar";
import LinearGraph from "../components/visualizations/LinearGraph";
import { getData } from "../endpoint/getData";
import Loading from "../components/loading/index"

const Visualizations = () => {
  const [loading, setLoading] = useState(true);
  const [productsPerDepartment, setProductsPerDepartment] = useState(null);
  const [ordersPerUser, setOrdersPerUser] = useState(null);
  const [ordersDaily, setOrdersDaily] = useState(null);
  const [ordersHourly, setOrdersHourly] = useState(null);

 

  useEffect(async () => {
    const productsPerDepartment = await getData("dataFunctions/number_of_products_by_department");
    setProductsPerDepartment(productsPerDepartment.data.number_of_products_by_department);

    const ordersPerUser = await getData("dataFunctions/number_of_orders_per_user");
    setOrdersPerUser(ordersPerUser.data);

    const ordersDaily = await getData("dataFunctions/orders_daily");
    setOrdersDaily(ordersDaily.data);

    const ordersHourly = await getData("dataFunctions/number_of_orders_per_hour");
    setOrdersHourly(ordersHourly.data);

    setLoading(false);
  }, []);

  return (
    <>
      {!loading ? (
        <Container>
          <Row style={{ width: "70%", margin: "5rem auto 0 auto" }}>
            <VerticalBar data={productsPerDepartment} />
          </Row>
          <Row style={{ width: "70%", margin: "5rem auto 0 auto" }}>
            <HorizontalBar data={ordersPerUser} />
          </Row>
          <Row style={{ width: "70%", margin: "5rem auto 0 auto" }}>
            <LinearGraph
              data={ordersDaily}
              title={"Orders made last month"}
              description={
                "The numbers on the X-axis represent the number of days before today"
              }
            />
          </Row>
          <Row style={{ width: "70%", margin: "5rem auto 0 auto" }}>
            <LinearGraph
              data={ordersHourly}
              title={"Orders Hourly"}
              description={
                "The numbers on the Y-axis represent the hour of the day starting from 00:00"
              }
            />
          </Row>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Visualizations;
