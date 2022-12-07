import { Container } from "@mui/material";
import ProductionCard from "../ProductionCard";

import cls from "./ProductionList.module.scss";

const ProductionList = ({
  products = [],
  hoverWithImage = false,
}) => {
  return (
    <div className={cls.section}>
      <Container>
        <div className={cls.list}>
          {products?.length > 0 &&
            products.map((product) => (
              <ProductionCard
                key={product.id}
                name={product.name}
                type={product.type}
                image={product.image}
                bgImage={product.bgImage}
                hoverWithImage={hoverWithImage}
                categoryId={product.categoryId}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductionList;
