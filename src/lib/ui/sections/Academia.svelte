<script lang="ts">
    import Roles from "$lib/ui/academia/Roles.svelte";
    import { research_roles, teaching_roles } from "$lib/ui/academia/data";
    import Coursework from "$lib/ui/academia/Coursework.svelte";
    import Degree from "$lib/ui/academia/Degree.svelte";
</script>

<h1>Academia</h1>
<ul>
    <li><Degree/></li>
    <li><Roles header="Teaching" roles={teaching_roles}/></li>
    <li><Roles header="Research" roles={research_roles}/></li>
    <li><Coursework/></li>
</ul>

<style>
    @import './section.css';
</style>