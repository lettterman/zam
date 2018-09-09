Vue.component('my-modal', {

  template: `

  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
  <!-- Any other Bulma elements you want -->
  <div class="box">
  <slot></slot>
  </div>
  </div>
  <button class="modal-close" @click="$emit('close')" aria-label="close"></button>
  </div>

  `

})


new Vue({
  el: '#root',
  data:{
    showAddModal:false,
    showAbbModal:false,
    showAssModal:false,
    showAffModal:false,
    showAggModal:false,
    showArrModal:false,
    showAwwModal:false,
    showAqqModal:false,
    showAzzModal:false,
    showAxxModal:false,
    showAvvModal:false,
    showAmmModal:false
  }
})