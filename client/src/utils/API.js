import axios from 'axios';

const cors = "https://cors-anywhere.herokuapp.com/";

export default {
    getRecipes: function (recipe) {
        // return axios.get(cors + "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3")
        return axios.get(`http://www.recipepuppy.com/api/?q=${recipe}`);
    }
};