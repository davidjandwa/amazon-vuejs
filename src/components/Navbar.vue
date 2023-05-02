<template>
    <div>
        <nav class="bg-slate-900 border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <RouterLink to="/" class="cursor-pointer flex items-center">
                    <img
                        src="./icons/amazon.png"
                        class="h-8 mr-3"
                        alt="Amazon_Avatar_Brand"
                    />
                </RouterLink>
                <div class="flex md:order-2">
                    <div class="flex items-center">
                        <ul
                            class="cursor-pointer flex flex-row font-medium mt-0 mr-6 space-x-0 text-sm">
                            <li>
                                <RouterLink to="/login">
                                    <span
                                        class="text-white rounded-md font-medium dark:text-white hover:text-slate-900 hover:no-underline hover:border-0 hover:bg-amber-400 focus:bg-amber-500 p-3"
                                        aria-current="page"
                                        >Sign In
                                    </span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/returns">
                                    <span
                                        class="text-white rounded-md font-medium dark:text-white hover:text-slate-900 hover:no-underline hover:border-0 hover:bg-amber-400 focus:bg-amber-500 p-3"
                                        aria-current="page"
                                        >Returns & Orders
                                    </span>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/cart">
                                    <span
                                        class="text-white rounded-md font-medium dark:text-white hover:text-slate-900 hover:no-underline hover:border-0 hover:bg-amber-400 focus:bg-amber-500 p-3"
                                        aria-current="page"
                                        >Carts
                                    </span>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="items-center justify-between grow-1 w-full md:flex md:w-auto md:order-1">
                    <div class="flex">
                        <div class="relative w-full">
                            <form>
                                <input
                                    type="text"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-amber-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-300 dark:focus:border-amber-300"
                                    placeholder="Search Amazon" required
                                />
                                <button
                                    type="submit"
                                    class="absolute top-0 right-0 p-2.5 text-md font-medium text-white bg-amber-300 rounded-r-lg border border-amber-700 hover:bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5"
                                        height="48"
                                        viewBox="0 96 960 960"
                                        width="48"
                                    >
                                        <path
                                            d="M795 963 526 695q-29 22.923-68.459 35.962Q418.082 744 372 744q-115.162 0-195.081-80Q97 584 97 471t80-193q80-80 193.5-80t193 80Q643 358 643 471.15q0 44.85-12.5 83.35Q618 593 593 627l270 268-68 68ZM371.353 650q74.897 0 126.272-52.25T549 471q0-74.5-51.522-126.75T371.353 292q-75.436 0-127.895 52.25Q191 396.5 191 471t52.311 126.75Q295.623 650 371.353 650Z"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="bg-slate-800 dark:bg-gray-700">
            <div class="max-w-screen-xl px-4 py-3 mx-auto">
                <div class="flex items-center">
                    <ul
                        class="cursor-pointer flex flex-row font-medium mt-0 mr-6 space-x-0 text-sm">
                        <li>
                            <rounter-link to="">
                                <span
                                    class="text-white font-medium dark:text-white hover:no-underline hover:border p-3"
                                    aria-current="page">
                                    Today's Deals
                                </span>
                            </rounter-link>
                        </li>
                        <li>
                            <rounter-link to="">
                                <span
                                    class="text-white font-medium dark:text-white hover:no-underline hover:border p-3">
                                    Customer Service
                                </span>
                            </rounter-link>
                        </li>
                        <li>
                            <rounter-link to="">
                                <span
                                    class="text-white font-medium dark:text-white hover:no-underline hover:border p-3">
                                    Registry
                                </span>
                            </rounter-link>
                        </li>
                        <li>
                            <rounter-link to="">
                                <span
                                    class="text-white font-medium dark:text-white hover:no-underline hover:border p-3">
                                    Gift Cards
                                </span>
                            </rounter-link>
                        </li>
                        <li>
                            <rounter-link to="">
                                <span
                                    class="text-white font-medium dark:text-white hover:no-underline hover:border p-3">
                                    Sells
                                </span>
                            </rounter-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
</script>
