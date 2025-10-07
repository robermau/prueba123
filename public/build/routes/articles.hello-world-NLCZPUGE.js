import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-GIAAN75Z.js";
import "/build/_shared/chunk-3DYT5NE2.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// mdx:routes\articles.hello-world.mdx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var attributes = {
  "title": "Hello world: how I built this site",
  "abstract": "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
  "date": "2022-04-21",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    img: "img",
    ul: "ul",
    li: "li",
    code: "code",
    h3: "h3"
  }, props.components);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h2, { children: "How it all started" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 12
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: [
      `Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.a, { href: "/404", children: "404 page" }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 691
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 73
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.img, { src: "/static/inspiration.png", alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 788
    }, this) }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 773
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h2, { children: "The first iteration" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 1011
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship." }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 1073
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage." }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 1384
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: [
      "Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.a, { href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D", children: "Clay Mockups 3D Figma plugin" }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 2100
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 1775
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.img, { src: "/static/clay-mockups.png", alt: "Thumbnail for my Clay Mockups 3D plugin" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 2286
    }, this) }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 2271
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h2, { children: "Migrating to Next.js" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 2404
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs." }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 2467
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.ul, { children: [
      "\n",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.li, { children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future." }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 3017
      }, this),
      "\n",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.li, { children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts." }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 3251
      }, this),
      "\n",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.li, { children: [
        "For generating pages from ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.code, { children: ".mdx" }, void 0, false, {
          fileName: "mdx:routes\\articles.hello-world.mdx",
          lineNumber: 20,
          columnNumber: 3533
        }, this),
        " files, I'm using Kent C Dodds' ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.a, { href: "https://github.com/kentcdodds/mdx-bundler", children: "mdx-bundler" }, void 0, false, {
          fileName: "mdx:routes\\articles.hello-world.mdx",
          lineNumber: 20,
          columnNumber: 3614
        }, this),
        ". In combination with Next.js it makes generating pages from ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.code, { children: ".mdx" }, void 0, false, {
          fileName: "mdx:routes\\articles.hello-world.mdx",
          lineNumber: 20,
          columnNumber: 3774
        }, this),
        " files really quick and simple."
      ] }, void 0, true, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 3487
      }, this),
      "\n",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.li, { children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion." }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 3877
      }, this),
      "\n",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.li, { children: [
        "3D effects are still all using Three.js, but I've added ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.code, { children: "three-stdlib" }, void 0, false, {
          fileName: "mdx:routes\\articles.hello-world.mdx",
          lineNumber: 20,
          columnNumber: 4084
        }, this),
        " as a better maintained replacement for modules from Three's examples."
      ] }, void 0, true, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 4008
      }, this),
      "\n"
    ] }, void 0, true, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 2995
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h2, { children: "Not all smooth sailing" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 4257
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 4322
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h3, { children: "1. Route transitions" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 4635
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: [
      "There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.a, { href: "https://github.com/vercel/next.js/issues/17464", children: "the most commented and reacted to issues" }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 5178
      }, this),
      " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.a, { href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107", children: "hack to fix things" }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 5396
      }, this),
      " from the issue's comments."
    ] }, void 0, true, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 4698
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h3, { children: "2. Scroll restoration" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 5579
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility." }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 5643
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h2, { children: "Looking back, and forward" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 6056
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it." }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 6124
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today." }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 6734
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.h2, { children: "Update: Feb 2024" }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 6914
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: [
      `I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.a, { href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API", children: "CSS view transitions API" }, void 0, false, {
        fileName: "mdx:routes\\articles.hello-world.mdx",
        lineNumber: 20,
        columnNumber: 7286
      }, this),
      " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."
    ] }, void 0, true, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 6973
    }, this),
    "\n",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_components.p, { children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year." }, void 0, false, {
      fileName: "mdx:routes\\articles.hello-world.mdx",
      lineNumber: 20,
      columnNumber: 7799
    }, this)
  ] }, void 0, true, {
    fileName: "mdx:routes\\articles.hello-world.mdx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MDXLayout, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_createMdxContent, { ...props }, void 0, false, {
    fileName: "mdx:routes\\articles.hello-world.mdx",
    lineNumber: 24,
    columnNumber: 44
  }, this) }, void 0, false, {
    fileName: "mdx:routes\\articles.hello-world.mdx",
    lineNumber: 24,
    columnNumber: 22
  }, this) : _createMdxContent(props);
}
var articles_hello_world_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
var handle = typeof attributes !== "undefined" && attributes.handle;
export {
  articles_hello_world_default as default,
  handle,
  meta
};
//# sourceMappingURL=/build/routes/articles.hello-world-NLCZPUGE.js.map
