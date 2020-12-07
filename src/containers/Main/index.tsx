import React from 'react'

import {AgentTile} from '../../components'
import {Agent} from '../../types/Agent'
import {getAgents} from '../../utils/data'

import './Main.scss'

const Main: React.FC = () => {
  const [agents, setAgents] = React.useState<Agent[]>([])
  const [selectedAgent, setSelectedAgent] = React.useState<Agent | undefined>(undefined)

  React.useEffect(() => {
    const fetchedAgents = getAgents()
    setAgents(fetchedAgents)
    if (fetchedAgents.length) {
      setSelectedAgent(fetchedAgents[0])
    }
  }, [])

  const filterAndSelectAgent = (name: string) => {
    const foundAgent = agents.find(({name: agentName}) => agentName === name)
    if (foundAgent) {
      setSelectedAgent(foundAgent)
    }
  }

  const renderAgentsList = () => {
    return agents.map((agent) => <AgentTile agent={agent} onClick={filterAndSelectAgent} />)
  }

  const renderAgentInfo = () => {
    return <div className="Main__right__info">{selectedAgent?.name}</div>
  }

  return (
    <div className="Main">
      <div className="Main__left">{renderAgentsList()}</div>
      <div className="Main__middle">
        <img
          alt="Agent"
          className="Main__middle__img"
          src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png"
        />
      </div>
      <div className="Main__right">{renderAgentInfo()}</div>
    </div>
  )
}

export default Main
