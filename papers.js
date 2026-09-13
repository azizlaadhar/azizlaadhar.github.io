/* Edit this file to add work. Newest first.
   Fields: year, title, venue, authors, summary, note, links[{label, href}] */

const SITE = {
  name:     "Aziz Laadhar",
  tagline:  "MSc Data Science, EPFL. Thesis at the Liu Lab of Bioelectronics, Harvard.",
  github:   "azizlaadhar",   // <-- VERIFY before publishing
  email:    "",              // <-- fill in
  linkedin: "",
  scholar:  "",
  cv:       ""
};

const PAPERS = [

  {
    year: 2026,
    title: "An autonomous AI agent for universal behavior analysis",
    venue: "Preprint, bioRxiv",
    authors: "Liu Lab of Bioelectronics, Harvard. I built the evaluation benchmark and harness.",
    summary:
      "Scoring an agent whose output is a judgement about behaviour, where trained humans disagree with each other. Eight scoring families, with tolerances derived from instrument resolution and measured annotator disagreement rather than chosen.",
    links: [
      { label: "Preprint", href: "https://www.biorxiv.org/content/10.1101/2025.05.15.653585v1" },
      { label: "Code", href: "https://github.com/LiuLab-Bioelectronics-Harvard/BehaveAgent" }
    ]
  },

  {
    year: 2026,
    title: "Self-supervised spatiotemporal representations for behavioural state inference",
    venue: "MSc thesis, in progress",
    authors: "Liu Lab of Bioelectronics, Harvard.",
    summary:
      "Neural video encoders trained without labels, evaluated by linear and kNN probes and by downstream transfer, on the question of which temporal augmentations preserve the signal and which destroy it.",
    note: "No report yet.",
    links: []
  },

  {
    year: 2026,
    title: "Physics-guided deep learning for 2D electromagnetic resistivity inversion",
    venue: "Industrial research, Schlumberger-Doll Research",
    summary:
      "An encoder-decoder trained against a differentiable neural surrogate of a non-differentiable forward solver, with the loss split into model misfit and data misfit, and edge-weighted gradient terms to keep layer boundaries sharp.",
    note: "No public report.",
    links: []
  },

  {
    year: 2025,
    title: "Functional autoregression for day-ahead supply and demand curves",
    venue: "Industrial research, European power trading",
    summary:
      "Forecasting the whole hourly supply curve rather than a single price, estimated as a second-order cone program with monotonicity constraints on the predicted curve, and scored on the implied crossing point rather than curve error alone.",
    note: "No public report.",
    links: []
  },

  {
    year: 2024,
    title: "The Transformer Network for the Dial-a-Ride Problem",
    venue: "Under review, Transportation Research Part C",
    authors: "Lucas Gruaz, Aziz Laadhar, Aoyu Gong, Benedek Harsanyi. EPFL VITA lab.",
    summary:
      "A supervised policy matched an exact solver's routing cost while systematically violating time-window constraints. Reinforcement learning fixed most of it; pruning infeasible actions out of the graph fixed the rest, by making them unrepresentable.",
    links: [
      { label: "PDF", href: "papers/darp-transformer-2024.pdf" },
      { label: "Code", href: "https://github.com/aygong/DARP" }
    ]
  },

  {
    year: 2024,
    title: "EPFL Mistral Mind: a retrieval-augmented chatbot for coursework",
    venue: "Course project, EPFL",
    authors: "Mohamed Charfi, Yassine Chaouch, Aziz Laadhar.",
    summary:
      "Retrieval-augmented generation over EPFL course material on a fine-tuned Mistral base, aimed at multiple-choice question answering, with retrieval evaluated separately from generation.",
    links: [
      { label: "PDF", href: "papers/epfl-mistral-mind-2024.pdf" }
    ]
  },

  {
    year: 2024,
    title: "Deep Learning for Road Segmentation",
    venue: "Course project, EPFL",
    authors: "Aziz Laadhar, Mohamed Charfi, Yassine Chaouch.",
    summary:
      "U-Net, LinkNet and GC-DCNN compared for road extraction from satellite imagery, with data augmentation, external datasets and post-processing. A LinkNet variant reached 88.7% F1 on the test set.",
    links: [
      { label: "PDF", href: "papers/road-segmentation-2024.pdf" },
      { label: "Code", href: "https://github.com/azizlaadhar/Road-Segmentation-Project" }
    ]
  }

];
