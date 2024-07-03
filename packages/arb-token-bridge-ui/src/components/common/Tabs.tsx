import * as React from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { ValidatorsData, NodeOperatorData } from './DashboardData'
import { useState, useEffect } from 'react'
import {
  fetchValidatorData,
  fetchNodeOperatorData,
  fetchClusterData
} from '../../util/graphQL/fetch'
import {
  ValidatorData,
  ClusterData,
  NodeData,
  NodeOperator,
  Cluster
} from '../../types'
import { Loader } from './atoms/Loader'
import Fade from '@mui/material/Fade';

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1, width: '100%' }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0)
  const [heightVariable, setHeight] = useState(700)
  const [isLoading, setIsLoading] = useState(true)
  const [nodeData, setNodeData] = useState<NodeData | null>(null)
  const [validatorData, setValidatorData] = useState<ValidatorData | null>(null)
  const [fadeIn, setFadeIn] = useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    const updateHeight = () => {
      const heightValue = window.innerHeight
      setHeight(heightValue)
    }

    async function fetchData() {
      try {
        const validatordata = await fetchValidatorData()
        const nodeData = await fetchNodeOperatorData()
        const clusterData = await fetchClusterData()

        if (nodeData && clusterData) {
          const operatorWithClusterId = nodeData.nodeOperators.map(
            (operator: NodeOperator) => {
              const cluster = clusterData.clusters.find((cluster: Cluster) =>
                cluster.operatorIds.includes(operator.id)
              )
              return { ...operator, clusterId: cluster ? cluster.id : 'N/A' }
            }
          )

          setNodeData({ nodeOperators: operatorWithClusterId })
        }
        if (validatordata) {
          setValidatorData(validatordata)
        }

        setIsLoading(false)
        setFadeIn(true);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  if (isLoading) {
    return (
      <div>
        <Loader color="white" size="large" />
      </div>
    )
  }

  return (
    <Fade in={fadeIn} timeout={1000}> 
    <div
      className={`  mt-2 flex items-center justify-center  `}
      style={{ height: heightVariable > 800 ? 'calc(100vh - 30vh)' : 'auto' }}
    >
      <Box sx={{ width: '100%', bgcolor: 'transparent' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ width: '100%' }}
        >
          <Tab label="Validators" sx={{ color: 'white' }} />
          <Tab label="Node Operators" sx={{ color: 'white' }} />
        </Tabs>

        <CustomTabPanel value={value} index={0}>
          <>
            <ValidatorsData data={validatorData} />
          </>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <>
            <NodeOperatorData data={nodeData} />
          </>
        </CustomTabPanel>
      </Box>
    </div>
    </Fade>
  )
}
