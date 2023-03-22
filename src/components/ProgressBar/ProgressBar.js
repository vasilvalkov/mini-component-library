/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px"
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px"
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 + "px",
    "--padding": "4px"
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper role="progressbar" style={styles} aria-valuenow={value}>
      <ProgressBarContainer>
        <rect height="100%" width="100%" fill="none" />
        <rect height="100%" width={value + "%"} fill={COLORS.primary} />
      </ProgressBarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: inline-block;
  width: 100%;
  padding: var(--padding);
  margin: 0;
  box-sizing: border-box;
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
`;

const ProgressBarContainer = styled.svg.attrs({
  width: '100%',
  height: '100%'
})`
  display: block;
  border-radius: var(--borderRadius);
`;

export default ProgressBar;
