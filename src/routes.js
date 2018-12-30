import React from 'react'
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux'

import FormLogin from './components/formLogin'
import FormCadastro from './components/formCadastro'
import BoasVindas from './components/BoasVindas'
import FormMain from './components/formMain'

const styles = {
  navigationBarStyle: {
    backgroundColor: '#115E54'
  },
}

export default routes = () => (
  <Router navigationBarStyle={styles.navigationBarStyle} titleStyle={{ color: '#fff' }}>
    <Stack key='root'>
      <Scene key='login' component={FormLogin} title='Login' hideNavBar />
      <Scene key='cadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='boasVindas' component={BoasVindas}  title='Boas Vindas' hideNavBar />
      <Scene key='main' component={FormMain} hideNavBar initial />
    </Stack>
  </Router>
)