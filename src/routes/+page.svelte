<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";

  const featuredProjects = [
    {
      name: "sshx",
      href: "/projects#sshx",
      desc: "secure web-based, collaborative terminal",
    },
    {
      name: "Bore",
      href: "/projects#bore",
      desc: "bypass your NAT in just 400 lines of code",
      aside: "7500+ stars on GitHub",
    },
    {
      name: "Percival",
      href: "/projects#percival",
      desc: "reactive notebooks for exploratory data analysis",
    },
    {
      name: "Rustpad",
      href: "/projects#rustpad",
      desc: "self-hosted collaborative text editor",
      aside: "2M+ downloads",
    },
    {
      name: "Crepe",
      href: "/projects#crepe",
      desc: "compiled Datalog language in Rust",
      aside: "used by distributed databases & security systems",
    },
    {
      name: "FastSeg",
      href: "/projects#fastseg",
      desc: "real-time semantic segmentation for self-driving cars",
    },
    {
      name: "Set with Friends",
      href: "/projects#setwithfriends",
      desc: "online multiplayer card game",
      aside: "30M+ page views, 900K+ users",
    },
  ];
</script>

<Seo
  title="Navya Gupta"
  description="Statistician, researcher and software engineer."
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="eric-is"
>
  <span class="g">is a</span> data scientist<span class="g">,</span><br />
  researcher<span class="g">, and</span><br />
  software engineer<span class="g">.</span>
</p>

<div class="layout-md flex flex-col sm:flex-row items-start gap-8 mb-16">
  <img
    src="/assets/images/prof.jpeg"
    alt="Navya Gupta"
    class="w-48 h-48 object-cover rounded-lg flex-shrink-0 sm:mt-8 order-1 sm:order-2 mx-auto sm:mx-0"
  />
  <div class="flex-1 text-lg space-y-5 order-2 sm:order-1">
    <p>Hey there!</p>

    <p>
      My name is Navya, and I'm excited to be on this journey of becoming a
      researcher and statistician. I love delving into <em>
        predictive modeling, simplifying high-dimensional data, and working
        with real life financial and biological datasets. 
      </em>. I'm also fascinated by the math behind algorithms. Alongside that,
      I'm keen on making statistics and data visualization more accessible to
      the general public.
    </p>
  </div>
</div>

<div class="layout-md text-lg mb-16">
  <p>
    On a personal note, I am an avid reader and am currently re-reading Gone Girl. 
    I love dancing, fun-fact : I do 5-6 different forms of dancing, but ballroom is my
    favourite! I've also recently taken up jiu-jitsu and my abs have been aching every 
    time I laugh or cough. Oops! 
  </p>
</div>

<div class="layout-md text-lg space-y-14">

  <div class="leading-snug space-y-4 text-sm">
    <p class="pb-2 text-base font-medium">TLDR:</p>

    <div class="space-y-4">
      <div class="project-pair">
        <div class="text-black font-medium">Education</div>
        <div>
          <p>
            MS in Statistics, <span class="font-semibold"
              >University of Illinois at Urbana-Champaign</span
            >
          </p>
          <p>
            BTech in Computer Science and Engineering, <span
              class="font-semibold">Manipal Institute of Technology</span
            >
          </p>
        </div>
      </div>

      <div class="project-pair">
        <div class="text-black font-medium">Research</div>
        <div>
          <p>
            Computational models for spatial transcriptomics with Prof.
            Dave Zhao
          </p>
          <p>
            Deep learning and geometrical approaches for NIR images at <span
              class="font-semibold">Samsung Research India</span
            >
          </p>
        </div>
      </div>

      <div class="project-pair">
        <div class="text-black font-medium">Work Experience</div>
        <div>
                  <p>
            Research Data Scientist @ <span class="font-semibold">Kalderos</span>
          </p>
          <p>
            Data Science Intern @ <span class="font-semibold">Bayer R&D </span>
          </p>
          <p>
            Software Development Engineer @ <span class="font-semibold"
              >Citrix R&D</span
            >
          </p>
          <p>
            Software Development Intern @ <span class="font-semibold"
              >Citrix R&D</span
            >
          </p>
          <p>Summer Intern @ <span class="font-semibold">Fleetx</span></p>
        </div>
      </div>
    </div>
  </div>

  <div class="space-y-5">
              <p>
              I am currently a Research Data Scientist at Kalderos, where I build and productionize 
              ML/NLP systems that fuse text and tabular data, leverage preference learning and 
              distillation to sharpen decisions, and partner across teams to run reliable models at scale.
            </p>
            <p>
              Prior to that, I completed my Masters in Statistics at the University of Illinois at
              Urbana-Champaign. I worked with Prof. Sihai Dave Zhao on
              developing advanced computational models to process and analyze
              large-scale spatial transcriptomics datasets for enhanced accuracy
              and efficiency.
            </p>

            <p>
              Not so long ago, I was an intern at Bayer Research and
              Development, where I worked on developing rank correlation
              analyses to determine optimal moisture levels for
              maximizing data quality and yield predictions.
            </p>

    <p>
      Before starting my graduate studies, I worked as a Software Development
      Engineer at Citrix R&D, where I developed and maintained the Citrix
      Workspace app for HTML5 and Chrome OS. My work culminated in the best
      feature delivered in Q1 2023. Prior to that, I was an intern at Citrix
      where I optimized visualization and analytics with GA4.
    </p>

    <p>
      I completed my undergraduate studies in Computer Science and Engineering
      with a minors in Big Data at Manipal Institute of Technology. While there, I helped found 
      Manipal BioMachines and also graduated as department rank 1. 
      
      I was an independent research associate at Samsung Research India, where I
      collaborated with the Visual Intelligence Team on developing deep learning
      and geometrical approaches for near infrared images. I was also an intern
      at Fleetx, a fleet management startup, where I built quantitative models
      to reduce fuel.
    </p>
    <p>Interests: mathematics (forever love), reading(I plan on reading The Kite Runner next), 
      dancing, crocheting(an absolute beginner, I follow tutorials!) and singing.</p>
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  em {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #eric-is {
      @apply -mt-10;
    }
  }
</style>
