import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "";

export default {
	search: function (query) {
		return axios.get(BASEURL, {
			params: {
				'api-key': APIKEY,
				'q': query,
				'begin_date': "20160101",
				'end_date': "20180101"
			}
		});
	}
};