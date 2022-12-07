import PageNavigation from "components/UI/PageNavigation";
import ProductionList from "components/UI/ProductionList";

import Models from "./data";

const Production = () => {
  const items = [
    {
      label: "Главная",
    },
    {
      label: "Продукция",
    },
  ];
  return (
    <>
      <PageNavigation title="Продукция" items={items} />
      <ProductionList
        hoverWithImage={true}
        products={Models}
        link="products/1"
      />
    </>
  );
};

export default Production;
