import axios from "axios";

const emptyBag = async (email) => {
  try {
    const response = await axios({
      url: `${import.meta.env.VITE_GET_ITEMS}/bag/delete?email=${email}`,
      method: "DELETE",
    });
    if (!response.status == 200) throw new Error("Something went wrong.");
  } catch (error) {
    throw new Error(error);
  }
};

export { emptyBag };
