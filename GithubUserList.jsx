import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function GithubUserList() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        setUserList(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from Github API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {userList.map(user => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
