import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { recetasReducer } from '../Reducers/recetasReducer'
import { calendarioReducer } from '../Reducers/calendarioReducer';
import { fraseReducer } from '../Reducers/fraseReducer';
import { galeriaReducer } from '../Reducers/galeriaReducer';
import { noticiasReducer } from '../Reducers/noticiasReducer';
import { uiReducer } from '../Reducers/uiReducer';

const reducers = combineReducers({
    ui: uiReducer,
    frase: fraseReducer,
    noticias: noticiasReducer,
    galeria: galeriaReducer,
    calendario: calendarioReducer,
    recetas: recetasReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);