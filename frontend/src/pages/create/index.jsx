import React from 'react'
import DashboardLayout from "../../layouts/dashboard/index";
import CarForm from '../../components/car-form/index'

const index = () => {
  return (
    <DashboardLayout>
        <CarForm />
      </DashboardLayout>
  )
}

export default index