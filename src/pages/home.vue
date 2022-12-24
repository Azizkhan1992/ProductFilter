<template>
	<div class="container">
		<div class="error" v-if="errorChecker">
			<p>README ni o'qing va ma'lumotlar bazasini ishga tushiring</p>
		</div>
		<div class="product-filter" :class="errorChecker == true ? 'an-error': ''">
			<input v-model="filter.brand" type="text" class="product-brand" placeholder="Mahsulot nomini kiriting" />
			<button class="filter-btn btn" @click="loadProducts(1)">
				Filter
			</button>
			<button class="reset-btn btn" @click="loadProducts(1, true)">
				Reset
			</button>
		</div>
		<div class="product-header">
			<h3>Topilgan mahsulotlar:</h3>
			<span>{{ total }} ta</span>
		</div>
		<div class="products">
			<product-item
				v-for="(product, id) in products"
				:key="id"
				:data="product"
			></product-item>
		</div>
		<div class="product-pagination">
			<pagination
				:total="total"
				:perPage="filter.limit"
				:page="filter.page"
				@goPage="loadProducts"
			></pagination>
		</div>
	</div>
</template>
<script>
import Services from '@/services';
import ProductItem from '@/components/ProductItem';
import Pagination from '@/components/Pagination';

export default {
	name: 'home',
	components: {
		ProductItem,
		Pagination
	},
	data() {
		return {
			filter: {
				brand: null,
				page: 1,
				limit: 4
			},
			isFind: true,
			total: 0,
			pagination: null,
			products: [],
			errorChecker: false
		}
	},
	created() {
		this.loadProducts();
	},
	methods: {
		loadProducts(page = null, reset = false) {
			const query = this.getQueryParams(page, reset);

			Services.getProducts(query)
			.then(res => {
				 if (res.status == 200) {
					this.products = res.data;console.log(res.headers['x-total-count'])
					this.pagination = res.headers.link;
					this.total = +res.headers["x-total-count"];
					this.errorChecker = false
					// console.log('total', this.total)
				 }
			}).catch(err => {if(err){this.errorChecker = true, console.log(err)}})
		},
		getQueryParams(page, reset) {
			// console.log('query', page, reset)
			if (page) {
				this.filter.page = page;
			}

			if (reset) {
				this.filter.brand = null;
			}

			let params = {
				_page: this.filter.page,
				_limit: this.filter.limit
			}

			if (this.filter.brand) {
				params.brand_like = this.filter.brand;
				// params._page = 1;
			}

			return '?' + new URLSearchParams(params).toString();
		}
	}
}
</script>
