import { useCallback, useState } from "react";
import cls from "./Properties.module.scss";
import { properties } from "../data";
import GreyButton from "components/UI/Buttons/GreyButton";
import Characteristics from "./Characteristics/Characteristics";
import { Container } from "@mui/material";

export default function Properties() {
  const [selectedTab, setSelectedTab] = useState("main");

  const TabBody = useCallback(
    ({ tab, children }) => {
      if (tab === selectedTab) return children;
      return <></>;
    },
    [selectedTab]
  );
  return (
    <Container>
      <div className={cls.Properties}>
        <div className={cls.btns}>
          {properties.map((item, index) => (
            <GreyButton
              onClick={() => setSelectedTab(item.property)}
              className={`${cls.btn} ${
                item.property === selectedTab && cls.activeBtn
              }`}
              key={index + "grey-btn"}
            >
              {item.name}
            </GreyButton>
          ))}
        </div>
        <TabBody tab="main">
          <Characteristics />
        </TabBody>
      </div>
    </Container>
  );
}
