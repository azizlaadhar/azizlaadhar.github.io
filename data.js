/* Content for the site. Edit this file to add or change work.
   Everything else reads from here — you should not need to touch the HTML.

   PUBLICATIONS fields:
     year      number, used for grouping on publications.html
     badges    [{text, alt?}]   alt:true renders in the warm accent colour
     title     string
     authors   HTML; wrap your own name in <span class="me">Aziz Laadhar</span>
     venue     string, rendered in italics
     abstract  short paragraph
     links     [{label, href}]
     note      string, shown as a dimmed pill when there is nothing to link
     selected  true to show it on the front page
*/

const SITE = {
  name:     "Aziz Laadhar",
  role:     "M.Sc. Data Science, EPFL<br>Master's thesis at the " +
            "<a href=\"https://liulab.seas.harvard.edu/\" rel=\"noopener\">Harvard Laboratory of Bioelectronics</a>",
  email:    "aziz_laadhar@seas.harvard.edu",
  github:   "https://github.com/azizlaadhar",
  linkedin: "https://www.linkedin.com/in/aziz-laadhar",
  cv:       "assets/Aziz_Laadhar_CV.pdf",
  photo:    "assets/aziz.jpg"
};

const BIO = [
  `I am finishing an M.Sc. in Data Science at <a href="https://www.epfl.ch/" rel="noopener">EPFL</a>,
   with a minor in Financial Engineering. I am writing my thesis at the
   <a href="https://liulab.seas.harvard.edu/" rel="noopener">Harvard Laboratory of Bioelectronics</a>
   with Prof. Jia Liu, on self-supervised spatiotemporal representations of behaviour, and on
   <strong>BEHAVE</strong> — a benchmark that asks whether an AI agent can produce the number a
   behavioural researcher would have computed by hand.`,

  `Before that I was a machine learning researcher at
   <a href="https://www.slb.com/" rel="noopener">SLB</a>'s Schlumberger-Doll Research in Cambridge,
   working on physics-guided inversion of electromagnetic logging data; a quantitative analyst on a
   European power desk, forecasting day-ahead supply and demand curves; and a research assistant at
   EPFL's <a href="https://www.epfl.ch/labs/vita/" rel="noopener">VITA lab</a> with Prof. Alexandre Alahi,
   on graph-based reinforcement learning for constrained vehicle routing.`,

  `The thread through all of it is <strong>constrained modelling</strong> — problems where the model has
   hard structure it is not allowed to break, whether that structure is a monotone supply curve, a
   time window, or a physical forward operator. The second thread is that I tend to end up owning the
   <strong>evaluation layer</strong>, because in every one of these settings it was the measurement, not
   the architecture, that decided whether anyone could trust the output.`
];

const NEWS = [
  { date: "Sep 2026",
    body: `<strong>BEHAVE</strong> scoring library reached 724 passing tests, with a regression suite
           pinning ten correctness bugs found by adversarial review of the scoring math.` },

  { date: "Feb 2026",
    body: `Started my master's thesis at the <a href="https://liulab.seas.harvard.edu/" rel="noopener">Harvard
           Laboratory of Bioelectronics</a> with Prof. Jia Liu.` },

  { date: "Jan 2026",
    body: `Presented six months of work on physics-guided 2D resistivity inversion at
           Schlumberger-Doll Research.` },

  { date: "Jul 2025",
    body: `Joined <a href="https://www.slb.com/" rel="noopener">SLB</a> Schlumberger-Doll Research
           (Deep Sensing &amp; Monitoring) in Cambridge, MA as a machine learning researcher.` },

  { date: "May 2024", extra: true,
    body: `<em>The Transformer Network for the Dial-a-Ride Problem</em> submitted to
           <em>Transportation Research Part C</em>.` },

  { date: "Jul 2024", extra: true,
    body: `Joined Sirius Energy in Lugano as a quantitative analyst on the European power desk.` },

  { date: "2024", extra: true,
    body: `Won the Mercuria electricity-price prediction competition run with the EPFL Financial
           Engineers' Society.` },

  { date: "Sep 2023", extra: true,
    body: `Began the M.Sc. in Data Science at EPFL, after a B.Sc. in Communication Systems at the
           same school.` }
];

const PUBLICATIONS = [

  {
    year: 2026,
    selected: true,
    badges: [{ text: "In progress" }, { text: "Harvard", alt: true }],
    title: "BEHAVE: a benchmark for quantitative behavioural analysis from video by AI agents",
    authors: `<span class="me">Aziz Laadhar</span>, Harvard Laboratory of Bioelectronics.`,
    venue: "In preparation, 2026.",
    abstract: `BEHAVE asks whether an agent can produce the <em>number</em> a behavioural researcher
      would compute after watching a recording — counts, durations, distances, distributions — and
      whether the reasoning over that number is sound. The hard part is scoring a judgement that
      trained humans disagree about: the benchmark uses eight scoring families whose tolerances are
      derived from instrument resolution and measured annotator disagreement rather than chosen by
      hand. I build the evaluation layer; it scores BehaveAgent, the lab's agent, which I did not author.`,
    links: [
      { label: "BehaveAgent preprint", href: "https://www.biorxiv.org/content/10.1101/2025.05.15.653585v1" },
      { label: "BehaveAgent code", href: "https://github.com/LiuLab-Bioelectronics-Harvard/BehaveAgent" }
    ],
    note: "Benchmark release pending"
  },

  {
    year: 2026,
    selected: true,
    badges: [{ text: "M.Sc. thesis" }, { text: "Harvard", alt: true }],
    title: "Self-supervised spatiotemporal representations for behavioural state inference",
    authors: `<span class="me">Aziz Laadhar</span>, advised by Prof. Jia Liu.`,
    venue: "M.Sc. thesis in progress, Harvard Laboratory of Bioelectronics / EPFL, 2026.",
    abstract: `Neural video encoders trained without labels, evaluated by linear and kNN probes and by
      downstream transfer. The question I am chasing is which temporal augmentations preserve
      behavioural signal and which quietly destroy it.`,
    links: [],
    note: "In progress"
  },

  {
    year: 2026,
    selected: true,
    badges: [{ text: "Industrial research" }, { text: "SLB", alt: true }],
    title: "Physics-guided deep learning for 2D electromagnetic resistivity inversion",
    authors: `<span class="me">Aziz Laadhar</span>, Schlumberger-Doll Research, Deep Sensing &amp; Monitoring.`,
    venue: "Industrial research, SLB Schlumberger-Doll Research, Cambridge MA, 2025–2026.",
    abstract: `Recovering a 2D subsurface resistivity image from ~96 electromagnetic logging channels.
      The forward model is a proprietary 2.5D solver that is neither differentiable nor callable during
      training, so the network is trained against a differentiable neural surrogate of it, with the loss
      split into a model misfit and a data misfit. Sobel-based edge-weighted gradient terms keep layer
      boundaries sharp where plain MSE blurs them; 15% lower reconstruction error than the CNN baseline.`,
    links: [],
    note: "No public report — proprietary"
  },

  {
    year: 2025,
    selected: true,
    badges: [{ text: "Industrial research" }, { text: "Energy markets", alt: true }],
    title: "Functional autoregression for day-ahead supply and demand curves",
    authors: `<span class="me">Aziz Laadhar</span>, Sirius Energy SA.`,
    venue: "Industrial research, European power trading, 2024–2025.",
    abstract: `Forecasting the <em>whole</em> hourly supply and demand curve rather than a single price.
      The curve has to stay monotone, so the functional autoregression is estimated as a second-order
      cone program in MOSEK with difference constraints on the prediction, followed by an isotonic
      projection. Scored on the implied crossing point — the clearing price and volume the curves
      actually produce — not on curve error alone.`,
    links: [],
    note: "No public report — proprietary"
  },

  {
    year: 2024,
    selected: true,
    badges: [{ text: "Under review" }, { text: "Transportation Research Part C", alt: true }],
    title: "The Transformer Network for the Dial-a-Ride Problem",
    authors: `Lucas Gruaz, <span class="me">Aziz Laadhar</span>, Aoyu Gong, Benedek Harsanyi.`,
    venue: "Under review, Transportation Research Part C. EPFL VITA lab, 2024.",
    abstract: `A graph Transformer policy for a routing problem with time windows, ride-time limits and
      capacity. Trained by imitation on an exact Gurobi solver, the policy matched the solver's routing
      cost while systematically violating the time windows. Reinforcement learning with PPO fixed most
      of it; pruning infeasible actions out of the graph fixed the rest, by making the violations
      unrepresentable rather than merely penalised.`,
    links: [
      { label: "PDF", href: "papers/darp-transformer-2024.pdf" },
      { label: "Code", href: "https://github.com/aygong/DARP" }
    ]
  },

  {
    year: 2025,
    selected: false,
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
