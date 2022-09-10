import { types } from '@babel/core'
import { connect } from 'react-redux'
import * as actions from './state/action-creators.js'





export default connect(st => st, actions)(Pokemon) // if connecting App