<template>
    <div>
        <dl v-for="row of keys">
            <dd v-for="key of row">
                {{key}}
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'Keyboard',
    props: {
        keys: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>

</style>