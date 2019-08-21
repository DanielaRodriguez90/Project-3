import axios from 'axios';

export default {
    getRecipes: function (recipe) {
        return axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${recipe}`,{ 'headers': { 'origin': 'localhost' } });
    }
};