import Assignment from "./Assignment.js"
import assignmentTags from "./assignmentTags.js";
export default {
    components:{Assignment, assignmentTags},
    emits: ['toggle'],
    template: `
         <section v-show="assignments.length" class="bg-gray-700 p-4 broder border-gray-600 rounded-lg">
            <div class="flex justify-between" >
                <h2 class="font-bold text-blue mb-2">{{title}}
                    <span>({{assignments.length}})</span>
                </h2>
                <button v-show="canToggle"  @click="$emit('toggle')">&times;</button>
            </div>
            <assignment-tags 
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a => a.tag)" 
            >
            </assignment-tags>
           
            <ul class="border border-white divide-y mt-4">
               <assignment
                    v-for="assignment in filteredAssignment" 
                    :key="assignment.id"
                    :assignment="assignment"
                    
                    >
                </assignment>
            </ul>
            <div>
                <slot></slot>
            </div>
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean, default: false}
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
        }
    },
     
}