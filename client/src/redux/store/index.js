import { createStore, applyMiddleware } from 'redux'// * applyMiddleware permite agregar Middleware al store 
import rootreducer from '../reducers/reducers'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// windows._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)))
//*composeWithDevTools: habilita las herramientas de desarrollo de Redux
//*Agrega el middleware thunk para manejar acciones asíncronas.
export default store