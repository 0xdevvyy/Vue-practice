import Assignments from "./Assignments.js"
import Panel from "./Panel.js"
export default {
    components: {Assignments, Panel},
    template: `
        <div class="grid gap-6">
            <assignments></assignments>

            <panel>
                <template v-slot:heading>
                    This is the Heading slot
                </template>
              
                This is the defalut slot    
            </panel>

             <panel>
                This is the defalut slot    
            </panel>

        
        </div>
    `
}