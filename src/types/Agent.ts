import {Ability} from './Ability'

// enum AgentRole {
//   'Duelist',
//   'Controller',
//   'Sentinel',
//   'Initiator',
// }
export interface Agent {
  name: string
  role: string
  bio: string
  image: string
  abilities?: Ability[]
}
