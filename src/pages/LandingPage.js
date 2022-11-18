
import Categories from "../components/Categories";


const LandingPage =(props) =>{
  
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  }

  return(
  <div>

    <Categories func={pull_data}/>

  </div>
  );
};

export default LandingPage;