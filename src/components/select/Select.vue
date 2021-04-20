<template>
  <a-select
    v-model:value="value1"
    style="width: 120px"
    @focus="focus"
    ref="select"
    @change="handleChange"
  >
    <a-select-option value="jack">Jack</a-select-option>
    <a-select-option value="lucy">Lucy</a-select-option>
    <a-select-option value="disabled" disabled>Disabled</a-select-option>
    <a-select-option value="Yiminghe">yiminghe</a-select-option>
  </a-select>
</template>
<script>
import { ref } from 'vue';
import { Select } from 'ant-design-vue'

export default {
  components: {
    'a-select': Select,
    'a-select-option': Select.Option
  },
  setup() {
    const focus = () => {
      console.log('focus');
    };

    const handleChange = value => {
      console.log(`selected ${value}`);
    };

    return {
      focus,
      handleChange,
      value1: ref('lucy'),
    };
  },
}


</script>