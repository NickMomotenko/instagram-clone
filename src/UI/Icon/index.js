import React from "react";

import styled from "styled-components";

import { ReactSVG } from "react-svg";

const IconWrapp = styled(ReactSVG)`
  fill: ${(props) => (props.fill ? props.fill : "#383A42")};
  display: inline-block;
  width: 15px;

  &:hover {
    fill: red;
    transition: fill 0.3s;
  }
`;

const Icon = ({ url, fill = "#D7E0EB", ...props }) => {
  return <IconWrapp src={url} fill={fill} {...props} />;
};

export default Icon;
