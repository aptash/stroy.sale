import React from 'react';
import ReactTable, { CellInfo, RowInfo } from 'react-table';
import 'react-table/react-table.css';
import styled from 'styled-components';
import './Calculation.css';
import CtrlButton from './CtrlButton';
import ProductImage from './ProductImage';
import { IReduxState, EReduxActionTypes } from '../reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const CalcBody = styled.div`
  margin: 55px 48px 60px 34px;
  font-family: 'IBM Plex Sans', sans-serif;
`;

const HR = styled.hr`
  border: 1px solid #e6e6e6;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  /* Результаты расчёта */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  /* identical to box height, or 18px */
  display: flex;
  align-items: center;
  margin-bottom: 21px;

  /* Accent_color */
  color: #c6213c;
`;

const Calculation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 650px)' });
  const state = useSelector((state: IReduxState) => state);
  const dispatch = useDispatch();

  const columns = [
    {
      Header: '',
      accessor: 'img',
      width: 44,
      Cell: (cellInfo: CellInfo) => <ProductImage url={cellInfo.value} />,
      style: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    {
      Header: 'Наименование',
      accessor: 'name',
      style: {
        textAlign: 'left',
      },
      headerStyle: {
        textAlign: 'left',
      },
    },
    {
      Header: 'Кол-во',
      accessor: 'count',
      width: 88,
    },
    {
      Header: 'Цена за ед, ₽',
      accessor: 'price',
      width: 133,
    },
    {
      Header: 'Стоимость, ₽',
      accessor: 'total',
      width: 133,
    },
    {
      Header: '',
      accessor: 'isRowActive',
      width: 44,
      Cell: (cellInfo: CellInfo) => (
        <CtrlButton isRowActive={cellInfo.value} rowIndex={cellInfo.index} />
      ),
      style: {
        overflow: 'unset',
      },
    },
  ];

  if (!state.data || !state.data.length) {
    dispatch({ type: EReduxActionTypes.GET_CALCULATION });
  }
  return (
    <CalcBody>
      <Title>Результаты расчёта</Title>
      <HR />
      {state.data && state.data.length ? (
        isMobile ? (
          <p>Мобильная версия таблицы...</p>
        ) : (
          <ReactTable
            data={state.data}
            columns={columns}
            showPagination={false}
            sortable={false}
            resizable={false}
            defaultPageSize={state.data.length}
            getTrProps={(rowInfo: RowInfo, column: any) => {
              if (!column.row.isRowActive) {
                return {
                  style: {
                    background: '#FAFAFA',
                  },
                };
              }
              return {};
            }}
          />
        )
      ) : (
        <p>Загрузка...</p>
      )}
    </CalcBody>
  );
};

export default Calculation;
