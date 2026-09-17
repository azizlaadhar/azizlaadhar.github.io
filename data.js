/* Content for the site. Edit this file to add or change work.
   Everything else reads from here — you should not need to touch the HTML.

   PUBLICATIONS fields:
     year      number, used for grouping on publications.html
     badges    [{text, alt?}]   alt:true renders in the warm accent colour
     title     string
     authors   HTML; wrap your own name in <span class="me">Aziz Laadhar</span>
     venue     string, rendered in italics
     abstract  short paragraph
     icon      key into ICONS in render.js (measure, layers, strata, curves, graph, branch, chat, map)
     blurb     one or two lines, used on the front-page gallery
     links     [{label, href}]
     note      string, shown as a dimmed pill when there is nothing to link
     selected  true to show it on the front page
*/

const SITE = {
  name:     "Aziz Laadhar",
  role:     "M.Sc. Data Science, EPFL<br>Research fellow, " +
            "<a href=\"https://kempnerinstitute.harvard.edu/\" rel=\"noopener\">Kempner Institute</a>, " +
            "Harvard University",
  email:    "aziz_laadhar@seas.harvard.edu",
  github:   "https://github.com/azizlaadhar",
  linkedin: "https://www.linkedin.com/in/aziz-laadhar",
  cv:       "assets/Aziz_Laadhar_CV.pdf",
  photo:    "assets/aziz.jpg"
};

const BIO = [
  `I am finishing an M.Sc. in Data Science at <a href="https://www.epfl.ch/" rel="noopener">EPFL</a>,
   with a minor in Financial Engineering. I am writing my thesis at <strong>Harvard University</strong>
   with Prof. Jia Liu, on self-supervised spatiotemporal representations of behaviour, and on
   <strong>BEHAVE</strong> — a 65-task benchmark that asks whether an AI agent can produce the number
   a behavioural researcher would have computed by hand.`,

  `I am now starting a research fellowship at the
   <a href="https://kempnerinstitute.harvard.edu/" rel="noopener">Kempner Institute</a> at Harvard
   University with Prof. Na Li.`,

  `Before that I was a machine learning researcher at
   <a href="https://www.slb.com/" rel="noopener">SLB</a>'s Schlumberger-Doll Research in Cambridge,
   working on physics-constrained inversion of electromagnetic logging data; a quantitative analyst on a
   European power and gas desk, forecasting day-ahead supply and demand curves; and a research assistant
   at EPFL's <a href="https://www.epfl.ch/labs/vita/" rel="noopener">VITA lab</a> with Prof. Alexandre
   Alahi, on graph-based reinforcement learning for constrained vehicle routing.`,

  `The thread through all of it is <strong>constrained modelling</strong> — problems where the model has
   hard structure it is not allowed to break, whether that structure is a monotone supply curve, a
   time window, or a physical forward operator. The second thread is that I tend to end up owning the
   <strong>evaluation layer</strong>, because in every one of these settings it was the measurement, not
   the architecture, that decided whether anyone could trust the output.`
];

const PUBLICATIONS = [

  {
    year: 2026,
    selected: true,
    icon: "measure",
    badges: [{ text: "In progress" }, { text: "Harvard", alt: true }],
    title: "BEHAVE: a benchmark for quantitative behavioural analysis from video by AI agents",
    authors: `<span class="me">Aziz Laadhar</span>, Harvard University.`,
    venue: "In preparation, 2026.",
    blurb: `A 65-task benchmark asking whether an agent can produce the number a behavioural
      researcher would have computed by hand — and whether it knows how uncertain that number is.`,
    abstract: `BEHAVE asks whether an agent can produce the <em>number</em> a behavioural researcher
      would compute after watching a recording — counts, durations, distances, distributions — and
      whether the reasoning over that number is sound. The hard part is scoring a judgement that
      trained humans disagree about, so scores are calibrated to measurement noise and human error
      rather than to a single ground truth. Agents turn out to be badly overconfident: nominal 95%
      intervals covered 29% of 66 trials, with expected calibration error 0.32 across 1,872
      predictions. I build the evaluation layer; it scores BehaveAgent, the lab's agent, which I did
      not author.`,
    links: [
      { label: "BehaveAgent preprint", href: "https://www.biorxiv.org/content/10.1101/2025.05.15.653585v1" },
      { label: "BehaveAgent code", href: "https://github.com/LiuLab-Bioelectronics-Harvard/BehaveAgent" }
    ],
    note: "Benchmark release pending"
  },

  {
    year: 2026,
    selected: true,
    icon: "layers",
    badges: [{ text: "M.Sc. thesis" }, { text: "Harvard", alt: true }],
    title: "Self-supervised spatiotemporal representations for behavioural state inference",
    authors: `<span class="me">Aziz Laadhar</span>, advised by Prof. Jia Liu.`,
    venue: "M.Sc. thesis in progress, Harvard University / EPFL, 2026.",
    blurb: `Compressing multi-channel video into low-dimensional latent trajectories, with no labels,
      that still carry behavioural state.`,
    abstract: `Self-supervised representation-learning components for high-dimensional spatiotemporal
      data, compressing multi-channel video into low-dimensional latent trajectories for
      behavioural-state inference. Encoders are trained without labels and evaluated by linear and kNN
      probes and by downstream transfer. The question I am chasing is which temporal augmentations
      preserve behavioural signal and which quietly destroy it.`,
    links: [],
    note: "In progress"
  },

  {
    year: 2026,
    selected: true,
    icon: "strata",
    badges: [{ text: "Industrial research" }, { text: "SLB", alt: true }],
    title: "Physics-constrained deep learning for 2D electromagnetic resistivity inversion",
    authors: `<span class="me">Aziz Laadhar</span>, Schlumberger-Doll Research, Mathematical Physics and Modeling.`,
    venue: "Industrial research, SLB Schlumberger-Doll Research, Cambridge MA, 2025–2026.",
    blurb: `The forward simulator embedded as a data-consistency penalty, so one forward pass replaces
      tens to hundreds of iterative solver steps.`,
    abstract: `Recovering a 2D subsurface resistivity image from electromagnetic logging channels. The
      forward model is a proprietary 2.5D solver that is neither differentiable nor callable during
      training, so it is embedded as a data-consistency penalty through a differentiable surrogate and
      the loss splits into a model misfit and a data misfit. Structure-preserving losses — Sobel-based,
      edge-weighted — keep layer boundaries sharp where plain MSE blurs them, and adaptive sampling
      handles the noise. Median MSE fell from 0.081 to 0.070 against the CNN baseline, with PDE
      residuals down 35%, at one forward pass versus tens to hundreds of iterative solver steps.`,
    links: [],
    note: "No public report — proprietary"
  },

  {
    year: 2025,
    selected: true,
    icon: "curves",
    badges: [{ text: "Industrial research" }, { text: "Energy markets", alt: true }],
    title: "Functional autoregression for day-ahead supply and demand curves",
    authors: `<span class="me">Aziz Laadhar</span>, Sirius Energy SA.`,
    venue: "Industrial research, European power and gas trading, 2024–2025.",
    blurb: `Forecasting the whole hourly supply and demand curve as a 750k-variable cone program,
      then clearing it to get the price.`,
    abstract: `Forecasting the <em>whole</em> hourly supply and demand curve rather than a single price,
      from 25M+ bids on a 500-point price grid. The curve has to stay monotone, so the curve operators
      are estimated as a 750k-variable second-order cone program in MOSEK Fusion. Forecast curves are
      then cleared through the desk's EUPHEMIA market-coupling replica to produce a price: out-of-sample
      hourly MAE fell from €12.4 to €9.2/MWh against the desk's model, with 79% lower maximum absolute
      error.`,
    links: [],
    note: "No public report — proprietary"
  },

  {
    year: 2024,
    selected: true,
    icon: "graph",
    badges: [{ text: "Under review" }, { text: "Transportation Research Part C", alt: true }],
    title: "The Transformer Network for the Dial-a-Ride Problem",
    authors: `Lucas Gruaz, <span class="me">Aziz Laadhar</span>, Aoyu Gong, Benedek Harsanyi.`,
    venue: "Under review, Transportation Research Part C. EPFL VITA lab, 2024.",
    blurb: `A graph Transformer that learns to route under time windows — and the constraint violations
      that only masking, not penalties, could fix.`,
    abstract: `A graph Transformer policy for a routing problem with time windows, ride-time limits and
      capacity. Trained by imitation on 50k Gurobi solutions, the policy came within a 2.67% cost gap of
      exact optimisation on 100 held-out instances — while systematically violating the time windows.
      Feasibility-masked PPO fixed it by making the violations unrepresentable rather than merely
      penalised, cutting ride-time violations from 1.61 to 0.33, and the distilled policy runs at
      1.55 s per instance at a 2.37% cost gap.`,
    links: [
      { label: "PDF", href: "papers/darp-transformer-2024.pdf" },
      { label: "Code", href: "https://github.com/aygong/DARP" }
    ]
  },

  {
    year: 2025,
    selected: false,
    icon: "branch",
    badges: [{ text: "Project" }],
    title: "PromptNET: a layered prompt network evolved by genetic algorithm",
    authors: `<span class="me">Aziz Laadhar</span>.`,
    venue: "Independent research, 2025.",
    abstract: `Each layer holds a population of prompt-nodes with a fixed role; a path picks one node per
      layer and an image flows through a vision-language model sequentially, scored against ground truth.
      Per-node fitness is the average score of every path that node took part in, and mutation is
      role-conditioned. Evaluated on image restoration and on keypoint grounding with Hungarian matching.`,
    links: [],
    note: "Private repository"
  },

  {
    year: 2024,
    selected: false,
    icon: "chat",
    badges: [{ text: "Course project" }, { text: "EPFL", alt: true }],
    title: "EPFL Mistral Mind: a retrieval-augmented chatbot for coursework",
    authors: `Mohamed Charfi, Yassine Chaouch, <span class="me">Aziz Laadhar</span>.`,
    venue: "CS-552 Modern NLP, EPFL, 2024.",
    abstract: `Retrieval-augmented generation over EPFL course material on a fine-tuned Mistral base,
      aimed at multiple-choice question answering, with retrieval evaluated separately from generation
      so that failures could be attributed to one or the other.`,
    links: [
      { label: "PDF", href: "papers/epfl-mistral-mind-2024.pdf" }
    ]
  },

  {
    year: 2024,
    selected: false,
    icon: "map",
    badges: [{ text: "Course project" }, { text: "EPFL", alt: true }],
    title: "Deep learning for road segmentation from satellite imagery",
    authors: `<span class="me">Aziz Laadhar</span>, Mohamed Charfi, Yassine Chaouch.`,
    venue: "CS-433 Machine Learning, EPFL, 2024.",
    abstract: `U-Net, LinkNet and a from-scratch reconstruction of GC-DCNN compared for road extraction,
      with data augmentation, external datasets and post-processing. A LinkNet variant reached 88.7% F1
      on the held-out test set.`,
    links: [
      { label: "PDF", href: "papers/road-segmentation-2024.pdf" },
      { label: "Code", href: "https://github.com/azizlaadhar/Road-Segmentation-Project" }
    ]
  }

];
