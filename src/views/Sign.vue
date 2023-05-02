<template>
    <div>
        <div class="grid mb-10">
            <div class="flex justify-center items-center mt-3">
                <RouterLink to="/">
                    <img class="w-20 h-auto mb-3" src="../components/icons/amazon_black.png" alt="logo" />
                </RouterLink>
            </div>
            <div class="flex justify-center items-center mt-1">
                <form @submit.prevent="handleSubmit">
                    <div
                        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h1 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Create Account
                        </h1>
                        <label for="name" class="mb-1 font-bold not-italic text-sm text-gray-700 dark:text-gray-400">
                            Your name
                        </label>
                        <input type="text" id="name"
                            class="mb-2 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="userName" />
                        <div v-if="userNameError" class="mt-2 text-sm text-green-600 dark:text-green-500 ">{{ userNameError
                        }}</div>

                        <label for="mobile" class="mb-1 font-bold not-italic text-sm text-gray-700 dark:text-gray-400">
                            Mobile number or email
                        </label>
                        <input type="text" id="mobile"
                            class="mb-5 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="userEmail" />
                        <div v-if="userEmailError" class="mt-2 text-sm text-green-600 dark:text-green-500 ">{{
                            userEmailError }}</div>
                        <label for="passwordInit"
                            class="mb-1 font-bold not-italic text-sm text-gray-700 dark:text-gray-400">
                            Password
                        </label>
                        <input type="password" id="passwordInit"
                            class="mb-2 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="userPassword" />
                        <div v-if="userPasswordError" class="mt-2 text-sm text-green-600 dark:text-green-500 ">{{
                            userPasswordError }}</div>
                        <label for="passwordRepeat"
                            class="mb-1 font-bold not-italic text-sm text-gray-700 dark:text-gray-400">
                            Re-enter password
                        </label>
                        <input type="password" id="passwordRepeat"
                            class="mb-3 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-amber-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="userRepeatPassword" />
                        <div v-if="userRepeatPasswordError" class="mt-2 text-sm text-green-600 dark:text-green-500 ">{{
                            userRepeatPasswordError }}</div>
                        <button type="submit"
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
                            <RouterLink to="/login" class="text-indigo-700 hover:text-yellow-700 hover:underline">Sign in
                            </RouterLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            userEmail: '',
            userPassword: '',
            userRepeatPassword: '',
            userNameError: '',
            userEmailError: '',
            userPasswordError: '',
            userRepeatPasswordError: '',
            tempSkill: '',
            skills: [],
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                    console.log("Added")
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit() {
            this.userNameError = this.userName.length > 5 ? '' : '*Username is required'
            this.userEmailError = this.userEmail.length > 5 ? '' : '*Email address is required'
            this.userPasswordError = this.userPassword.length > 5 ? '' : '*Password is required'
            this.userRepeatPasswordError = this.userRepeatPassword.length > 5 ? '' : 'Re-enter password is required'
            console.log("Form Submitted")
            if (!this.userName) {
                console.log("Success")
            }
        }
    }
}
</script>
