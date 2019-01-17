<template>
  <div class="about">
    <h1>About page</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Pagina de About!',
    meta: [
      {
        'property': 'og:title',
        'content': 'ABOUT title',
        'template': chunk => `${chunk} - My page`, // or as string template: '%s - My page',
        'vmid': 'og:title'
      }
    ]
  }
}
</script>
