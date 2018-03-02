<template>
	<div class="myAnswer">
		<div class="star" @click="star" v-if="starIsShow">开始答题</div>

		<div class="myAnswer_content" v-if="contentIsShow" :blurClass="mohu">
			<div class="time" :class="{'yellowTime':timeNum<=5,'redTime':timeNum==0}">{{timeNum}}</div>
			<div class="content">
				<p class="title">{{n+1}}.&nbsp;{{myQuestions[n].title}}</p>
				<ul v-for="(item,index) in myQuestions[n].option">
					<li @click="chagneOption(index,n)" ref='itemDom' :class="{liColor:optionIndex==index}">{{item}}</li>
				</ul>
				<div class="collection" @click="collectionItem(n)" :class="{myCollectionColor:collectionColor}">收藏</div>
			</div>			
		</div>

		<div class="fuhuo" v-show="fuhuoIsShow">
			<p class="text">
				抱歉！你答错了是否使用复活卡
			</p>
			<div class="towButton">
				<span @click='yes(n)'>是</span>
				<span @click="no">否</span>
			</div>
		</div>

		<div class="newStar"  ref='newStarDom' @click="newStar" v-if="newStarIsShow">
			重新答题
		</div>
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
				myQuestions:[],
				MyCollectionItem:[],
				starIsShow:true,
				contentIsShow:false,
				n:0,
				timeNum:12,
				optionIndex:null,
				oneOption:0,
				fuhuoIsShow:false,
				mohu:false,
				newStarIsShow:false,
				collectionColor:false
			}
		},
		methods:{
			star(){
				var myTiku=[]					
				for(var i=0;i<100;i++){
					var num=parseInt(this.questions.length*Math.random())
					if(myTiku.indexOf(this.questions[num])==-1){
						myTiku.push(this.questions[num])
						if(myTiku.length==10){
							break
						}
					}
				}
				this.myQuestions=myTiku
				this.starIsShow=false
				this.contentIsShow=true
				this.time=setInterval(()=>{
					this.timeNum--
					if(this.timeNum<0){
						this.n++
						this.timeNum=12
						this.optionIndex=null
						this.oneOption=0	
						this.collectionColor=false				
						if(this.n>=10){
							clearInterval(this.time)
						}
					}
				},1000)	
				this.newStarIsShow=true
			},
			chagneOption(index,n){
				this.oneOption++;
				if(this.oneOption==1){
					this.optionIndex=index 		//当点击是把对应选项的 indxe赋值给optionIndex
					if(this.$refs.itemDom[index].innerHTML!=this.myQuestions[n].zhengqu){
						clearInterval(this.time)
						this.fuhuoIsShow=true
						this.contentIsShowthis=false
					}
				}
			},
			yes(n){
				this.fuhuoIsShow=false
				this.n=n+1
				this.timeNum=12
				this.optionIndex=null
				this.oneOption=0
				this.time=setInterval(()=>{
					this.timeNum--
					if(this.timeNum<0){
						this.n++
						this.timeNum=12
						this.optionIndex=null
						this.oneOption=0					
						if(this.n>10){
							clearInterval(this.time)
						}
					}
				},1000)	
			},
			no(){
				this.fuhuoIsShow=false
				this.starIsShow=true
				this.contentIsShow=false
				this.n=0
				this.optionIndex=null
				this.oneOption=0
				this.newStarIsShow=false
			},
			newStar(){
				clearInterval(this.time)
				this.fuhuoIsShow=false
				this.starIsShow=true
				this.contentIsShow=false
				this.n=0
				this.timeNum=12
				this.optionIndex=null
				this.oneOption=0
				this.newStarIsShow=false
				this.collectionColor=false
				
			},
			collectionItem(n){
				this.MyCollectionItem.push(this.myQuestions[n])
				this.collectionColor=true
			}
		},
		watch:{
			n:function(){
				if(this.n==10){
					this.$emit('sc',this.MyCollectionItem)
				}
			}
		}
	}
</script>

<style lang="stylus">
	.myAnswer
		position relative
		padding 20px
		.star
			width 100px
			height 40px
			border 1px solid black
			text-align center
			line-height 40px
			position absolute
			left 50%
			margin-left -50px
			top 200px
			z-index 100
		.myAnswer_content
			background white
			.time
				width 60px
				height 60px
				border-radius 30px
				border 1px solid black
				text-align center
				line-height 60px
				font-size 25px
				margin auto
			.yellowTime
				background #FCF683
			.redTime
				background red
			.content
				width 300px
				height 400px
				background #E3F0EC
				border-radius 20px
				margin 20px auto
				position relative
				.title
					width 100%
					height 60px
					padding-top 20px
					text-align center
					vertical-align middle
					margin-bottom 20px
					font-size 20px
					word-break break-all
				ul>li
					display block
					width 100%
					height 50px
					border-radius 20px
					background #21E9CF
					margin-bottom 30px
					text-align center
					line-height 50px
				.liColor
					background #069AC2
				.collection
					width 70px
					height 30px
					margin-left 10px
					text-align center
					line-height 30px
					border 1px solid black
					border-radius 35px
				.myCollectionColor
					background #E1EA85

		.fuhuo
			width 100%
			height 100%
			background rgba(0,0,0,0.6)
			position absolute
			left 0px
			top 0px
			.text
				width: 200px
				height 100px
				padding 20px
				border-radius 20px
				text-align center
				font-size 20px
				margin 100px auto
				background white
				vertical-align middle
				word-break break-all
			.towButton
				width 200px
				height 50px
				margin auto
				&>span
					display inline-block
					width 90px
					height 100%		
					text-align center			
					line-height 50px
					border 2px solid #656CBF
					background white
					border-radius 20px 
		.newStar
			width 70px
			height 40px
			text-align center
			line-height 40px
			position absolute
			top 80%
			left 50%
			margin-left -35px


		


</style>