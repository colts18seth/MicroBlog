import axios from 'axios';

class Api {

    static async getPosts() {
        let res = await axios.get(`http://localhost:5000/api/posts`);
        return res.data;
    }
}

export default Api;