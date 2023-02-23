import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container homepage">
      <div className="card mt-5">
        <div className="card-body">
          <h1>Home Page</h1>
          <button onClick={()=>navigate('/')} className="btn btn-primary">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
