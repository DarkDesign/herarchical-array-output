<template>

  <div
      id="app">

    <template
        v-if="accessRights.length !== 0">

      <recursive-sheet
          v-for="accessRight in accessRights"
          :key="accessRight.id"
          :access-right="accessRight"></recursive-sheet>

    </template>

  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AccessRight } from '../models';
import { AccessRightService } from '../services';
import RecursiveSheetComponent from './components/recursive-sheet/RecursiveSheet.component.vue';

@Component({
  components: {
    'recursive-sheet': RecursiveSheetComponent
  },
})
export default class App extends Vue {

  public accessRights: readonly AccessRight[] = [];


  public constructor() {
    super();
    const accessRightService = new AccessRightService();
    this.accessRights = accessRightService.getAccessRight();
  }

}
</script>

