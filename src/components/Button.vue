<template>
  <IButton
    @click="onClick"
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3px 7px',
      height: '30px',
      width: '112px',
      fontSize,
      borderRadius,
      background: bgColor,
      color: fontColor
    }">{{text}}</IButton>
</template>

<script>
// type
// 1 代表 评价列表
// 2 代表 数据总览
// 3 代表 我要评价
// 4 代表 重新填写
// 5 代表 发布评价
// 6 代表 发布合租
// 7 代表 保存信息
// 8 代表 更改信息
// 9 代表 重新认证

export default {
  name: 'm-button',
  props: {
    type: {
      type: Number,
      required: true,
      default: 1
    }
  },
  methods: {
    onClick () {
      this.$emit('click');
    }
  },
  computed: {
    fontSize () {
      if (this.type === 8 || this.type === 9) {
        return '12px';
      }

      return '14px';
    },
    borderRadius () {
      switch (this.type) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          return '8px';
        case 8:
        case 9:
          return '16px';
      }
    },
    bgColor () {
      switch (this.type) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
          return '#7c7c7c';
        case 5:
        case 6:
          return '#fcc921';
        case 8:
          return '#f5f5f5';
        case 9:
          return '#85cdbf';
      }
    },
    fontColor () {
      switch (this.type) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
          return '#ffffff';
        case 5:
        case 6:
          return '#333333';
        case 8:
          return '#a7a7a7';
      };
    },
    text () {
      switch (this.type) {
        case 1:
          return '评价列表';
        case 2:
          return '数据总览';
        case 3:
          return '我要评价';
        case 4:
          return '重新填写';
        case 7:
          return '保存信息';
        case 8:
          return '更改信息';
        case 5:
          return '发布评价';
        case 6:
          return '发布合租';
        case 9:
          return '重新认证';
      };
    }
  }
};
</script>

<style>
</style>
