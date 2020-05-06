<template>
    <div class="keyboard">
        <dl v-for="row of keys">
            <dd
                    v-for="key of row" class="keyboard-button"
                    @click="onKey(key)"
            >
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
    },
    methods: {
        onKey (value) {
            console.log(value);
        }
    }
}
</script>

<style lang="scss" scoped>

.keyboard {
  margin: 30px 0;
  border-radius: 12px;
  display: flex;
  flex-direction: row-reverse;
  background: #4689FF;
  padding: 0 15px;

  .keyboard-button {
    background-color: #fff;
    padding: 5px 10px;
    margin: 10px;
    cursor: pointer;
  }
}

</style>