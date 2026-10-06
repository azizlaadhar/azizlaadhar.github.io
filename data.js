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
  role:     "M.Sc. Data Science, EPFL<br>Research Scholar at Harvard University",
  email:    "aziz_laadhar@seas.harvard.edu",
  github:   "https://github.com/azizlaadhar",
  linkedin: "https://www.linkedin.com/in/aziz-laadhar",
  cv:       "assets/Aziz_Laadhar_CV.pdf?v=20261006-resume",
  photo:    "assets/aziz.jpg?v=20261006-resume"
};

const BIO = [
  `I am finishing an M.Sc. in Data Science at <a href="https://www.epfl.ch/" rel="noopener">EPFL</a>,
   with a minor in Financial Engineering. I am writing my thesis at <strong>Harvard University</strong>
   with Prof. Jia Liu, on self-supervised spatiotemporal representations of behaviour, and on
   <strong>BEHAVE</strong> — a 65-task benchmark that asks whether an AI agent can produce the number
   a behavioural researcher would have computed by hand.`,

  `Before that I was a machine learning researcher at
   <a href="https://www.slb.com/" rel="noopener">SLB</a>'s Schlumberger-Doll Research in Cambridge,
   working on physics-constrained electromagnetic resistivity inversion; a quantitative research analyst
   at Sirius Energy SA, working on day-ahead power forecasting, import-ceiling inference and
   market-clearing backtests; and a research assistant
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
      predictions. I build the evaluation layer; it scores BehaveAgent, the lab's agent.`,
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
    title: "Physics-constrained neural modelling for electromagnetic resistivity inversion",
    authors: `<span class="me">Aziz Laadhar</span>, Schlumberger-Doll Research, Mathematical Physics and Modeling.`,
    venue: "Machine Learning Researcher — Mathematical Physics and Modeling, SLB Schlumberger-Doll Research, Cambridge, MA, July 2025–February 2026.",
    blurb: `A learned forward-surrogate penalty and structure-preserving losses reduced median
      reconstruction error by 14.4% versus a supervised CNN baseline.`,
    abstract: `Built a physics-constrained neural model for 2D electromagnetic resistivity inversion,
      adding a learned forward-surrogate data-consistency penalty during training. Median
      reconstruction error fell by 14.4% versus a supervised CNN baseline. Developed
      structure-preserving losses and adaptive sampling for noisy inverse problems, reducing
      surrogate data-misfit residuals by 35%, and stress-tested robustness under noise and
      distribution shift through systematic ablations.`,
    links: [],
    note: "No public report — proprietary"
  },

  {
    year: 2025,
    selected: true,
    icon: "curves",
    badges: [{ text: "Industrial research" }, { text: "Energy markets", alt: true }],
    title: "Day-ahead power forecasting and market-clearing analysis",
    authors: `<span class="me">Aziz Laadhar</span>, Sirius Energy SA.`,
    venue: "Quantitative Research Analyst — Power and Gas Trading, Sirius Energy SA, Lugano, Switzerland, July 2024–February 2025.",
    blurb: `Forecasting supply and demand curves, recovering Italy's import ceiling, and attributing
      market-clearing errors through constrained optimisation.`,
    abstract: `Developed a functional autoregressive supply/demand-curve model to forecast day-ahead
      power markets from 25M+ bids on a 500-point price grid, estimating three-lag curve operators
      through 750k-variable second-order cone programs. Converting forecast curves into
      clearing-price forecasts through the desk's EUPHEMIA market-coupling replica reduced
      out-of-sample hourly MAE from €9.2 to €6.7/MWh versus the desk's model, with 59.5% lower
      maximum absolute error.<br><br>
      Reverse-engineered Italy's undocumented D+1 import ceiling with a two-stage random-forest
      hurdle model using 42 features. Rolling-window validation yielded F1 0.90 and conditional
      R² 0.89 versus 0.72 for OLS; the model was deployed daily to traders.<br><br>
      Built a counterfactual day-ahead market-clearing backtest that re-solved the market under
      alternative inputs to attribute zonal price and net-position errors to offer curves,
      block orders and transfer capacities. Labelled the generation technology of 34% of 658k
      unlabelled power-market offers through a MILP over 743 hours; residual offers revealed
      latent PV supply that tracked solar generation and concentrated at the low-price end
      of the stack.`,
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
    venue: "Under review, Transportation Research Part C. Research Assistant, EPFL VITA lab, Lausanne, Switzerland, September 2022–June 2023. Advisor: Prof. Alexandre Alahi.",
    blurb: `A graph Transformer trained by imitation, then feasibility-masked PPO, for constrained
      routing, with vectorised per-user encoding cutting inference from 3.13 to 1.55 seconds.`,
    abstract: `Trained a graph Transformer policy for the constrained Dial-a-Ride Problem by imitation
      on 50k Gurobi solutions, achieving a 2.67% cost gap to exact optimisation on 100 held-out
      instances. Trained a feasibility-masked reinforcement-learning policy using PPO, reducing
      violated ride-time windows from 1.61 to 0.33 per instance at a 2.37% cost gap. Vectorising
      the Transformer's per-user encoding cut inference from 3.13 to 1.55 seconds per instance.`,
    links: [
      { label: "PDF", href: "papers/darp-transformer-2024.pdf" },
      { label: "Code", href: "https://github.com/aygong/DARP" }
    ]
  },

  {
    year: 2025,
    selected: false,
    icon: "branch",
    badges: [{ text: "Project" }, { text: "Harvard", alt: true }],
    title: "PromptNET: a layered prompt network evolved by genetic algorithm",
    authors: `<span class="me">Aziz Laadhar</span> (contributor).`,
    venue: "Research at Harvard University.",
    abstract: `Each layer holds a population of prompt-nodes with a fixed role; a path picks one node per
      layer and an image flows through a vision-language model sequentially, scored against ground truth.
      Per-node fitness is the average score of every path that node took part in, and mutation is
      role-conditioned. Evaluated on image restoration and on keypoint grounding with Hungarian matching.`,
    links: [],
    note: "Private repository"
  },

  {
    year: 2025,
    selected: false,
    icon: "layers",
    badges: [{ text: "Course project" }, { text: "Financial NLP", alt: true }],
    title: "Multimodal stock-return prediction from earnings-call sentiment",
    authors: `Léon, Kilian, Arthur, Lauryne, <span class="me">Aziz Laadhar</span>.`,
    venue: "Group course project, 2025.",
    abstract: `Compared PyTorch LSTMs for next-quarter stock returns using eight-quarter histories
      of Compustat/CRSP firm characteristics. Structured inputs combined 32 PCA components fitted
      on the training data with quarter indicators; the extended model added FinBERT sentiment
      from earnings-call transcripts. On a chronological 75/25 split, reported test MSE fell
      from 0.0843 to 0.0790 and MAE from 0.2112 to 0.2036. Directional accuracy remained
      unchanged at 57.49% for both models.`,
    links: [
      { label: "PDF", href: "papers/multimodal-stock-return-prediction-2025.pdf" }
    ]
  },

  {
    year: 2025,
    selected: false,
    icon: "curves",
    badges: [{ text: "Course project" }, { text: "EPFL", alt: true }],
    title: "The VIX and related derivatives",
    authors: `<span class="me">Aziz Laadhar</span>, Elyes Fares Trabelsi, Lucas Simonnet,
      Najmeddine Abbassi.`,
    venue: "FIN-404 Derivatives, EPFL, Spring 2025. Prof. Julien Hugonnier.",
    abstract: `Coursework on volatility derivatives, covering Carr–Madan static replication,
      the option-strip basis of VIX, and square-root stochastic-variance models for variance
      and VIX futures. Explored maturity and parameter sensitivities, numerical pricing,
      and calibration to a supplied cross-section of market settlements.`,
    links: [
      { label: "Code", href: "https://github.com/najabba/derivatives_project_2025" }
    ]
  },

  {
    year: 2024,
    selected: false,
    icon: "curves",
    badges: [{ text: "Course project" }, { text: "Quantitative finance", alt: true }],
    title: "Equity factor strategies and portfolio risk attribution",
    authors: `Mohamed Hédi Hidri, Yanis Seddik, Yacine Chaouch,
      <span class="me">Aziz Laadhar</span>.`,
    venue: "Investment project report, June 2024.",
    abstract: `Constructed betting-against-beta, momentum and idiosyncratic-volatility strategies
      from historical CRSP equity returns. Estimated market betas and residual volatility through
      rolling five-year regressions, compared equal- and value-weighted decile portfolios, and
      combined strategies using equal and inverse-volatility weights. Evaluated market, industry
      and Fama–French factor exposures, then examined industry hedging and sector-wise portfolio
      construction.`,
    links: []
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
