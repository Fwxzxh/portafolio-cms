<script>
	import { HeroSection } from '$components';
	import AboutMeSection from '$components/Sections/AboutMeSection.svelte';
	import MyWorkSection from '$components/Sections/MyWorkSection.svelte';

	const { data } = $props();

	let { workExperience, projects } = data;

	// $inspect(data);
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
