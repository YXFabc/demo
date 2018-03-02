<template>
	<div>
		<myPractice_content :myQuestions="lishiQuestions"></myPractice_content>
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
				lishiQuestions:[]
			}
		},
		components:{
			myPractice_content,
		},
		mounted(){
			var lishi=this.questionsAll.filter(function(item){
				return item.type=="历史"
			})
			this.lishiQuestions=lishi
		}
	}
</script>