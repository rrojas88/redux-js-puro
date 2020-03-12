
const createStore = window.Redux.createStore

const spanContador = document.getElementById('spanContador')
const btnIncrement = document.getElementById('btnIncrement')
const btnDecrement = document.getElementById('btnDecrement')

/// Estado Inicial GLOBAL de Toda la App
const STATE_INIT = {
  contador: 0
}

// Ejemplo de Reducer
// A partir del STATE y ACTION genera un nuevo estado !!!
const contadorApp = ( state = STATE_INIT, action  ) => {
  //console.log( state, action )
  switch( action.type ){
    case 'INCREMENT':
      return {
        contador: state.contador + 1
      }
    case 'DECREMENT':
      return {
        contador: state.contador - 1
      }
    default:
      return state
  }
  return state
}

const store = createStore( contadorApp )

// Subcripciones +++++++++++++++++++++++++++++++++++++++++++++

store.subscribe( () => { // Nuevo STATE generado despues de la ACTION
  const state = store.getState()
  console.log('STATE', state)

  spanContador.innerText = state.contador
})

btnIncrement.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})

btnDecrement.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' })
})
