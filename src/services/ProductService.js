import axios from 'axios';
const MOVIE_API_BASE_URL="http://localhost:8082/Products/getProduct"
class ProductService{

    getProducts(){

        return axios.get(MOVIE_API_BASE_URL);

    }

}



export default new ProductService();