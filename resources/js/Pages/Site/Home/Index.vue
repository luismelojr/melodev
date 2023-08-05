<script setup>
import SiteLayout from '@/Layouts/SiteLayout.vue'
import TitleSite from '@/Components/TitleSite.vue'
import responsive from '@/Utils/responsive.js'
import ImagemShoes from '../../../Assets/imagem.jpeg'

const slide = ref(1)

const isMobile = responsive().isMobile()

const experiences = [
    {
        id: 1,
        title: 'Produtos Originais',
        icon: 'bx bx-shopping-bag',
        description:
            'Garantimos autenticidade total em cada um de nossos produtos únicos.',
    },
    {
        id: 2,
        title: 'Sastifação Garantida',
        icon: 'bx bx-smile',
        description:
            'Excedendo expectativas sempre - nossa promessa de Satisfação Garantida.',
    },
    {
        id: 3,
        title: 'Novidades Semanais',
        icon: 'bx bx-time-five',
        description:
            'Explore a inovação a cada semana com nossas Novidades Semanais exclusivas.',
    },
    {
        id: 4,
        title: 'Entrega Rápida e Segura',
        icon: 'bx bx-car',
        description:
            'Entrega ágil e protegida para sua total tranquilidade e conveniência.',
    },
]
</script>

<template>
    <SiteLayout>
        <section>
            <q-carousel
                swipeable
                animated
                v-model="slide"
                autoplay
                ref="carousel"
                infinite
                :height="isMobile ? '200px' : '500px'"
                style="border-radius: 4px"
            >
                <q-carousel-slide
                    :name="1"
                    img-src="https://cdn.pixabay.com/photo/2020/12/04/16/03/wedding-5803598_1280.jpg"
                />
                <q-carousel-slide
                    :name="2"
                    img-src="https://cdn.pixabay.com/photo/2014/03/11/23/26/high-heeled-shoes-285661_1280.jpg"
                />
                <q-carousel-slide
                    :name="3"
                    img-src="https://cdn.pixabay.com/photo/2019/07/24/14/57/womens-shoes-4360450_1280.jpg"
                />
                <q-carousel-slide
                    :name="4"
                    img-src="https://cdn.pixabay.com/photo/2019/10/28/17/28/shoe-4585071_1280.jpg"
                />

                <template #control>
                    <q-carousel-control
                        position="top-right"
                        :offset="[5, 5]"
                        class="q-gutter-xs"
                    >
                        <div class="tw-flex tw-gap-0 tw-items-center">
                            <button
                                type="button"
                                class="tw-bg-white tw-px-4 tw-py-1 tw-text-black tw-flex tw-justify-center tw-items-center tw-rounded-l-md"
                                @click="$refs.carousel.previous()"
                            >
                                <i
                                    class="bx bx-chevron-left tw-text-[20px]"
                                ></i>
                            </button>
                            <button
                                type="button"
                                class="tw-bg-white tw-px-4 tw-py-1 tw-text-black tw-flex tw-justify-center tw-items-center tw-border-l tw-rounded-r-md"
                                @click="$refs.carousel.next()"
                            >
                                <i
                                    class="bx bx-chevron-right tw-text-[20px]"
                                ></i>
                            </button>
                        </div>
                    </q-carousel-control>
                </template>
            </q-carousel>
        </section>
        <section class="tw-mt-8">
            <TitleSite title="Marcas" />
            <div
                class="md:tw-flex md:tw-gap-20 -tw-mt-4 md:tw-items-center md:tw-flex-row tw-grid tw-grid-cols-2 tw-items-center"
            >
                <q-img
                    src="https://cdn.dooca.store/561/brands/modare-logo.jpg?v=1600997890&webp=0"
                    :ratio="16 / 9"
                    class="q-mt-md tw-object-cover tw-filter tw-grayscale hover:tw-filter-none tw-transition-all tw-cursor-pointer"
                    style="max-width: 110px; height: 50px"
                    placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
                />
                <q-img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50_M5PvWq3lrxFKVngB6KE4xofADIg4nJXA&usqp=CAU"
                    :ratio="16 / 9"
                    class="q-mt-md tw-object-cover tw-filter tw-grayscale hover:tw-filter-none tw-transition-all tw-cursor-pointer"
                    fit="contain"
                    style="max-width: 110px; height: 50px"
                    placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
                />
                <q-img
                    src="data:image/png;base64,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"
                    :ratio="16 / 9"
                    fit="contain"
                    class="q-mt-md tw-object-cover tw-filter tw-grayscale -tw-ml-12 hover:tw-filter-none tw-transition-all tw-cursor-pointer"
                    style="max-width: 180px; height: 30px"
                    placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
                />
                <q-img
                    src="data:image/png;base64,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"
                    :ratio="16 / 9"
                    fit="contain"
                    class="q-mt-md tw-object-cover tw-filter tw-grayscale md:-tw-ml-10 hover:tw-filter-none tw-transition-all tw-cursor-pointer"
                    style="max-width: 110px; height: 50px"
                    placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
                />
                <q-img
                    src="https://calcadosdobrasil.com.br/assets/shared/marca/logo/40ae61b79d1da62428fe80374aedf716.jpg"
                    :ratio="16 / 9"
                    class="q-mt-md tw-object-cover tw-filter tw-grayscale hover:tw-filter-none tw-transition-all tw-cursor-pointer"
                    style="max-width: 120px; height: 60px"
                    placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
                />
            </div>
        </section>
        <section class="md:tw-mt-12 tw-mt-8">
            <TitleSite title="Nossos diferenciais" />
            <div class="tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-10">
                <div v-for="item in experiences" :key="item.id">
                    <div
                        class="tw-h-8 tw-w-8 tw-rounded-sm tw-bg-[#F6F7FB] tw-flex tw-justify-center tw-items-center"
                    >
                        <i class="tw-text-bluedark" :class="item.icon"></i>
                    </div>
                    <h4 class="tw-text-sm tw-mt-2 tw-font-bold">
                        {{ item.title }}
                    </h4>
                    <p class="tw-text-[12px] tw-text-gray-500">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </section>
        <section class="md:tw-mt-12 tw-mt-8">
            <div class="tw-flex tw-items-center tw-justify-between">
                <TitleSite title="Ultimos lançamentos" />
                <Link
                    :href="route('site.home')"
                    class="tw-text-[12px] tw-text-gray-400 hover:tw-text-bluedark tw-transition-all"
                    >Ver todos</Link
                >
            </div>
            <div class="tw-grid tw-grid-cols-4 tw-gap-10">
                <div v-for="item in 4" :key="item.id">
                    <q-carousel
                        swipeable
                        animated
                        v-model="slide"
                        autoplay
                        ref="carousel"
                        infinite
                        height="250px"
                        style="border-radius: 4px"
                    >
                        <q-carousel-slide
                            :name="1"
                            img-src="https://cdn.pixabay.com/photo/2020/12/04/16/03/wedding-5803598_1280.jpg"
                        />
                        <q-carousel-slide
                            :name="2"
                            img-src="https://cdn.pixabay.com/photo/2014/03/11/23/26/high-heeled-shoes-285661_1280.jpg"
                        />
                        <q-carousel-slide
                            :name="3"
                            img-src="https://cdn.pixabay.com/photo/2019/07/24/14/57/womens-shoes-4360450_1280.jpg"
                        />
                        <q-carousel-slide
                            :name="4"
                            img-src="https://cdn.pixabay.com/photo/2019/10/28/17/28/shoe-4585071_1280.jpg"
                        />
                    </q-carousel>
                    <div class="tw-mt-2">
                        <h4 class="tw-text-sm tw-text-bluedark">
                            Sandalia flat
                        </h4>
                        <div class="tw-flex tw-items-center tw-justify-between">
                            <div class="tw-flex tw-gap-2 tw-items-start">
                                <h4
                                    class="tw-text-[18px] tw-text-bluedark tw-font-bold"
                                >
                                    R$ 149.90
                                </h4>
                                <span
                                    class="tw-text-[12px] tw-mt-2 tw-text-gray-500 tw-line-through tw-font-bold"
                                >
                                    R$ 169.90
                                </span>
                            </div>
                            <button
                                class="tw-h-6 tw-w-6 tw-bg-bluedark tw-text-white tw-rounded-sm tw-flex tw-justify-center tw-items-center"
                            >
                                <i class="bx bx-cart tw-text-[14px]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </SiteLayout>
</template>
