// components/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  field: true,
  classes: ['cancel-class'],
  properties: {
    focus: Boolean,
    error: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    inputAlign: String,
    customClass: String,
    showAction: Boolean,
    useActionSlot: Boolean,
    placeholder: String,
    placeholderStyle: String,
    background: {
      type: String,
      value: '#f2f2f2'
    },
    maxlength: {
      type: Number,
      value: -1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange: function onChange(event) {
      this.setData({
        value: event.detail
      });
      this.$emit('change', event.detail);
    },
    onCancel: function onCancel() {
      this.setData({
        value: ''
      });
      this.$emit('cancel');
      this.$emit('change', '');
    },
    onSearch: function onSearch() {
      this.$emit('search', this.data.value);
    },
    onFocus: function onFocus() {
      this.$emit('focus');
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    }
  }
})
