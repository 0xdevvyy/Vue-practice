export default {
    template: `
     <form @submit.prevent="add">
        <div class="flex justify-between m-2 border border-white bg-white text-black">
            <input v-model="newAssignment" type="text" placeholder="New Assignment" class="p-2"> <button class="border-l p-2">ADD</button>
        </div>
    </form>`,
    

    data(){
        return {
            newAssignment: ''
        }
    },

    methods:{
        add(){
            if(this.newAssignment === ''){
                alert('please enter a value')
                return 
            }

            this.$emit('add', this.newAssignment)
            this.newAssignment = ''
        }
    }
}