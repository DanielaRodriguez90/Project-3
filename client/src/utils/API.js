import axios from 'axios';

export default {
    getRecipes: function (recipe) {
        return axios.get(`http://www.recipepuppy.com/api/?q=${recipe}`);
    }
};