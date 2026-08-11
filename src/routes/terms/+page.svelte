<script lang="ts">
	import PageIntro from '$lib/components/ui/PageIntro.svelte';
	import Seo from '$lib/components/ui/Seo.svelte';

	const effectiveDate = 'August 11, 2026';
</script>

<Seo
	title="Terms of Service"
	description="Terms of Service governing use of software published by sXs."
	path="/terms"
/>

<PageIntro
	eyebrow="Legal"
	title="Terms of Service."
	description={`Effective ${effectiveDate}. These terms apply to software published by sXs, including desktop, mobile, and web applications distributed through app stores or direct download.`}
/>

<section class="section">
	<div class="container prose">
		<h2>1. Acceptance of terms</h2>
		<p>
			By downloading, installing, accessing, or using any application, package, or service published
			by sXs ("the Software"), you agree to be bound by these Terms of Service ("Terms"). If you do
			not agree to these Terms, do not use the Software.
		</p>

		<h2>2. License grant</h2>
		<p>
			Subject to your compliance with these Terms, sXs grants you a limited, non-exclusive,
			non-transferable, revocable license to install and use the Software for its intended purpose,
			on devices you own or control, in accordance with any applicable app store terms. Where the
			Software's source code is published under a separate open-source license, that license governs
			use of the source code; these Terms govern use of any compiled, packaged, or distributed
			application build.
		</p>

		<h2>3. Accounts</h2>
		<p>
			Some Software may require an account to sync data, access cloud features, or unlock
			functionality. You are responsible for maintaining the confidentiality of your credentials and
			for all activity under your account. Notify sXs promptly at
			<a href="mailto:github@sxs.io">github@sxs.io</a> if you suspect unauthorized use.
		</p>

		<h2>4. Acceptable use</h2>
		<p>You agree not to:</p>
		<ul>
			<li>
				Reverse engineer, decompile, or disassemble the Software except where permitted by law
			</li>
			<li>Use the Software to violate any applicable law or the rights of a third party</li>
			<li>
				Interfere with or disrupt the integrity or performance of the Software or its infrastructure
			</li>
			<li>Circumvent any access, licensing, or usage restriction built into the Software</li>
		</ul>

		<h2>5. Intellectual property</h2>
		<p>
			The Software, including its design, branding, and compiled application builds, is owned by sXs
			or its licensors and is protected by applicable intellectual property laws. These Terms do not
			grant you any rights to sXs trademarks, logos, or brand assets.
		</p>

		<h2>6. Third-party services</h2>
		<p>
			The Software may integrate with or depend on third-party services, APIs, or data providers.
			sXs is not responsible for the availability, accuracy, or conduct of any third-party service,
			and your use of those services may be subject to their own terms.
		</p>

		<h2>7. Disclaimer of warranties</h2>
		<p>
			The Software is provided "as is" and "as available," without warranties of any kind, whether
			express or implied, including but not limited to warranties of merchantability, fitness for a
			particular purpose, and non-infringement. sXs does not warrant that the Software will be
			uninterrupted, error-free, or secure.
		</p>

		<h2>8. Limitation of liability</h2>
		<p>
			To the maximum extent permitted by law, sXs shall not be liable for any indirect, incidental,
			special, consequential, or punitive damages, or any loss of data, revenue, or profits, arising
			from or related to your use of the Software, even if advised of the possibility of such
			damages.
		</p>

		<h2>9. Termination</h2>
		<p>
			sXs may suspend or terminate your access to the Software at any time for conduct that violates
			these Terms or is otherwise harmful to other users or to sXs. You may stop using the Software
			at any time by uninstalling it and, where applicable, deleting your account.
		</p>

		<h2>10. Changes to these terms</h2>
		<p>
			sXs may update these Terms from time to time. Material changes will be reflected by updating
			the effective date at the top of this page. Continued use of the Software after a change takes
			effect constitutes acceptance of the revised Terms.
		</p>

		<h2>11. Governing law</h2>
		<p>
			These Terms are governed by the laws of the Commonwealth of Pennsylvania, USA, without regard
			to its conflict-of-laws provisions.
		</p>

		<h2>12. Contact</h2>
		<p>
			Questions about these Terms can be sent to
			<a href="mailto:github@sxs.io">github@sxs.io</a>.
		</p>
	</div>
</section>
