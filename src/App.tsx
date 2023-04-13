import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { RoutesComponent } from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store';
import { AuthProvider } from '@context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyles />
        <BrowserRouter>
          <AuthProvider>
            <RoutesComponent />
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
