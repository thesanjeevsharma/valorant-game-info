import {Ability} from './Ability'

export type AgentRoleType = 'Duelist' | 'Controller' | 'Sentinel' | 'Initiator'

export interface AgentRole {
  name: AgentRoleType
  icons: string
}

export interface Agent {
  name: string
  role?: AgentRole
  bio?: string
  image?: string
  abilities?: Ability[]
}
