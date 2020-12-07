import React from 'react'
import {Agent} from '../../types/Agent'

import './AgentTile.scss'

interface ComponentProps {
  agent: Agent
  onClick: (name: string) => void
}

const AgentTile: React.FC<ComponentProps> = ({agent, onClick}) => {
  return (
    <button className="AgentTile" onClick={() => onClick(agent.name)}>
      <img alt={agent.name} className="AgentTile__img" src="https://via.placeholder.com/80" />
      <h2 className="AgentTile__name">{agent.name}</h2>
    </button>
  )
}

export default AgentTile
