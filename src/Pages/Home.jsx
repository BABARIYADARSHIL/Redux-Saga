import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FETCH_USER_DATA } from '../redux/type';

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state)
  const [showLoader, setShowLoader] = useState(true);
  const navigate = useNavigate();
  console.log(users)
  useEffect(() => {
    dispatch({ type: FETCH_USER_DATA });

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <h1>Welcome to Home Page</h1>
      <div className="card" style={{ width: "55rem", margin: "0 auto", padding: "1rem" }}>
        <div className="card-body">
          {showLoader ? (
            <p>Loading...</p>
          ) : (
            <div className="User d-flex" style={{ flexWrap: "wrap", columnGap: "2rem", rowGap: "2rem" }}>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : users && users.length > 0 ?
                (
                  users.map((user) => (
                    <div className="card" style={{ width: "15rem", height: "18rem" }} key={user.id}>
                      <div className="card-body">
                        <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                        <img className="card-img-top" style={{ width: "100%", height: "auto", objectFit: "cover" }} src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                        <h6 className="card-title">{user.email}</h6>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No users found.</p>
                )}
            </div>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}

export default Home;
