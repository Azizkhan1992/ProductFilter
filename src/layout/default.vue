<template>
	<div class="main-content" :class="isProducts == true ? 'main-inner-content': ''">
		<nav>
			<a class="productsHome" v-if="isProducts" href="/">Go to Products</a>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "default.vue",
	data(){
		return{
			isProducts: false
		}
	},

	mounted(){
		this.checkRoute()
	},
	methods: {
		checkRoute(){
			if(this.$route.path !== '/'){
				this.isProducts = true
				// console.log(this.$route.path)
			}else{
				this.isProducts = false
			}
		}
	},
	watch:{
		'$route'(){
			this.checkRoute()
		}
	}
};
</script>
