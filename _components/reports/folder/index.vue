<template>
  <div>
    <actions class="tw-hidden"/>
    <div>
      <draggable
        :list="folderList"
        :move="move"
        class="
            tw-grid tw-grid-cols-1
            md:tw-grid-cols-2
            xl:tw-grid-cols-3
            tw-overflow-hidden
            group-list-report
        "
        :animation="300"
        ghostClass="ghost"
      >
        <folder 
            v-for="folder in folderList"
            :key="folder.id"
            :folder="folder"
        />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import reportList from './reportList.vue';
import actions from './actions.vue';
import folder from './folder.vue';
export default {
  components: {
    draggable,
    reportList,
    actions,
    folder,
  },
  data() {
    return {
      folderList: [
        {
          id: 1,
          title: 'Folder 1',
          isCollapse: false,
          reportList: [
            {
                id : 1,
                title: 'report 1',
            },
            {
                id : 2,
                title: 'report 2',
            },
            {
                id : 3,
                title: 'report 3',
            },
            {
                id : 4,
                title: 'report 4',
            }
          ],
        },
        {
          id: 2,
          title: 'Folder 2',
          isCollapse: false,
          reportList: [
            {
                id : 5,
                title: 'report 5',
            },
            {
                id : 6,
                title: 'report 6',
            },
            {
                id : 7,
                title: 'report 7',
            }
          ],
        },
        {
          id: 3,
          title: 'Folder 3',
          isCollapse: false,
          reportList: [
             {
                id : 8,
                title: 'report 8',
             },
            { 
                id : 9,
                title: 'report 9',
            }
          ],
        },
        {
          id: 4,
          title: 'Folder 4',
          isCollapse: false,
          reportList: [
             {
                id : 10,
                title: 'report 10',
             }
          ],
        },
        {
          id: 5,
          title: 'Folder 5',
          isCollapse: false,
          reportList: [],
        },
        {
          id: 6,
          title: 'Folder 6',
          isCollapse: false,
          reportList: [],
        },
      ],
    };
  },
  methods:{
    move(evt) {
        //console.log(evt);
    }
  },
};
</script>

<style>
.list-report-menu > .q-item {
  @apply tw-px-4 !important;
}
.list-report-menu > .q-item .q-item__section--avatar {
  @apply tw-pr-0 !important;
  min-width: 30px !important;
}
.list-report-menu > .q-item .q-icon {
  color: var(--q-color-primary);
}
.group-list-report {
  @apply tw--mx-4;
}
.group-list-report .q-item__section--side > .q-icon {
  color: var(--q-color-primary);
}
.group-list-report .q-expansion-item__container > .q-item {
  @apply tw-py-5 tw-rounded-xl;
  box-shadow: 0px 16px 24px rgb(3 27 102 / 6%), 0px 2px 6px rgb(3 27 102 / 4%),
    0px 0px 1px rgb(3 27 102 / 4%);
}
.group-list-report
  .q-expansion-item--expanded
  > .q-expansion-item__container
  > .q-item {
  @apply tw-rounded-b-none !important;
}
.group-list-report .q-item__section--avatar {
  min-width: 40px;
}
.group-list-report .q-item__section--avatar .q-icon {
  color: #8a98c3;
}
</style>