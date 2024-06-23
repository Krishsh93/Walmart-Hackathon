import axios from "axios";

const removeBagItem = async (target, id) => {
  try {
    await axios({
      url: `${import.meta.env.VITE_GET_ITEMS}/${target}/delete/item/${id}`,
      method: "DELETE",
    });
  } catch (error) {
    throw new Error(error);
  }
};

export { removeBagItem };
