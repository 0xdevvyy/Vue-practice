import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"
export default {
    components: {AssignmentList, AssignmentCreate},
   template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="Assignment"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed Assignment"></assignment-list>
    </section>
    <assignment-create @add="add"></assignment-create>
   
   `,
    data(){
        return {
            assignments: [
                
            ],

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
     created(){
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments
            });
    },

    methods:{
         add(name){
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1,
                tag: 'math'
            })
        }
    }
}