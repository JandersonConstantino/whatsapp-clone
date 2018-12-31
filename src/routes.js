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
import AddContact from './components/formNewContact'

const styles = {
  navigationBarStyle: {
    backgroundColor: '#115E54'
  },
}

export default routes = () => (
  <Router navigationBarStyle={styles.navigationBarStyle} titleStyle={{ color: '#fff' }}>
    <Stack key='root'>
      <Scene key='login' component={FormLogin} title='Login' hideNavBar initial />
      <Scene key='cadastro' component={FormCadastro} title='Cadastro' />
      <Scene key='boasVindas' component={BoasVindas}  title='Boas Vindas' hideNavBar />
      <Scene key='main' component={FormMain} hideNavBar />
      <Scene key='addContact' component={AddContact} title='Novo contato' />     
    </Stack>
  </Router>
)