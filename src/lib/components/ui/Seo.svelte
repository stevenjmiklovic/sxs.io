<script lang="ts">
	export let title: string;
	export let description: string;
	export let path: string = '/';
	export let type: 'website' | 'article' = 'website';
	export let publishedAt: string | undefined = undefined;

	const siteName = 'sXs';
	const origin = 'https://sxs.io';
	$: pageTitle = title === siteName ? 'sXs — AI software factory' : `${title} · sXs`;
	$: canonical = `${origin}${path}`;
	$: schema =
		type === 'article'
			? {
					'@context': 'https://schema.org',
					'@type': 'Article',
					headline: title,
					description,
					datePublished: publishedAt,
					mainEntityOfPage: canonical,
					publisher: { '@type': 'Organization', name: siteName, url: origin }
				}
			: {
					'@context': 'https://schema.org',
					'@type': path === '/' ? 'Organization' : 'WebPage',
					name: pageTitle,
					description,
					url: canonical,
					...(path === '/'
						? {
								alternateName: 'symbolic × subsymbolic',
								sameAs: [
									'https://github.com/stevenjmiklovic',
									'https://github.com/thinkingsage',
									'https://github.com/kryptik-research'
								]
							}
						: {})
				};
	$: jsonLd = `<script type="application/ld+json">${JSON.stringify(schema).replace(
		/</g,
		'\\u003c'
	)}</${'script'}>`;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={`${origin}/og.png`} />
	<meta property="og:image:alt" content="sXs AI software factory production rail" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${origin}/og.png`} />
	<!-- JSON-LD is serialized from repository-owned content and escapes opening angle brackets. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLd}
</svelte:head>
