import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { Skeleton } from "@mui/material";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/index";

Product.propTypes = {
  product: PropTypes.object,
};

function Product(product) {
  const thumbnailUrl = product.product.thumbnail
    ? `${STATIC_HOST}${product.product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box padding={1}>
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.product.name}</Typography>
      <Typography variant="body2">
        {product.product.salePrice} - {product.product.promotionPercent}
      </Typography>
    </Box>
  );
}

export default Product;
