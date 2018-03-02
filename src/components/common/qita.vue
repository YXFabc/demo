<template>
	<div>
		<myPractice_content :myQuestions="qitaQuestions"></myPractice_content>
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
				qitaQuestions:[]
			}
		},
		components:{
			myPractice_content,
		},
		mounted(){
			var qita=this.questionsAll.filter(function(item){
				return item.type=="其他"
			})
			this.qitaQuestions=qita
		}
	}
</script>