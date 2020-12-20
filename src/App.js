import Lions from './components/Lions'
import './App.css';
import { InMemoryCache , ApolloClient, ApolloProvider} from '@apollo/client';
import logo from './logo.png'

const client = new ApolloClient({
  uri: 'http://localhost:8080/query',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="logo-lion" className="logo" />
        <h1 className="display-4 my-3">My Apollo Lions</h1>
        <Lions />
      </div>
    </ApolloProvider>
  );
}


export default App;
