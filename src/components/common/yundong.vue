<template>
	<div>
		<myPractice_content :myQuestions="yundongQuestions"></myPractice_content>
	</div>
</template>

<script>
import myPractice_content from 'common/myPractice_content'
	export default{
		props:{
			questionsAll:{
				type:Array
			}
		},
		data(){
			return{
				yundongQuestions:[]
			}
		},
		components:{
			myPractice_content,
		},
		mounted(){
			var yundong=this.questionsAll.filter(function(item){
				return item.type=="体育"
			})
			this.yundongQuestions=yundong
		}
	}
</script>