export default {

    template: `
        <div class="flex gap-2">
            <button 
            v-for="tag in tags" 
            @click="$emit('update:currentTag',tag)"
            class="border rounded px-1 py-px text-sm"
            :class = "{
                'border border-blue-600' : tag === currentTag
            }"
            >
                {{tag}}
            </button>
        </div>
    `,

    props:{
        initialTags: Array,
        currentTag : String
    },

    computed: {
        tags(){
            return ['all', ...new Set(this.initialTags)]
        }
    }
}