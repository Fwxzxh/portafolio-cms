<script>
	import { HeroSection } from '$components';
	import AboutMeSection from '$components/Sections/AboutMeSection.svelte';
	import ContactSection from '$components/Sections/ContactSection.svelte';
	import MyWorkSection from '$components/Sections/MyWorkSection.svelte';
	import SkillsSection from '$components/Sections/SkillsSection.svelte';

	const { data } = $props();

	let { workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMeSection {workExperience} />
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
