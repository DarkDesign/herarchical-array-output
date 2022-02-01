<template>

  <div
      id="recursive-sheet">

    <div
        class="grid">

      <div>

        <input
            type="checkbox"
            v-model="accessRight.checked"
            :indeterminate.prop="accessRight.indeterminate">

      </div>

      <div
          v-text="accessRight.name"></div>

    </div>

    <template
        v-if="accessRight.children.length > 0">

      <recursive-sheet
          v-for="accessRightChild in accessRight.children"
          :key="accessRightChild.id"
          :access-right="accessRightChild"></recursive-sheet>

    </template>

  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { AccessRight } from '../../../models';

@Component({
  name: 'recursive-sheet',
  components: {},
})
export default class RecursiveSheetComponent extends Vue {

  @Prop()
  public accessRight?: AccessRight;

  public isShowChildren: boolean = false;

}
</script>

<style>

#recursive-sheet {
  padding: 10px 0 20px;
  border: #ccc 1px solid;
}

#recursive-sheet {
  margin-top: 10px;
}

#recursive-sheet #recursive-sheet{
  margin-left: 25px;
}

.grid{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

</style>

