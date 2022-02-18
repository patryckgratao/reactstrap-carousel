import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Markup } from "interweave";
import { mapToCssModules } from "./utils";

const CarouselCaption = (props) => {
  const { cssModule, className, buttons, texts } = props;

  if (!buttons || !texts) {
    return null
  }

  const classes = mapToCssModules(
    classNames(className, "carousel-caption", "d-flex", "flex-column"),
    cssModule
  );

  const renderButtons = buttons?.map((button, index) => {
    return (
      <a
        key={index}
        href={button?.link ?? "#"}
        target="_blank"
        style={{
          background: button?.backgroundColor ?? "#fff",
          borderRadius: button?.borderRadius ?? "0",
          border:
            button.borderSize && button.borderColor
              ? `${button.borderSize} solid ${button.borderColor}`
              : "none",
          fontSize: button?.fontSize ?? "1rem",
          color: button?.textColor ?? "#000",
          fontWeight: button?.decoration === "bold" ? "bold" : "normal",
          textDecoration:
            button?.decoration === "underline" ? "underline" : "none",
          fontStyle: button?.decoration === "italic" ? "italic" : "normal",
          width: button?.width ?? "200px",
          height: button?.height ?? "40px",
          position: "absolute",
          bottom: button?.positionX ?? "0",
          left: button?.positionY ?? "0",
          padding: "0",
          boxShadow: "unset",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {button.text}
      </a>
    );
  });

  const renderTexts = texts?.map((text, index) => {
    return (
      <span
        key={index}
        style={{
          color: text?.textColor,
          fontSize: text?.fontSize,
          fontWeight: text?.decoration === "bold" ? "bold" : "normal",
          textDecoration:
            text?.decoration === "underline" ? "underline" : "none",
          fontStyle: text?.decoration === "italic" ? "italic" : "normal",
          width: text?.width ?? "100%",
          height: text?.height ?? "auto",
          position: "absolute",
          bottom: text?.positionX ?? "0",
          left: text?.positionY ?? "0",
          textAlign: text?.textAlignment ?? "left",
        }}
      >
        <Markup content={text?.textChildren} />
      </span>
    );
  });

  return (
    <div className={classes}>
      {renderButtons}
      {renderTexts}
    </div>
  );
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes.node,
  captionText: PropTypes.node.isRequired,
  cssModule: PropTypes.object,
  className: PropTypes.string,
};

export default CarouselCaption;
