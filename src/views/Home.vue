<!-- PRODUCTS -->
<template>
    <div>
        <div v-for="stoke in stokes" class="m-6 grid sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4">
            <!-- <div class="flex flex-row"> -->
            <rounter-link
                class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb- text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ stoke.Title }}
                </h5>
                <img :src="stoke.Image" alt="" class="block mx-auto mb-3 w-30 h-48 max-h-full" />
                <p class="not-italic text-justify font-normal text-gray-700 dark:text-gray-400">
                    {{ stoke.Description }}
                </p>
                <div class="flex sm-flex-row justify-start items-center">
                    <p class="text-slate-600  text-lg not-italic font-bold">Tsh: {{ stoke.Price }}</p>
                    <button class="mt-1 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 p-2 rounded text-slate-900">
                        Add to Cart
                    </button>
                    <select name="" class="mx-2">
                        <option value="">Qty 0</option>
                        <option value="">Qty 2</option>
                        <option value="">Qty 5</option>
                    </select>
                </div>
            </rounter-link>
            <!-- </div> -->
        </div>
    </div>
    <!-- TODO: WILL DELETED LATER -->
    <!-- <p>{{ data[0].Title }}</p>
        <img :src="Image" alt=""> -->
</template>

<script>
export default {
    data() {
        return {
            stokes: [
                {
                    Title: 'STACY ADAMS',
                    Image: '/icons/61EeyHyCFEL._AC_UY695_.jpg',
                    Description: 'Classic, simple, yet versatile. These casual dress shoes easily adapt for different looks and seasons – suitable for any formal or casual wear',
                    Price: 93976.50,
                }, {
                    Title: 'Clarks Men\'s Tilden Cap Oxford',
                    Image: '/icons/81zqrHuWkZL._AC_UY695_.jpg',
                    Description: 'Classic, simple, yet versatile. These casual dress shoes easily adapt for different looks and seasons – suitable for any formal or casual wear',
                    Price: 93976.50,
                },
                {
                    Title: 'Clarks Runaway',
                    Image: '/icons/71Xj3eDJ0UL._AC_UX695_.jpg',
                    Description: 'Classic, simple, yet versatile. These casual dress shoes easily adapt for different looks and seasons – suitable for any formal or casual wear',
                    Price: 93976.50,
                },
                {
                    Title: 'Dr. Scholl\'s Shoes',
                    Image: '/icons/81DDJWupe3L._AC_SX695._SX._UX._SY._UY_.jpg',
                    Description: 'Fashion womens dress ankle booties are great for all occasions like walking, driving, daily dressing, outdoor, indoor, office, shopping, long standing, dress, walking and working',
                    Price: 211500.00,
                }, {
                    Title: 'Clarks Men\'s Tilden Cap Oxford',
                    Image: '/icons/71V+K3pGeAL._AC_UX695_.jpg',
                    Description: 'Fashion womens dress ankle booties are great for all occasions like walking, driving, daily dressing, outdoor, indoor, office, shopping, long standing, dress, walking and working',
                    Price: 211500.00,
                },
                {
                    Title: 'DREAM PAIRS',
                    Image: '/icons/61bncQ44yML._AC_UX695_.jpg',
                    Description: 'Fashion womens dress ankle booties are great for all occasions like walking, driving, daily dressing, outdoor, indoor, office, shopping, long standing, dress, walking and working',
                    Price: 211500.00,
                }
                , {
                    Title: 'adidas',
                    Image: '/icons/71Xj3eDJ0UL._AC_UX695_.jpg',
                    Description: 'Women\'s running- inspired shoes in a slipon  style SNUG FIT Slip  on construction with elastic straps offers a sock like feel FLEXIBLE UPPER Soft textile upper is stretchy and comfortable CUSHIONED MIDSOLE Cloudfoam midsole for step in comfort and superior cushioning',
                    Price: 211500.00,
                },
                {
                    Title: 'DREAM PAIRS',
                    Image: '/icons/61bncQ44yML._AC_UX695_.jpg',
                    Description: 'Fashion womens dress ankle booties are great for all occasions like walking, driving, daily dressing, outdoor, indoor, office, shopping, long standing, dress, walking and working',
                    Price: 211500.00,
                },
                {
                    Title: 'Nike Men\'s 518015-010 Tech Swoosh Cap',
                    Image: '/icons/61-UUqeg5lL._AC_UX679_.jpg',
                    Description: '100% Cotton Buckle closure Hand Wash Only 6-panel design with interior taping for a comfortable fit.Embroidered eyelets enhance breathability. Adjusable strap at the back for a snug, custom fit.100% cotton(10.0 % organic) plain twill',
                    Price: 55200.00,
                }, {
                    Title: 'LANGZHEN Winter',
                    Image: '/icons/71L4SFlMOpL._AC_UX679_.jpg',
                    Description: 'Feature:it\'s very soft and comfortable for baby and toddler, good Flexibility, and easy to wear.And HAND WASH is suggested Occasions: Winter beanie hat for babys toddlers playing cold outdoor activity,Skiing, climbing, camping.',
                    Price: 27577.00,
                },
                {
                    Title: 'Handmade Cute Apple Beret Vintage',
                    Image: '/icons/51zV1s2tugL._AC_UX679_.jpg',
                    Description: 'Hat material: 95% wool,some sewing part with Cotton thread or Hot-Melt Adhesives.The hat decoration part is 100% wool, all woolfelt by handmade. Suitable for adult head circumference about 21.6-23inch(55-59cm), please check the picture how to measure your head circumference.',
                    Price: 59800.00,
                }
                , {
                    Title: 'adidas',
                    Image: '/icons/71Xj3eDJ0UL._AC_UX695_.jpg',
                    Description: 'Women\'s running- inspired shoes in a slipon  style SNUG FIT Slip  on construction with elastic straps offers a sock like feel FLEXIBLE UPPER Soft textile upper is stretchy and comfortable CUSHIONED MIDSOLE Cloudfoam midsole for step in comfort and superior cushioning',
                    Price: 211500.00,
                },
                {
                    Title: 'DREAM PAIRS',
                    Image: '/icons/61bncQ44yML._AC_UX695_.jpg',
                    Description: 'Fashion womens dress ankle booties are great for all occasions like walking, driving, daily dressing, outdoor, indoor, office, shopping, long standing, dress, walking and working',
                    Price: 211500.00,
                },
                {
                    Title: 'Buvola Classic Quartz',
                    Image: '/icons/61saeN5+zcL._AC_UY879_.jpg',
                    Description: '100% Cotton Buckle closure Hand Wash Only 6-panel design with interior taping for a comfortable fit.Embroidered eyelets enhance breathability. Adjusable strap at the back for a snug, custom fit.100% cotton(10.0 % organic) plain twill',
                    Price: 55200.00,
                }, {
                    Title: 'Invicta Men\'s Pro',
                    Image: '/icons/71PheBE+IQL._AC_UX679_.jpg',
                    Description: 'Feature:it\'s very soft and comfortable for baby and toddler, good Flexibility, and easy to wear.And HAND WASH is suggested Occasions: Winter beanie hat for babys toddlers playing cold outdoor activity,Skiing, climbing, camping.',
                    Price: 27577.00,
                },
                {
                    Title: 'Anne Klein Woman\'s Genuine',
                    Image: '/icons/71QDsaFZF9L._AC_UX679_.jpg',
                    Description: 'Hat material: 95% wool,some sewing part with Cotton thread or Hot-Melt Adhesives.The hat decoration part is 100% wool, all woolfelt by handmade. Suitable for adult head circumference about 21.6-23inch(55-59cm), please check the picture how to measure your head circumference.',
                    Price: 59800.00,
                }
                , {
                    Title: 'Taxau Watches for Women',
                    Image: '/icons/71tpp-OST1L._AC_UX679_.jpg',
                    Description: 'Women\'s running- inspired shoes in a slipon  style SNUG FIT Slip  on construction with elastic straps offers a sock like feel FLEXIBLE UPPER Soft textile upper is stretchy and comfortable CUSHIONED MIDSOLE Cloudfoam midsole for step in comfort and superior cushioning',
                    Price: 211500.00,
                },
                {
                    Title: 'Michael Kors Men\'s Slim Runway',
                    Image: '/icons/81bKS-N5NHL._AC_UX679_.jpg',
                    Description: 'Fashion womens dress ankle booties are great for all occasions like walking, driving, daily dressing, outdoor, indoor, office, shopping, long standing, dress, walking and working',
                    Price: 211500.00,
                },
                {
                    Title: 'Fossi Men\'s Neutra Stainlless',
                    Image: '/icons/81MwXZn540L._AC_UX679_.jpg',
                    Description: '100% Cotton Buckle closure Hand Wash Only 6-panel design with interior taping for a comfortable fit.Embroidered eyelets enhance breathability. Adjusable strap at the back for a snug, custom fit.100% cotton(10.0 % organic) plain twill',
                    Price: 55200.00,
                }, {
                    Title: 'Amazon Essentials',
                    Image: '/icons/81SkKZjDDyL._AC_UY741_.jpg',
                    Description: 'Feature:it\'s very soft and comfortable for baby and toddler, good Flexibility, and easy to wear.And HAND WASH is suggested Occasions: Winter beanie hat for babys toddlers playing cold outdoor activity,Skiing, climbing, camping.',
                    Price: 27577.00,
                },
                {
                    Title: 'Nautica Be Shore Women\'s Wallet',
                    Image: '/icons/71yd3kkPucL._AC_SX679_.jpg',
                    Description: 'Hat material: 95% wool,some sewing part with Cotton thread or Hot-Melt Adhesives.The hat decoration part is 100% wool, all woolfelt by handmade. Suitable for adult head circumference about 21.6-23inch(55-59cm), please check the picture how to measure your head circumference.',
                    Price: 59800.00,
                }
                , {
                    Title: 'Buffway Slim Minimalist Front Pocket',
                    Image: '/icons/81zJhIbvolL._AC_UY741_.jpg',
                    Description: 'Women\'s running- inspired shoes in a slipon  style SNUG FIT Slip  on construction with elastic straps offers a sock like feel FLEXIBLE UPPER Soft textile upper is stretchy and comfortable CUSHIONED MIDSOLE Cloudfoam midsole for step in comfort and superior cushioning',
                    Price: 211500.00,
                },
                {
                    Title: 'ALDO Women\'s Legoirii Tote Bag',
                    Image: '/icons/813VTGNZJ9L._AC_UY695_.jpg',
                    Description: 'Women\'s running- inspired shoes in a slipon  style SNUG FIT Slip  on construction with elastic straps offers a sock like feel FLEXIBLE UPPER Soft textile upper is stretchy and comfortable CUSHIONED MIDSOLE Cloudfoam midsole for step in comfort and superior cushioning',
                    Price: 211500.00,
                }
            ]
        }
    }
}
</script>
