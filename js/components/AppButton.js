export default {
    template: `
        <button 
            :class="{
                'border rounded px-5 py-5': true,
                'bg-blue-200 hover:bg-blue-400': type === 'primary',
                'bg-red-200 hover:bg-blue-400': type === 'secondary',
            }">
            <slot />
        </button>
    `,
    props:{
        type: {
            type: String,
            default: 'primary'
        }
    }

}