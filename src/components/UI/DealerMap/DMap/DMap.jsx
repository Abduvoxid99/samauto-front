import cls from "./DMap.module.scss";
import useTranslation from "next-translate/useTranslation";
import { YMaps, Map, Placemark, Clusterer } from "react-yandex-maps";
import { Container } from "@mui/material";
import { useState } from "react";
import { places } from "../data";
import Input from "./Input";
import DealersList from "./DealersList";
import { useRef } from "react";
import { useEffect } from "react";

export default function DMap() {
  const { t } = useTranslation("common");
  const [yMaps, setYmaps] = useState(null);
  const [isActive, setIsActive] = useState(false)
  const mapRef = useRef()

  useEffect(() => {
    if (isActive) {
      mapRef.current?.behaviors.enable(['scrollZoom', 'drag'])
    }
  }, [isActive])

  return (
    <div className={cls.root}>
      <h2>Дилерская сет</h2>
      <Container className={cls.container}>
        <div className={cls.map}>
          <YMaps>
            <Map
              onClick={() => setIsActive(true)}
              height="100%"
              width="100%"
              instanceRef={mapRef}
              onLoad={(ymaps) => {
                setYmaps(ymaps);
              }}
              defaultState={{
                center: [41.311151, 69.279737],
                zoom: 7,
                behaviors: ["disable('scrollZoom')"]
              }}
              options={['default']}
            >
              <Clusterer options={{ gridSize: 100, preset: 'islands#invertedRedClusterIcons' }}>
                {/* <ZoomControl /> */}
                {places.map((item, index) => (
                  <Placemark
                    key={index + "place"}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: "/icons/map.svg",
                      iconImageSize: [56, 68],
                      iconImageOffset: [0, 0],
                    }}
                    geometry={[item.lat, item.long]}
                  />
                ))}
              </Clusterer>
            </Map>
          </YMaps>
          <div className={cls.dealers}>
            <h3>Дилеры</h3>
            <Input onChange={(e) => console.log("e", e.target.value)} />
            <DealersList />
          </div>
        </div>
      </Container>
    </div>
  );
}
