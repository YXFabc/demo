<template>
  <div>
  	<header>
		<span>答题Demo</span>
  	</header>
  	<div class="myTab">
  		<div class="myTab_item" >
  			<router-link :to="{name:'myPractice'}" exact >我的题库</router-link>
  		</div>
  		<div class="myTab_item">
  			<router-link :to="{name:'myCollection'}" exact >我的收藏</router-link>
  		</div>
  		<div class="myTab_item">
  			<router-link :to="{name:'myAnswer'}" exact >模拟答题</router-link>
  		</div>		
  	</div>

	<router-view :questions="questions" @sc="getCollection" :myCollection="myCollection"></router-view>
	
  </div>
</template>

<script>
	export default{
		data(){
			return{
				questions:[],
				myCollection:[]
			}
		},
		created(){
			this.$http.get("/api/questions").
			then((res)=>{
				this.questions=res.data.data
			},(req)=>{
				console.lot(req)
			})
		},
		methods:{
			getCollection(x){
				var result=[]
				for(var i=0;i<x.length;i++){
					if(result.indexOf(x[i])==-1){
						result.push(x[i])
					}
				}
				this.myCollection=result
			}
		}
	}
</script>

<style lang="stylus" scoped>
	header
		width 100%
		height 90px
		background #16D5F2
	&span
		display block
		width 200px
		height 100px
		text-align center
		line-height 100px
		font-size 30px
		color rgb(255,255,255)
		font-weight bold
	.myTab
		display flex
		width 100%
		height 40px
		.myTab_item
			flex-grow 1
			background rgba(0,0,0,0.3)
			text-align center
			&>a
				display block
				width 100%
				height 100%
				line-height 40px
			.router-link-active
				background rgb(255,255,255)
</style>