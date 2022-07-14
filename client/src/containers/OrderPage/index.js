import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { Breed } from "../../components/MaterialUI";

/**
 * @function OrderPage
 **/

const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  console.log(user);

  return (
    <Layout>
      <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
        <Breed
          breed={[
            { name: "Home", href: "/" },
            { name: "My Account", href: "/account" },
            { name: "My Orders", href: "/account/orders" },
          ]}
          breedIcon={<IoIosArrowForward />}
        />
        {user.orders.map((order) => {
          return order.items.map((item) => (
            <Card style={{ display: "block", margin: "5px 0" }}>
              <div className="orderItemContainer">
                <div className="orderRow">
                  <div className="orderName">{item.productId.name}</div>
                  <div className="orderPrice">
                    {item.payablePrice}/-
                  </div>
                  <div className="orderPrice">{order.paymentStatus}</div>
                  <Link to={`/order_details/${order._id}`}>
                    <div className="statusbuttons"><button type="button" class="btn btn-success btn-sm">Order Status</button></div>
                  </Link>
                </div>
              </div>
            </Card>
          ));
        })}
      </div>
    </Layout>
  );
};

export default OrderPage;