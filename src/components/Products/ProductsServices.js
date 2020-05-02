import axios from "axios";
import {connStr} from "../../config";

export default class ProductsServices {
    static getProducts() {
      return axios.get(`${connStr}api/salo/products`);
    }
}