import axios from "axios";
import {connStr} from "../../config";

export default class ProductInfoServices {
    static getProduct(id) {
       return axios.get(`${connStr}api/salo/product/${id}`);
    }
}