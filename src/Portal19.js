import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './Components/Routes/AppRouter'
import { store } from './Store/store'

export const Portal19 = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
