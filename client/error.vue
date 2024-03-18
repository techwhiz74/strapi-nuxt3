<template>
	<section class="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
					<span class="sr-only">Error</span>{{error.statusCode}}
				</h2>
				<p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
				<small class="text-white">{{ error.message }}</small>
				<small>{{error}}</small>
				<p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
				<AtomsPrimaryButton link="/" text="Back to homepage" rel="noopener noreferrer" target=""/>
			</div>
		</div>
	</section>
</template>

<script setup>
defineProps(['error'])

const {mounted} = await getSettings();

onMounted(async() => {
	mounted();
});

</script>
