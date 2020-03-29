import axios from "axios";

const deleteCall = async (url: string, id: number) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return { id: response.data.id };
  } catch (err) {
    return { err };
  }
};

const updateCall = async (url: string) => {
  try {
    const response = await axios;
  } catch (err) {
    return { err };
  }
};

module.exports = {
  deleteCall
};
