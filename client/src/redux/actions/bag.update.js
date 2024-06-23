import axios from "axios";

const updateBag = async (id, data) => {
  try {
    const response = await axios({
      url: `${import.meta.env.VITE_GET_ITEMS}/bag/update/${id}`,
      method: "PATCH",
      data: data,
    });
    return { status: response.statusText };
  } catch (error) {
    throw new Error(`Something went wrong`);
  }
};

export { updateBag };
