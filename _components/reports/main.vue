<template>
    <div class="tw-my-4">

        <h2 class="text-primary tw-text-2xl tw-font-semibold tw-mb-4">Select a Report</h2>
        <div class="tw-flex  tw-items-center tw-justify-end tw-bg-gray-100 tw-rounded-xl tw-p-3 tw-mb-3" >
            <div class="tw-hidden md:tw-block tw-border-r-2 tw-pr-4 tw-space-x-4">
                <q-btn
                    flat
                    rounded
                    color="primary"
                    no-caps
                    class="tw-font-bold"
                    >
                    <q-icon left size="1em" name="star" />
                    <div>Add to Favourites</div>
                </q-btn>
                <q-btn
                    outline
                    rounded
                    color="primary"
                    no-caps
                    class="tw-font-bold"
                    >
                    <q-icon left size="1em" name="fa fa-plus" />
                    <div>New Folder</div>
                </q-btn>
                <q-btn
                    rounded
                    color="negative"
                    no-caps
                    class="tw-font-bold"
                    >
                    <q-icon left size="1em" name="fa fa-trash" />
                    <div>Delete</div>
                </q-btn>
            </div>
            <q-btn outline rounded size="md" padding="xs" color="primary" icon="fas fa-ellipsis-v" class="btn-small md:tw-hidden tw-order-1 md:tw-order-0">
                <q-menu>
                    <q-list class="list-report-menu">
                        <q-item clickable v-close-popup>
                            <q-item-section avatar>
                                <q-icon name="star" color="primary" />
                            </q-item-section>

                            <q-item-section>Add to Favourites</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                            <q-item-section avatar>
                                <q-icon name="fa fa-plus" color="primary" />
                            </q-item-section>

                            <q-item-section>New Folder</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                            <q-item-section avatar>
                                <q-icon name="fa fa-trash" color="primary" />
                            </q-item-section>

                            <q-item-section>Delete</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
            <div class="tw-pl-0">
                <div class="tw-p-4 text-primary tw-order-0 md:tw-order-1">5 items selected</div>
            </div>
        </div>
        <div class="tw-grid 
                tw-grid-cols-1
                md:tw-grid-cols-2
                xl:tw-grid-cols-3
                tw-overflow-hidden group-list-report">

            <q-card class="tw-shadow-none tw-rounded-xl">
                <q-card-section class="list-report tw-rounded-xl">
                    <q-expansion-item bordered expand-icon-toggle class="tw-shadow-lg tw-bg-white tw-rounded-xl">
                        <template v-slot:header >
                            <q-item-section >
                                <div class="row items-center">
                                    <q-icon name="star" color="primary" size="2rem" />
                                    <h5 class="tw-text-xl tw-ml-3 tw-font-bold">Favourites</h5>    
                                </div>
                            </q-item-section>

                            <q-item-section side>
                                <div class="row items-center">
                                    <q-btn flat round color="tw-gray-300" size="sm" icon="more_vert" >
                                        <q-menu
                                            transition-show="jump-down"
                                            transition-hide="jump-up"
                                        >
                                        <q-list class="list-report-menu">
                                            <q-item clickable v-ripple>
                                                <q-item-section avatar>
                                                    <q-icon name="edit" color="primary" />
                                                </q-item-section>

                                                <q-item-section>Rename 1</q-item-section>
                                            </q-item>
                                            <q-separator />
                                            <q-item clickable v-ripple>
                                                <q-item-section avatar>
                                                    <q-icon name="delete" color="primary" />
                                                </q-item-section>

                                                <q-item-section>Delete</q-item-section>
                                            </q-item>
                                        </q-list>
                                        </q-menu>
                                    </q-btn>
                                </div>
                            </q-item-section>
                        </template>
                        <q-list separator class="tw-pt-2 tw-rounded-b-xl">
                            <q-item clickable v-ripple class="tw-py-3" v-for="n in 4">
                                <q-item-section avatar>
                                    <q-icon name="drag_handle" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="tw-font-bold">Report 1</q-item-label>
                                    <q-item-label caption lines="2">
                                        Short description (Optional)
                                    </q-item-label>
                                </q-item-section>
                                <q-item-section side>     
                                    <q-btn flat round color="tw-gray-300" size="sm" icon="more_vert">
                                        <q-menu>
                                            <q-list class="list-report-menu">
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="edit" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Edit</q-item-section>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="file_copy" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Duplicate</q-item-section>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="drive_file_move" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Move</q-item-section>
                                                    <q-item-section side>
                                                        <q-icon name="arrow_right" />
                                                    </q-item-section>
                                                    <q-menu anchor="top end" self="top start">
                                                        <q-list class="list-report-menu">
                                                            <q-item
                                                                v-for="n in 3"
                                                                :key="n"
                                                                clickable v-ripple
                                                            >
                                                                <q-item-section avatar>
                                                                    <q-icon name="folder" color="primary" />
                                                                </q-item-section>
                                                                <q-item-section>Folder {{n}}</q-item-section>
                                                            </q-item>
                                                            <q-separator />
                                                            <q-item  clickable v-ripple  v-close-popup >
                                                                <q-item-section avatar>
                                                                    <q-icon name="add" color="primary" />
                                                                </q-item-section>
                                                                <q-item-section>New Folder</q-item-section>
                                                            </q-item>
                                                        </q-list>
                                                    </q-menu>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="add" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Add to favourites</q-item-section>
                                                </q-item>
                                                <q-separator />
                                                <q-item  clickable v-ripple v-close-popup>
                                                    <q-item-section avatar>
                                                        <q-icon name="delete" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Delete</q-item-section>
                                                </q-item>
                                            </q-list>
                                        </q-menu>
                                    </q-btn>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        
                    </q-expansion-item>
                </q-card-section>
            </q-card>
            <q-card class="tw-shadow-none">
                <q-card-section class="list-report">
                    <q-expansion-item bordered expand-icon-toggle class="tw-shadow-lg tw-bg-white tw-rounded-xl">
                        <template v-slot:header >
                            <q-item-section >
                                <div class="row items-center">
                                    <q-icon name="folder" color="primary" size="2rem" />
                                    <h5 class="tw-text-xl tw-ml-3 tw-font-bold">Folder 1</h5>    
                                </div>
                            </q-item-section>

                            <q-item-section side>
                                <div class="row items-center">
                                    <q-btn flat round color="tw-gray-300" size="sm" icon="more_vert" >
                                        <q-menu
                                            transition-show="jump-down"
                                            transition-hide="jump-up"
                                        >
                                        <q-list class="list-report-menu">
                                            <q-item clickable v-ripple>
                                                <q-item-section avatar>
                                                    <q-icon name="edit" color="primary" />
                                                </q-item-section>

                                                <q-item-section>Rename 1</q-item-section>
                                            </q-item>
                                            <q-separator />
                                            <q-item clickable v-ripple>
                                                <q-item-section avatar>
                                                    <q-icon name="delete" color="primary" />
                                                </q-item-section>

                                                <q-item-section>Delete</q-item-section>
                                            </q-item>
                                        </q-list>
                                        </q-menu>
                                    </q-btn>
                                </div>
                            </q-item-section>
                        </template>
            
                
                        <q-list separator class="tw-pt-2 tw-rounded-b-xl">
                            <q-item clickable v-ripple class="tw-py-3" v-for="n in 5">
                                <q-item-section avatar>
                                    <q-icon name="drag_handle" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="tw-font-bold">Report 1</q-item-label>
                                    <q-item-label caption lines="2">
                                        Short description (Optional)
                                    </q-item-label>
                                </q-item-section>
                                <q-item-section side>     
                                    <q-btn flat round color="tw-gray-300" size="sm" icon="more_vert">
                                        <q-menu>
                                            <q-list class="list-report-menu">
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="edit" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Edit</q-item-section>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="file_copy" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Duplicate</q-item-section>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="drive_file_move" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Move</q-item-section>
                                                    <q-item-section side>
                                                        <q-icon name="arrow_right" />
                                                    </q-item-section>
                                                    <q-menu anchor="top end" self="top start">
                                                        <q-list class="list-report-menu">
                                                            <q-item
                                                                v-for="n in 3"
                                                                :key="n"
                                                                clickable v-ripple
                                                            >
                                                                <q-item-section avatar>
                                                                    <q-icon name="folder" color="primary" />
                                                                </q-item-section>
                                                                <q-item-section>Folder {{n}}</q-item-section>
                                                            </q-item>
                                                            <q-separator />
                                                            <q-item  clickable v-ripple  v-close-popup >
                                                                <q-item-section avatar>
                                                                    <q-icon name="add" color="primary" />
                                                                </q-item-section>
                                                                <q-item-section>New Folder</q-item-section>
                                                            </q-item>
                                                        </q-list>
                                                    </q-menu>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="add" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Add to favourites</q-item-section>
                                                </q-item>
                                                <q-separator />
                                                <q-item  clickable v-ripple v-close-popup>
                                                    <q-item-section avatar>
                                                        <q-icon name="delete" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Delete</q-item-section>
                                                </q-item>
                                            </q-list>
                                        </q-menu>
                                    </q-btn>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        
                    </q-expansion-item>
                </q-card-section>
            </q-card>
            <q-card class="tw-shadow-none">
                <q-card-section class="list-report">
                    <q-expansion-item bordered expand-icon-toggle class="tw-shadow-lg tw-bg-white tw-rounded-xl">
                        <template v-slot:header >
                            <q-item-section >
                                <div class="row items-center">
                                    <q-icon name="folder" color="primary" size="2rem" />
                                    <h5 class="tw-text-xl tw-ml-3 tw-font-bold">Folder 2</h5>    
                                </div>
                            </q-item-section>

                            <q-item-section side>
                                <div class="row items-center">
                                    <q-btn flat round color="tw-gray-300" size="sm" icon="more_vert" >
                                        <q-menu
                                            transition-show="jump-down"
                                            transition-hide="jump-up"
                                        >
                                        <q-list class="list-report-menu">
                                            <q-item clickable v-ripple>
                                                <q-item-section avatar>
                                                    <q-icon name="edit" color="primary" />
                                                </q-item-section>

                                                <q-item-section>Rename 1</q-item-section>
                                            </q-item>
                                            <q-separator />
                                            <q-item clickable v-ripple>
                                                <q-item-section avatar>
                                                    <q-icon name="delete" color="primary" />
                                                </q-item-section>

                                                <q-item-section>Delete</q-item-section>
                                            </q-item>
                                        </q-list>
                                        </q-menu>
                                    </q-btn>
                                </div>
                            </q-item-section>
                        </template>
                        <q-list separator class="tw-pt-2 tw-rounded-b-xl">
                            <q-item clickable v-ripple class="tw-py-3" v-for="n in 3">
                                <q-item-section avatar>
                                    <q-icon name="drag_handle" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label class="tw-font-bold">Report 1</q-item-label>
                                    <q-item-label caption lines="2">
                                        Short description (Optional)
                                    </q-item-label>
                                </q-item-section>
                                <q-item-section side>     
                                    <q-btn flat round color="tw-gray-300" size="sm" icon="more_vert">
                                        <q-menu>
                                            <q-list class="list-report-menu">
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="edit" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Edit</q-item-section>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="file_copy" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Duplicate</q-item-section>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="drive_file_move" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Move</q-item-section>
                                                    <q-item-section side>
                                                        <q-icon name="arrow_right" />
                                                    </q-item-section>
                                                    <q-menu anchor="top end" self="top start">
                                                        <q-list class="list-report-menu">
                                                            <q-item
                                                                v-for="n in 3"
                                                                :key="n"
                                                                clickable v-ripple
                                                            >
                                                                <q-item-section avatar>
                                                                    <q-icon name="folder" color="primary" />
                                                                </q-item-section>
                                                                <q-item-section>Folder {{n}}</q-item-section>
                                                            </q-item>
                                                            <q-separator />
                                                            <q-item  clickable v-ripple  v-close-popup >
                                                                <q-item-section avatar>
                                                                    <q-icon name="add" color="primary" />
                                                                </q-item-section>
                                                                <q-item-section>New Folder</q-item-section>
                                                            </q-item>
                                                        </q-list>
                                                    </q-menu>
                                                </q-item>
                                                <q-item clickable v-ripple>
                                                    <q-item-section avatar>
                                                        <q-icon name="add" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Add to favourites</q-item-section>
                                                </q-item>
                                                <q-separator />
                                                <q-item  clickable v-ripple v-close-popup>
                                                    <q-item-section avatar>
                                                        <q-icon name="delete" color="primary" />
                                                    </q-item-section>
                                                    <q-item-section>Delete</q-item-section>
                                                </q-item>
                                            </q-list>
                                        </q-menu>
                                    </q-btn>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        
                    </q-expansion-item>
                </q-card-section>
            </q-card>

        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    }
}

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
    box-shadow: 0px 16px 24px rgb(3 27 102 / 6%), 0px 2px 6px rgb(3 27 102 / 4%), 0px 0px 1px rgb(3 27 102 / 4%);
}
.group-list-report .q-expansion-item--expanded > .q-expansion-item__container > .q-item {
    @apply tw-rounded-b-none !important;
}
.group-list-report .q-item__section--avatar {
    min-width: 40px;
}
.group-list-report .q-item__section--avatar .q-icon {
    color: #8A98C3;
}
</style>