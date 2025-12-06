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
                {name: 'Finish Project', complete: false, id:1, tag: 'math'},
                {name: 'Read Chapte 4', complete: false, id:2, tag: 'math'},
                {name: 'Turn in homework', complete: false, id:3, tag: 'programming'},
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