import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import prodimg from "../../../images/prod1.jpg";
import {IoMdCart} from "react-icons/io";
import { addToCart } from "../../../actions";


/**
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const mfgdate = "07/12";

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <>
      <div style={{ padding: "10px" }}>
        <Card
          style={{
            padding: "15px",
          }}
        >
          {product.products.map((product) => (
            <div className="caProductContainer">
              <div className="caImgContainer">
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                >
                  <img style={{ height: "100px", width: "100px" }} src={require(`../../../../../api/src/uploads/${product.productPictures[0].img}`)} alt="ProductImg" />
                </Link>
              </div>
              <div>
                <div className="caProductName">{product.name}</div>
                <div class="caPriceSection">
                  <span class="caSellingPrice">{`₹ ${product.price}`}</span>
                  <span class="caMRP">MRP ₹<strike>{product.price}</strike></span>
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </>
  )
};

export default ClothingAndAccessories;