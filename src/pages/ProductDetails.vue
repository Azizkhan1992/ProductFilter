<template>
	<div class="product-details-container">
		<div class="product-img">
			<img :src="data.img" :alt="data.title">
		</div>
		<div class="product-details">
			<h3 class="title">{{ data.title }}</h3>
			<p class="brend">Brend: {{ data.brand }}</p>
			<p class="art">Artikul: {{ data.art_number }}</p>
			<p class="weight">Og'irligi: {{ data.weight }} gr</p>
			<p class="count">Soni: {{ data.quantity }}</p>
			<p class="price">Narxi: {{ data.price }}$</p>
			<p class="inStock">
				Omborda mavjudmi:
				<span v-if="data.has_in_stock">ha</span>
				<span v-else>yo'q</span>
			</p>
		</div>
	</div>
</template>
<script>
import Service from '@/services';
export default {
	name: "ProductDetails",
	data() {
		return {
			data: {}
		}
	},
	created() {
		this.getProduct();
	},
	methods: {
		getProduct() {
			const id = this.$route.params.id;

			if (!id) {
				this.$notify.error('Mahsulot topilmadi!');
				this.$router.push({name: 'home'});
				return;
			}

			Service.getProduct(id)
			.then(res => {
				this.data = res.data;
				// console.log(this.data)
			}, error => console.log(error));
		}
	}
}
</script>
