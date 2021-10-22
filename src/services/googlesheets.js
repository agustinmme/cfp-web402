import axios from "axios";
import Papa from "papaparse";
const noticias = async () => {
  return axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQc4KiCLz83LwZGae7G60_1mMdIlt4Pvc9c9sNQnb_hZU9Cbi5x7sy8xxdX8SFLzWQdEKW8SM3wxq5z/pub?gid=39384095&single=true&output=csv"
    )
    .then((response) => {
      return new Promise((resolve, rejected) => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => resolve(results.data),
          error: (error) => rejected(error.message),
        });
      });
    });
};
export default { noticias };
