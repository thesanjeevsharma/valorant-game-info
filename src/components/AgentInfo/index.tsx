import React from 'react'
import {Agent} from '../../types/Agent'

import './AgentInfo.scss'

interface ComponentProps {
  agent: Agent | undefined
}

const AgentInfo: React.FC<ComponentProps> = ({agent}) => {
  const renderAbilities = () => {
    return <p>Abilities!</p>
  }

  return (
    <div className="AgentInfo">
      <h5 className="AgentInfo__section-title">&#47;&#47; Role</h5>
      <p className="AgentInfo__role"> {agent?.role} </p>
      <h5 className="AgentInfo__section-title">&#47;&#47; Biography</h5>
      <p className="AgentInfo__bio">{agent?.bio}</p>
      <h5 className="AgentInfo__section-title">&#47;&#47; Abilities</h5>
      {renderAbilities()}
    </div>
  )
}

export default AgentInfo
