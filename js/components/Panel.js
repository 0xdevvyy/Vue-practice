export default {
    template:`
        <div class="bg-gray-700 border-gray-600 p-4 rounded-lg">
            <h2 v-if="$slots.heading" class="font-bold">
                <slot name="heading"/>
            </h2>
            <slot />
        </div>
    `,

    props:{
        heading: String
    }
}