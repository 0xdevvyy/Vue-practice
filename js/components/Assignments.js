import AssignmentList from "./AssignmentList.js"
export default {
    components: {AssignmentList},
   template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="Assignment"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed Assignment"></assignment-list>
    </section>
    <form @submit.prevent="add">
        <div class="flex justify-between m-2 border border-white bg-white text-black">
            <input v-model="newAssignment" type="text" placeholder="New Assignment" class="p-2"> <button class="border-l p-2">ADD</button>
        </div>
    </form>
   `,
    data(){
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id:1},
                {name: 'Read Chapte 4', complete: false, id:2},
                {name: 'Turn in homework', complete: false, id:3},
            ],

            newAssignment: ''
        }
    },
    computed:{
        
        filters(){
            return{
                completed: this.assignments.filter(assignment => assignment.complete),
                inProgress: this.assignments.filter(assignment => !assignment.complete)
            }
        } 
    },

    methods:{
        add(){
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            }),
            this.newAssignment = ''
        }
    }
}