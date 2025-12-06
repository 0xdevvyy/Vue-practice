import Assignment from "./Assignment.js"
import assignmentTags from "./assignmentTags.js";
export default {
    components:{Assignment, assignmentTags},
    template: `
         <section v-show="assignments.length">
            <h2 class="font-bold text-blue mb-2">{{title}}
                <span>({{assignments.length}})</span>
            </h2>
            <assignment-tags 
            :initial-tags="assignments.map(a => a.tag)" 
            :current-tag="currentTag"
            @change="currentTag = $event"
            ></assignment-tags>
           
            <ul class="border border-white divide-y mt-4">
               <assignment
                v-for="assignment in filteredAssignment" 
                :key="assignment.id"
                :assignment="assignment"></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String
    },
    data(){
        return {currentTag: 'all'}
    },
    computed: {
        filteredAssignment(){
            if(this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
       
        
    }
    
}