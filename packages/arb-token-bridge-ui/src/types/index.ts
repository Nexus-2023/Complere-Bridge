export interface NodeOperator {
    id: string
    ip: string
    name: string
    pubkey: string
    clusterId?: string
  }
  export interface Cluster {
    id: string
    operatorIds: string[]
  }
  export interface Validator {
    clusterId: string
    id: string
    rollup: string
    status: string
  }
  
  export interface ClusterData {
    clusters: Cluster[]
  }
  export interface NodeData {
    nodeOperators: NodeOperator[]
  }
  
  export interface ValidatorData {
    validators: Validator[]
  }
  