import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { getDataWithPage } from "../endpoint/getData";
import Loading from "../components/loading/index";
import { CircularProgress } from "@material-ui/core";

const Products = () => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadmore, setLoadMore] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const dataProduct = await getDataWithPage("products", page);
    setProducts(dataProduct.data);
    setLoading(false);
  }, []);

  const showData = () => {
    if (products) {
      return products.map((res) => (
        <tr>
          <th>{res.product_id}</th>
          <th>{res.product_name}</th>
          <th>{res.aisle_id}</th>
          <th>{res.department_id}</th>
          <th>{res.prices}</th>
        </tr>
      ));
    }
  };

  const loadMore = async () => {
    setLoadMore(true);
    const dataProduct = await getDataWithPage("products", page + 1);
    setPage(page + 1);
    setProducts([...products, ...dataProduct.data]);
    setLoadMore(false);
  };

  return (
    <Container>
      {!loading ? (
        <>
          <Table striped bordered hover size="sm" style={{ marginTop: "4rem" }}>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Aisle Id</th>
                <th>Department Id</th>
                <th>Prices</th>
              </tr>
            </thead>
            <tbody>{showData()}</tbody>
          </Table>
          {!loadmore ? (
            <Button
              onClick={() => {
                loadMore();
              }}
            >
              Load More
            </Button>
          ) : (
            <CircularProgress />
          )}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Products;
