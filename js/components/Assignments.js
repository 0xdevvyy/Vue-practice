import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: {AssignmentList, AssignmentCreate},
   template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="Assignment">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <div v-show="showCompleted">
                <assignment-list
                    :assignments="filters.completed" 
                    title="Completed Assignment" 
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                >
                </assignment-list>
                
            </div>
        </section>
   `,
    data(){
        return {
            assignments: [
                
            ],
            showCompleted: true

        }
    },
    watch: {
        'filters.completed'(newVal) {
            if (newVal.length > 0) {
                this.showCompleted = true;
            }
        }
    },
    computed:{
        
        filters(){
            return{
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
                
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