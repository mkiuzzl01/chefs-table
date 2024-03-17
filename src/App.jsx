import Navigation_bar from "./component/Navigation_bar/Navigation_bar";
import Banner from "./component/Banner/Banner";
import Recipes from "./component/Recipes/Recipes";
import Foods_cart from "./component/Foods_cart/Foods_cart";
import Want_to_cook from "./component/Want_to_cook/Want_to_cook";
import Footer from "./component/Footer/Footer";
import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [foods,setFoods] = useState([]);

  const wantToCook = (food)=>{
    const newFoods = [...foods,food];
    const duplicate = foods.find((f)=>f.recipe_id === food.recipe_id);
    if(duplicate){
      toast.warn('Already Exist')
    }else{
      setFoods(newFoods);
    }
  }
  return (
    <>
    {/* this is header section here */}
      <header className="max-w-[1320px] m-auto px-3">
        <nav>
          <Navigation_bar></Navigation_bar>
        </nav>
        <Banner></Banner>
      </header>
      {/* this is body part here */}
      <Recipes></Recipes>
      <main className="max-w-[1320px] m-auto flex flex-col lg:flex-row lg:justify-between px-3">
        <Foods_cart
        wantToCook={wantToCook}
        ></Foods_cart>
        <Want_to_cook foods={foods}></Want_to_cook>
      </main>
      {/* this is footer part here */}
      <footer className="px-3">
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </>
  );
}

export default App;
