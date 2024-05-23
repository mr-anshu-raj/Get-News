import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 9;

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
          <Route path="/general" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

