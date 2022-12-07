import News from "components/UI/News";
import FAQ from "components/UI/FAQ";
import Banner from "components/UI/Banner/Banner";
import DealerMap from "components/UI/DealerMap/DealerMap";
import Products from "components/UI/Products";

export function Main() {
  return (
    <main>
      <Banner />
      <Products />
      <DealerMap />
      <News />
      <FAQ />
    </main>
  );
}
