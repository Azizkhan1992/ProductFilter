<template>
	<div class="product-item">
		<div class="img-wr">
			<img class="product-image" :src="data.img" alt=""></img>
		</div>
		<div class="title-wr">
			<h3 class="product-name">{{ data.title }}</h3>
		
		<p class="product-price">
			<span>{{ data.price }}$</span>
		</p>
		<p class="product-artikul">{{ data.art_number }}</p>
		<p class="product-brand">{{ data.brand }}</p>
		<button class="product-visit-btn btn" @click="goDetails">Batafsil</button>
		</div>
	</div>
</template>
<script>
export default {
	name: "ProductItem",
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	methods: {
		goDetails() {
			this.$router.push({name: 'details', params: {id: this.data.id}})
		}
	}
}
</script>
