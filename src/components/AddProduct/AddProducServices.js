import axios from "axios";
import {connStr} from "../../config";

export default class ProductsServices {
    static AddProduct(product) {
       return axios.post(`${connStr}api/salo/AddProduct`, product);
    }
}