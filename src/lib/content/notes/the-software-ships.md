---
slug: the-software-ships
title: The software ships. The factory compounds.
summary: What sXs means by an AI software factory—and why the output matters more than a claim about speed.
publishedAt: '2026-07-26'
type: Boundary
related:
  - kanon
  - perfectstar-2k
artifacts:
  - label: Inspect the factory portfolio
    href: https://github.com/thinkingsage
  - label: See current product work
    href: https://github.com/stevenjmiklovic
---

An AI software factory is easy to describe badly. It can sound like a conventional development
shop with a new label, or like a room full of autonomous agents producing applications while nobody
looks too closely at the output.

sXs means something more specific.

The factory is a production system for turning product intent into operable software. It combines
explicit specifications, reusable capabilities, model-driven execution, automated checks, and
human judgment. Its output can be a product that contains AI, a product that contains no model at
all, or an internal capability used to make later work more reliable.

The important claim is not that AI writes code. The important claim is that each finished build
leaves the production system more capable than it was before.

## What changed

sXs began as a way to describe the seam inside an AI system: what software should specify and what a
model should learn. That seam still matters, but it now describes more than the products.

It describes the factory itself.

Specifications, schemas, tests, types, and architecture decisions form the symbolic side. Models
contribute pattern recognition, synthesis, exploration, and generation on the subsymbolic side.
Human judgment determines where the seam belongs, what evidence is sufficient, and whether the
result should ship.

The revised operating loop is:

> Specify → Generate → Verify → Ship → Compound

Every stage produces an artifact. A specification can be reviewed. A generated change can be built.
A verification result can be inspected. A release can be used. A capability can be reused.

That artifact trail is what separates a factory from a story about productivity.

## Why it matters

Software production has always involved reusable knowledge, but much of that knowledge traditionally
lives in the memory of individual engineers or in conventions that are difficult to transfer.
Model-driven development can increase output, but it can also magnify ambiguity. If the input is
vague and the verification surface is weak, generation produces more uncertainty at greater speed.

sXs takes the opposite approach. Specification is not overhead added before the real work. It is
the interface that lets people and models contribute without losing the shape of the product.
Verification is not a final ceremony. It is how the factory decides which generated work becomes
software.

This is why the factory does not promise instant applications or a universal velocity multiplier.
Different products have different unknowns. A terminal editor, a graph-backed etymology explorer,
and a global intelligence interface do not become the same problem because they share a production
system.

What can compound are the ways the factory frames decisions, directs model work, checks output, and
captures reusable capability.

## What is explicit

The explicit side begins with the promises the product must keep:

- the user and outcome;
- the interfaces and data contracts;
- the behaviors that can be tested;
- the constraints that cannot be negotiated away;
- the decisions future contributors need to understand;
- the conditions under which a release should stop.

Those promises become specifications, decision records, schemas, test cases, build gates, and
release artifacts. They remain readable by the people accountable for the product.

## Where models contribute

Models are useful where synthesis creates leverage: exploring a design space, implementing a
bounded change, transforming repetitive structures, tracing relationships across a repository, or
drafting documentation that will be reviewed against the working system.

The model is not the owner of the product. It is a participant in the production system.

That distinction matters because a plausible change is not the same as an accepted change. The
factory keeps responsibility outside the model even when a model performs substantial work.

## How the result is verified

Verification follows the shape of the product. It may include builds, type checks, unit tests,
evaluation suites, security boundaries, accessibility review, direct interface inspection, or
comparison with an explicit acceptance criterion.

The objective is not to create one universal quality score. It is to make the evidence for a
specific release visible enough that an accountable person can decide.

Public artifacts support that standard. Kanon publishes its architecture decisions and releases.
PerfectStar 2K documents the test surface for its buffer, undo, wrapping, Markdown, and RTF
behavior. ADR Power exposes its workflow and invariants as a readable capability specification.
None of these artifacts proves everything. Each makes a consequential part of the system
inspectable.

## What compounds

Compounding is deliberately narrower than “we learned something.”

A retained factory capability must be concrete: an agent skill, a template, a verification harness,
a reusable component, an architecture pattern, or a decision record that changes later work.
Kanon is the clearest current example. It converts knowledge artifacts into canonical sources that
can be validated once and adapted across multiple AI coding harnesses.

The public Factory Ledger records reuse only when there is evidence for it. That keeps the central
claim falsifiable.

sXs will keep building products. It will keep publishing selected capabilities. It will take on
client systems where the outcome is bounded and the factory is a genuine advantage. Advice remains
available when a decision—not a build—is the right output.

But the center of the brand is now unambiguous:

The software is the output. The factory is the advantage. The evidence is what ships.
