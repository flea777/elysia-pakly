import { apartment } from './apartment'
import { condominium } from './condominium'
import { doorman } from './doorman'
import { packageTable } from './package'
import { receiver } from './receiver'
import { resident } from './resident'
import { subscription } from './subscription'
import { tower } from './towers'

export * from './package'
export * from './condominium'
export * from './apartment'
export * from './doorman'
export * from './receiver'
export * from './resident'
export * from './subscription'
export * from './towers'

export default {
  ...apartment,
  ...condominium,
  ...doorman,
  ...packageTable,
  ...receiver,
  ...resident,
  ...subscription,
  ...tower,
};