import { GET_VALIDATOR_DATA, GET_CLUSTER_DATA, GET_NODE_DATA } from './queries'
import { getClient } from './client'
import {
  ValidatorData,
  ClusterData,
  NodeData,
  NodeOperator,
  Cluster
} from '../../types'

export async function fetchValidatorData(): Promise<ValidatorData | undefined> {
  try {
    const { data } = await getClient.query({ query: GET_VALIDATOR_DATA })
    return data
  } catch (error) {
    console.error('Errorfetching  validator  data:', error)
  }
}

export async function fetchNodeOperatorData(): Promise<NodeData | undefined> {
  try {
    const { data } = await getClient.query({ query: GET_NODE_DATA })
    return data
  } catch (error) {
    console.error('Errorfetching  node operator  data:', error)
  }
}

export async function fetchClusterData(): Promise<ClusterData | undefined> {
  try {
    const { data } = await getClient.query({ query: GET_CLUSTER_DATA })
    return data
  } catch (error) {
    console.error('Error fetching cluster data:', error)
  }
}
