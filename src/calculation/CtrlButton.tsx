import React from 'react';
import styled from 'styled-components';
import { EReduxActionTypes } from '../reducer';
import { useDispatch } from 'react-redux';

const RoundButton = styled('button')<{ isRowActive: boolean }>`
  border-radius: 24px;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  justify-content: center;
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 24px;
  box-sizing: border-box;
  border: ${props => (props.isRowActive ? '1px solid #E0E0E0' : '1px solid #FFFFFF')};
  background: ${props => (props.isRowActive ? '#FAFAFA' : '#C6213C')};
  outline: none;
`;

interface ICtrlButtonProps {
  isRowActive: boolean;
  rowIndex: number;
}

const CtrlButton = ({ isRowActive, rowIndex }: ICtrlButtonProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: EReduxActionTypes.CHANGE_ROW_STATE, rowIndex });
  };

  return (
    <RoundButton isRowActive={isRowActive} onClick={handleClick}>
      {isRowActive ? (
        <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.5301 7.75556C8.85601 7.42964 8.85601 6.90122 8.5301 6.5753L5.9549 4.00006L8.53022 1.4247C8.85614 1.09878 8.85614 0.570359 8.53022 0.24444C8.20431 -0.0814796 7.6759 -0.0814796 7.34998 0.24444L4.77466 2.8198L2.19933 0.244439C1.87342 -0.0814802 1.34501 -0.0814795 1.01909 0.24444C0.69318 0.570359 0.69318 1.09878 1.01909 1.4247L3.59442 4.00006L1.01922 6.5753C0.693305 6.90122 0.693306 7.42964 1.01922 7.75556C1.34513 8.08148 1.87355 8.08148 2.19946 7.75556L4.77466 5.18032L7.34986 7.75556C7.67577 8.08148 8.20418 8.08148 8.5301 7.75556Z"
            fill="#6B7F94"
          />
        </svg>
      ) : (
        <svg
          width="9"
          height="8"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.77466 4L1.77466 4C1.22237 4 0.774658 4.44772 0.774658 5C0.774658 5.55228 1.22237 6 1.77466 6H4.77466V9C4.77466 9.55229 5.22237 10 5.77466 10C6.32694 10 6.77466 9.55229 6.77466 9V6L9.77466 6C10.3269 6 10.7747 5.55228 10.7747 5C10.7747 4.44771 10.3269 4 9.77466 4L6.77466 4V1C6.77466 0.447715 6.32694 0 5.77466 0C5.22237 0 4.77466 0.447715 4.77466 1V4Z"
            fill="white"
          />
        </svg>
      )}
    </RoundButton>
  );
};

export default CtrlButton;
