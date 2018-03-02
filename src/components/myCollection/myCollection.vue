<template>
	<div>
		<div class="myCollection" v-for="(item,index) in collection">
			<p>{{item.title}}</p>
			<ul>
				<li v-for="(items,indexs) in item.option" :class="{zhengquColor:items==collection[index].zhengqu}">{{items}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			myCollection:{
				type:Array
			}
		},
		data(){
			return{
				collection:[]
			}
		},
		mounted(){
			this.collection=this.myCollection
		}
	}
</script>

<style lang="stylus">
	.myCollection
		width 80%
		height 120px
		background #D4BEAA
		padding 10px
		margin 15px auto
		box-shadow 5px 5px 5px #D4BEAA
		border-radius 10px
		color rgb(255,255,255)
		font-weight bold
		&>p
			text-align center
			font-size 20px
		&>ul>li
			margin-top:10px
		.zhengquColor
			color #F64141
		.router-link-exact-active
			background red
</style>