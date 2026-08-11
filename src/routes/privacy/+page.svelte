<script lang="ts">
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';

	const effectiveDate = 'August 11, 2026';
</script>

<Seo
	title="Privacy Policy"
	description="Privacy Policy for software published by sXs. Short version: cool vibes only."
	path="/privacy"
/>

<PageIntro
	eyebrow="Legal"
	title="Privacy Policy."
	description={`Effective ${effectiveDate}. Cool vibes only — here's the plain-language version of what we do (and mostly don't do) with your data.`}
/>

<section class="section">
	<div class="container prose">
		<h2>The short version</h2>
		<p>
			Most of our software doesn't need an account and doesn't phone home. Anything you create —
			files, notes, settings — stays on your device unless an app specifically tells you otherwise.
			We don't run ad trackers, we don't sell your data, and we're not in the business of quietly
			collecting more than we need.
		</p>

		<h2>What we collect</h2>
		<p>By default, basically nothing. Depending on the specific app, that can also include:</p>
		<ul>
			<li>
				<strong>Account info</strong>, only if the app has accounts or optional cloud sync — usually
				just an email address or a connection to a third-party service you already use, like GitHub
			</li>
			<li>
				<strong>Anonymous crash and error reports</strong>, so we can find and fix bugs — these
				aren't tied to your identity
			</li>
		</ul>
		<p>
			If an app collects anything beyond this, it'll say so directly, and this default still applies
			everywhere else.
		</p>

		<h2>Third-party services</h2>
		<p>
			Some apps optionally connect to services you already use (like GitHub) or rely on
			infrastructure providers to run (like hosting or crash reporting). Those services have their
			own privacy policies, and we only share what's necessary for the feature you're using to work.
		</p>

		<h2>What we don't do</h2>
		<ul>
			<li>No selling or renting your data, ever</li>
			<li>No ad networks or ad trackers</li>
			<li>No data collection beyond what's described here or explicitly disclosed in an app</li>
		</ul>

		<h2>Data retention and deletion</h2>
		<p>
			If an app stores account data on our behalf, we keep it only as long as your account is
			active. Want it gone sooner? Email <a href="mailto:github@sxs.io">github@sxs.io</a> and we'll delete
			it.
		</p>

		<h2>Children's privacy</h2>
		<p>
			Our software isn't directed at children under 13, and we don't knowingly collect data from
			them. If you believe a child has provided us data, contact us and we'll remove it.
		</p>

		<h2>Changes to this policy</h2>
		<p>
			If this changes in a way that matters, we'll update the effective date at the top of this
			page. Nothing sneaky, no silent rewrites of what we do with your data.
		</p>

		<h2>Contact</h2>
		<p>
			Questions, data deletion requests, or just want to double-check something? Email
			<a href="mailto:github@sxs.io">github@sxs.io</a>.
		</p>
	</div>
</section>
