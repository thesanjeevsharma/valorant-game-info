import React from 'react'
import clsx from 'clsx'
import {Agent} from '../../types/Agent'

import './AgentTile.scss'

interface ComponentProps {
  active: boolean
  agent: Agent
  onClick: (name: string) => void
}

const AgentTile: React.FC<ComponentProps> = ({active, agent, onClick}) => {
  return (
    <button className={clsx('AgentTile', active && 'AgentTile--active')} onClick={() => onClick(agent.name)}>
      {/* <img alt={agent.name} className="AgentTile__img" src="https://via.placeholder.com/80" /> */}
      <h2 className="AgentTile__name">{agent.name}</h2>
    </button>
  )
}

export default AgentTile
