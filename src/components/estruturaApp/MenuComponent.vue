<template>
  <div class="card h-100">
    <div class="card-body d-flex justify-content-center align-items-center">
      <div class="w-100">
        <p-tieredmenu class="menu" :model="items" />
      </div>
    </div>
  </div>
</template>
  
    
    <script lang="ts">
import { ref } from 'vue'
import { Vue } from 'vue-class-component'

export default class MenuComponent extends Vue {
  isAuthenticated: boolean = true
  items = ref([
    {
      label: 'File',
      icon: 'pi pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-plus',
          items: [
            {
              label: 'Document',
              icon: 'pi pi-file'
            },
            {
              label: 'Image',
              icon: 'pi pi-image'
            },
            {
              label: 'Video',
              icon: 'pi pi-video'
            }
          ]
        },
        {
          label: 'Open',
          icon: 'pi pi-folder-open'
        },
        {
          label: 'Print',
          icon: 'pi pi-print'
        }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-file-edit',
      items: [
        {
          label: 'Copy',
          icon: 'pi pi-copy'
        },
        {
          label: 'Delete',
          icon: 'pi pi-times'
        }
      ]
    },
    {
      label: 'Search',
      icon: 'pi pi-search'
    },
    {
      separator: true
    },
    {
      label: 'Share',
      icon: 'pi pi-share-alt',
      items: [
        {
          label: 'Slack',
          icon: 'pi pi-slack'
        },
        {
          label: 'Whatsapp',
          icon: 'pi pi-whatsapp'
        }
      ]
    }
  ])
}
</script>
    
  <style lang="scss">
header {
  background-color: #333;
  color: white;
  padding: 5px;
}

.card {
  width: 60%;
  max-width: 200px;
  padding: 0px;
  background-color: #33333342;
}

.menu {
  background-color: #33333342;
  height: 100%;
}
</style>