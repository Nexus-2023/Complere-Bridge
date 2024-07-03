import React from 'react'
import { useState, useEffect } from 'react'
import { getClient } from '../../util/graphQL/client'
import { gql } from '@apollo/client'
import Link from 'next/link'
import { ValidatorData, NodeOperator, NodeData, Cluster, ClusterData } from '../../types'

import {
 
  Pagination
} from '@mui/material'
 
 

export function ValidatorsData({data} : {data : ValidatorData | null}) {
 
 
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)
 
 
  const calculateRowsPerPage = (height: number) => {
    if (height <= 900) return 5
    return 5 + Math.floor((height - 900) / 50)
  }

  useEffect(() => {

    const updateRowsPerPage = () => {
      const height = window.innerHeight
      setRowsPerPage(calculateRowsPerPage(height))
    }

    updateRowsPerPage()
    window.addEventListener('resize', updateRowsPerPage)

    return () => {
      window.removeEventListener('resize', updateRowsPerPage)
    }
  }, [])
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage)
  }

 
  if (!data || !data.validators) {
    return (
      <div className="flex items-center justify-center text-white   ">
        <h1>Data Not Found</h1>
      </div>
    )
  }

  const startIndex = (page - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const paginatedValidators = data.validators.slice(startIndex, endIndex)

  return (
    <div className="overflow-x-auto text-gray-200 ">
   
        <table className="mt-4 w-full min-w-full table-fixed border-collapse text-left text-gray-200 transition duration-300 ease-in data-[closed]:opacity-0">
          <thead>
            <tr className="bg-[#00233C]">
              <td className="w-16 p-2 text-center">S.No</td>
              <td className="w-[40%]  text-center lg:w-[60%] xl:w-[80%]">
                Validator Public Key
              </td>
              <td className="w-[30%] text-center">Status</td>
            </tr>
          </thead>
          <tbody>
            {paginatedValidators.length > 0 ? (
              paginatedValidators.map((validator, index) => (
                <tr
                  key={startIndex + index}
                  className="border-2 border-[#003F69] py-4"
                >
                  <td className="text-center">{startIndex + index + 1}</td>
                  <td className="overflow-hidden text-ellipsis whitespace-nowrap p-3 text-center">
                    <Link
                      href={`https://holesky.beaconcha.in/validator/${validator.id}`}
                      target="_blank"
                      className="w-full duration-300 ease-in-out hover:font-medium hover:text-[#2E9AE4] hover:transition-all"
                    >
                      {validator.id}
                    </Link>
                  </td>
                  <td className="text-center  ">{validator.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-4 text-center">
                  No Validators found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className=" flex   w-full items-center justify-center ">
          <Pagination
            className="mt-4 "
            count={Math.ceil(data.validators.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white'
              },
              '& .Mui-selected': {
                color: 'white',
                background: '#003F69'
              }
            }}
          />
        </div>
   
    </div>
  )
}

export function NodeOperatorData({data } : {data : NodeData | null}) {

  const [page, setPage] = useState(1)
  const rowsPerPage = 5
 
 

  if (!data || !data.nodeOperators) {
    return (
      <div className=" flex items-center justify-center text-white    ">
        <h1>Data Not Found</h1>
      </div>
    )
  }

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage)
  }
  const startIndex = (page - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const paginatedOperators  = data.nodeOperators.slice(startIndex, endIndex)
  return (
    <div className="overflow-x-auto">
      <table className="mt-4 w-full table-fixed text-left text-white">
        <thead>
          <tr className="bg-[#00233C]">
            <th className="p-2 text-center">SSV operator ID</th>
            <th className="text-center">SSV operator name</th>
            <th className="text-center">SSV cluster ID</th>
          </tr>
        </thead>
        <tbody>
          {paginatedOperators.length > 0 ? (
            paginatedOperators.map((operator, index) => (
              <tr
                key={startIndex + index}
                className="border-2 border-[#003F69] py-4"
              >
                <td className="p-3 text-center">
                  <Link
                    href={`https://holesky.explorer.ssv.network/operators/${operator.id}`}
                    target="_blank"
                    className="w-full duration-300 ease-in-out hover:font-medium hover:text-[#2E9AE4] hover:transition-all"
                  >
                    {operator.id}
                  </Link>
                </td>
                <td className="text-center">{operator.name}</td>
                <td className="text-center">{operator.clusterId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center">
                No operators found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex w-full items-center justify-center">
        <Pagination
          className="mt-4"
          count={Math.ceil(data.nodeOperators.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white'
            },
            '& .Mui-selected': {
              color: 'white',
              background: '#003F69'
            }
          }}
        />
      </div>
    </div>
  )
}
