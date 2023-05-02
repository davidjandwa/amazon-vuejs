<template>
    <div>
        <div class="m-6 grid w-full border ">
            <rounter-link class="block w-9/12 p-12 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div class="flex">
                    <div>
                        <img src="../components/icons/cart.svg" alt="">
                    </div>
                    <div>
                         <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Your Amazon Cart is empty
                        </h2>
                        <p class="mb-3 not-italic text-slate-500 font-normal text-sm">Shop today's deals</p>
                        <RouterLink to="/login" class="mr-3 shadow bg-yellow-300 px-4 py-1 rounded-xl">
                            Sign in to you account
                        </RouterLink>
                        <RouterLink to="/sign" class="shadow bg-inherit border px-4 py-1 rounded-xl">
                            Sign up now
                        </RouterLink>
                    </div>
                </div>
            </rounter-link>
        </div>
    </div>
</template>



