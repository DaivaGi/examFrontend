import logo from './logo.svg';
import './App.css';
import '@wix/design-system/styles.global.css';
import { CustomerListPage } from './pages/CustomerList';
import { WarehouseMenu } from './components/WarehouseMenu';
import { CreateCustomerPage } from './pages/CreateCustomer';
import { ViewCustomer } from './pages/ViewCustomer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react'


function App() {

  return (
    <Container text>
    <div className="App">
      <HashRouter>
        <WarehouseMenu />

        <Routes>
          <Route path='/' element={<CustomerListPage />} />
          <Route path='/create' element={<CreateCustomerPage/>} />
          <Route path='/customers/view/:id' element={<ViewCustomer />} />          
        </Routes>
      </HashRouter> 
    </div>
    </Container>
  );
}

export default App;
