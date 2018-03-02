<template>
	<div>
		<div class="myPractice_content" v-for="(item,index) in myQuestions">
			<div class="title">{{index+1}}。{{item.title}}</div>
			<ul v-for="(items,indexs) in item.option">
				<li :class="{zhengqu:item.option[indexs]==myQuestions[index].zhengqu}">{{items}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			myQuestions:{
				type:Array
			}
		},
		data(){
			return{

			}
		},
		mounted(){

		}
	}
</script>

<style lang="stylus" scoped>
	.myPractice_content
		background #DFD1D1
		margin-top 10px
		padding 10px
		color #575555
		box-shadow 3px 3px 3px #DFD1D1
		.title
			text-align center
			height 30px
			font-weight bold
		&>ul>li
			margin-top 10px
		.zhengqu
			color red
</style>