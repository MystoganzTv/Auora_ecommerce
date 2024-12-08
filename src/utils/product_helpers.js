export const increment = (setCount, count) => {
  setCount(count + 1);
};
export const decrement = (setCount, count) => {
  if (count > 1) {
    setCount(count - 1);
  }
};
export const handlePress = async (userLogin, navigation, item, setRefetch) => {
  if (userLogin == false) {
    //go to different page

    console.log("handlePress");
  } else {
    // userID
    const userId = 1;
    const data = {
      userId: userId,
    };
    //endpoint
    //data
    //response
    //check response
  }
};
