import axios from "axios";

export default {
	search: function (topic, start, end) {
		return axios.get(`/api/nyt/${start}/${end}/${topic}`);
	}
};