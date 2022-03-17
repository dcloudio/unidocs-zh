<template>
	<a href="https://www.dcloud.io" class="home-link">
		<img
			v-if="$site.themeConfig.logo"
			class="logo"
			:src="$withBase($site.themeConfig.logo)"
			:alt="$siteTitle"
		/>
		<img
			v-if="$site.themeConfig.titleLogo"
			class="title-logo can-hide"
			:src="$withBase($site.themeConfig.titleLogo)"
			:alt="$siteTitle"
		/>
		<span
			v-else-if="$siteTitle"
			ref="siteName"
			class="site-name"
			:class="{ 'can-hide': $site.themeConfig.logo }"
		>
			{{ $siteTitle }}
		</span>
	</a>
</template>
