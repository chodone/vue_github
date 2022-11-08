<template>
  <div class="option-list">
    <h2 style="margin:10px">3. 옵션을 고르세요.</h2>
    <OptionListItem v-for="option in optionList" :key="option.type" :option="option"/>
    

  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem'

export default {

  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList: function () {
      return this.$store.state.optionList
    },
  },
  methods: {
    increase: function () {
    },
    decrease: function () {
    },
  },
}
</script>

<style>
.option-list{
  margin: 10px;
  width: 600px;
  background-color: white;
  border-radius: 10px;

}
</style>