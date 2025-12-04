import AssignmentList from "./AssignmentList.js"
export default {
    components: {AssignmentList},
   template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="Assignment"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed Assignment"></assignment-list>
    </section>
   `,
    data(){
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id:1},
                {name: 'Read Chapte 4', complete: false, id:2},
                {name: 'Turn in homework', complete: false, id:3},
            ]
        }
    },
    computed:{
        
        filters(){
            return{
                completed: this.assignments.filter(assignment => assignment.complete),
                inProgress: this.assignments.filter(assignment => !assignment.complete)
            }
        }

        
    }
}