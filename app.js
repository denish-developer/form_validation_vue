new Vue({
   el:'#app',
   data(){
   	return {
   		form:{
   			name:null,
   			age:null
   		}
   	}
   },
   computed:{
   	nameIsValid(){
   		return !!this.form.name
   	},
   	ageIsValid(){
   		return typeof this.form.age === 'number' && this.form.age > 12 && this.form.age < 120
   	},
   	formIsValid(){
   		return this.nameIsValid && this.ageIsValid
   	}
   },
   methods:{
   	submitForm(){
   		const formIsValid = this.formIsValid
   		if(formIsValid){
   			console.log('Form Submitted', this.form)
   		}else{
   			console.log('Invalid form')
   		}

   	}
   }
})