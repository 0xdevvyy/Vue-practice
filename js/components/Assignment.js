export default {
    template:`
        <li>
            <label class="p-2 flex justify-between">
                {{assignment.name}}
                <input class="ml-4" type="checkbox"v-model="assignment.complete">
            </label>
        </li>
    `,
    props:{
        assignment: Object
    }
}