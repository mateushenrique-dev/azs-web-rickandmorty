import { ApolloProvider } from '@apollo/client'
import Details from './components/Details'
import Episodes from './components/Episodes'
import Header from './components/Header'
import EpisodesContextProvider from './context/EpisodesContext'
import { client } from './service/apolo-client'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { FilterContextProvider } from './context/FilterContext'

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Header />

      <Router>
        <EpisodesContextProvider>
          <FilterContextProvider>
            <Routes>
              <Route path="/" element={<Episodes />} />
              <Route path="/episode/:episodeId" element={<Details />} />
            </Routes>
          </FilterContextProvider>
        </EpisodesContextProvider>
      </Router>

    </ApolloProvider>
  )
}

export default App
