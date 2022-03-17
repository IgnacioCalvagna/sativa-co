import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return <h1>Page Not Found</h1>;
};

export default NotFound;
