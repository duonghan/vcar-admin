/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../../setup/redux/Store';
import { KTSVG, toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { Dropdown1 } from '../../../../../_metronic/partials'
import { getAllCabs } from '../redux/CabCRUD';

export const CabListPage: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch()

  const cabList = useAppSelector(state => state.cab.entities);
  const loading = useAppSelector(state => state.cab.loading);
  const totalItems = useAppSelector(state => state.cab.totalItems);

  return (
  <>
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Cab</span>
          {/* <span className='text-muted mt-1 fw-bold fs-7'>Over 500 new products</span> */}
        </h3>
        <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Member
          </a>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <Dropdown1 />
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='ps-4 min-w-40px rounded-start'>{intl.formatMessage({id: 'COMMON.ID'})}</th>
                <th className='min-w-125px'>{intl.formatMessage({id: 'CAB.REG_NO'})}</th>
                <th className='min-w-125px'>{intl.formatMessage({id: 'CAB.BRANCH'})}</th>
                <th className='min-w-200px'>{intl.formatMessage({id: 'CAB.MODEL'})}</th>
                <th className='min-w-150px'>{intl.formatMessage({id: 'COMMON.TYPE'})}</th>
                <th className='min-w-150px'>{intl.formatMessage({id: 'CAB.BASE_RATE'})}</th>
                <th className='min-w-150px'>{intl.formatMessage({id: 'COMMON.STATUS'})}</th>
                <th className='min-w-200px text-end rounded-end'></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {cabList.map((cab, i) => {

              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  </>
  )
}
