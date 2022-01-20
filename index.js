function debounce(func, timeout = 400) {
  let timer;
  return function (...args) {
    const rootRef = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(rootRef, args);
    }, timeout);
  };
}
Component({
  data: { _value: '' },
  onInit() {
    this.runner = this.runner.bind(this)
  },
  deriveDataFromProps(next) {
    if (this.data._value === next.value) return; 
    this.runner(next);
  },

  methods: {
    runner: debounce(function (next) { 
      this.setData({ _value: next.value })
    }),
    _onInput(e) {
      this.props.onInput(e)
    }
  }
})