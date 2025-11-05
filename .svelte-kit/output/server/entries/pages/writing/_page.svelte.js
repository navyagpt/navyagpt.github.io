import { c as create_ssr_component, v as validate_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { f as formatTime } from "../../../chunks/utils.js";
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "7",
        "y1": "17",
        "x2": "17",
        "y2": "7"
      }
    ],
    ["polyline", { "points": "7 7 17 7 17 17" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowUpRight = Arrow_up_right;
const WritingList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `<div class="grid gap-y-4">${each(data2, (item) => {
    return `<a${add_attribute("href", item.link, 0)} class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors" target="_blank" rel="noreferrer"><div class="flex flex-col sm:flex-row sm:items-end mb-1.5"><div class="text-lg text-black">${escape(item.title)}
          ${validate_component(ArrowUpRight, "ArrowUpRight").$$render(
      $$result,
      {
        size: 18,
        class: "inline text-neutral-400"
      },
      {},
      {}
    )}</div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500">${escape(formatTime("%B %-d, %Y", item.date))}
        </div></div>
      <div class="text-lg leading-snug font-serif italic">${escape(item.summary)}</div>
    </a>`;
  })}</div>`;
});
var data = {
  papers: [
    {
      title: "Designing Datalog-Based Embedded Languages",
      date: /* @__PURE__ */ new Date(1679616e6),
      summary: "My senior thesis, where I design and implement two logic programming languages, present case studies on their real-world usage, and evaluate them as systems.\n",
      link: "/assets/pdf/Senior_Thesis.pdf"
    },
    {
      title: "Tandem Solar Cells",
      date: /* @__PURE__ */ new Date(16708896e5),
      summary: "Fabrication and characterization of a tandem solar device. Final project for MIT class 6.2540 on nanofabrication.\n",
      link: "https://docs.google.com/presentation/d/e/2PACX-1vTK3Mz-3TaocxwgeP-RuD4qhdBk6bn_UzdZDrVRpP6-p-wnLut_mfGB0PzeSTnbIc20eXG7E618-Npw/pub"
    },
    {
      title: "Multi-Architecture Parallelism",
      date: /* @__PURE__ */ new Date(16707168e5),
      summary: "Envisioning flexible parallelism in deep learning compilers on heterogeneous compute. Final project for CS 243, Advanced Computer Networks.\n",
      link: "/assets/pdf/Jax_Parallelism.pdf"
    },
    {
      title: "Pressure Field Models",
      date: /* @__PURE__ */ new Date(16389216e5),
      summary: "Efficient simulation of contact dynamics using a hydroelastic intersection model. Final project for 6.834, Robotic Manipulation.\n",
      link: "/assets/pdf/Hydroelastics.pdf"
    },
    {
      title: "Pencil Sketch Rendering",
      date: /* @__PURE__ */ new Date(16215552e5),
      summary: "Real-time stylized rendering of meshes and SDFs using geometry processing techniques. Final project for 6.838, Shape Analysis.\n",
      link: "https://pencil-sketching.vercel.app/Pencil-Sketching.pdf"
    },
    {
      title: "Time-Space Lower Bounds",
      date: /* @__PURE__ */ new Date(16202592e5),
      summary: "An technical exposition of Ran Raz's strong hardness result for learning problems. Final project for CS 221, Advanced Computational Complexity.\n",
      link: "/assets/pdf/Learning_Space_Cryptography.pdf"
    },
    {
      title: "3-Inflatable Permutations",
      date: /* @__PURE__ */ new Date(16118784e5),
      summary: "Mathematics research paper, published in the Electronic Journal of Combinatorics (E-JC).\n",
      link: "https://www.combinatorics.org/ojs/index.php/eljc/article/view/v28i1p24/pdf"
    },
    {
      title: "Taint Analysis for Browser Fingerprinting",
      date: /* @__PURE__ */ new Date(16076448e5),
      summary: "Dynamic taint analysis for user privacy on the web. Final project for CS 263, Systems Security.\n",
      link: "/assets/pdf/Browser_Fingerprinting.pdf"
    },
    {
      title: "Generative Music Modeling",
      date: /* @__PURE__ */ new Date(16073856e5),
      summary: "Composing music by annealed Langevin dynamics and noise-conditional score networks. Final project for CS 252r, Advanced Topics in Programming Languages and AI.\n",
      link: "/assets/pdf/Generative_Music_Modeling.pdf"
    },
    {
      title: "Lorenz Attractor Bifurcations",
      date: /* @__PURE__ */ new Date(16060896e5),
      summary: "Presentation on chaos theory of the Lorenz system, local and global bifurcations. Final project for Math 118r, Chaotic Dynamical Systems.\n",
      link: "/assets/pdf/Lorenz_System_Bifurcations.pdf"
    },
    {
      title: "DeepCoder",
      date: /* @__PURE__ */ new Date(160272e7),
      summary: "Seminar presentation on learned inductive program synthesis (published in ICLR 2017) for CS 252r, Advanced Topics in Programming Languages and AI.\n",
      link: "/assets/pdf/DeepCoder.pdf"
    },
    {
      title: "Compression-Based Generalization Bounds",
      date: /* @__PURE__ */ new Date(15894144e5),
      summary: "Survey of modern research in deep learning theory. Final project for CS 228, Computational Learning Theory.\n",
      link: "/assets/pdf/Compression_Based_Generalization_Bounds.pdf"
    },
    {
      title: "Single Bidder Auctions",
      date: /* @__PURE__ */ new Date(1575936e6),
      summary: "Survey of research in mechanism design and optimal transport theory. Final project for CS 223, Random Processes and Algorithms.\n",
      link: "/assets/pdf/Single_Bidder_Multi_Item_Auctions.pdf"
    },
    {
      title: "On Quasirandom Permutations",
      date: /* @__PURE__ */ new Date(15267744e5),
      summary: "Talk introducing new forcing results on quasirandom permutations. This solved an open problem in combinatorics.\n",
      link: "https://math.mit.edu/research/highschool/primes/materials/2018/conf/9-2%20Zhang.pdf"
    }
  ],
  notes: [
    {
      title: "Stat 211: Statistical Inference",
      date: /* @__PURE__ */ new Date(16383168e5),
      summary: "Graduate-level class discussing inference on statistical models, frequentist and Bayesian perspectives.\n",
      link: "/assets/pdf/Stat_211_Notes.pdf"
    },
    {
      title: "CS 252r: PL Design Studio",
      date: /* @__PURE__ */ new Date(16370208e5),
      summary: "Graduate seminar class exploring programming languages for verification, differentiation, compilation, logic, etc.\n",
      link: "/assets/pdf/CS_252r_Notes_PL_Studio.pdf"
    },
    {
      title: "Math 132: Differential Topology",
      date: /* @__PURE__ */ new Date(16189632e5),
      summary: "Smooth manifolds, transversality, intersection theory, differential forms, Stokes' theorem, and cohomology.\n",
      link: "/assets/pdf/Math_132_Notes.pdf"
    },
    {
      title: "CS 252r: Programming Languages + AI",
      date: /* @__PURE__ */ new Date(16075584e5),
      summary: "Graduate seminar class on topics at the intersection of programming languages and artificial intelligence.\n",
      link: "/assets/pdf/CS_252r_Notes.pdf"
    },
    {
      title: "Stat 210: Probability",
      date: /* @__PURE__ */ new Date(16069536e5),
      summary: "Graduate-level probability class providing foundational material for statistics PhD students.\n",
      link: "/assets/pdf/Stat_210_Notes.pdf"
    },
    {
      title: "F=ma Solutions Manual",
      date: /* @__PURE__ */ new Date(16034112e5),
      summary: "Instructive solutions for nine years of past F=ma physics competition problems.\n",
      link: "https://pubs.aip.org/books/monograph/129/F-ma-Contests2011-2019-Solutions-Manual"
    },
    {
      title: "Kinetic Tournaments",
      date: /* @__PURE__ */ new Date(15987456e5),
      summary: "A fast, kinetic data structure that offers flexibility, a simple implementation, and interesting combinatorial analysis.\n",
      link: "https://codeforces.com/blog/entry/82094"
    },
    {
      title: "CS 228: Computational Learning Theory",
      date: /* @__PURE__ */ new Date(1594512e6),
      summary: "Graduate-level class on computational learning theory taught by Leslie Valiant, Turing award laureate.\n",
      link: "/assets/pdf/CS_228_Notes.pdf"
    },
    {
      title: "Math 55b: Analysis and Topology",
      date: /* @__PURE__ */ new Date(15881184e5),
      summary: "The second semester of Math 55, a rigorous first-year math class. Point-set and algebraic topology, real analysis, and complex analysis.\n",
      link: "/assets/pdf/Math_55b_Notes.pdf"
    },
    {
      title: "Math 55a: Abstract and Linear Algebra",
      date: /* @__PURE__ */ new Date(15768864e5),
      summary: "The first semester of Math 55, a rigorous first-year math class. Group theory, abstract linear algebra, and representation theory.\n",
      link: "/assets/pdf/Math_55a_Notes.pdf"
    }
  ]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Navya Gupta – Writing",
      description: "Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Notes and Tutorials</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.notes }, {}, {})}</section>

<section class="layout-md py-12"><h2 class="heading2">Academic Writing</h2>
  ${validate_component(WritingList, "WritingList").$$render($$result, { data: data.papers }, {}, {})}</section>`;
});
export {
  Page as default
};
