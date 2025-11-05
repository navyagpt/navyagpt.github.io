import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
const Workplace = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { company } = $$props;
  let { url } = $$props;
  let { dates } = $$props;
  let { location } = $$props;
  let { defaultHidden = false } = $$props;
  let hidden = defaultHidden;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.defaultHidden === void 0 && $$bindings.defaultHidden && defaultHidden !== void 0)
    $$bindings.defaultHidden(defaultHidden);
  return `<div class="${["mb-8", hidden ? "cursor-pointer" : ""].join(" ").trim()}"><h3 class="text-black text-lg leading-tight mb-1">${escape(title)} at <a class="link"${add_attribute("href", url, 0)}>${escape(company)}</a></h3>
  <p class="font-light mb-2"><span class="whitespace-nowrap">${escape(dates)}</span>
    <span class="px-0.5 text-neutral-500">•</span>
    <span class="whitespace-nowrap">${escape(location)}</span></p>
  ${!hidden ? `<ul class="list-disc pl-7 marker:text-neutral-400">${slots.default ? slots.default({}) : ``}</ul>` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'b.svelte-w75nkw.svelte-w75nkw{font-weight:500\n}ul.svelte-w75nkw.svelte-w75nkw{list-style-type:disc;padding-left:1.75rem\n}ul.svelte-w75nkw .svelte-w75nkw::marker{color:rgb(163 163 163 )\n}ul.svelte-w75nkw.svelte-w75nkw::marker{color:rgb(163 163 163 )\n}.byline.svelte-w75nkw.svelte-w75nkw{font-family:Newsreader, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;font-style:italic\n}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Navya Gupta – Resume",
      description: "Software engineer, researcher, and designer. Making meaningful systems and interfaces for people."
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Education</h2>

  <div class="mb-4"><div class="flex justify-between items-end"><h3 class="text-black text-lg">Harvard University</h3>
      <div class="text-neutral-500 mb-0.5">2022 — 2023</div></div>
    <p class="byline svelte-w75nkw">S.M. in Computer Science</p></div>

  <div class="mb-4"><div class="flex justify-between items-end"><h3 class="text-black text-lg">Harvard University</h3>
      <div class="text-neutral-500 mb-0.5">2019 — 2023</div></div>
    <p class="byline svelte-w75nkw">A.B. in Computer Science and Mathematics</p></div>

  <p>Graduated magna cum laude, with highest honors in field.</p>

  <h4 class="font-medium mt-4 mb-1">Teaching:</h4>
  <ul class="svelte-w75nkw"><li class="svelte-w75nkw">TF for CS 153 (Compilers), Fall 2021 —
      <em class="svelte-w75nkw">Certificate of Distinction in Teaching</em></li>
    <li class="svelte-w75nkw">TA for
      <a class="link svelte-w75nkw" href="https://sgi.mit.edu/">Summer Geometry Institute (SGI)</a>, Summer 2021
    </li>
    <li class="svelte-w75nkw">TF for CS 161 (Operating Systems), Spring 2021 —
      <em class="svelte-w75nkw">Certificate of Distinction in Teaching</em></li>
    <li class="svelte-w75nkw">TF for CS 182 (Artificial Intelligence), Fall 2020</li>
    <li class="svelte-w75nkw">TF for CS 124 (Data Structures and Algorithms), Spring 2020 —
      <em class="svelte-w75nkw">Commendation for Extraordinary Teaching</em></li></ul>

  <h4 class="font-medium mt-4 mb-1">Graduate-level technical coursework:</h4>
  <ul class="svelte-w75nkw"><li class="svelte-w75nkw">Advanced Computational Complexity (CS 221)</li>
    <li class="svelte-w75nkw">Random Processes and Algorithms (CS 223)</li>
    <li class="svelte-w75nkw">Computational Learning Theory (CS 228)</li>
    <li class="svelte-w75nkw">Advanced Computer Networks (CS 243)</li>
    <li class="svelte-w75nkw">Advanced Topics in PL/AI (CS 252r)</li>
    <li class="svelte-w75nkw">Advanced Topics in PL Design (CS 252r)</li>
    <li class="svelte-w75nkw">Systems Security (CS 263)</li>
    <li class="svelte-w75nkw">Distributed Systems Engineering (MIT 6.824)</li>
    <li class="svelte-w75nkw">Shape Analysis (MIT 6.838)</li>
    <li class="svelte-w75nkw">Robotic Manipulation (MIT 6.843)</li>
    <li class="svelte-w75nkw">Probability (Stat 210)</li>
    <li class="svelte-w75nkw">Statistical Inference (Stat 211)</li></ul>

  <h4 class="font-medium mt-4 mb-1">Undergraduate technical coursework:</h4>
  <ul class="svelte-w75nkw"><li class="svelte-w75nkw">Compilers (CS 153)</li>
    <li class="svelte-w75nkw">Operating Systems (CS 161)</li>
    <li class="svelte-w75nkw">Computer Graphics (MIT 6.837)</li>
    <li class="svelte-w75nkw">Nanotechnology Fabrication (MIT 6.2540)</li>
    <li class="svelte-w75nkw">Chaotic Dynamical Systems (Math 118r)</li>
    <li class="svelte-w75nkw">Number Fields (Math 129)</li>
    <li class="svelte-w75nkw">Differential Topology (Math 132)</li>
    <li class="svelte-w75nkw">Honors Abstract Algebra (Math 55a)</li>
    <li class="svelte-w75nkw">Honors Real and Complex Analysis (Math 55b)</li></ul></section>

<section class="layout-md py-12"><h2 class="heading2">Professional Experience</h2>

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Founding Engineer",
      company: "Modal Labs",
      url: "https://modal.com/",
      dates: "February 2022 – Current",
      location: "New York, NY"
    },
    {},
    {
      default: () => {
        return `<li>Modal is a high-performance serverless function platform. I joined the
      team of 3 as our first systems engineer, frontend engineer, and
      interaction designer (“Rust / web expert”).
    </li>
    <li>I was the principal architect behind Modal&#39;s container runtime, the
      high-performance system written in Rust that runs Modal functions. Its
      stability let Modal scale from 50 CPUs / 2 GPUs to 100,000 CPUs / 5,000
      GPUs, all while adding new features to the platform.
    </li>
    <li>My technical contributions include Modal&#39;s content-addressed file system
      and global cache over petabytes in tiered storage, building an <a class="link" href="https://modal.com/blog/serverless-http">HTTP and WebSocket stack</a>, running distributed
      <a class="link" href="https://modal.com/docs/guide/tunnels">TLS relays</a>, <a class="link" href="https://gvisor.dev/">sandboxing containers</a>,
      controlling network traffic with eBPF, and managing Kubernetes + VPN
      infrastructure.
    </li>
    <li>I also made the <a class="link" href="https://modal.com">modal.com</a> website,
      designing the interfaces and developing the data fetching system. We applied
      these to user dashboards, a documentation site, 2D + 3D graphics, and web-based
      internal tools.
    </li>
    <li>At Modal, I introduced Rust and Svelte. These are now half of the
      codebase, though it took time to get others familiar with the tech. I
      think the choice helped Modal develop reliable, correct, boring (i.e., low
      p99 latency, few production issues) software.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Contract Software Engineer",
      company: "Prosper Robotics",
      url: "https://prosper.org/",
      dates: "January 2022",
      location: "London, UK"
    },
    {},
    {
      default: () => {
        return `<li>Early-stage startup developing VR-teleoperated household robots. Worked
      with electrical and mechanical engineers.
    </li>
    <li>I wrote real-time (&lt;10 μs) embedded microcontrollers in C++, developed
      new network services and robot control systems in Go. Refactored a lot of
      code, fixed many bugs, ported software to a new robot, introduced
      continuous integration, tests, static type checking for Python.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Software Engineer",
      company: "Convex",
      url: "https://convex.dev/",
      dates: "June 2021 – October 2021",
      location: "San Francisco, CA"
    },
    {},
    {
      default: () => {
        return `<li>First hired engineer at a seed-stage startup. Worked with three
      experienced technical cofounders (ex-principal engineers at Dropbox) to
      build a reactive, serverless database platform using Rust, integrated with
      the V8 JavaScript engine.
    </li>
    <li>Wrote significant components of the MVP. As an early core team member,
      this included rearchitecting the entire Convex client library, writing
      several systems components in Rust, and advising on developer experience.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Quantitative Research Intern",
      company: "Jump Trading",
      url: "https://jumptrading.com/",
      dates: "June 2021 – August 2021",
      location: "Chicago, IL"
    },
    {},
    {
      default: () => {
        return `<li>Won the intern trading strategies competition and rotated on a trading
      team to research algorithmic signals in US equities.
    </li>
    <li>Developed decentralized apps on the Ethereum blockchain for the
      cryptocurrency team, including new trading algorithms on DEXs. Contributed
      to the open source Ethereum ecosystem in Rust, Go, and Python.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Software Engineering Intern",
      company: "Scale AI",
      url: "https://scale.com/",
      dates: "December 2020 – January 2021",
      location: "San Francisco, CA"
    },
    {},
    {
      default: () => {
        return `<li>Worked on machine learning infrastructure for a fast-growing startup using
      Terraform, Kubernetes, and AWS.
    </li>
    <li>Developed an in-house system to unify the ML training workflow, allowing
      the team to quickly iterate on models, share results on a tracking server,
      and launch Kubernetes distributed training jobs, saving “hours” of time on
      each experiment.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Architecture Intern",
      company: "Nvidia",
      url: "https://www.nvidia.com",
      dates: "June 2020 – August 2020",
      location: "Santa Clara, CA"
    },
    {},
    {
      default: () => {
        return `<li>Worked with the Applied Deep Learning Research (ADLR) group on
      <a class="link" href="https://arxiv.org/abs/2005.10821">deep learning models</a> for street image segmentation.
    </li>
    <li>Individually developed and released
      <a class="link" href="https://github.com/ekzhang/fastseg">FastSeg</a>, an
      open-source library containing state-of-the-art PyTorch implementations of
      MobileNetV3 LR-ASPP for real-time semantic segmentation, significantly
      more accurate than existing public implementations.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Research Assistant",
      company: "Harvard Programming Languages Group",
      url: "https://pl.seas.harvard.edu/",
      dates: "June 2020 – August 2020",
      location: "Cambridge, MA",
      defaultHidden: true
    },
    {},
    {
      default: () => {
        return `<li>Worked on a C++ compiler for
      <a class="link" href="https://github.com/HarvardPL/formulog">Formulog</a>,
      a variant of Datalog that supports ML-like syntax extension and SMT
      queries.
    </li>
    <li>Generated highly parallel templatized C++17 code, used caching in B-Tree
      comparisons to speed up Datalog evaluation by 16x, and optimized existing
      OpenMP code using lockless data structures for an additional 4x speedup.
    </li>
    <li>Wrote a handwritten parser that was 30x faster than the ANTLR-generated
      LL(*) parser and used 20x less memory (80 GB to 4 GB).
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Undergraduate Researcher",
      company: "Predictive Medicine Group",
      url: "https://www.predmed.org/",
      dates: "December 2019 – June 2020",
      location: "Boston, MA",
      defaultHidden: true
    },
    {},
    {
      default: () => {
        return `<li>Conducted research in statistics &amp; medical informatics advised by Ben Reis
      (Harvard Medical School), developing temporal models to identify patients
      at high risk of suicide based on medical histories obtained from
      Massachusetts General Hospital.
    </li>`;
      }
    }
  )}

  ${validate_component(Workplace, "Workplace").$$render(
    $$result,
    {
      title: "Computer Science Instructor",
      company: "AlphaStar Academy",
      url: "https://alphastar.academy/",
      dates: "December 2017 – April 2020",
      location: "Santa Clara, CA",
      defaultHidden: true
    },
    {},
    {
      default: () => {
        return `<li>Taught advanced algorithms and data structures (USACO Platinum) and
      AIME-level (national math competition) mathematics to talented high school
      students across the nation.
    </li>
    <li>Developed detailed lesson plans and recorded lectures for future summer
      programs and online courses.
    </li>`;
      }
    }
  )}</section>

<section class="layout-md py-12"><h2 class="heading2">Awards and Honors</h2>

  <div class="mb-4"><h3 class="font-medium mb-1">Computer Science:</h3>
    <ul class="svelte-w75nkw"><li class="svelte-w75nkw"><b class="svelte-w75nkw">International Olympiad in Informatics (IOI):</b> Gold Medalist (2018,
        2019), 7<sup class="svelte-w75nkw">th</sup> place globally
      </li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">Google Hash Code:</b> World Finalist (2020, 2021, 2022), 6<sup class="svelte-w75nkw">th</sup> place team out of over 100,000 students and professionals
      </li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">Google Code Jam:</b> Round 3 Finalist (2020), placed 34<sup class="svelte-w75nkw">th</sup>
        globally
      </li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">Facebook Hacker Cup:</b> Round 3 Finalist (2020)</li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">PicoCTF:</b> Winner (2018), ranked 6th</li></ul></div>

  <div class="mb-4"><h3 class="font-medium mb-1">Mathematics:</h3>
    <ul class="svelte-w75nkw"><li class="svelte-w75nkw"><b class="svelte-w75nkw">Mathematical Olympiad Program (MOP):</b> Participant (2017), IMO team
        selection group (2017, 2018)
      </li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">USA Math Olympiad (USAMO):</b> Honorable Mention (2017), top 24 in nation
      </li></ul></div>

  <div class="mb-4"><h3 class="font-medium mb-1">Physics:</h3>
    <ul class="svelte-w75nkw"><li class="svelte-w75nkw"><b class="svelte-w75nkw">U.S. Physics Team:</b> Invitee (2017, 2018, 2019)</li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">USA Physics Olympiad (USAPhO):</b> Gold Medalist (2017, 2018, 2019)
      </li></ul></div>

  <div class="mb-4"><h3 class="font-medium mb-1">Music Performance:</h3>
    <ul class="svelte-w75nkw"><li class="svelte-w75nkw"><b class="svelte-w75nkw">National YoungArts Foundation:</b> Winner in Classical Music (2018, 2019)
      </li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">JDR Viola Competition:</b> Grand prize winner, performed with a professional
        orchestra (2019)
      </li>
      <li class="svelte-w75nkw"><b class="svelte-w75nkw">Texas All-State Symphony Orchestra:</b> Principal Violist (2017), Co-Principal
        (2016, 2018)
      </li></ul></div>
</section>`;
});
export {
  Page as default
};
