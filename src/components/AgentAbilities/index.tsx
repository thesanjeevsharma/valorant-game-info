import React from 'react'
import clsx from 'clsx'
import {Ability} from '../../types/Ability'

import './AgentAbilities.scss'

interface ComponentProps {
  abilities: Ability[]
}

const AgentAbilities: React.FC<ComponentProps> = ({abilities}) => {
  const [selectedAbility, setSelectedAbility] = React.useState<Ability>()

  React.useEffect(() => {
    setSelectedAbility(abilities[0])
  }, [abilities])

  return (
    <div className="Abilities">
      <div className="Abilities__Keys">
        {abilities.map((ability) => (
          <button
            className={clsx('Abilities__Key', selectedAbility?.key === ability.key && 'Abilities__Key--active')}
            key={ability.key}
            onClick={() => setSelectedAbility(ability)}
          >
            <div className="Abilities__Key-Value">{ability.key}</div>
            <img alt="Key" className="Abilities__Key-Icon" src={ability.icon} />
          </button>
        ))}
      </div>
      <div className="Abilities__Ability">
        <h4 className="Abilities__Ability-title"> {selectedAbility?.title} </h4>
        <p className="Abilities__Ability-info">{selectedAbility?.info}</p>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        {/* <video autoPlay className="Abilities__Ability-video">
          <source src={selectedAbility?.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  )
}

export default AgentAbilities
