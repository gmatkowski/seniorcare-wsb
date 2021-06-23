<template>
  <v-dialog
    v-model="dialog"
    :max-width="options.width"
    :style="{ zIndex: options.zIndex }">
    <v-card>
      <v-card-title class="headline"> {{ title }}</v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :class="options.btnCancelClass" :color="options.btnCancelType" @click.native="cancel">{{ options.btnCancel }}</v-btn>
        <v-btn dark :class="options.btnOkClass" :color="options.btnOkType" @click.native="agree">{{ options.btnOk }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDlg',
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      options: {
        width: 400,
        zIndex: 200,

        btnCancel: 'Anuluj',
        btnCancelType: 'default',
        btnCancelClass: null,

        btnOk: 'Tak',
        btnOkType: 'pink',
        btnOkClass: null
      }
    }
  },

  methods: {
    open(title, message, options) {
      this.dialog = true
      this.title = title
      this.message = message
      this.options = Object.assign(this.options, options)

      return new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
    },
    agree() {
      this.resolve(true)
      this.dialog = false
    },
    cancel() {
      this.resolve(false)
      this.dialog = false
    }
  }
}
</script>
