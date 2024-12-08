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
    try {
      // userID
      const userId = 1;

      //data
      const data = {
        userId: userId,
        productId: item.id,
        imageUrl: item.path,
        price: item.price,
        title: item.title,
      };

      console.log("sending mock", data);
      //endpoint
      const response = await mockApiCall(data);
      //response
      if (response.status == 201 || response.status == 200) {
        setRefetch(response.data.productId);
        console.log("set Fav item");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
    //check response
  }
};

const mockApiCall = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 201, data: { productId: data.productId } });
    }, 1000);
  });
};
