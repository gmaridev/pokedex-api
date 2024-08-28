import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import styled from 'styled-components';
export default function ArrowButton({onClick, disabled}) {
  const ResponsiveIcon = styled(FaAngleRight)`
  color: white;
  font-size: 26px;

  @media (min-width: 375px) and (max-width: 414px) {
    font-size:26px;
    margin-left:-5px;
  }

`;
  return (
    <button onClick={onClick} className='btn-next' disabled={disabled}>
      <ResponsiveIcon />
    </button>
  )
}
