<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <job-filters-sidebar-skills />

      <collapsible-accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>

      <collapsible-accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>

      <collapsible-accordion header="Organization">
        <job-filters-sidebar-organization />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import JobFiltersSidebarDegrees from "./JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganization from "./JobFiltersSidebarOrganization.vue";
import JobFiltersSidebarPrompt from "./JobFiltersSidebarPrompt.vue";
import JobFiltersSidebarSkills from "./JobFiltersSidebarSkills.vue";

import { useUserStore } from "@/stores/user";

const route = useRoute();
const userStore = useUserStore();

const parseSKillsSearchTerm = () => {
  const role = (route.query.role as string) || "";
  userStore.UPDATE_SKILLS_SEARCH_TERM(role);
};

onMounted(parseSKillsSearchTerm);
</script>
