import React, { ReactNode, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import CarouselOpacityController from "./controller";
import classes from "./CarouselOpacity.module.scss";
import ControlPanel from "../../ControlPanel";
import CarouselOpacityWidget from "../CarouselOpacityWidget";

interface ICarouselOpacityProps {
  controller: CarouselOpacityController;
  children: ReactNode[];
  onFetchMore?: () => void;
}

const CarouselOpacity = ({
  controller,
  children,
  onFetchMore,
}: ICarouselOpacityProps) => {
  //controller.onFetchMore = onFetchMore;
  //const [show, setShow] = useState(true);

  controller.onFetchMore = onFetchMore;

  console.log("[CAROUSEL OPACITY] RENDER", controller.activeIndex);

  return (
    <CarouselOpacityWidget controller={controller}>
      {children}
    </CarouselOpacityWidget>
  );
};

export default CarouselOpacity;

/* import React, { ReactNode, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import CarouselOpacityController from "./controller";
import classes from "./CarouselOpacity.module.scss";
import ControlPanel from "../../ControlPanel";
import CarouselOpacityWidget from "../CarouselOpacityWidget";

interface ICarouselOpacityProps {
  controller: CarouselOpacityController;
  children: ReactNode[];
  onFetchMore?: () => void;
}

const CarouselOpacity = ({
  controller,
  children,
  onFetchMore,
}: ICarouselOpacityProps) => {
  //controller.onFetchMore = onFetchMore;
  //const [show, setShow] = useState(true);

  controller.onFetchMore = onFetchMore;

  console.log("[CAROUSEL OPACITY] RENDER", controller.activeIndex);

  return (
  /*   <div
      onClick={() => setShow((prevShow) => !prevShow)}
      className={classes.root}
    > /
      <CarouselOpacityWidget controller={controller}>
        {children}
      </CarouselOpacityWidget>

     {/*  <div
        onClick={(event: any) => {
          event.stopPropagation();
        }}
        className={show ? "" : classes.hidden}
      >
        <ControlPanel controller={controller} />
      </div>
    </div> /}
  );
};

export default CarouselOpacity;

 */
