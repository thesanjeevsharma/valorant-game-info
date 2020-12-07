import React from 'react'
import {Agent} from '../../types/Agent'

import './AgentTile.scss'

interface ComponentProps {
  agent: Agent
}

const AgentTile: React.FC<ComponentProps> = ({agent}) => {
  return (
    <div className="AgentTile">
      <img alt={agent.name} className="AgentTile__img" src="https://via.placeholder.com/80" />
      <h2 className="AgentTile__name">{agent.name}</h2>
    </div>
  )
}

export default AgentTile
