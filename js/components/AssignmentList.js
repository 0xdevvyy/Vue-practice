import Assignment from "./Assignment.js"
export default {
    components:{Assignment},
    template: `
         <section v-show="assignments.length">
            <h2 class="font-bold text-blue mb-2">{{title}}
                <span>({{assignments.length}})</span>
            </h2>
            <div class="flex gap-2">
                <button 
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-sm"
                :class = "{
                    'border border-blue-600' : tag === currentTag
                }"
                @click="currentTag = tag"
                >
                    {{tag}}
                </button>
            </div>
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
        tags(){
            return ['all' , ...new Set(this.assignments.map(a => a.tag))]
        }
        
    }
}