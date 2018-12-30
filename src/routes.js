import React from 'react'
import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux'

import FormLogin from './components/formLogin'
import FormCadastro from './components/formCadastro'
import BoasVindas from './components/BoasVindas'

export default routes = () => (
  <Router>
    <Stack key='root'>
      <Scene key='login' component={FormLogin} title='Login' initial />
      <Scene key='cadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='boasVindas' component={BoasVindas}  title='Boas Vindas' />
    </Stack>
  </Router>
)