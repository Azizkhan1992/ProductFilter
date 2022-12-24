import Vue from "vue";

export default {
    api: Vue.prototype.$api,

    getProducts(params) {
		return this.api.get(`products${params}`);
	},

	getProduct(id) {
		return this.api.get(`products/${id}`);
	}
}
