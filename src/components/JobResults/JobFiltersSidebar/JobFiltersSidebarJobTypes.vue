<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_JOB_TYPES"
    :action="userStore.ADD_SELECTED_JOB_TYPES"
  />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import JobFiltersSidebarCheckboxGroup from "./JobFiltersSidebarCheckboxGroup.vue";
import { useUserStore } from "@/stores/user";
import { useJobsStore } from "@/stores/jobs";

const jobsStore = useJobsStore();
const userStore = useUserStore();
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
</script>
