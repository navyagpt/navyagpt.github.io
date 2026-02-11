<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";

  const experiences = [
    {
      company: "Kalderos Inc.",
      role: "Research Data Scientist",
      location: "Chicago, IL",
      dates: "June 2025 - Present",
      description: "Ideating and building ML/DL/LLM systems in a highly regularized industry.",
      current: true
    },
    {
      company: "Bayer Research & Development",
      role: "Machine Learning Co-op",
      location: "Champaign, IL",
      dates: "May 2024 - May 2025",
      description: "I worked full-time as a Data Scientist at Bayer in my final year of MS, contributing to solving biological problems with ML/CV solutions.",
      current: false
    },
    {
      company: "University of Illinois Urbana-Champaign",
      role: "Graduate Research Assistant",
      location: "Champaign, IL",
      dates: "Jan 2024 - May 2024",
      description: "Developed KDE++ for efficient probability predictions in gene datasets, achieving 45x computational speedup.",
      current: false
    },
    {
      company: "Citrix Research & Development",
      role: "Software Development Engineer",
      location: "Bangalore, India",
      dates: "Jul 2022 - Jul 2023",
      description: "Enhanced Citrix Workspace App for HTML5/ChromeOS, scaling to 1M monthly active users.",
      current: false
    },
    {
      company: "Citrix Research & Development",
      role: "Software Development Intern",
      location: "Bangalore, India",
      dates: "Jan 2022 - Jun 2022",
      description: "Developed visualization and analytics optimization with GA4, adopted by 10+ CWA teams.",
      current: false
    }
  ];
</script>

<Seo
  title="Navya Gupta – Experience"
  description="Professional experience in applied science, machine learning, and software engineering."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Experience</h2>

  <p class="text-lg mb-12">
    My journey through data science, machine learning, and software engineering.
  </p>

  <div class="timeline">
    {#each experiences as exp, i}
      <div class="timeline-item">
        <div class="timeline-marker" class:current={exp.current}></div>
        <div class="timeline-content">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
            <h3 class="text-black text-lg font-medium">{exp.role}</h3>
            <span class="text-neutral-500 text-sm whitespace-nowrap">{exp.dates}</span>
          </div>
          <p class="text-neutral-600 mb-2">
            {exp.company} <span class="text-neutral-400">•</span> {exp.location}
          </p>
          <p class="text-neutral-700">{exp.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .timeline {
    @apply relative;
    padding-left: 2rem;
  }

  .timeline::before {
    content: "";
    @apply absolute left-[7px] top-2 bottom-2 w-0.5 bg-neutral-200;
  }

  .timeline-item {
    @apply relative pb-10;
  }

  .timeline-item:last-child {
    @apply pb-0;
  }

  .timeline-marker {
    @apply absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-neutral-300 border-4 border-white;
    box-shadow: 0 0 0 2px theme('colors.neutral.200');
  }

  .timeline-marker.current {
    @apply bg-black;
    box-shadow: 0 0 0 2px theme('colors.neutral.400');
  }

  .timeline-content {
    @apply pl-2;
  }
</style>
