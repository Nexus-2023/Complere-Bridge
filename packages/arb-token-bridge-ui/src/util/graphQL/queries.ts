import { gql } from '@apollo/client'

export const GET_VALIDATOR_DATA = gql`
  query Now {
    validators {
      clusterId
      id
      rollup
      status
    }
  }
`

 

export const GET_NODE_DATA = gql`
  query Now2 {
    nodeOperators {
      id
      ip
      name
      pubkey
    }
  }
`

export const GET_CLUSTER_DATA = gql`
  query MyQuery {
    clusters {
      id
      operatorIds
    }
  }
`
