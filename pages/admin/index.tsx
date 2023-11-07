import React, { useState, useEffect } from 'react'
import useSWR from 'swr'

import { Grid, Typography } from '@mui/material'
import {
  AccessTimeOutlined,
  AttachMoneyOutlined,
  CancelPresentationOutlined,
  CategoryOutlined,
  CreditCardOffOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  GroupOutlined,
  ProductionQuantityLimitsOutlined
} from '@mui/icons-material'

import AdminLayout from '../../components/layouts/AdminLayout'
import SummaryTile from '../../components/admin/SummaryTile'
import { DashboardSummaryResponse } from '../../interfaces'

const DashboardPage = () => {

  const { data, error } = useSWR<DashboardSummaryResponse>('/api/admin/dashboard', {
    refreshInterval: 30 * 1000 // 30seg
  })

  const [refreshIn, setRefreshIn] = useState<number>(30)

  useEffect(() => {

    const interval = setInterval(() => {
      setRefreshIn(refreshIn => refreshIn > 0 ? refreshIn - 1 : 30)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!error && !data) {
    return <></>
  }

  if (error) {
    console.error(error)
    return <Typography>Error when loading the information</Typography>
  }

  const {
    numberOfOrders,
    numberOfClients,
    numberOfProducts,
    productsWithNoInventory,
    lowInventory,
    paidOrders,
    notPaidOrders
  } = data!

  return (
    <AdminLayout
      title='Dashboard'
      subTitle='General Stadistics'
      icon={ <DashboardOutlined /> }
    >
      <Grid container spacing={ 3 }>
        <SummaryTile
          title={ numberOfOrders }
          subTitle='Total orders'
          icon={ <CreditCardOutlined color='secondary' sx={ { fontSize: 40 } } /> }
        />
        <SummaryTile
          title={ paidOrders }
          subTitle='Paid orders'
          icon={ <AttachMoneyOutlined color='success' sx={ { fontSize: 40 } } /> }
        />
        <SummaryTile
          title={ notPaidOrders  }
          subTitle='Pending orders'
          icon={ <CreditCardOffOutlined color='error' sx={ { fontSize: 40 } } /> }
        />
        <SummaryTile
          title={ numberOfClients }
          subTitle='Clients'
          icon={ <GroupOutlined color='primary' sx={ { fontSize: 40 } } /> }
        />
        <SummaryTile
          title={ numberOfProducts }
          subTitle='Products'
          icon={ <CategoryOutlined color='warning' sx={ { fontSize: 40 } } /> }
        />
        <SummaryTile
          title={ productsWithNoInventory }
          subTitle='No stock products'
          icon={ <CancelPresentationOutlined color='error' sx={ { fontSize: 40 } } /> }
        />
        <SummaryTile
          title={ lowInventory }
          subTitle='Low stock products'
          icon={ <ProductionQuantityLimitsOutlined color='warning' sx={ { fontSize: 40 } } /> }
        />
        <SummaryTile
          title={ refreshIn }
          subTitle='Update at'
          icon={ <AccessTimeOutlined color='secondary' sx={ { fontSize: 40 } } /> }
        />
      </Grid>
    </AdminLayout>
  )
}

export default DashboardPage