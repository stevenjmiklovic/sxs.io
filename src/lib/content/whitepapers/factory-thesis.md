---
slug: 'factory-thesis'
title: 'The Factory Thesis'
subtitle: 'Specification, verification, and retained capability as the determinants of what an AI-native production system can ship'
summary: 'Published research on AI-assisted software development does not converge on an effect size. The dispersion is itself the substantive result: it locates the variance in the production system rather than in the model.'
version: '1.0'
publishedAt: '2026-09-02'
status: 'Living document. Superseded sections are revised, not deleted.'
referenceCount: 25
---

## Summary

sXs describes itself as an AI software factory and claims that its production capability compounds. Both claims are widely made across the category and rarely evidenced, and they therefore warrant an argument rather than an assertion.

This paper sets out a narrow and falsifiable case. Published research on AI-assisted software development does not converge on a productivity figure: credible controlled trials report effects ranging from approximately 56% faster to 19% slower on superficially comparable work. The dispersion is itself the substantive result. It indicates that the model is not the differentiating asset, since equivalent model access is available to every competitor. The variable is the production system in which the model operates — whether intent is made explicit before generation, whether verification capacity keeps pace with generation capacity, and whether capability is retained between builds.

The five stages sXs publishes — **Specify, Generate, Verify, Ship, Compound** — are not offered as a proprietary methodology. Each corresponds to a documented failure mode that occurs in its absence. This paper identifies those failure modes, cites the evidence for them, states the observations that would falsify the thesis, and distinguishes what the evidence supports from what remains inference.

A further conclusion follows from the same evidence: the binding constraint on AI-assisted delivery has moved from writing code to establishing that code is correct. A production system that adds generation capacity without adding verification capacity does not ship more quickly; it accumulates unverified work in progress.

---

## 1. What is being claimed

The term "AI software factory" is used loosely across the market. This section states the claims precisely, so that the remainder of the paper can be assessed against them.

**Claimed:**

1. A production system that makes intent explicit, verifies independently, and retains reusable capability can turn a serious product intention into operable software across unrelated product categories, with a small team.
2. That system improves with use, because each build leaves behind capability that the next build inherits.
3. AI belongs inside the production system. It does not have to be inside the product.

**Not claimed:**

1. A velocity multiplier. No such figure is published without a defined baseline and comparable work.
2. Autonomous delivery. Consequential boundaries retain a named human owner.
3. That every output should share a platform. Unlike products are not consolidated onto common infrastructure in order to lengthen a reuse ledger.

Sections 2 to 9 argue the first set of claims. Sections 10 and 11 state the conditions under which they would fail and the grounds for the second set.

---

## 2. The software factory: lineage and inherited failure modes

The software factory is not a new concept, and its documented history is largely one of abandonment. That history bears directly on the term's use here, and is therefore addressed before the operating model is described.

Michael Cusumano's research at MIT documented the Japanese software factories of the 1970s and 1980s — Hitachi, Toshiba, NEC, and Fujitsu — which centralised development, imposed process control and standardised methods, and treated reuse as a managed asset rather than an accident [1][2]. Fujitsu, for example, centralised systems software at its Numazu works and established a dedicated software factory department that performed detailed design, coding, and testing against specifications produced elsewhere [2].

Two features of this record are relevant. The first is that the approach was substantially abandoned by United States firms within approximately three years of being attempted [3]. The second concerns the reason. The term imported an analogy to the mass production of identical units, and that analogy does not hold for software: the marginal unit costs nothing to reproduce, the work is consequently design work in its entirety, and no two products constitute the same unit. Cusumano's survey of factory concepts and practices treats the analogy with corresponding caution [4].

A second failure mode follows from the same framing, in that it invites the treatment of development as low-skill labour to be subdivided and reduced in cost. Retrospective commentary on those organisations argues that this occurred, with software work carrying low status and remuneration comparable to clerical roles [5]. That source is cited as commentary rather than as settled history. The hazard is nonetheless material irrespective of how far the account generalises, since a production system that deskills its operators removes the judgment on which it depends.

The term therefore carries a substantial risk of being misread. It is currently applied both to defence software pipelines and, increasingly, to vendors offering agent orchestration with accompanying velocity claims. In several of the latter cases the underlying offer is lower-cost outsourced development with model assistance added.

**What sXs inherits from the lineage:** process discipline, explicit standards, reuse treated as a capital asset, and measurement of the production system itself rather than only its output.

**What sXs rejects:** uniform output as an objective, the division of work into deskilled steps, and the equation of a factory with low-cost volume. A factory in the sense used here is a system that provides _unlike_ products with a disciplined path from intention to release. It standardises the production method rather than the product.

The distinction is not merely terminological. Section 8 argues that it is also where the durable commercial advantage lies.

---

## 3. The empirical record: reported effect sizes do not converge

If AI-assisted development produced a stable effect size, the strongest production system would be the one with the best model access, and no further argument would be required. The published literature does not support that premise.

### 3.1 Trials reporting positive effects

Peng, Kalliamvakou, Cihon, and Demirer ran a controlled experiment in which 95 programmers recruited through Upwork implemented an HTTP server in JavaScript against a fixed twelve-check test suite. The group with GitHub Copilot finished 55.8% faster — 71 minutes against 161 — with a 95% confidence interval of 21% to 89% and p = 0.0017 [6].

The result is methodologically sound, and it is also frequently generalised beyond the conditions under which it was obtained. The authors state four constraints. The task was standardised, greenfield, and self-contained, presenting no existing codebase to comprehend and no maintenance horizon. Participants were freelancers averaging six years of experience rather than maintainers of the system in question. The study did not examine code quality, which the authors identify as a limitation carrying security and performance implications. Finally, the measured benefit was largest for the least experienced developers. The last of these is revisited in section 3.4.

Paradis and colleagues at Google ran an enterprise-based randomised controlled trial with 96 full-time engineers on a complex, enterprise-grade task: roughly 21% faster, 96 minutes against 114. The authors report a wide confidence interval and explicitly invite caution about generalising beyond their tooling and the summer of 2024 [7].

### 3.2 A trial reporting a negative effect, and its subsequent correction

METR studied 16 experienced open-source developers completing 246 tasks in mature repositories they had worked on for an average of five years, using the early-2025 frontier — Cursor Pro with Claude 3.5/3.7 Sonnet. Allowing AI increased completion time by 19%. The more notable result is the accompanying perception gap: participants forecast a 24% reduction beforehand and still estimated a 20% reduction after completing the work, while domain experts had predicted improvements of approximately 38 to 39% [8].

The study is widely cited, and should be read together with its successor. In February 2026 METR published a revision of its own experimental design, reporting that the newer data indicates a speedup of approximately 18% for the subset of returning developers and approximately 4% for new recruits, with confidence intervals crossing zero in both cases. METR assesses that developers are likely more assisted in 2026 than its early-2025 estimate indicated, that selection effects bias its estimates downward — developers increasingly decline to participate rather than work without AI, and withhold the tasks for which they expect the greatest benefit — and that its figures should be read as a lower bound [9].

The defensible summary is therefore not that AI slows developers down, but that task-level measurement of the effect is currently unreliable, a limitation stated by the researchers conducting the most rigorous work on it. Citing the 19% figure as a current finding, in either direction, treats a superseded estimate as settled.

### 3.3 Organisational-level measurement

Individual task time is in any case not the decisive unit of analysis, since software is delivered by organisations rather than by individuals.

DORA's 2024 report found that AI adoption raised individual productivity, flow, and job satisfaction while _reducing_ software delivery throughput by an estimated 1.5% and stability by 7.2%; 39% of respondents reported little or no trust in AI-generated code [10]. The 2025 report found the throughput relationship had turned positive as teams learned where AI helps — while the negative relationship with delivery _stability_ persisted for a second consecutive year [11].

Faros AI's telemetry analysis across more than 10,000 developers and 1,255 teams found the same shape from a different direction: high-AI-adoption teams completed 21% more tasks and merged 98% more pull requests, while pull request review time rose 91% and PR size grew 154% — with no measurable improvement in organisational DORA metrics [12]. Their 2026 follow-up reports the pattern intensifying: larger changes, roughly five times the median review time, and materially more incidents per pull request [13].

### 3.4 Interpretation of the dispersion

Taken together, the reported effects span −19% to +56% at the task level, while organisational measurement shows a consistent pattern in which individual output rises and delivery outcomes remain flat or degrade in stability.

The two extremes are not in conflict, and the reason they are not is central to the argument. The trial reporting +56% measured inexperienced freelancers constructing a self-contained artefact from nothing, without measuring code quality, and found the largest benefit among the least experienced participants. The trial reporting −19% measured expert maintainers making changes within large codebases they knew in detail, where quality standards were implicit and high. These conditions sit at close to opposite ends of two variables, codebase maturity and operator expertise, and the results order themselves accordingly. AI-assisted generation delivers most value where constraints are fewest and the operator's own knowledge is thinnest, and least value — potentially negative value — where the binding difficulty is comprehending an existing system and conforming to its standards. The latter set of conditions describes the regime in which a factory producing durable products ordinarily operates.

A multivocal review of 67 sources published in 2026 designates this pattern the Productivity–Reliability Paradox, attributing it to the interaction between non-deterministic generators and insufficient specification discipline. It identifies task abstraction, codebase maturity, and developer experience as moderating variables, and the code review bottleneck as an amplifying mechanism. Its conclusion is that specification discipline, rather than model capability, is the binding constraint on the dependability of AI-assisted software [14].

sXs reached the same structural conclusion from practice, and it constitutes the thesis of this paper. Two consequences follow.

- **The model is not the asset.** Frontier model capability is a purchasable input that improves for every competitor simultaneously. A production advantage founded on it is not an advantage.
- **Generation was not the constraint.** The remainder of this paper accordingly treats specification, verification, and retention at greater length than generation.

---

## 4. The limits of generation as a source of advantage

Frederick Brooks distinguished the _essential_ difficulty of software — constructing the conceptual structure of the system — from the _accidental_ difficulty of expressing that structure in a language and fitting it to a machine. His argument was arithmetic: unless accidental tasks consume more than nine-tenths of total effort, eliminating them entirely cannot yield an order-of-magnitude improvement [15].

Language models address accidental complexity effectively. They translate intent into syntax, recall idioms, adapt patterns across a codebase, and produce serviceable first drafts of documentation. This is genuine leverage, and sXs relies on it.

Determining what must be true, which failure modes are unacceptable, where a boundary belongs, and what a user requires is essential work. It does not diminish as generation becomes less costly. It becomes instead the larger share of the remaining effort and, by Brooks's arithmetic, the ceiling on what generation alone can deliver.

This is the reason sXs publishes no productivity multiplier. The arithmetic does not support one, and the measurement literature discussed in section 3.2 cannot presently establish one.

---

## 5. Specify: specification as a precondition for verification

If specification discipline is the binding constraint [14], the mechanism by which it operates warrants statement, since specification is readily mistaken for administrative overhead.

Spear and Bowen's study of the Toyota Production System identifies that mechanism. They found that Toyota's advantage lay not in its visible tools and practices but in the specification of every activity as an explicit hypothesis, such that any deviation became immediately visible and therefore available as information [16]. Specification is what converts an outcome into evidence; without it, an outcome remains an anecdote.

The principle transfers directly to model-driven production. A generated change either satisfies a stated expectation or it does not. In the absence of that expectation, apparent correctness is the only available test, and section 6 sets out why this is the weakest available gate against the failure mode in question. Specification is consequently not documentation overhead. It is the precondition for verification and, because it renders deviation legible, the precondition for improvement.

Consequential decisions need the same treatment over a longer horizon. Architecture decision records, in the lightweight form Michael Nygard proposed in 2011, capture a single significant decision with its context and accepted consequences, stored beside the code [17]. In an AI-native system this acquires a second function: the record becomes context that later human _and_ model work reads, so the reasoning behind a system's present shape survives the departure of whoever held it. sXs maintains this as production infrastructure rather than documentation habit — ADR Power as the source capability, compiled through Kanon and reused across builds.

---

## 6. Verify: relocation of the binding constraint

This section sets out the verification argument, which carries the greater part of the operating model's practical weight.

### 6.1 Evidence of relocation

The cost of generating a change has fallen substantially. The cost of establishing that a change is correct has not.

The consequence is a relocation of the binding constraint. Adding capacity upstream of a stage that is already saturated does not raise throughput; it lengthens the queue in front of that stage. Faros's data exhibits this signature: 98% more merged pull requests, 91% longer review times, 154% larger changes, and flat organisational delivery [12], intensifying in 2026 to approximately five times the median review time and a higher incident rate per pull request [13]. DORA's persistent negative relationship between AI adoption and delivery _stability_ across two consecutive years [10][11] is the same phenomenon measured after release rather than before it. An analysis of code review under AI-assisted development reaches the same conclusion, finding that increased production velocity expands the volume requiring review and thereby renders review a growing bottleneck [18].

A production system that scales generation without scaling verification does not produce software more quickly. It produces unverified work in progress more quickly.

### 6.2 The limits of human review

Two findings bear on this directly.

Perry, Srivastava, Kumar, and Boneh found that participants with access to an AI assistant wrote significantly less secure code than those without, and were also more likely to believe their code was secure [19]. Both the error rate and reported confidence rose. Since confidence calibrates the attention a reviewer allocates, this failure mode tends to defeat the mechanism intended to detect it.

The 2025 Stack Overflow developer survey corroborates this from practitioner experience. More developers actively distrust the accuracy of AI tools (46%) than trust it (33%), only 3% report high trust, and the most frequently cited frustration is output that is "almost right, but not quite" [20]. Output that is almost correct is the most difficult input for human review: it survives a plausibility check while failing on a detail that a type system, a test, or a schema check would identify deterministically.

Structural quality indicators point in the same direction. GitClear's analysis of 211 million changed lines between 2021 and 2025 found moved or refactored code declining from approximately 25% of changes to under 10%, while duplicated code rose from approximately 8% to 18%. Its 2026 report records duplication up 81%, refactoring down 70%, error-masking constructs up 47%, and two-week churn up 15% [21][22]. These are maintainability costs that accrue incrementally and are not visible to any single review.

### 6.3 Design consequences

Increasing reviewer headcount does not resolve this. Review capacity cannot scale with generation capacity, and each additional change would receive less attention rather than more. The available response is to change what human attention is spent on.

- **Baseline correctness is established mechanically and deterministically,** through types, schemas, contracts, tests, builds, linters, and evaluations. Mechanical checks do not tire, do not become complacent, and do not accept almost-correct output as plausible.
- **Human attention is reserved for intent, consequence, and irreversibility** — the essential complexity described in section 4, which no automated gate can adjudicate.
- **Verification is defined before generation begins.** Where acceptance cannot be stated in advance, the work is not ready to be generated. This is an existing sXs guardrail, and section 5 states why it is enforceable.
- **Deterministic checks are preferred wherever a model contributes no judgment.** A check that can be performed as a string comparison should not be a model call, being cheaper, reproducible, and not subject to interpretation.

Datalinks is the clearest instance of this discipline within the sXs portfolio. Source notes are pure projections containing no model output, so that regeneration is byte-identical. Extraction is gated by rubrics the user owns, with every criterion verdict recorded, including rejections. Quote verification is performed as a string search first, so that only near-misses reach a model. Secret redaction does not use a model at all, partly because a model fails unreproducibly and principally because routing a secret through a model in order to ask whether it is a secret has already disclosed it. The final point generalises: some verification must be deterministic not for reasons of cost but because a probabilistic check is categorically unsuited to the task.

---

## 7. Ship: operability as the completion criterion

DORA's stability finding warrants separation from its throughput finding, since the two have different causes. Throughput turned positive by 2025 as teams established where the tools were useful; stability did not [11]. Stability is measured by what occurs _after_ a change reaches users, through change failure rate and recovery time.

This is a property of shipping discipline rather than of coding. It is the reason sXs defines completion as operable rather than merged, comprising code, documentation, deployment, observability, and a named ownership path. A change that ships and subsequently degrades has not been produced more quickly; its cost has been deferred and transferred to operations.

---

## 8. Compound: retained capability as the durable asset

The compounding claim is the most commercially significant element of the thesis and the most difficult to evidence. Two established lines of work identify the mechanism.

Cohen and Levinthal's concept of **absorptive capacity** holds that a firm's ability to recognise the value of new external knowledge, assimilate it, and apply it commercially is largely a function of its _prior related knowledge_ [23]. This is the mechanism underlying the claim that the factory compounds. Model capability improves for all competitors simultaneously. What determines whether an organisation converts a new model, harness, or protocol into shipped software is the capability it already holds: its specifications, verification surfaces, decision records, and reusable production knowledge. Prior capability sets the rate at which the next external advance can be exploited. Two organisations receiving an identical model upgrade will therefore realise materially different value from it.

Teece, Pisano, and Shuen's **dynamic capabilities** framework states the strategic consequence: advantage lies in the ability to integrate and reconfigure competences in a changing environment rather than in holding a fixed resource [24]. A frontier model is a fixed, purchasable, and universally available resource. The capacity to integrate one accountably is none of these, and it is that capacity sXs is building.

Reusable capability is consequently treated as retained earnings rather than as a by-product, and Kanon, ADR Power, and Byron Powers are maintained as products in their own right rather than as internal tooling.

The same reasoning accounts for the Factory Ledger being deliberately small. A capability earns an entry only when a _later_ build demonstrably uses it. Reuse asserted in advance is a plan; reuse recorded after the fact is evidence. A short ledger is therefore more informative than a long one, and, as section 10 sets out, it is what renders the compounding claim falsifiable.

---

## 9. The symbolic–subsymbolic seam: placement of human judgment

The symbolic × subsymbolic seam is a production decision concerning which parts of the work carry explicit structure and which are left to learned synthesis. Section 6.3 states its verification logic. A separate and older consideration determines why its position cannot be allowed to drift.

Lisanne Bainbridge's "Ironies of Automation" observed that automating the majority of a task does not remove the human operator but converts that operator into a monitor, a role humans perform poorly, while degrading the skills required to intervene when the automation fails [25]. Automating routine work therefore erodes the operator's fluency in precisely the circumstances where judgment is eventually required.

The parallel to model-driven production is direct. The confidence inversion reported by Perry et al. [19] is Bainbridge's observation in a software context: the tool raises the error rate and the operator's confidence concurrently.

The design conclusion is that judgment cannot be whatever remains after automation. It must be positioned deliberately, at boundaries selected because they are consequential: what the product must do, which risks are unacceptable, which decisions are irreversible, and whether a release is acceptable. Those boundaries retain a named human owner. The purpose is not caution but the maintenance of competence where that competence is load-bearing.

---

## 10. Falsification criteria

A claim that admits no disconfirming observation is not testable. Each element of the thesis is therefore paired below with an observation that would falsify it and with the indicator where that observation would appear.

| Claim                                                 | What would falsify it                                                                                           | Where it is checkable                                                |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Capability compounds                                  | Capabilities are published but no later build uses them; the ledger stays empty or is padded with trivial reuse | Factory Ledger — entries require a named consuming build             |
| Specification reduces rework                          | Specified work shows the same rework rate as unspecified work                                                   | Share of generated changes passing verification without major rework |
| Verification catches what review misses               | Defects reach release at the same rate with mechanical gates as without                                         | Defects and regressions caught before release                        |
| Specification is not overhead                         | Time from accepted specification to verified release does not improve as capability accrues                     | Cycle time, measured per build                                       |
| Reuse is genuine, not forced                          | Unlike products require a brittle shared platform; changes to one break another                                 | Independence of the product repositories                             |
| AI belongs in production, not necessarily the product | Only AI-containing products ship successfully                                                                   | The portfolio itself — PerfectStar 2K contains no model              |

Two standing commitments follow. No claim regarding speed, quality, or autonomy is published without a defined baseline and comparable work. A capability that never reaches a second build is recorded as unreused rather than removed from the ledger.

---

## 11. Limits and open questions

The following limitations qualify the argument above and are stated as part of it.

**The sXs evidence base is small.** sXs is a small team with a portfolio measured in single digits. Nothing in section 10 constitutes a controlled study, and the ledger is not presented as one. It is an audit trail.

**The external literature lags the tooling.** Most of the rigorous work cited here examines autocomplete-style assistants and early agentic tools. Multi-agent and long-horizon agentic workflows, which increasingly describe how the factory operates, are substantially less studied. The figures in section 3 should be treated as evidence concerning a _previous_ generation of tooling.

**Measurement is itself unsettled.** METR's redesign [9] is the clearest available demonstration that task-level productivity measurement in this domain is difficult, and becoming more so as declining to work without AI becomes common enough to bias participation. Published effect sizes should be expected to continue moving.

**Delivery metrics are not a measure of product value.** Throughput and stability indicate nothing about whether the software was worth building, and a factory optimised solely on delivery indicators could ship unwanted products efficiently. sXs therefore measures product indicators separately, and organises the portfolio by role rather than by AI relevance.

**The compounding claim is the least evidenced and the most load-bearing.** Absorptive capacity and dynamic capabilities are well established in the strategy literature but were not developed for two-person production systems, and their application here is inference. It is also the claim most likely to be wrong without that being immediately apparent, which is the reason for maintaining a conservative ledger.

**A terminological risk remains.** Section 2 argues that the historical software factory failed partly because the analogy licensed deskilling. Naming that risk does not remove it. It recurs whenever a task appears routine enough to stop examining, which is Bainbridge's point [25].

---

## 12. Conclusion

The evidence does not support the claim that AI makes software development uniformly faster, nor the claim that it makes it worse. It supports a narrower conclusion: the effect is strongly conditional, and the conditions are properties of the production system rather than of the model.

Three of those conditions are now reasonably well evidenced. Explicit specification is the binding constraint on dependability [14][16]. Verification rather than generation is where the constraint now sits, and it does not scale through the addition of reviewers [12][13][18][19][20]. Retained capability determines how much of each external advance an organisation can convert into shipped software [23][24].

This constitutes the sXs thesis, and it is why the operating model comprises five stages rather than one. Generation is the least costly of the five and the most frequently discussed.

Both halves of the resulting position — that the software ships and that the factory compounds — are stated so that they can be checked. Section 10 specifies how.

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

_Every external claim in this paper is attributed. Where a source has been superseded or corrected by its own authors — reference 9 corrects reference 8 — both are cited, and the correction is stated in the body rather than in the reference list. Material from cited sources is paraphrased rather than reproduced._
