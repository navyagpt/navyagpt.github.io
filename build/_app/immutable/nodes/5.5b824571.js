import {
  S as V,
  i as q,
  s as W,
  R,
  y as L,
  z as B,
  A as F,
  T as Q,
  U as ee,
  g as k,
  d as T,
  B as N,
  V as K,
  K as te,
  L as ae,
  M as ne,
  N as se,
  k as b,
  l as S,
  m as $,
  h as f,
  n as h,
  b as I,
  v as ie,
  f as re,
  W as oe,
  q as E,
  a as C,
  r as x,
  c as A,
  C as u,
  u as G,
  F as le,
} from "../chunks/index.116c98fe.js";
import { S as ce } from "../chunks/Seo.d2354f56.js";
import { I as de } from "../chunks/Icon.6c8db450.js";
import { f as O } from "../chunks/utils.c7248e99.js";
function me(c) {
  let e;
  const i = c[2].default,
    a = te(i, c, c[3], null);
  return {
    c() {
      a && a.c();
    },
    l(t) {
      a && a.l(t);
    },
    m(t, s) {
      a && a.m(t, s), (e = !0);
    },
    p(t, s) {
      a &&
        a.p &&
        (!e || s & 8) &&
        ae(a, i, t, t[3], e ? se(i, t[3], s, null) : ne(t[3]), null);
    },
    i(t) {
      e || (k(a, t), (e = !0));
    },
    o(t) {
      T(a, t), (e = !1);
    },
    d(t) {
      a && a.d(t);
    },
  };
}
function ue(c) {
  let e, i;
  const a = [{ name: "arrow-up-right" }, c[1], { iconNode: c[0] }];
  let t = { $$slots: { default: [me] }, $$scope: { ctx: c } };
  for (let s = 0; s < a.length; s += 1) t = R(t, a[s]);
  return (
    (e = new de({ props: t })),
    {
      c() {
        L(e.$$.fragment);
      },
      l(s) {
        B(e.$$.fragment, s);
      },
      m(s, n) {
        F(e, s, n), (i = !0);
      },
      p(s, [n]) {
        const r =
          n & 3
            ? Q(a, [a[0], n & 2 && ee(s[1]), n & 1 && { iconNode: s[0] }])
            : {};
        n & 8 && (r.$$scope = { dirty: n, ctx: s }), e.$set(r);
      },
      i(s) {
        i || (k(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        T(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        N(e, s);
      },
    }
  );
}
function fe(c, e, i) {
  let { $$slots: a = {}, $$scope: t } = e;
  const s = [
    ["line", { x1: "7", y1: "17", x2: "17", y2: "7" }],
    ["polyline", { points: "7 7 17 7 17 17" }],
  ];
  return (
    (c.$$set = (n) => {
      i(1, (e = R(R({}, e), K(n)))), "$$scope" in n && i(3, (t = n.$$scope));
    }),
    (e = K(e)),
    [s, e, a, t]
  );
}
class pe extends V {
  constructor(e) {
    super(), q(this, e, fe, ue, W, {});
  }
}
const ge = pe;
function U(c, e, i) {
  const a = c.slice();
  return (a[1] = e[i]), a;
}
function X(c) {
  let e,
    i,
    a,
    t = c[1].title + "",
    s,
    n,
    r,
    o,
    d,
    y = O("%B %-d, %Y", c[1].date) + "",
    D,
    M,
    p,
    w = c[1].summary + "",
    l,
    g,
    P,
    _;
  return (
    (r = new ge({ props: { size: 18, class: "inline text-neutral-400" } })),
    {
      c() {
        (e = b("a")),
          (i = b("div")),
          (a = b("div")),
          (s = E(t)),
          (n = C()),
          L(r.$$.fragment),
          (o = C()),
          (d = b("div")),
          (D = E(y)),
          (M = C()),
          (p = b("div")),
          (l = E(w)),
          (g = C()),
          this.h();
      },
      l(m) {
        e = S(m, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var v = $(e);
        i = S(v, "DIV", { class: !0 });
        var j = $(i);
        a = S(j, "DIV", { class: !0 });
        var z = $(a);
        (s = x(z, t)),
          (n = A(z)),
          B(r.$$.fragment, z),
          z.forEach(f),
          (o = A(j)),
          (d = S(j, "DIV", { class: !0 }));
        var H = $(d);
        (D = x(H, y)),
          H.forEach(f),
          j.forEach(f),
          (M = A(v)),
          (p = S(v, "DIV", { class: !0 }));
        var J = $(p);
        (l = x(J, w)), J.forEach(f), (g = A(v)), v.forEach(f), this.h();
      },
      h() {
        h(a, "class", "text-lg text-black"),
          h(d, "class", "sm:ml-auto mb-0.5 text-neutral-500"),
          h(i, "class", "flex flex-col sm:flex-row sm:items-end mb-1.5"),
          h(p, "class", "text-lg leading-snug font-serif italic"),
          h(e, "href", (P = c[1].link)),
          h(
            e,
            "class",
            "block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
          ),
          h(e, "target", "_blank"),
          h(e, "rel", "noreferrer");
      },
      m(m, v) {
        I(m, e, v),
          u(e, i),
          u(i, a),
          u(a, s),
          u(a, n),
          F(r, a, null),
          u(i, o),
          u(i, d),
          u(d, D),
          u(e, M),
          u(e, p),
          u(p, l),
          u(e, g),
          (_ = !0);
      },
      p(m, v) {
        (!_ || v & 1) && t !== (t = m[1].title + "") && G(s, t),
          (!_ || v & 1) &&
            y !== (y = O("%B %-d, %Y", m[1].date) + "") &&
            G(D, y),
          (!_ || v & 1) && w !== (w = m[1].summary + "") && G(l, w),
          (!_ || (v & 1 && P !== (P = m[1].link))) && h(e, "href", P);
      },
      i(m) {
        _ || (k(r.$$.fragment, m), (_ = !0));
      },
      o(m) {
        T(r.$$.fragment, m), (_ = !1);
      },
      d(m) {
        m && f(e), N(r);
      },
    }
  );
}
function he(c) {
  let e,
    i,
    a = c[0],
    t = [];
  for (let n = 0; n < a.length; n += 1) t[n] = X(U(c, a, n));
  const s = (n) =>
    T(t[n], 1, 1, () => {
      t[n] = null;
    });
  return {
    c() {
      e = b("div");
      for (let n = 0; n < t.length; n += 1) t[n].c();
      this.h();
    },
    l(n) {
      e = S(n, "DIV", { class: !0 });
      var r = $(e);
      for (let o = 0; o < t.length; o += 1) t[o].l(r);
      r.forEach(f), this.h();
    },
    h() {
      h(e, "class", "grid gap-y-4");
    },
    m(n, r) {
      I(n, e, r);
      for (let o = 0; o < t.length; o += 1) t[o] && t[o].m(e, null);
      i = !0;
    },
    p(n, [r]) {
      if (r & 1) {
        a = n[0];
        let o;
        for (o = 0; o < a.length; o += 1) {
          const d = U(n, a, o);
          t[o]
            ? (t[o].p(d, r), k(t[o], 1))
            : ((t[o] = X(d)), t[o].c(), k(t[o], 1), t[o].m(e, null));
        }
        for (ie(), o = a.length; o < t.length; o += 1) s(o);
        re();
      }
    },
    i(n) {
      if (!i) {
        for (let r = 0; r < a.length; r += 1) k(t[r]);
        i = !0;
      }
    },
    o(n) {
      t = t.filter(Boolean);
      for (let r = 0; r < t.length; r += 1) T(t[r]);
      i = !1;
    },
    d(n) {
      n && f(e), oe(t, n);
    },
  };
}
function _e(c, e, i) {
  let { data: a } = e;
  return (
    (c.$$set = (t) => {
      "data" in t && i(0, (a = t.data));
    }),
    [a]
  );
}
class Y extends V {
  constructor(e) {
    super(), q(this, e, _e, he, W, { data: 0 });
  }
}
var Z = {
  papers: [
    {
      title: "Designing Datalog-Based Embedded Languages",
      date: new Date(1679616e6),
      summary: `My senior thesis, where I design and implement two logic programming languages, present case studies on their real-world usage, and evaluate them as systems.
`,
      link: "/assets/pdf/Senior_Thesis.pdf",
    },
    {
      title: "Tandem Solar Cells",
      date: new Date(16708896e5),
      summary: `Fabrication and characterization of a tandem solar device. Final project for MIT class 6.2540 on nanofabrication.
`,
      link: "https://docs.google.com/presentation/d/e/2PACX-1vTK3Mz-3TaocxwgeP-RuD4qhdBk6bn_UzdZDrVRpP6-p-wnLut_mfGB0PzeSTnbIc20eXG7E618-Npw/pub",
    },
    {
      title: "Multi-Architecture Parallelism",
      date: new Date(16707168e5),
      summary: `Envisioning flexible parallelism in deep learning compilers on heterogeneous compute. Final project for CS 243, Advanced Computer Networks.
`,
      link: "/assets/pdf/Jax_Parallelism.pdf",
    },
    {
      title: "Pressure Field Models",
      date: new Date(16389216e5),
      summary: `Efficient simulation of contact dynamics using a hydroelastic intersection model. Final project for 6.834, Robotic Manipulation.
`,
      link: "/assets/pdf/Hydroelastics.pdf",
    },
    {
      title: "Pencil Sketch Rendering",
      date: new Date(16215552e5),
      summary: `Real-time stylized rendering of meshes and SDFs using geometry processing techniques. Final project for 6.838, Shape Analysis.
`,
      link: "https://pencil-sketching.vercel.app/Pencil-Sketching.pdf",
    },
    {
      title: "Time-Space Lower Bounds",
      date: new Date(16202592e5),
      summary: `An technical exposition of Ran Raz's strong hardness result for learning problems. Final project for CS 221, Advanced Computational Complexity.
`,
      link: "/assets/pdf/Learning_Space_Cryptography.pdf",
    },
    {
      title: "3-Inflatable Permutations",
      date: new Date(16118784e5),
      summary: `Mathematics research paper, published in the Electronic Journal of Combinatorics (E-JC).
`,
      link: "https://www.combinatorics.org/ojs/index.php/eljc/article/view/v28i1p24/pdf",
    },
    {
      title: "Taint Analysis for Browser Fingerprinting",
      date: new Date(16076448e5),
      summary: `Dynamic taint analysis for user privacy on the web. Final project for CS 263, Systems Security.
`,
      link: "/assets/pdf/Browser_Fingerprinting.pdf",
    },
    {
      title: "Generative Music Modeling",
      date: new Date(16073856e5),
      summary: `Composing music by annealed Langevin dynamics and noise-conditional score networks. Final project for CS 252r, Advanced Topics in Programming Languages and AI.
`,
      link: "/assets/pdf/Generative_Music_Modeling.pdf",
    },
    {
      title: "Lorenz Attractor Bifurcations",
      date: new Date(16060896e5),
      summary: `Presentation on chaos theory of the Lorenz system, local and global bifurcations. Final project for Math 118r, Chaotic Dynamical Systems.
`,
      link: "/assets/pdf/Lorenz_System_Bifurcations.pdf",
    },
    {
      title: "DeepCoder",
      date: new Date(160272e7),
      summary: `Seminar presentation on learned inductive program synthesis (published in ICLR 2017) for CS 252r, Advanced Topics in Programming Languages and AI.
`,
      link: "/assets/pdf/DeepCoder.pdf",
    },
    {
      title: "Compression-Based Generalization Bounds",
      date: new Date(15894144e5),
      summary: `Survey of modern research in deep learning theory. Final project for CS 228, Computational Learning Theory.
`,
      link: "/assets/pdf/Compression_Based_Generalization_Bounds.pdf",
    },
    {
      title: "Single Bidder Auctions",
      date: new Date(1575936e6),
      summary: `Survey of research in mechanism design and optimal transport theory. Final project for CS 223, Random Processes and Algorithms.
`,
      link: "/assets/pdf/Single_Bidder_Multi_Item_Auctions.pdf",
    },
    {
      title: "On Quasirandom Permutations",
      date: new Date(15267744e5),
      summary: `Talk introducing new forcing results on quasirandom permutations. This solved an open problem in combinatorics.
`,
      link: "https://math.mit.edu/research/highschool/primes/materials/2018/conf/9-2%20Zhang.pdf",
    },
  ],
  notes: [
    {
      title: "Stat 211: Statistical Inference",
      date: new Date(16383168e5),
      summary: `Graduate-level class discussing inference on statistical models, frequentist and Bayesian perspectives.
`,
      link: "/assets/pdf/Stat_211_Notes.pdf",
    },
    {
      title: "CS 252r: PL Design Studio",
      date: new Date(16370208e5),
      summary: `Graduate seminar class exploring programming languages for verification, differentiation, compilation, logic, etc.
`,
      link: "/assets/pdf/CS_252r_Notes_PL_Studio.pdf",
    },
    {
      title: "Math 132: Differential Topology",
      date: new Date(16189632e5),
      summary: `Smooth manifolds, transversality, intersection theory, differential forms, Stokes' theorem, and cohomology.
`,
      link: "/assets/pdf/Math_132_Notes.pdf",
    },
    {
      title: "CS 252r: Programming Languages + AI",
      date: new Date(16075584e5),
      summary: `Graduate seminar class on topics at the intersection of programming languages and artificial intelligence.
`,
      link: "/assets/pdf/CS_252r_Notes.pdf",
    },
    {
      title: "Stat 210: Probability",
      date: new Date(16069536e5),
      summary: `Graduate-level probability class providing foundational material for statistics PhD students.
`,
      link: "/assets/pdf/Stat_210_Notes.pdf",
    },
    {
      title: "F=ma Solutions Manual",
      date: new Date(16034112e5),
      summary: `Instructive solutions for nine years of past F=ma physics competition problems.
`,
      link: "https://pubs.aip.org/books/monograph/129/F-ma-Contests2011-2019-Solutions-Manual",
    },
    {
      title: "Kinetic Tournaments",
      date: new Date(15987456e5),
      summary: `A fast, kinetic data structure that offers flexibility, a simple implementation, and interesting combinatorial analysis.
`,
      link: "https://codeforces.com/blog/entry/82094",
    },
    {
      title: "CS 228: Computational Learning Theory",
      date: new Date(1594512e6),
      summary: `Graduate-level class on computational learning theory taught by Leslie Valiant, Turing award laureate.
`,
      link: "/assets/pdf/CS_228_Notes.pdf",
    },
    {
      title: "Math 55b: Analysis and Topology",
      date: new Date(15881184e5),
      summary: `The second semester of Math 55, a rigorous first-year math class. Point-set and algebraic topology, real analysis, and complex analysis.
`,
      link: "/assets/pdf/Math_55b_Notes.pdf",
    },
    {
      title: "Math 55a: Abstract and Linear Algebra",
      date: new Date(15768864e5),
      summary: `The first semester of Math 55, a rigorous first-year math class. Group theory, abstract linear algebra, and representation theory.
`,
      link: "/assets/pdf/Math_55a_Notes.pdf",
    },
  ],
};
function ye(c) {
  let e, i, a, t, s, n, r, o, d, y, D, M, p, w;
  return (
    (e = new ce({
      props: {
        title: "Navya Gupta – Writing",
        description:
          "Past writing: academic papers, presentations, notes, tutorials, and technical blog posts.",
      },
    })),
    (r = new Y({ props: { data: Z.notes } })),
    (p = new Y({ props: { data: Z.papers } })),
    {
      c() {
        L(e.$$.fragment),
          (i = C()),
          (a = b("section")),
          (t = b("h2")),
          (s = E("Notes and Tutorials")),
          (n = C()),
          L(r.$$.fragment),
          (o = C()),
          (d = b("section")),
          (y = b("h2")),
          (D = E("Academic Writing")),
          (M = C()),
          L(p.$$.fragment),
          this.h();
      },
      l(l) {
        B(e.$$.fragment, l), (i = A(l)), (a = S(l, "SECTION", { class: !0 }));
        var g = $(a);
        t = S(g, "H2", { class: !0 });
        var P = $(t);
        (s = x(P, "Notes and Tutorials")),
          P.forEach(f),
          (n = A(g)),
          B(r.$$.fragment, g),
          g.forEach(f),
          (o = A(l)),
          (d = S(l, "SECTION", { class: !0 }));
        var _ = $(d);
        y = S(_, "H2", { class: !0 });
        var m = $(y);
        (D = x(m, "Academic Writing")),
          m.forEach(f),
          (M = A(_)),
          B(p.$$.fragment, _),
          _.forEach(f),
          this.h();
      },
      h() {
        h(t, "class", "heading2"),
          h(a, "class", "layout-md py-12"),
          h(y, "class", "heading2"),
          h(d, "class", "layout-md py-12");
      },
      m(l, g) {
        F(e, l, g),
          I(l, i, g),
          I(l, a, g),
          u(a, t),
          u(t, s),
          u(a, n),
          F(r, a, null),
          I(l, o, g),
          I(l, d, g),
          u(d, y),
          u(y, D),
          u(d, M),
          F(p, d, null),
          (w = !0);
      },
      p: le,
      i(l) {
        w ||
          (k(e.$$.fragment, l),
          k(r.$$.fragment, l),
          k(p.$$.fragment, l),
          (w = !0));
      },
      o(l) {
        T(e.$$.fragment, l), T(r.$$.fragment, l), T(p.$$.fragment, l), (w = !1);
      },
      d(l) {
        N(e, l), l && f(i), l && f(a), N(r), l && f(o), l && f(d), N(p);
      },
    }
  );
}
class $e extends V {
  constructor(e) {
    super(), q(this, e, null, ye, W, {});
  }
}
export { $e as component };
