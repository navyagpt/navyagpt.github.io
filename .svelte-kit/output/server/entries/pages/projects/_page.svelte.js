import { c as create_ssr_component, v as validate_component, e as escape, d as each, f as add_attribute, g as add_classes, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { marked } from "marked";
import { f as formatTime } from "../../../chunks/utils.js";
const Calendar_days = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "3",
        "y": "4",
        "width": "18",
        "height": "18",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "y1": "2",
        "x2": "16",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "y1": "2",
        "x2": "8",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "y1": "10",
        "x2": "21",
        "y2": "10"
      }
    ],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M16 14h.01" }],
    ["path", { "d": "M8 18h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M16 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calendar-days" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CalendarDays = Calendar_days;
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Star$1 = Star;
var title$8 = "Age of Coders (Web Application)";
var date$8 = /* @__PURE__ */ new Date(15980544e5);
var repo$8 = "WonkyVamp/Dimensionality-Reduction";
var topics$8 = [
  "JavaScript",
  "NodeJS",
  "Web application"
];
var lead$8 = "Web application for an online coding contest with over 150 teams from colleges across India.";
var image$8 = "aoc.png";
var content$8 = "Spearheaded a team of 6 students(3 developers, 2 designers and 1 question\nsetter) to develop a web application for an online coding contest that had\nparticipation of over 150 teams from colleges across India. Implemented an\nalgorithm which used the data collected during the tournament to award extra\npoints to people with the most points in a region, similar to capture the flag\nand also didn't allow more than three submissions for a question. Coordinated\nproject goals, aligned deadlines, defined the UX, designed the features and\ndeveloped the application. Developed the application using SQL, HTML, CSS ,\nJavaScript, NodeJS and hosted it using AWS.";
const aoc$1 = {
  title: title$8,
  date: date$8,
  repo: repo$8,
  topics: topics$8,
  lead: lead$8,
  image: image$8,
  content: content$8
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$8,
  date: date$8,
  default: aoc$1,
  image: image$8,
  lead: lead$8,
  repo: repo$8,
  title: title$8,
  topics: topics$8
}, Symbol.toStringTag, { value: "Module" }));
var title$7 = "Dimensionality Reduction for NIR Images";
var date$7 = /* @__PURE__ */ new Date(16691616e5);
var repo$7 = "WonkyVamp/Dimensionality-Reduction";
var topics$7 = [
  "Python",
  "dimensionality reduction",
  "autoencoders",
  "GMM",
  "T-SNE"
];
var lead$7 = "Dimensionality reduction and predictive analysis from very sparse data.";
var image$7 = "dimre.png";
var image_border$2 = true;
var content$7 = "Developed t-SNE and Uniform Manifold Approximation and Projection models with\ntuned perplexity hyperparameter for dimensionality reduction and predictive\nanalysis from very sparse data. Formulated and authored a novel architecture\nemploying autoencoders to project high dimensional data from the NIR images into\na low dimensional manifold. Implemented a Gaussian Mixture Model (GMM) to derive\na parametric probabilistic model which was deployed to evaluate the consistency\nin unseen dynamics.\n\n**Links: [GitHub](https://github.com/WonkyVamp/Dimensionality-Reduction)**";
const dimensionality = {
  title: title$7,
  date: date$7,
  repo: repo$7,
  topics: topics$7,
  lead: lead$7,
  image: image$7,
  image_border: image_border$2,
  content: content$7
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$7,
  date: date$7,
  default: dimensionality,
  image: image$7,
  image_border: image_border$2,
  lead: lead$7,
  repo: repo$7,
  title: title$7,
  topics: topics$7
}, Symbol.toStringTag, { value: "Module" }));
var title$6 = "Feature Selection in High Dimensional RNA Sequencing Data";
var date$6 = /* @__PURE__ */ new Date(17032896e5);
var repo$6 = "WonkyVamp/Feature-Selection-in-High-Dimensional-RNA-Sequencing-Data";
var topics$6 = [
  "Python",
  "R",
  "feature selection",
  "bioinformatics",
  "predictive analysis"
];
var lead$6 = "Classification of cancer types from RNA sequencing data using feature selection methods.";
var image$6 = "feat.png";
var image_border$1 = true;
var content$6 = "Precise classification of cancer types is a central problem for cancer therapy\nand diagnosis. In recent years, there has been an increasing interest in\nhigh-accuracy tumor classification based on RNA sequencing data. In this\nproject, we follow the methodology of Mohammed et al. [2021] in classifying\ntumor types from among the most diagnosed cancer types among women (breast,\nlung, colorectal, thyroid, and ovarian) but test a greater diversity of gene\nselection methods. Our highest accuracy methods yield better-performing test set\naccuracy on held-out data than the original paper. Thus, our proposed methods\ncan aid in the detection and diagnosis of cancer in women and consequently aid\nin early treatment to improve survival.\n\n**Links:\n[GitHub](https://github.com/WonkyVamp/Feature-Selection-in-High-Dimensional-RNA-Sequencing-Data)**";
const feature = {
  title: title$6,
  date: date$6,
  repo: repo$6,
  topics: topics$6,
  lead: lead$6,
  image: image$6,
  image_border: image_border$1,
  content: content$6
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$6,
  date: date$6,
  default: feature,
  image: image$6,
  image_border: image_border$1,
  lead: lead$6,
  repo: repo$6,
  title: title$6,
  topics: topics$6
}, Symbol.toStringTag, { value: "Module" }));
var title$5 = "Greavify";
var date$5 = /* @__PURE__ */ new Date(15545088e5);
var repo$5 = "WonkyVamp/TrueUpvotes";
var topics$5 = [
  "Python",
  "LSTM",
  "Keras",
  "Angular",
  "Tweepy",
  "NLP"
];
var lead$5 = "An application to address grievances logged by college students as a part of Smart India Hackathon.";
var image$5 = "greav.png";
var content$5 = "Designed and implemented an application to address grievances logged by college\nstudents as a part of Smart India Hackathon. The application generated\nappropriate responses and classified grievances using a sentiment analysis model\ntrained and tested on a twitter data-set with a moderately high accuracy.\nCreated a word2vec model which is fed into an embedding matrix, alongside a\nneural network layer and used a bidirectional LSTM layer to improve accuracy.\nVisualized the data and presented it using Power BI.";
const greavify = {
  title: title$5,
  date: date$5,
  repo: repo$5,
  topics: topics$5,
  lead: lead$5,
  image: image$5,
  content: content$5
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$5,
  date: date$5,
  default: greavify,
  image: image$5,
  lead: lead$5,
  repo: repo$5,
  title: title$5,
  topics: topics$5
}, Symbol.toStringTag, { value: "Module" }));
var title$4 = "Protein Palette";
var date$4 = /* @__PURE__ */ new Date(16701984e5);
var repo$4 = "WonkyVamp/ProteinPalette";
var topics$4 = [
  "Python",
  "statistical modeling",
  "deep learning",
  "bio-statistics",
  "predictive analysis"
];
var lead$4 = "Determining the protein content from multiple grains using near-infrared spectroscopy, statistical modeling and deep learning algorithms.";
var image$4 = "protein.png";
var content$4 = "Conducted protein content analysis in various chemicals using predictive\nanalysis and spectroscopy techniques. Assembled a dataset of 1000+ bands using\nmobile and benchmark sensors to measure spectroscopic absorbance. Applied\nMultiplicative Scatter correction and Standard Normal Variate (SNV) correction\nto preprocess the data. Utilized convolution and Savitzky-Golay filtering to\nremove linear trends and smooth the data for further analysis. Developed a deep\nbelief statistical model, achieving an R2 value of 0.91 with just 300 wetlab\nsamples.\n\n**Links: [GitHub](https://github.com/WonkyVamp/ProteinPalette)**";
const protein_palette = {
  title: title$4,
  date: date$4,
  repo: repo$4,
  topics: topics$4,
  lead: lead$4,
  image: image$4,
  content: content$4
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$4,
  date: date$4,
  default: protein_palette,
  image: image$4,
  lead: lead$4,
  repo: repo$4,
  title: title$4,
  topics: topics$4
}, Symbol.toStringTag, { value: "Module" }));
var title$3 = "Revels";
var date$3 = /* @__PURE__ */ new Date(16382304e5);
var repo$3 = "WonkyVamp/TrueUpvotes";
var topics$3 = [
  "JavaScript",
  "NodeJS",
  "Web"
];
var lead$3 = "Website for the annual cultural fest of MIT Manipal.";
var image$3 = "revels.png";
var image_border = true;
var content$3 = "Part of System and Web Administration} team responsible for designing and\nimplementing the main website for the annual cultural fest of MIT Manipal,\nresponsible for display of events, registration, ticket sales and was accessed\nby 5000+ users.";
const revels$1 = {
  title: title$3,
  date: date$3,
  repo: repo$3,
  topics: topics$3,
  lead: lead$3,
  image: image$3,
  image_border,
  content: content$3
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$3,
  date: date$3,
  default: revels$1,
  image: image$3,
  image_border,
  lead: lead$3,
  repo: repo$3,
  title: title$3,
  topics: topics$3
}, Symbol.toStringTag, { value: "Module" }));
var title$2 = "StockSeer";
var date$2 = /* @__PURE__ */ new Date(16562016e5);
var repo$2 = "WonkyVamp/StockSeer";
var topics$2 = [
  "Python",
  "Statistical modeling",
  "regression analysis",
  "econometrics",
  "financial statistics",
  "trading"
];
var lead$2 = "Tool to analyze stock data.";
var image$2 = "stock.png";
var content$2 = "Created a tool to retrieve and analyze stock data using the Yahoo Finance API\nand yfinance package. Conducted fundamental and regression analysis, including\nunivariate and multivariate regression using exploratory variables such as\nWalmart's rate of return, S&P 500 return, and the US Dollar Index, and a\nresponse variable of the company's rate of return. Performed ROI (rate on\ninvestment) analysis and correlation analysis to evaluate global stock market\nperformance. Implemented an EMA10 (Exponential Moving Average 10 days) indicator\nfor predictive modeling and forecasting.\n\n**Links: [GitHub](https://github.com/WonkyVamp/StockSeer)**";
const stockseer = {
  title: title$2,
  date: date$2,
  repo: repo$2,
  topics: topics$2,
  lead: lead$2,
  image: image$2,
  content: content$2
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$2,
  date: date$2,
  default: stockseer,
  image: image$2,
  lead: lead$2,
  repo: repo$2,
  title: title$2,
  topics: topics$2
}, Symbol.toStringTag, { value: "Module" }));
var title$1 = "TextQuraton";
var date$1 = /* @__PURE__ */ new Date(16600896e5);
var repo$1 = "WonkyVamp/TextQuraton";
var topics$1 = [
  "Python",
  "computer vision",
  "NLP",
  "sockets",
  "systems"
];
var lead$1 = "Invoice text curation from images.";
var image$1 = "text1ue.png";
var content$1 = "Designed, implemented and pitched TextQuraton, a handwriting curating\napplication for parsing medical bills and using the data to identify fraudulent\nbills. Implemented a modified DistilBert based classifier coupled with context\nmodule and n-grammar alongside attention module. Developed spatial transformers\nalongside a CRNN and bidirectional-LSTM module to parse handwritten bills taking\ninto consideration the augmented images. Achieved an accuracy of 93.67% averaged\nover all the extracted tags.\n\n**Links: [GitHub](https://github.com/WonkyVamp/TextQuraton)**";
const text_quraton = {
  title: title$1,
  date: date$1,
  repo: repo$1,
  topics: topics$1,
  lead: lead$1,
  image: image$1,
  content: content$1
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content: content$1,
  date: date$1,
  default: text_quraton,
  image: image$1,
  lead: lead$1,
  repo: repo$1,
  title: title$1,
  topics: topics$1
}, Symbol.toStringTag, { value: "Module" }));
var title = "TrueUpvotes";
var date = /* @__PURE__ */ new Date(16591392e5);
var repo = "WonkyVamp/TrueUpvotes";
var topics = [
  "Python",
  "statistical modeling",
  "deep learning",
  "social network analysis",
  "reddit",
  "data mining"
];
var lead = "Predicting Reddit post upvotes using a modified DistilBert model.";
var image = "trueup.png";
var content = "Scraped over 1 million posts from various subreddits using the Reddit API to\ncreate a dataset for predicting the number of upvotes based on various metrics\nand the structure of the posts. Conducted univariate analysis and treated\noutliers and missing values to explore the data and identify potential factors\naffecting collinearity in the dataset. Applied cluster algorithms (k-means and\nhierarchical clustering) to identify the most upvoted genres. Implemented a\nmodified DistilBert model with a context module, n-grammar, and attention module\nto summarize, extract relationships, perform named entity recognition, and\nextract keywords from the collected dataset corpus. The proposed architecture\nachieved an accuracy of 96.8% in predicting the upvote category. Designed,\nimplemented and pitched TextQuraton, a handwriting curating application for\nparsing medical bills and using the data to identify fraudulent bills.\nImplemented a modified DistilBert based classifier coupled with context module\nand n-grammar alongside attention module. Developed spatial transformers\nalongside a CRNN and bidirectional-LSTM module to parse handwritten bills taking\ninto consideration the augmented images. Achieved an accuracy of 93.67% averaged\nover all the extracted tags.\n\n**Links: [GitHub](https://github.com/WonkyVamp/TrueUpvotes)**";
const true_upvotes = {
  title,
  date,
  repo,
  topics,
  lead,
  image,
  content
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  content,
  date,
  default: true_upvotes,
  image,
  lead,
  repo,
  title,
  topics
}, Symbol.toStringTag, { value: "Module" }));
const aoc = "/_app/immutable/assets/aoc.2e8bc995.png";
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: aoc
}, Symbol.toStringTag, { value: "Module" }));
const dimre = "/_app/immutable/assets/dimre.6ff43446.png";
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dimre
}, Symbol.toStringTag, { value: "Module" }));
const feat = "/_app/immutable/assets/feat.7cce68aa.png";
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: feat
}, Symbol.toStringTag, { value: "Module" }));
const greav = "/_app/immutable/assets/greav.6717853f.png";
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: greav
}, Symbol.toStringTag, { value: "Module" }));
const protein = "/_app/immutable/assets/protein.a23cba4f.png";
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: protein
}, Symbol.toStringTag, { value: "Module" }));
const revels = "/_app/immutable/assets/revels.ece3f156.png";
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: revels
}, Symbol.toStringTag, { value: "Module" }));
const stock = "/_app/immutable/assets/stock.2418cd69.png";
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: stock
}, Symbol.toStringTag, { value: "Module" }));
const text1ue = "/_app/immutable/assets/text1ue.34f77d4d.png";
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: text1ue
}, Symbol.toStringTag, { value: "Module" }));
const trueup = "/_app/immutable/assets/trueup.e4fb2141.png";
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: trueup
}, Symbol.toStringTag, { value: "Module" }));
const Markdown_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".md-output.svelte-19wf98v p{margin-bottom:1rem\n}.md-output.svelte-19wf98v strong{font-weight:600\n}.md-output.svelte-19wf98v code{font-size:95%\n}",
  map: null
};
const Markdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let html;
  let { source } = $$props;
  marked.use({
    renderer: {
      link(href, title2, text) {
        let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
        if (title2) {
          out += ' title="' + title2 + '"';
        }
        out += ">" + text + "</a>";
        return out;
      }
    }
  });
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  $$result.css.add(css$2);
  html = marked.parse(source, { smartLists: true, smartypants: true });
  return `<div class="md-output svelte-19wf98v"><!-- HTML_TAG_START -->${html}<!-- HTML_TAG_END -->
</div>`;
});
const Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pill.svelte-1d8a62h{display:flex;align-items:center;font-size:0.875rem;line-height:1.25rem;font-weight:500;margin-right:0.375rem;margin-bottom:0.5rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(245 245 245 / var(--tw-bg-opacity));padding-left:0.375rem;padding-right:0.375rem;padding-top:1px;padding-bottom:1px\n}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { images } = $$props;
  let { stars = null } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.stars === void 0 && $$bindings.stars && stars !== void 0)
    $$bindings.stars(stars);
  $$result.css.add(css$1);
  return `
<h3 class="text-black text-xl font-semibold mb-2"><span class="mr-1">${escape(data.title)}</span>
  <small class="whitespace-nowrap text-neutral-500 text-base font-normal">${escape(formatTime("%B %Y", data.date))}</small></h3>


<div class="flex flex-wrap mb-1"><a class="pill hover:!bg-neutral-200 transition-colors svelte-1d8a62h" href="${"https://github.com/" + escape(data.repo, true) + "/stargazers"}">${validate_component(Star$1, "Star").$$render($$result, { size: 14, class: "fill-current" }, {}, {})}
    ${stars?.[data.repo] !== void 0 ? `<span class="ml-1">${escape(stars[data.repo].toLocaleString())}</span>` : `<span>​</span>`}</a>
  ${each(data.topics, (tag) => {
    return `<div class="pill svelte-1d8a62h">${escape(tag)}</div>`;
  })}</div>


<div class="space-y-4"><div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12"><div class="col-span-3 md:col-span-2"><p class="text-lg font-light mb-3">${escape(data.lead)}</p>
      ${validate_component(Markdown, "Markdown").$$render($$result, { source: data.content }, {}, {})}</div>
    <div class="col-span-3 md:col-span-1"><a rel="external"${add_attribute("href", images[`../../projects/${data.image}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${data.image}`]?.default, 0)} alt="${escape(data.title, true) + " preview image"}"${add_classes((data.image_border ? "border" : "").trim())}></a></div></div>

  ${data.subimages ? `<div class="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">${each(data.subimages, (image2) => {
    return `<div class="col-span-full md:col-span-1"><a rel="external"${add_attribute("href", images[`../../projects/${image2}`]?.default, 0)}><img${add_attribute("src", images[`../../projects/${image2}`]?.default, 0)} alt="${escape(data.title, true) + " subimage"}"></a>
        </div>`;
  })}</div>` : ``}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1qrsmpk{display:flex;align-items:center;--tw-text-opacity:1;color:rgb(163 163 163 / var(--tw-text-opacity));transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}button.svelte-1qrsmpk:hover{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))\n}button.active.svelte-1qrsmpk{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))\n}",
  map: null
};
function trimName(id) {
  return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectsByDate;
  let projectsByTitle;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const projects = /* @__PURE__ */ Object.assign({ "../../projects/aoc.md": __vite_glob_0_0, "../../projects/dimensionality.md": __vite_glob_0_1, "../../projects/feature.md": __vite_glob_0_2, "../../projects/greavify.md": __vite_glob_0_3, "../../projects/protein_palette.md": __vite_glob_0_4, "../../projects/revels.md": __vite_glob_0_5, "../../projects/stockseer.md": __vite_glob_0_6, "../../projects/text_quraton.md": __vite_glob_0_7, "../../projects/true_upvotes.md": __vite_glob_0_8 });
  const images = /* @__PURE__ */ Object.assign({ "../../projects/aoc.png": __vite_glob_1_0, "../../projects/dimre.png": __vite_glob_1_1, "../../projects/feat.png": __vite_glob_1_2, "../../projects/greav.png": __vite_glob_1_3, "../../projects/protein.png": __vite_glob_1_4, "../../projects/revels.png": __vite_glob_1_5, "../../projects/stock.png": __vite_glob_1_6, "../../projects/text1ue.png": __vite_glob_1_7, "../../projects/trueup.png": __vite_glob_1_8 });
  let stars = null;
  $$result.css.add(css);
  projectsByDate = Object.keys(projects).sort((a, b) => projects[b].date - projects[a].date);
  projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = projects[a].title.toLowerCase();
    const titleB = projects[b].title.toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });
  [...projectsByTitle].sort((a, b) => {
    const starsA = 0;
    const starsB = 0;
    return starsB - starsA;
  });
  $$unsubscribe_page();
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Navya Gupta – Projects",
      description: "Open-source software projects in systems, web development, computer graphics, music, programming languages, machine learning, and more."
    },
    {},
    {}
  )}

<section class="layout-md py-12"><h2 class="heading2">Open Source</h2>

  <p class="text-lg mb-4">I view building software in the open as a mode of <em class="font-serif text-[110%] leading-[100%]">creative exploration</em>. It lets me quickly act on inspiration, delve into new topics, and make
    tools that improve people&#39;s lives.
  </p>

  <p class="text-lg mb-4">You&#39;ll see that I particularly like programming languages, distributed
    systems, machine learning, computer graphics, music, and art.
  </p>

  <p class="text-lg">If you find something interesting,
    <a class="link" href="mailto:ekzhang1@gmail.com?subject=Software%20Projects">let me know</a>!
  </p></section>

<div class="bg-gray-900 text-neutral-200 dark"><section class="layout-md py-12"><h2 class="heading2 text-white">Table of Contents</h2>
    <ul class="sm:columns-2">${each(projectsByTitle, (id) => {
    return `<li><a class="link" href="${"#" + escape(trimName(id), true)}">${escape(projects[id].title)}</a>
        </li>`;
  })}</ul></section></div>

<div class="bg-neutral-50 border-b border-neutral-200 py-4"><div class="flex justify-center space-x-6"><button class="${["svelte-1qrsmpk", "active"].join(" ").trim()}">${validate_component(CalendarDays, "CalendarDays").$$render(
    $$result,
    {
      size: 18,
      strokeWidth: 1.8,
      class: "mr-1.5"
    },
    {},
    {}
  )} by Date
    </button>
    <button class="${["svelte-1qrsmpk", ""].join(" ").trim()}">${validate_component(Star$1, "Star").$$render(
    $$result,
    {
      size: 18,
      strokeWidth: 1.8,
      class: "mr-1.5"
    },
    {},
    {}
  )} Alphabetical
    </button></div></div>

${each(projectsByDate, (id) => {
    return `<section class="py-10"${add_attribute("id", trimName(id), 0)}><div class="mx-auto max-w-[1152px] px-4 sm:px-6">${validate_component(Project, "Project").$$render($$result, { data: projects[id], images, stars }, {}, {})}</div>
  </section>`;
  })}`;
});
export {
  Page as default
};
