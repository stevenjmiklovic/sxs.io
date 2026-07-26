---
slug: kanon
title: 'Kanon: turning reusable agent context into factory infrastructure'
summary: Kanon gives the factory a canonical source for skills, rules, workflows, agents, and prompts across multiple AI coding harnesses.
publishedAt: '2026-07-24'
type: Capability
related:
  - kanon
  - adr-power
  - byron-powers
artifacts:
  - label: Kanon v0.5.0
    href: https://github.com/thinkingsage/context-bazaar/releases/tag/v0.5.0
  - label: Architecture decisions
    href: https://github.com/thinkingsage/context-bazaar/tree/main/kanon/docs/adr
  - label: Source repository
    href: https://github.com/thinkingsage/context-bazaar
---

AI coding assistants do not share one native format for the context that guides their work. Skills,
rules, prompts, workflows, agents, hooks, and tool declarations take different shapes across Codex,
Claude Code, Kiro, Copilot, Cursor, Windsurf, Cline, and Amazon Q Developer.

Without a canonical layer, reusable production knowledge becomes a synchronization problem. A
useful workflow is copied into several repositories, adapted by hand, and allowed to drift.

Kanon exists to make that knowledge factory infrastructure.

## What shipped

Kanon is the compiler and validation system inside Context Bazaar. Authors create a knowledge
artifact once in a canonical format. Kanon parses it, validates its structure and security
properties, catalogs it, and passes it through adapters that produce harness-native output.

The current v0.5.0 release sits inside a repository that publishes a catalog of 63 artifacts across
eight supported harnesses. The catalog includes engineering workflows, architecture capabilities,
literary and publishing systems, academic-library practices, and infrastructure knowledge.

The significant output is not the artifact count by itself. It is the production path:

> source → parse → adapt → write

That path turns knowledge reuse into a system that can be built and checked.

## Why it mattered

The sXs factory depends on context that survives individual sessions and individual tools.
Instructions kept only in a conversation are temporary. Instructions copied separately into each
agent environment are expensive to maintain and difficult to audit.

Kanon moves that context into version-controlled artifacts with declared types, collections,
dependencies, and target capabilities. The factory can improve the canonical source and rebuild the
outputs rather than editing every compiled form independently.

This is what compounding looks like at the production layer: the next build inherits better context,
and improvements can travel across the tools used to make it.

## What was explicitly specified

The canonical format distinguishes several artifact types, including skills, powers, rules,
workflows, agents, prompts, templates, and reference packs. An artifact can contain a Markdown
knowledge source along with hooks, MCP server declarations, evaluation configuration, and
multi-phase workflow files.

Harness capabilities are also explicit. When a target cannot represent a feature fully, the adapter
uses a declared degradation strategy rather than silently pretending the output is equivalent.

Kanon’s public architecture decisions make additional boundaries visible:

- adapters are pure functions;
- schema validation uses controlled types;
- security review operates at more than one layer;
- publishing backends are separated from artifact semantics;
- importers have a distinct module boundary;
- artifact visibility and priority are catalog governance fields;
- Codex is treated as a first-class harness rather than generic Markdown output.

Those decisions are inspectable and versioned. Future work can challenge or supersede them without
losing the history.

## Where models contributed

Models can help author, review, transform, and evaluate knowledge artifacts. They can trace a
workflow across source and compiled outputs, draft an adapter change, or identify inconsistencies
between a capability declaration and the files a harness receives.

But the compiler boundary remains explicit. A model does not decide ad hoc what an artifact should
mean for each target during installation. The adapter and capability matrix encode that production
decision in software.

This is a recurring sXs principle: use model judgment to accelerate work where interpretation helps,
then capture stable decisions in deterministic infrastructure when repetition and trust matter.

## How the result was verified

Kanon exposes commands for building, validating, installing, publishing, browsing, and testing the
catalog. The repository includes continuous integration, code coverage, security auditing, CodeQL,
artifact evaluations, and a versioned changelog.

Verification happens at several seams:

- source metadata is parsed against schemas;
- artifacts are checked for structural and security issues;
- adapters can be exercised as pure transformations;
- compiled outputs can be inspected per harness;
- catalog and plugin builds verify that distribution includes the intended artifacts;
- releases make changes traceable to a version.

The presence of a check does not guarantee the quality of every knowledge artifact. It does make the
path from source to installed output available for systematic inspection.

## What the factory retained

Kanon already demonstrates concrete reuse.

ADR Power began as a portable capability for creating and maintaining architecture decision
records. It now exists as a canonical artifact inside Context Bazaar, with workflow phases, hooks,
and evaluations available to Kanon’s build system.

Byron Powers began as a library of literary and publishing workflows. Its capability families now
exist as a Kanon collection, showing that the same production system can carry deep domain knowledge
beyond software engineering.

The factory gains more than two imported libraries. It gains:

- a canonical authoring model;
- a compiler boundary between knowledge and harnesses;
- explicit target capability handling;
- repeatable validation and security checks;
- a catalog and distribution path;
- a public architecture ledger.

That infrastructure changes the economics of the next useful capability. It can be authored for
the factory rather than trapped inside one tool.

Kanon is therefore both a product of the sXs factory and part of the factory itself: shipped
software that increases the range of software the production system can make.
