import React from 'react'
import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux'

import FormLogin from './components/formLogin'
import FormCadastro from './components/formCadastro'

export default routes = () => (
  <Router>
    <Stack key='root'>
      <Scene key='login' component={FormLogin} title='Login' initial />
      <Scene key='cadastro' component={FormCadastro} title='Cadastro' />
    </Stack>
  </Router>
)