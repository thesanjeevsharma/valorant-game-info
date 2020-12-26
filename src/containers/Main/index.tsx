import React from 'react'

import {AgentInfo, AgentTile} from '../../components'
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
    return agents.map((agent) => (
      <AgentTile active={selectedAgent?.name === agent.name} agent={agent} onClick={filterAndSelectAgent} />
    ))
  }

  return (
    <div className="Main">
      <div className="Main__left">{renderAgentsList()}</div>
      <div className="Main__middle">
        <img alt="Agent" className="Main__img" src={selectedAgent?.image} />
      </div>
      <div className="Main__right">
        <AgentInfo agent={selectedAgent} />
      </div>
    </div>
  )
}

export default Main
