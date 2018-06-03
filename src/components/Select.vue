<template>
<div class="select-wrapper">
    <custom-select v-bind:list="selectList" :flag="flag"></custom-select>
</div>
</template>
<script>
import Vue from 'vue';
import { bus } from '@/bus';

export default {
  name: 'm-select',
  data () {
    return {
    };
  },
  props: {
    selectList: {
        type: Array,
        required: true,
        default: () => []
    },
    flag: {
        type: Number,
        required: true,
        default: () => 0
    }
  },
  mounted() {
      console.log(this.flag)
  },
  methods: {
    
  }
};

Vue.component("custom-select",{
    data(){
        return {
            selectShow:false,
            val:""
        }
    },
    props:["btnValue","list", "flag"],
    template:`
                <div class="searchIpt clearFix">
                    <div class="clearFix">
                        <input type="text" class="keyWord" :value="val" @click="selectShow = true" />
                        <span></span>
                    </div>
                    <custom-list 
                        v-show="selectShow" 
                        :list="list" 
                        v-on:receive="changeValueHandle"
                        :flag="flag"
                    >
                    </custom-list>
                </div>`,
    methods:{
        changeValueHandle(list){
            this.val = list.label;
            this.selectShow = false;
        }
    }
});
Vue.component("custom-list",{
    props:["list", "flag"],
    template:`<ul class="list">
                    <li v-for="item in list" @click="selectValueHandle(item)">{{item.label}}
                    </li>
                </ul>`,
    methods:{
        selectValueHandle:function(item){
            this.$emit("receive",item);
            if(this.flag == 0) {
                bus.$emit("receivePet", item);
                // console.log('pet');
            }else {
                bus.$emit("receiveSleep", item);
                // console.log('sleep');
            }
        }
    }
})
</script>
<style lang="scss">
@import "../assets/style/select.scss";

</style>
