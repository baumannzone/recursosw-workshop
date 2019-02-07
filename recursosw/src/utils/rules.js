const rules = {
  required (v) { return (v && !!v) || 'Field required' },
  email (v) { return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid' },
  less60 (v) { return (!v || v <= 60) || 'This field must be equal or less than 60' }
}

export default rules
