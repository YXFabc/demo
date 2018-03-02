<template>
	<div>
		<div class="myPractice">
			<div class="myPractice_tab">
				<div class="myPractice_tab_item">
					<router-link :to="{name:'all'}" exact>全部类</router-link>
				</div>
				<div class="myPractice_tab_item">
					<router-link :to="{name:'qita'}" exact>其他类</router-link>
				</div>
				<div class="myPractice_tab_item">
					<router-link :to="{name:'yundong'}" exact>体育类</router-link>
				</div>
				<div class="myPractice_tab_item">
					<router-link :to="{name:'lishi'}" exact>历史类</router-link>
				</div>
			</div>
		</div>
			<router-view :questionsAll="questions"></router-view>
		
	</div>
</template>

<script>
	export default{
		props:{
			questions:{
				type:Array
			}
		},
		data(){
			return{

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.myPractice
		background #EBEBEB
		.myPractice_tab
			width 100%
			height 40px	
			display flex
			justify-content center
			.myPractice_tab_item
				width 60px;
				height 40px
				border-radius 10px
				margin-right 10px	
				&>a
					display block
					width 60px
					height 40px
					text-align center
					line-height 40px
				.router-link-active
					background rgb(255,255,255)

</style>