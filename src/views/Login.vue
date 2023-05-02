<template>
    <div>
        <div class="grid mb-10">
            <div class="flex justify-center items-center mt-3">
                <RouterLink to="/">
                    <img class="w-20 h-auto mb-3" src="../components/icons/amazon_black.png" alt="logo" />
                </RouterLink>
            </div>
            <div class="flex justify-center items-center mt-1">
                <form @submit="handleSubmit">
                    <div
                        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h1 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Create Account
                        </h1>
                        <label for="email" class="mb-1 font-bold not-italic text-sm text-gray-700 dark:text-gray-400">
                            Email or mobile phone number
                        </label>
                        <input type="password"
                            id="email" class="mb-2 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="userEmail" required>
                        <div v-if="userEmailError" class="mt-2 text-sm text-green-600 dark:text-green-500 ">{{
                            userEmailError }}</div>
                        <button type="button"
                            class="rounded-lg mt-4 text-slate-900 text-sm block w-full p-2 bg-gradient-to-r from-amber-300 to-amber-300">
                            Continue
                        </button>
                        <p class="mt-3 text-xs not-italic text-slate-700">
                            By creating an account, you agree to Amazon's <a href="#" target="_blank"
                                class="text-indigo-700 hover:text-yellow-700 hover:underline">Conditions of Use</a> and <a
                                href="#" target="_blank"
                                class="text-indigo-700 hover:text-yellow-700 hover:underline">Privacy Notice</a>.
                        </p>
                        <p class="mt-3 text-xs not-italic text-slate-700">
                            Already have an account?
                            <RouterLink to="/sign" class="text-indigo-700 hover:text-yellow-700 hover:underline">Sign in
                            </RouterLink>
                        </p>
                    </div>
                    <p>{{ userEmail }}</p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userEmail: '',
            userPassword: '',
            userEmailError: '',
            userPasswordError: '',
        }
    },
    methods: {
        handleSubmit() {
            this.userEmailError = this.userEmail.length > 5 ? '' : 'Email must be atleast 6 chars long'
            console.log("Submitted")
        }
    }
}
</script>
