
<template>
<div>
    <input type="checkbox" class="checkbox" id="id" :checked="isDone" @change="$emit('checkbox-changed')" />
    <label :for="id">{{label}}</label>
</div>
  
</template>

<script>
// import uniqueId from 'lodash.uniqueid';

export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean },
        id: { required: true, type: String }
    },
    data() {
        return {
            isDone: this.done
            // id: uniqueId('todo-')
        };
    },
};
</script>

<style scoped>

    .checkbox {
        margin-right: 20px;
        width: 22px;
        height: 22px;
    }
</style>