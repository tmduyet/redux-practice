import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "./../../components/HobbyList/index";
import { addNewHobby, setActiveHobby } from "./../../actions/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};
export const Homepage = () => {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  const handleAddHobbyClick = () => {
    //Random a hobby object : id + title
    let newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby${newId}`,
    };
    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleHobbyClick=(hobby)=>{
    const action = setActiveHobby(hobby);
    dispatch(action);
  }
  return (
    <div>
      <h2>Redux hook</h2>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList hobbyList={hobbyList} activeId={activeId}
      onHobbyClick={handleHobbyClick}></HobbyList>
    </div>
  );
};
export default Homepage;
