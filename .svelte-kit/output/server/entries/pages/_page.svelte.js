import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { S as Seo } from "../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.g.svelte-ikj1jd{--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity))\n}em.svelte-ikj1jd{font-family:Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-size:110%;line-height:100%\n}.project-pair.svelte-ikj1jd{margin-left:-0.75rem;margin-right:-0.75rem;display:grid;row-gap:0.25rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.project-pair.svelte-ikj1jd:hover{--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity))\n}@media(min-width: 640px){.project-pair.svelte-ikj1jd{grid-template-columns:1fr 2fr\n    }}@media(max-width: 420px){#eric-is.svelte-ikj1jd{margin-top:-2.5rem\n    }}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Navya Gupta",
      description: "Statistician, researcher and software engineer."
    },
    {},
    {}
  )}

<p class="layout-md text-black text-xl leading-tight font-light mb-16 svelte-ikj1jd" id="eric-is"><span class="g svelte-ikj1jd">is a</span> statistician<span class="g svelte-ikj1jd">,</span><br>
  researcher<span class="g svelte-ikj1jd">, and</span><br>
  software engineer<span class="g svelte-ikj1jd">.</span></p>

<div class="layout-md flex items-start gap-8 mb-16"><div class="flex-1 text-lg space-y-5"><p>Hey there!</p>

    <p>My name is Navya, and I&#39;m excited to be on this journey of becoming a
      researcher and statistician. I love delving into <em class="svelte-ikj1jd">predictive modeling, simplifying high-dimensional data, and working
        with real life financial and biological datasets. 
      </em>. I&#39;m also fascinated by the math behind algorithms. Alongside that,
      I&#39;m keen on making statistics and data visualization more accessible to
      the general public.
    </p></div>
  <img src="/assets/images/prof.jpeg" alt="Navya Gupta" class="w-48 h-48 object-cover rounded-lg flex-shrink-0 mt-8"></div>

<div class="layout-md text-lg mb-16"><p>On a personal note, I am an avid reader and am currently re-reading Gone Girl. 
    I love dancing, fun-fact : I do 5-6 different forms of dancing, but ballroom is my
    favourite! I&#39;ve also recently taken up jiu-jitsu and my abs have been aching every 
    time I laugh or cough. Oops! 
  </p></div>

<div class="layout-md text-lg space-y-14"><div class="leading-snug space-y-4 text-sm"><p class="pb-2 text-base font-medium">TLDR:</p>

    <div class="space-y-4"><div class="project-pair svelte-ikj1jd"><div class="text-black font-medium">Education</div>
        <div><p>MS in Statistics, <span class="font-semibold">University of Illinois at Urbana-Champaign</span></p>
          <p>BTech in Computer Science and Engineering, <span class="font-semibold">Manipal Institute of Technology</span></p></div></div>

      <div class="project-pair svelte-ikj1jd"><div class="text-black font-medium">Research</div>
        <div><p>Computational models for spatial transcriptomics with Prof.
            Dave Zhao
          </p>
          <p>Deep learning and geometrical approaches for NIR images at <span class="font-semibold">Samsung Research India</span></p></div></div>

      <div class="project-pair svelte-ikj1jd"><div class="text-black font-medium">Work Experience</div>
        <div><p>Research Data Scientist @ <span class="font-semibold">Kalderos</span></p>
          <p>Data Science Intern @ <span class="font-semibold">Bayer R&amp;D </span></p>
          <p>Software Development Engineer @ <span class="font-semibold">Citrix R&amp;D</span></p>
          <p>Software Development Intern @ <span class="font-semibold">Citrix R&amp;D</span></p>
          <p>Summer Intern @ <span class="font-semibold">Fleetx</span></p></div></div></div></div>

  <div class="space-y-5"><p>I am currently a Research Data Scientist at Kalderos, where I build and productionize 
              ML/NLP systems that fuse text and tabular data, leverage preference learning and 
              distillation to sharpen decisions, and partner across teams to run reliable models at scale.
            </p>
            <p>Prior to that, I completed my Masters in Statistics at the University of Illinois at
              Urbana-Champaign. I worked with Prof. Sihai Dave Zhao on
              developing advanced computational models to process and analyze
              large-scale spatial transcriptomics datasets for enhanced accuracy
              and efficiency.
            </p>

            <p>Not so long ago, I was an intern at Bayer Research and
              Development, where I worked on developing rank correlation
              analyses to determine optimal moisture levels for
              maximizing data quality and yield predictions.
            </p>

    <p>Before starting my graduate studies, I worked as a Software Development
      Engineer at Citrix R&amp;D, where I developed and maintained the Citrix
      Workspace app for HTML5 and Chrome OS. My work culminated in the best
      feature delivered in Q1 2023. Prior to that, I was an intern at Citrix
      where I optimized visualization and analytics with GA4.
    </p>

    <p>I completed my undergraduate studies in Computer Science and Engineering
      with a minors in Big Data at Manipal Institute of Technology. While there, I helped found 
      Manipal BioMachines and also graduated as department rank 1. 
      
      I was an independent research associate at Samsung Research India, where I
      collaborated with the Visual Intelligence Team on developing deep learning
      and geometrical approaches for near infrared images. I was also an intern
      at Fleetx, a fleet management startup, where I built quantitative models
      to reduce fuel.
    </p>
    <p>Interests: mathematics (forever love), reading(I plan on reading The Kite Runner next), 
      dancing, crocheting(an absolute beginner, I follow tutorials!) and singing.</p></div>
</div>`;
});
export {
  Page as default
};
