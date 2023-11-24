import { Route, Routes } from 'react-router-dom';
import { Username } from './ShowGithubUser';
import { GithubUserList } from './GithubUserList';

function App() {
  return (
    <Routes>
      <Route path="/users" element={<GithubUserList />} />
      <Route path="/users/:username" element={<Username />} />
    </Routes>
  );
}

export default App;
