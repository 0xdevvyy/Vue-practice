import Assignment from "./Assignment.js"
import assignmentTags from "./assignmentTags.js";
import Panel from "./Panel.js";
export default {
    components:{Assignment, assignmentTags, Panel},
    emits: ['toggle'],
    template: `
         <panel v-show="assignments.length" class="bg-gray-700 p-4 broder border-gray-600 rounded-lg">
            <div class="flex justify-between mb-2" >
                <h2 class="font-bold text-blue">{{title}}
                    <span>({{assignments.length}})</span>
                </h2>
                <button v-show="canToggle"  @click="$emit('toggle')">x</button>
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
        </panel>
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