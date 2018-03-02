<template>
	<div>
		<myPractice_content :myQuestions="questionsAll"></myPractice_content>
		
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
		components:{
			myPractice_content,
		},

	}
</script>