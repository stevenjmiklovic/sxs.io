---
slug: 'factory-thesis'
title: 'The Factory Thesis'
subtitle: 'Why specification, verification, and retained capability — not model capability — decide what an AI-native production system can ship'
summary: 'The published research on AI-assisted development does not converge on an effect size. That dispersion is the finding, and it locates the variance in the production system rather than the model.'
version: '1.0'
publishedAt: '2026-09-02'
status: 'Living document. Superseded sections are revised, not deleted.'
referenceCount: 25
---

## Summary

sXs describes itself as an AI software factory and claims that its production capability compounds. Both claims are unusual enough to deserve an argument rather than an assertion, because both are widely made and rarely evidenced.

This paper makes a narrow, falsifiable case. The published research on AI-assisted software development does not converge on a productivity number; it disperses, with credible controlled trials reporting effects from roughly 56% faster to 19% slower on comparable-sounding work. That dispersion is the finding. It implies that the model is not the differentiating asset, because every competitor can buy the same model. What differs is the production system the model operates inside: whether intent is made explicit before generation, whether verification has the capacity to keep up with generation, and whether anything is retained between builds.

The five stages sXs publishes — **Specify, Generate, Verify, Ship, Compound** — are not a branded methodology. Each exists because a specific, documented failure mode occurs without it. This paper names those failure modes, cites the evidence for them, states what would falsify the thesis, and marks the boundary between what the evidence supports and what remains our judgment.

One conclusion is uncomfortable for the category sXs competes in: the constraint on AI-assisted delivery has moved from writing code to establishing that code is correct. A factory that adds generation capacity without adding verification capacity does not ship faster. It accumulates unverified inventory.

---

## 1. What is being claimed

Precision first, because "AI software factory" is ambiguous enough to mean almost nothing.

**We claim:**

1. A production system that makes intent explicit, verifies independently, and retains reusable capability can turn a serious product intention into operable software across unrelated product categories, with a small team.
2. That system improves with use, because each build leaves behind capability that the next build inherits.
3. AI belongs inside the production system. It does not have to be inside the product.

**We do not claim:**

1. A velocity multiplier. No figure is published without a defined baseline and comparable work.
2. Autonomous delivery. Consequential boundaries retain a named human owner.
3. That every output should share a platform. Unlike products are not forced into common infrastructure to lengthen a reuse ledger.

The rest of this paper is the argument for the first list and the reason for the second.

---

## 2. "Factory" is a contested word, and we mean the contested part

The software factory is not a new idea, and its history is mostly a history of failure. Engaging with that is more useful than borrowing the word and hoping nobody checks.

Michael Cusumano's research at MIT documented the Japanese software factories of the 1970s and 1980s — Hitachi, Toshiba, NEC, and Fujitsu — which centralised development, imposed process control and standardised methods, and treated reuse as a managed asset rather than an accident [1][2]. Fujitsu, for example, centralised systems software at its Numazu works and established a dedicated software factory department that performed detailed design, coding, and testing against specifications produced elsewhere [2].

Two things about this record matter.

The first is that the approach was substantially abandoned in the United States within a few years of being attempted [3]. The second is why. "Factory" imported an analogy to the mass production of identical units, and that analogy is wrong for software: the marginal unit costs nothing to copy, so the work is entirely design work, and no two products are the same unit. Cusumano's own survey of factory concepts and practices treats the analogy with corresponding care [4].

There is a second failure mode in the framing: it invites treating development as low-skill labour to be subdivided and cheapened. Retrospective commentary on those organisations argues this is what happened, with software work carrying low status and pay comparable to clerical roles [5]. We cite that as commentary rather than settled history — but the hazard is real regardless of how far it generalises, because a production system that deskills its operators destroys the judgment it depends on.

So the word carries real risk. It is currently being applied to defence software pipelines and, increasingly, to vendors selling agent orchestration with velocity claims attached. Some of those uses reduce to "cheaper outsourced labour, now with models."

**What sXs inherits from the lineage:** process discipline, explicit standards, reuse treated as a capital asset, and measurement of the production system itself rather than only its output.

**What sXs rejects:** uniform output as a goal, division of work into deskilled steps, and factory-as-cheap-volume. A factory in our sense is a system that gives _unlike_ products a disciplined path from intention to release. It standardises the production method, not the product.

This is not a semantic dodge. It is the load-bearing distinction, and section 8 argues it is also where the durable commercial advantage sits.

---

## 3. The evidence problem: AI's effect on delivery is not a constant

If AI-assisted development had a stable effect size, the best production system would be the one with the best model access, and this paper would be unnecessary. The literature says otherwise.

### 3.1 The optimistic controlled trials

Peng, Kalliamvakou, Cihon, and Demirer ran a controlled experiment in which 95 programmers recruited through Upwork implemented an HTTP server in JavaScript against a fixed twelve-check test suite. The group with GitHub Copilot finished 55.8% faster — 71 minutes against 161 — with a 95% confidence interval of 21% to 89% and p = 0.0017 [6].

This is a real, well-executed result, and it is the single most over-generalised number in the category. Four constraints, all stated by the authors: the task was standardised, greenfield, and self-contained, with no existing codebase to comprehend and no maintenance horizon; participants were freelancers averaging six years of experience rather than maintainers of the system in question; the study explicitly did **not** examine code quality, which the authors flag as a limitation with security and performance implications; and the benefit was _largest for the least experienced developers_. Hold that last point — section 3.4 depends on it.

Paradis and colleagues at Google ran an enterprise-based randomised controlled trial with 96 full-time engineers on a complex, enterprise-grade task: roughly 21% faster, 96 minutes against 114. The authors report a wide confidence interval and explicitly invite caution about generalising beyond their tooling and the summer of 2024 [7].

### 3.2 The pessimistic controlled trial, and its correction

METR studied 16 experienced open-source developers completing 246 tasks in mature repositories they had worked on for an average of five years, using the early-2025 frontier — Cursor Pro with Claude 3.5/3.7 Sonnet. Allowing AI increased completion time by 19%. The striking result was not the slowdown but the perception gap: participants forecast a 24% reduction beforehand and still estimated a 20% reduction _after_ finishing, while domain experts had predicted improvements near 38–39% [8].

That study is widely cited. It should be cited with its sequel. In February 2026 METR published a revision of its own experimental design and reported that the newer data points toward a speedup — approximately 18% for the subset of returning developers and about 4% for new recruits — but with confidence intervals crossing zero in both cases. METR's own assessment is that developers are likely more sped up in 2026 than its early-2025 estimate suggested, that severe selection effects bias its estimates downward (developers increasingly decline to participate rather than work without AI, and withhold precisely the tasks where they expect the most uplift), and that their figures should be read as a lower bound [9].

The honest summary is therefore not "AI makes developers slower." It is that **task-level measurement of this effect is currently unreliable, and the people doing the most rigorous work on it say so**. Anyone quoting the 19% figure as a current fact — in either direction — is citing a superseded snapshot.

### 3.3 The organisational level, where the picture is more consistent

Individual task time is the wrong unit anyway. Products are shipped by organisations.

DORA's 2024 report found that AI adoption raised individual productivity, flow, and job satisfaction while _reducing_ software delivery throughput by an estimated 1.5% and stability by 7.2%; 39% of respondents reported little or no trust in AI-generated code [10]. The 2025 report found the throughput relationship had turned positive as teams learned where AI helps — while the negative relationship with delivery _stability_ persisted for a second consecutive year [11].

Faros AI's telemetry analysis across more than 10,000 developers and 1,255 teams found the same shape from a different direction: high-AI-adoption teams completed 21% more tasks and merged 98% more pull requests, while pull request review time rose 91% and PR size grew 154% — with no measurable improvement in organisational DORA metrics [12]. Their 2026 follow-up reports the pattern intensifying: larger changes, roughly five times the median review time, and materially more incidents per pull request [13].

### 3.4 What the dispersion implies

Set the numbers side by side: −19% to +56% at the task level, and at the organisational level a consistent split in which individual output rises while delivery outcomes stay flat or degrade in stability.

The two extremes are not actually in conflict, and noticing why is the whole argument. The +56% trial measured inexperienced freelancers building a self-contained artefact from nothing, with code quality explicitly unmeasured, and found the _least_ experienced benefited most. The −19% trial measured expert maintainers making changes inside large codebases they knew intimately, where quality standards were implicit and high. These are close to opposite ends of two axes — codebase maturity and developer expertise — and the results order themselves accordingly. AI-assisted generation is most valuable where the constraints are fewest and the operator's own knowledge is thinnest. It is least valuable, and can be negative, where the binding difficulty is comprehending an existing system and holding to its standards.

Which is precisely the regime a factory building durable products operates in.

A recent multivocal review of 67 sources gives this pattern a name — the Productivity–Reliability Paradox — and attributes it to the interaction between non-deterministic generators and insufficient specification discipline, identifying task abstraction, codebase maturity, and developer experience as moderators, and the code review bottleneck as an amplifying mechanism. Its conclusion is stated bluntly: specification discipline, not model capability, is the binding constraint on the dependability of AI-assisted software [14].

We arrived at the same structural conclusion from building, and it is the thesis of this paper. Two consequences follow immediately:

- **The model is not the asset.** Frontier model capability is a purchasable input that improves for every competitor simultaneously. A production advantage built on it is not an advantage.
- **Generation was never the constraint.** Which is why the remainder of this paper spends more words on specification, verification, and retention than on generation.

---

## 4. Why generation alone cannot be the advantage

Frederick Brooks separated the difficulty of software into the _essential_ — building the conceptual structure of the thing — and the _accidental_ — expressing that structure in a language and fitting it to a machine. His argument was arithmetic: unless accidental tasks consume more than nine-tenths of total effort, eliminating them entirely still cannot yield an order-of-magnitude improvement [15].

Language models are extraordinarily good at accidental complexity. They translate intent into syntax, recall idioms, adapt patterns across a codebase, and produce serviceable first drafts of documentation. That is genuine leverage and sXs uses it heavily.

But deciding what must be true, which failure modes are unacceptable, where a boundary belongs, and what a user actually needs is essential work. It does not disappear when generation gets cheap. It becomes the larger share of the remaining effort — and, by Brooks's arithmetic, the ceiling on what generation alone can deliver.

This is the concrete reason sXs publishes no multiplier. Not modesty: the arithmetic does not support one, and the measurement literature (section 3.2) cannot currently establish one.

---

## 5. Specify — the constraint that gates everything downstream

If specification discipline is the binding constraint [14], it is worth being clear about _why_, because "write specs" is easy to hear as bureaucracy.

Spear and Bowen's study of the Toyota Production System offers the mechanism. They found that Toyota's advantage was not its visible tools and practices but that every activity was specified as an explicit hypothesis, so that any deviation became immediately visible and therefore available as information [16]. Specification is what converts an outcome into evidence. Without it, a result is an anecdote.

This generalises exactly to model-driven production. A generated change either satisfies a stated expectation or it does not. Absent that expectation, "it looks right" is the only available test — and section 6 shows why that is the weakest possible gate against this particular failure mode. Specification is therefore not documentation overhead. It is the precondition for verification, and, because it makes deviation legible, the precondition for improvement.

Consequential decisions need the same treatment over a longer horizon. Architecture decision records, in the lightweight form Michael Nygard proposed in 2011, capture a single significant decision with its context and accepted consequences, stored beside the code [17]. In an AI-native system this acquires a second function: the record becomes context that later human _and_ model work reads, so the reasoning behind a system's present shape survives the departure of whoever held it. sXs maintains this as production infrastructure rather than documentation habit — ADR Power as the source capability, compiled through Kanon and reused across builds.

---

## 6. Verify — the constraint moved here, and most systems have not noticed

This is the section that matters most, and it is where sXs differs most sharply from the category.

### 6.1 Constraint relocation

Generation cost fell dramatically. The cost of establishing that a change is correct did not.

The consequence is a textbook constraint relocation: adding capacity upstream of a stage that is already saturated does not raise throughput. It lengthens the queue in front of that stage. Faros's data is precisely this signature — 98% more merged pull requests, 91% longer review times, 154% larger changes, flat organisational delivery [12], intensifying in 2026 to roughly five times the median review time and more incidents per pull request [13]. DORA's persistent negative relationship between AI adoption and delivery _stability_, across two consecutive years [10][11], is the same phenomenon measured after release instead of before it. A recent analysis of code review in the AI era reaches the same conclusion: increased production velocity expands the volume requiring review, turning review into a growing bottleneck [18].

**A factory that scales generation without scaling verification does not produce software faster. It produces unverified inventory faster.**

### 6.2 Why human review is the wrong instrument on its own

Two findings make this specific.

Perry, Srivastava, Kumar, and Boneh found that participants with access to an AI assistant wrote significantly less secure code than those without — and were _more_ likely to believe their code was secure [19]. The error rate rose and confidence rose with it. Confidence is what calibrates review attention, so this failure mode actively defeats the mechanism meant to catch it.

The Stack Overflow 2025 developer survey supports this from practitioner experience: more developers actively distrust AI accuracy (46%) than trust it (33%), with only 3% highly trusting it, and the most-cited frustration is output that is "almost right, but not quite" [20]. _Almost right_ is the hardest possible input for human review. It passes a plausibility scan. It fails on a detail that a type system, a test, or a schema check would have caught deterministically and instantly.

Structural quality signals point the same way. GitClear's analysis of 211 million changed lines from 2021 to 2025 found moved or refactored code falling from about 25% of changes to under 10%, while duplicated code rose from roughly 8% to 18%; their 2026 report records duplication up 81%, refactoring down 70%, error-masking constructs up 47%, and two-week churn up 15% [21][22]. These are maintainability costs that accrue silently and are invisible to any single review.

### 6.3 The design consequence

The response is not more reviewers. Review capacity cannot scale with generation capacity, and each additional change would receive less attention rather than more.

The response is to change what human attention is spent on:

- **Baseline correctness becomes deterministic and mechanical.** Types, schemas, contracts, tests, builds, linters, and evaluations. These do not tire, do not become complacent, and do not find "almost right" plausible.
- **Human attention is reserved for intent, consequence, and irreversibility** — the essential complexity of section 4, which no gate can adjudicate.
- **Verification is defined before generation begins.** If acceptance cannot be stated in advance, the work is not ready to generate. This is an existing sXs guardrail, and section 5 is the reason it is enforceable.
- **Determinism is preferred wherever a model is not adding judgment.** A check that can be a string comparison should not be a model call — it is cheaper, reproducible, and cannot be argued with.

Datalinks is the clearest instance of this discipline in our own portfolio: source notes are pure projections containing no model output, so regeneration is byte-identical; extraction is gated by rubrics the user owns, with every criterion verdict recorded including rejections; quote verification runs as a string search first so only near-misses reach a model; and secret redaction never uses a model at all — partly because a model misses things unreproducibly, and mostly because routing a secret through a model to ask whether it is a secret has already leaked it. That last point generalises: some verification must be deterministic not for cost but because a probabilistic check is _categorically_ the wrong instrument.

---

## 7. Ship — operability is the standard, not release

DORA's stability finding deserves separating from its throughput finding, because the two have different causes. Throughput turned positive by 2025 as teams learned to use the tools; stability did not [11]. Stability is measured by what happens _after_ a change reaches users — change failure rate and recovery time.

That is a shipping discipline, not a coding one. It is why sXs treats the definition of done as operable rather than merged: code, documentation, deployment, observability, and a named ownership path. A change that ships and then degrades has not been produced faster; its cost has been deferred and made someone's incident.

---

## 8. Compound — why retained capability is the only defensible asset

The compounding claim is the most commercially significant and the hardest to evidence. Two established lines of work explain the mechanism.

Cohen and Levinthal's concept of **absorptive capacity** holds that a firm's ability to recognise the value of new external knowledge, assimilate it, and apply it commercially is largely a function of its _prior related knowledge_ [23]. This is the precise mechanism behind "the factory compounds," and it explains something otherwise puzzling about the present moment. Model capability is a rising tide reaching every competitor at once. What determines whether an organisation converts a new model, harness, or protocol into shipped software is the capability it already holds — its specifications, verification surfaces, decision records, and reusable production knowledge. Prior capability sets the rate at which the next external advance can be exploited. Two organisations receive the identical model upgrade and get materially different value from it.

Teece, Pisano, and Shuen's **dynamic capabilities** framework makes the strategic consequence explicit: advantage lies in the ability to integrate and reconfigure competences in a changing environment, not in holding a fixed resource [24]. A frontier model is a fixed, purchasable, universally available resource. The capacity to integrate one accountably is not purchasable, and is what sXs is actually building.

This is why reusable capability is treated as retained earnings rather than a by-product, and why Kanon, ADR Power, and Byron Powers are maintained as products in their own right rather than internal tooling.

It is also why the Factory Ledger is deliberately small. A capability earns an entry only when a _later_ build demonstrably uses it. Reuse asserted in advance is a plan; reuse recorded after the fact is evidence. Keeping the ledger short is what makes it worth reading — and, per section 10, what makes the compounding claim falsifiable rather than decorative.

---

## 9. The seam — where human judgment stays, and why it must be placed deliberately

The symbolic × subsymbolic seam is a production decision: which parts of the work carry explicit structure, and which are left to learned synthesis. Section 6.3 gives its verification logic. There is a separate and older reason it cannot be allowed to drift.

Lisanne Bainbridge's "Ironies of Automation" observed that automating most of a task does not remove the human — it converts them into a monitor, a role humans perform poorly, while degrading the very skills required to intervene when the automation fails [25]. Automate the routine and the operator loses fluency in exactly the situations where their judgment is finally needed.

The parallel to model-driven production is direct, and Perry et al.'s confidence inversion [19] is Bainbridge's irony in a coding context: the tool increases the error rate and the operator's confidence at the same time.

The design conclusion is that judgment cannot be whatever is left over after automation. It has to be positioned deliberately, at boundaries chosen because they are consequential: what the product must do, which risks are unacceptable, which decisions are irreversible, and whether a release is acceptable. Those boundaries keep a named human owner. This is not a concession to caution; it is what keeps the skill alive where it is load-bearing.

---

## 10. What would falsify this thesis

A production claim that cannot fail is marketing. Each element of the thesis has a specific disconfirming observation.

| Claim                                                 | What would falsify it                                                                                           | Where it is checkable                                                |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Capability compounds                                  | Capabilities are published but no later build uses them; the ledger stays empty or is padded with trivial reuse | Factory Ledger — entries require a named consuming build             |
| Specification reduces rework                          | Specified work shows the same rework rate as unspecified work                                                   | Share of generated changes passing verification without major rework |
| Verification catches what review misses               | Defects reach release at the same rate with mechanical gates as without                                         | Defects and regressions caught before release                        |
| Specification is not overhead                         | Time from accepted specification to verified release does not improve as capability accrues                     | Cycle time, measured per build                                       |
| Reuse is genuine, not forced                          | Unlike products require a brittle shared platform; changes to one break another                                 | Independence of the product repositories                             |
| AI belongs in production, not necessarily the product | Only AI-containing products ship successfully                                                                   | The portfolio itself — PerfectStar 2K contains no model              |

Two standing commitments follow. No speed, quality, or autonomy claim is published without a defined baseline and comparable work. And a capability that never reaches a second build is recorded as unreused rather than quietly removed from the ledger.

---

## 11. Limits and open questions

Stating these is part of the argument, not a disclaimer appended to it.

**Our own evidence is small-n.** sXs is a small team with a portfolio measured in single digits. Nothing in section 10 constitutes a controlled study, and we do not present the ledger as one. It is an audit trail.

**The external literature lags the tools.** Most of the rigorous work cited here studies autocomplete-style assistants and early agentic tools. Multi-agent and long-horizon agentic workflows — increasingly how the factory actually operates — are substantially less studied. Section 3's numbers should be treated as evidence about a _previous_ generation of tooling.

**Measurement itself is unsettled.** METR's redesign [9] is the clearest available demonstration that task-level productivity measurement in this domain is genuinely hard, and getting harder as refusing to work without AI becomes common enough to bias participation. We expect the published effect sizes to keep moving.

**Delivery metrics are not product value.** Throughput and stability say nothing about whether the software was worth building. A factory optimised purely on delivery indicators could ship useless products efficiently. This is why sXs measures product indicators separately, and why the portfolio is organised by role rather than by AI relevance.

**The compounding claim is the least evidenced and the most load-bearing.** Absorptive capacity and dynamic capabilities are well-established in the strategy literature but were not developed for two-person production systems, and the transfer is our inference. It is also the claim most likely to be quietly wrong, which is the reason for keeping the ledger conservative.

**A vocabulary risk remains.** Section 2 argues the historical software factory failed partly because the analogy licensed deskilling. That risk does not disappear because we have named it. It reappears every time a task looks routine enough to stop thinking about, which is precisely Bainbridge's point [25].

---

## 12. Conclusion

The evidence does not support the claim that AI makes software development uniformly faster, and it does not support the claim that it makes it worse. It supports something more useful: that the effect is highly conditional, and that the conditions are properties of the production system rather than the model.

Three of those conditions are now reasonably well evidenced. Explicit specification is the binding constraint on dependability [14][16]. Verification, not generation, is where the constraint now sits, and it does not scale by adding reviewers [12][13][18][19][20]. Retained capability determines how much of each external advance an organisation can convert into shipped software [23][24].

That is the whole of the sXs thesis, and it is why the operating model is five stages rather than one. Generation is the cheapest of them and the only one the market talks about.

The software ships. The factory compounds. Both are meant to be checked.

---

## References

1. Cusumano, M. A. _Japan's Software Factories: A Challenge to U.S. Management._ Oxford University Press, 1991. <https://archive.org/details/japanssoftwarefa0000cusu>
2. Cusumano, M. A. "Fujitsu Software: Process Control and Automated Customization." MIT Sloan School of Management Working Paper 2044-88, August 1988. <https://dspace.mit.edu/handle/1721.1/47942>
3. Review of _Japan's Software Factories_, _Journal of Information Technology_, 1993. doi:10.1057/jit.1993.27 — notes the abandonment of the standardisation-and-reuse factory approach by U.S. firms within about three years. <https://doi.org/10.1057/jit.1993.27>
4. Cusumano, M. A. "Factory Concepts and Practices in Software Development." MIT Sloan School of Management working paper, December 1989. <https://dspace.mit.edu/handle/1721.1/47992> — an abbreviated treatment appeared as "The Software Factory: A Historical Interpretation," _IEEE Software_ 6(2), March 1989.
5. Kubo, T. "'Software Factory' was once created 40 years ago." Retrospective commentary, not primary history, on the status and pay of software work inside the Japanese software factory organisations. <https://note.com/takuya_kubo_1986/n/n0494501221ad?hl=en>
6. Peng, S., Kalliamvakou, E., Cihon, P., Demirer, M. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." arXiv:2302.06590, 2023. 95 programmers recruited via Upwork, 45 treated / 50 control, May–June 2022; the authors state the study does not examine code quality. <https://arxiv.org/abs/2302.06590>
7. Paradis, E., Grey, K., Madison, Q., Nam, D., Macvean, A., Meimand, V., Zhang, N., Ferrari-Church, B., Chandra, S. "How much does AI impact development speed? An enterprise-based randomized controlled trial." arXiv:2410.12944, 2024. <https://arxiv.org/abs/2410.12944>
8. Becker, J., Rush, N., Barnes, E., Rein, D. "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." METR, arXiv:2507.09089, 2025. 16 developers, 246 tasks in mature projects, using Cursor Pro with Claude 3.5/3.7 Sonnet. <https://arxiv.org/abs/2507.09089>
9. METR. "We are Changing our Developer Productivity Experiment Design." 24 February 2026. <https://metr.org/blog/2026-02-24-uplift-update/>
10. DORA / Google Cloud. _Accelerate State of DevOps Report 2024._ <https://dora.dev/dora-report-2024>
11. DORA / Google Cloud. _State of AI-assisted Software Development 2025_ (2025 DORA report). <https://dora.dev/research/2025/dora-report/> · announcement: <https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report/>
12. Faros AI. _The AI Productivity Paradox_ — telemetry from 10,000+ developers across 1,255 teams, 2025. <https://www.faros.ai/ai-productivity-paradox>
13. Faros AI. _AI Engineering Report 2026: The Acceleration Whiplash._ <https://www.faros.ai/research/ai-acceleration-whiplash>
14. Farrag, S. E. "The Productivity-Reliability Paradox: Specification-Driven Governance for AI-Augmented Software Development." arXiv:2605.01160, May 2026. <https://arxiv.org/abs/2605.01160>
15. Brooks, F. P. "No Silver Bullet: Essence and Accidents of Software Engineering." _IEEE Computer_ 20(4), April 1987, pp. 10–19. <https://ieeexplore.ieee.org/document/1663532>
16. Spear, S., Bowen, H. K. "Decoding the DNA of the Toyota Production System." _Harvard Business Review_, September–October 1999. <https://hbr.org/1999/09/decoding-the-dna-of-the-toyota-production-system>
17. Nygard, M. "Documenting Architecture Decisions." 15 November 2011. <https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html>
18. Kamalı, H. Ö., Tuna, E., Haratian, V., Tüzün, E. "Rethinking Code Review in the Age of AI: A Vision for Agentic Code Review." arXiv:2605.17548, 2026. <https://arxiv.org/abs/2605.17548>
19. Perry, N., Srivastava, M., Kumar, D., Boneh, D. "Do Users Write More Insecure Code with AI Assistants?" _CCS '23: Proceedings of the 2023 ACM SIGSAC Conference on Computer and Communications Security_, November 2023, pp. 2785–2799. arXiv:2211.03622. <https://arxiv.org/abs/2211.03622>
20. Stack Overflow. _2025 Developer Survey — AI section._ <https://survey.stackoverflow.co/2025/ai>
21. GitClear. _AI Code Quality Research: 211 million changed lines, 2021–2025._ <https://gitkraken.gitclear.com/recent_ai_developer_productivity_code_quality_research>
22. GitClear. _The Maintainability Gap: 2026 AI Code Quality Research._ <https://gitkraken.gitclear.com/write_only_mode_ai_research>
23. Cohen, W. M., Levinthal, D. A. "Absorptive Capacity: A New Perspective on Learning and Innovation." _Administrative Science Quarterly_ 35(1), 1990, pp. 128–152. doi:10.2307/2393553 <https://doi.org/10.2307/2393553>
24. Teece, D. J., Pisano, G., Shuen, A. "Dynamic Capabilities and Strategic Management." _Strategic Management Journal_ 18(7), 1997, pp. 509–533. `doi:10.1002/(SICI)1097-0266(199708)18:7<509::AID-SMJ882>3.0.CO;2-Z`
25. Bainbridge, L. "Ironies of Automation." _Automatica_ 19(6), 1983, pp. 775–779. doi:10.1016/0005-1098(83)90046-8 <https://doi.org/10.1016/0005-1098(83)90046-8>

---

_Every external claim in this paper is attributed. Where a source has been superseded or corrected by its own authors — reference 9 corrects reference 8 — both are cited, and the correction is stated in the body rather than the footnotes. Content from cited sources is paraphrased rather than reproduced._
