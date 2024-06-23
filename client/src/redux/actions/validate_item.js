import axios from "axios";

const validateItem = async (target, item, email) => {
  try {
    const response = await axios({
      url: `${import.meta.env.VITE_GET_ITEMS}/${target}/${item.id}`,
      method: "GET",
    });

    if (!response.status == 200) throw new Error(`Something went wrong`);

    if (!response.data.message) {
      const { _id, ...data } = item;

      await axios({
        url: `${import.meta.env.VITE_GET_ITEMS}/${target}/add`,
        method: "POST",
        data: { ...data, email, quantity: 1 },
      });
      return { status: true, _id };
    } else return { status: false };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { validateItem };
