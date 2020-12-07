import {Agent} from '../types/Agent'
import agents from '../data/agents.json'

export const getAgents = (): Agent[] => {
  return agents
}
