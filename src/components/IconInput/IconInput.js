import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderBottom": `1px solid ${COLORS.black}`,
    "--fontSize": "0.825rem",
    "--lineHeight": "16px",
    "--textIndent": "24px"
  },
  large: {
    "--borderBottom": `2px solid ${COLORS.black}`,
    "--fontSize": "1.125rem",
    "--lineHeight": "21px",
    "--textIndent": "32px"
  }
};

const IconInput = ({ label, icon, width = 250, size, placeholder, }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <PrefixIcon id={icon} size={size === 'small' ? 16 : 21} strokeWidth={size === 'large' ? 2 : undefined} />
      <TextInput width={width} placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: ${props => props.width}px;
  border: none;
  border-bottom: var(--borderBottom);
  text-indent: var(--textIndent);
  outline-offset: 2px;
  outline-color: ${COLORS.primary};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const PrefixIcon = styled(Icon)`
  position: absolute;
  top: 1px;
`;

export default IconInput;
