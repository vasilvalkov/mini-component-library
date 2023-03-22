import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <span>{displayedValue}</span>
      <Chevron id={'chevron-down'} size={18} />
      <select id="listbox1" value={value} onChange={onChange}>
        {children}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  height: 43px;
  padding: 12px 52px 12px 18px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
  line-height: 19px;

  &:focus-within {
    outline: 2px solid  ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }

  select {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    appearance: none;
    opacity: 0;
  }
`;

const Chevron = styled(Icon)`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export default Select;
