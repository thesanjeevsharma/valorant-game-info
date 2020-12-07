import React from 'react'

import {AgentTile} from '../../components'
import {getAgents} from '../../utils/data'

import './Main.scss'

const Main: React.FC = () => {
  const renderAgentsList = () => {
    const agents = getAgents()
    return agents.map((agent) => <AgentTile agent={agent} />)
  }

  const renderAgentImage = () => {
    return <div>Image</div>
  }

  const renderAgentsAbilities = () => {
    return <div>Abilities!</div>
  }

  return (
    <div className="Main">
      <div className="Main__left">{renderAgentsList()}</div>
      <div className="Main__middle">{renderAgentImage()}</div>
      <div className="Main__right">{renderAgentsAbilities()}</div>
    </div>
  )
}

export default Main
